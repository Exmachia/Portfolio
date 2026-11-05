// Renders page 1 of each CV PDF to a PNG, so phones can show the whole CV as
// an image (mobile browsers preview PDFs poorly or not at all).
// Run after updating a CV:  swift scripts/cv-to-image.swift && node scripts/cv-to-webp.mjs
import AppKit
import PDFKit

let scale: CGFloat = 3
for lang in ["es", "en"] {
  let url = URL(fileURLWithPath: "public/cv-\(lang).pdf")
  guard let doc = PDFDocument(url: url), let page = doc.page(at: 0) else {
    fatalError("Can't read \(url.path)")
  }
  let box = page.bounds(for: .mediaBox)
  let w = Int(box.width * scale), h = Int(box.height * scale)
  let rep = NSBitmapImageRep(
    bitmapDataPlanes: nil, pixelsWide: w, pixelsHigh: h, bitsPerSample: 8,
    samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
  let ctx = NSGraphicsContext(bitmapImageRep: rep)!
  let cg = ctx.cgContext
  cg.setFillColor(NSColor.white.cgColor)
  cg.fill(CGRect(x: 0, y: 0, width: w, height: h))
  cg.scaleBy(x: scale, y: scale)
  page.draw(with: .mediaBox, to: cg)
  let out = URL(fileURLWithPath: "public/cv-\(lang).png")
  try! rep.representation(using: .png, properties: [:])!.write(to: out)
  print(out.path, w, h)
}
