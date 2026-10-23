#!/bin/sh
# Brands every downloadable PDF with the LUXBELL logo: docs-src/ (originals) -> docs/ (served).
# Placement per document was chosen so the logo does not cover any content.
# Run from the luxbell_at/ folder: sh tools/brand-all.sh
set -e

brand() {
  file="$1"
  shift
  swift tools/brand-pdf.swift branding/luxbell_logo.pdf "docs-src/$file" "docs/$file" "$@"
}

# Own catalogue: plenty of white space at the top
brand Katalog_Alutueren_und_Zubehoer.pdf

# aluplast: text starts close to the top, so a smaller logo nearer the edge
brand PVC_Pflege_und_Wartungsanleitung.pdf --height 24 --margin 12

# Schlotterer: section headers sit top-left; cover has the Schlotterer logo top-right
brand Schlotterer_Wartung_und_Pflege.pdf --corner tr --height 20 --margin 8 --page 1:tl --plate 1,20

# WKF: photo cover (logo bottom-right on a plate), green back page with a label top-left
brand WKF_Wartung_und_Pflege.pdf --height 30 --margin 8 --page 1:br --page 20:tr --plate 1,20
