// Stamps the LUXBELL logo onto the top-left corner of every page of a PDF.
//
// Usage (macOS, no dependencies):
//   swift tools/brand-pdf.swift branding/luxbell_logo.pdf docs-src/In.pdf docs/Out.pdf
//
// Always run it on the unbranded original in docs-src/, never on a file in docs/,
// otherwise the logo gets stamped twice.

import CoreGraphics
import Foundation

let logoHeight: CGFloat = 30 // pt (~10.6 mm)
let margin: CGFloat = 20     // pt from the top and left edge

let args = CommandLine.arguments
guard args.count == 4 else {
  print("usage: swift brand-pdf.swift <logo.pdf> <input.pdf> <output.pdf>")
  exit(1)
}

guard let logo = CGPDFDocument(URL(fileURLWithPath: args[1]) as CFURL)?.page(at: 1),
      let source = CGPDFDocument(URL(fileURLWithPath: args[2]) as CFURL),
      let output = CGContext(URL(fileURLWithPath: args[3]) as CFURL, mediaBox: nil, nil)
else {
  print("could not open logo, input or output file")
  exit(1)
}

let logoBox = logo.getBoxRect(.mediaBox)
let logoScale = logoHeight / logoBox.height

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

  output.saveGState()
  output.translateBy(x: margin, y: pageBox.height - margin - logoHeight)
  output.scaleBy(x: logoScale, y: logoScale)
  output.translateBy(x: -logoBox.minX, y: -logoBox.minY)
  output.drawPDFPage(logo)
  output.restoreGState()

  output.endPage()
}

output.closePDF()
print("branded \(source.numberOfPages) pages -> \(args[3])")
