// Stamps the LUXBELL logo onto a corner of every page of a PDF.
//
// Usage (macOS, no dependencies):
//   swift tools/brand-pdf.swift <logo.pdf> <input.pdf> <output.pdf> [options]
//
// Options:
//   --corner tl|tr|bl|br   corner for all pages (default tl)
//   --height <pt>          logo height (default 30 pt ≈ 10.6 mm)
//   --margin <pt>          distance from the page edges (default 20 pt)
//   --page <n>:<corner>    use a different corner on page n (repeatable)
//   --plate <n,n,...>      draw a white backing plate behind the logo on these pages
//                          (for coloured or photo covers)
//
// tools/brand-all.sh holds the settings used for each PDF on the site.
// Always run on the unbranded original in docs-src/, never on a file in docs/,
// otherwise the logo gets stamped twice.

import CoreGraphics
import Foundation

func fail(_ message: String) -> Never {
  print(message)
  print("usage: swift brand-pdf.swift <logo.pdf> <input.pdf> <output.pdf> [--corner tl|tr|bl|br] [--height pt] [--margin pt] [--page n:corner] [--plate n,n]")
  exit(1)
}

let args = CommandLine.arguments
guard args.count >= 4 else { fail("missing arguments") }

let corners: Set<String> = ["tl", "tr", "bl", "br"]
var corner = "tl"
var logoHeight: CGFloat = 30
var margin: CGFloat = 20
var pageCorners: [Int: String] = [:]
var platePages: Set<Int> = []

var i = 4
while i < args.count {
  guard i + 1 < args.count else { fail("missing value for \(args[i])") }
  let value = args[i + 1]
  switch args[i] {
  case "--corner":
    guard corners.contains(value) else { fail("invalid corner \(value)") }
    corner = value
  case "--height":
    guard let v = Double(value) else { fail("invalid height \(value)") }
    logoHeight = CGFloat(v)
  case "--margin":
    guard let v = Double(value) else { fail("invalid margin \(value)") }
    margin = CGFloat(v)
  case "--page":
    let parts = value.split(separator: ":").map(String.init)
    guard parts.count == 2, let n = Int(parts[0]), corners.contains(parts[1]) else { fail("invalid --page \(value)") }
    pageCorners[n] = parts[1]
  case "--plate":
    platePages.formUnion(value.split(separator: ",").compactMap { Int($0) })
  default:
    fail("unknown option \(args[i])")
  }
  i += 2
}

guard let logo = CGPDFDocument(URL(fileURLWithPath: args[1]) as CFURL)?.page(at: 1),
      let source = CGPDFDocument(URL(fileURLWithPath: args[2]) as CFURL),
      let output = CGContext(URL(fileURLWithPath: args[3]) as CFURL, mediaBox: nil, nil)
else { fail("could not open logo, input or output file") }

let logoBox = logo.getBoxRect(.mediaBox)
let logoScale = logoHeight / logoBox.height
let logoWidth = logoBox.width * logoScale
let platePadding: CGFloat = 4

for index in 1...source.numberOfPages {
  guard let page = source.page(at: index) else { continue }

  // Output pages are written upright, so a page stored with /Rotate 90 becomes landscape
  let cropBox = page.getBoxRect(.cropBox)
  let rotated = page.rotationAngle % 180 != 0
  var pageBox = CGRect(
    x: 0, y: 0,
    width: rotated ? cropBox.height : cropBox.width,
    height: rotated ? cropBox.width : cropBox.height)

  output.beginPage(mediaBox: &pageBox)

  output.saveGState()
  output.concatenate(page.getDrawingTransform(.cropBox, rect: pageBox, rotate: 0, preserveAspectRatio: true))
  output.drawPDFPage(page)
  output.restoreGState()

  // PDF coordinates start bottom-left
  let pageCorner = pageCorners[index] ?? corner
  let x = pageCorner.hasSuffix("l") ? margin : pageBox.width - margin - logoWidth
  let y = pageCorner.hasPrefix("t") ? pageBox.height - margin - logoHeight : margin

  if platePages.contains(index) {
    let plate = CGRect(x: x, y: y, width: logoWidth, height: logoHeight).insetBy(dx: -platePadding, dy: -platePadding)
    output.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    output.addPath(CGPath(roundedRect: plate, cornerWidth: 3, cornerHeight: 3, transform: nil))
    output.fillPath()
  }

  output.saveGState()
  output.translateBy(x: x, y: y)
  output.scaleBy(x: logoScale, y: logoScale)
  output.translateBy(x: -logoBox.minX, y: -logoBox.minY)
  output.drawPDFPage(logo)
  output.restoreGState()

  output.endPage()
}

output.closePDF()
print("branded \(source.numberOfPages) pages -> \(args[3])")
