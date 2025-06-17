import React from 'react';
import { Button } from '@/components/ui/button';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts } from 'pdf-lib';

const imagePaths = [
  '/photo/wedding-hero1-cincinnati-wedding-venue-somerhaus.jpg',
  '/photo/meeting-hero1-cincinnati-event-venue-somerhaus.png',
  '/photo/party-hero1-cincinnati-event-venue-somerhaus.jpeg',
  '/photo/space-portrait1-cincinnati-event-space-somerhaus.jpg',
];

const createImageZip = async () => {
  const zip = new JSZip();
  const folder = zip.folder('images');
  if (!folder) return;
  await Promise.all(
    imagePaths.map(async (path) => {
      const response = await fetch(path);
      const blob = await response.blob();
      const filename = path.split('/').pop() || 'image.jpg';
      folder.file(filename, blob);
    })
  );
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'somerhaus-press-images.zip');
};

const createLogoZip = async () => {
  const zip = new JSZip();
  const response = await fetch('/haus-logo.png');
  const blob = await response.blob();
  zip.file('somerhaus-logo-light.png', blob);
  // dark version generated via same asset (design team can replace)
  zip.file('somerhaus-logo-dark.png', blob);
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'somerhaus-logo-pack.zip');
};

const createPressSheet = async () => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontSize = 20;
  page.drawText('Somerhaus Press Sheet', { x: 50, y: height - 80, size: fontSize, font });
  page.drawText('Address: 1415 Republic St, Cincinnati, OH', { x: 50, y: height - 120, size: 12, font });
  page.drawText('Phone: (513) 902-1415', { x: 50, y: height - 140, size: 12, font });
  page.drawText('Web: somerhaus.com', { x: 50, y: height - 160, size: 12, font });
  page.drawText('Capacity: Up to 150 (cocktail) / 80 (seated)', { x: 50, y: height - 180, size: 12, font });
  page.drawText('Square Footage: 3,080 sq ft', { x: 50, y: height - 200, size: 12, font });
  page.drawText('Bar Packages • Built-in A/V • Natural Light', { x: 50, y: height - 220, size: 12, font });
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, 'somerhaus-press-sheet.pdf');
};

const PressKitSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-header mb-6">Press Kit Downloads</h2>
        <p className="text-lg text-muted-foreground mb-12 font-mono max-w-2xl mx-auto">
          Download high-resolution assets instantly—no email required.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <img src="/photo/space-portrait2-cincinnati-event-space-somerhaus.jpg" alt="Press Images" className="h-28 w-auto object-cover rounded mb-4" />
            <h3 className="font-header text-xl mb-2">Image Pack</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">High-res JPGs</p>
            <Button onClick={createImageZip}>Download ZIP</Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <img src="/haus-logo.png" alt="Somerhaus Logo" className="h-24 w-auto object-contain mb-4" />
            <h3 className="font-header text-xl mb-2">Logo Pack</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">PNG & SVG • Light & Dark</p>
            <Button onClick={createLogoZip}>Download ZIP</Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <h3 className="font-header text-xl mb-2">Press Sheet</h3>
            <p className="text-sm text-muted-foreground font-mono mb-4">PDF one-pager</p>
            <Button onClick={createPressSheet}>Download PDF</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressKitSection; 