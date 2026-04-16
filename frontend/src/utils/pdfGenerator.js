import { jsPDF } from 'jspdf';

// Generate CAD Drawings PDF
export const generateCADDrawingsPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(245, 200, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('MASS INTERIORS', 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('CAD DRAWINGS & DETAILS', 20, 33);
  
  // Document Info
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  let y = 55;
  
  doc.setFont('helvetica', 'bold');
  doc.text('VBOARD PARTITION SYSTEM - CAD DETAILS', 20, y);
  y += 15;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const cadContent = [
    'Document No: MI-CAD-001',
    'Revision: Rev. 03',
    'Date: December 2025',
    '',
    'DRAWING INDEX:',
    '',
    '1. PARTITION WALL DETAILS',
    '   - DWG-001: Single Layer Partition (90mm) - Plan & Section',
    '   - DWG-002: Double Layer Partition (132mm) - Plan & Section',
    '   - DWG-003: Fire Rated Partition (120mm) - Plan & Section',
    '   - DWG-004: Acoustic Partition STC-55 - Plan & Section',
    '',
    '2. JUNCTION DETAILS',
    '   - DWG-010: Wall to Wall Junction',
    '   - DWG-011: Wall to Ceiling Junction',
    '   - DWG-012: Wall to Floor Junction',
    '   - DWG-013: Door Frame Installation Detail',
    '   - DWG-014: Window Frame Installation Detail',
    '',
    '3. FALSE CEILING DETAILS',
    '   - DWG-020: T-Grid Ceiling System (600x600mm)',
    '   - DWG-021: Concealed Grid Ceiling System',
    '   - DWG-022: Ceiling Edge Detail',
    '   - DWG-023: Access Panel Detail',
    '',
    '4. EXTERNAL CLADDING DETAILS',
    '   - DWG-030: Rainscreen Cladding System',
    '   - DWG-031: Direct Fix Cladding System',
    '   - DWG-032: Corner Detail',
    '   - DWG-033: Window Surround Detail',
  ];
  
  cadContent.forEach(line => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 20, y);
    y += 6;
  });
  
  // Page 2 - Specifications
  doc.addPage();
  y = 20;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('MATERIAL SPECIFICATIONS', 20, y);
  y += 15;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const specsContent = [
    'VBOARD FIBER CEMENT BOARD:',
    '   Standard Sizes: 1220 x 2440mm, 1220 x 3050mm',
    '   Thickness: 6mm, 8mm, 10mm, 12mm, 18mm, 25mm',
    '   Density: 1200-1350 kg/m³',
    '   Compliance: IS 14862:2000, ASTM C 1186',
    '',
    'STEEL FRAMING:',
    '   Stud Size: 50mm, 70mm, 92mm',
    '   Gauge: 0.55mm (25 gauge) minimum',
    '   Spacing: 610mm c/c (standard), 406mm c/c (fire rated)',
    '   Material: Galvanized Steel (G60 coating)',
    '',
    'FASTENERS:',
    '   Board to Steel: Self-drilling screws, #6 x 25mm',
    '   Board to Board: Countersunk screws, #8 x 32mm',
    '   Edge Distance: Minimum 10mm',
    '   Spacing: 200mm c/c (edges), 300mm c/c (field)',
    '',
    'JOINT TREATMENT:',
    '   Tape: Fiber mesh tape, 50mm width',
    '   Compound: Cement-based joint filler',
    '   Finish: 3-coat system for Level 4 finish',
    '',
    'NOTES:',
    '1. All dimensions in millimeters unless noted otherwise.',
    '2. Refer to installation manual for complete instructions.',
    '3. Contact MASS INTERIORS for project-specific details.',
    '',
    'CONTACT:',
    'Email: massinteriors.ind@gmail.com',
    'Location: Raipur, Chhattisgarh, India',
  ];
  
  specsContent.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('© 2025 MASS INTERIORS. All rights reserved.', 20, 285);
  doc.text('Page ' + doc.internal.getNumberOfPages(), pageWidth - 30, 285);
  
  return doc;
};

// Generate BIM Objects PDF
export const generateBIMObjectsPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(245, 200, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('MASS INTERIORS', 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('BIM OBJECTS & REVIT FAMILIES', 20, 33);
  
  doc.setTextColor(0, 0, 0);
  let y = 55;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('VBOARD BIM LIBRARY - REVIT FAMILIES', 20, y);
  y += 15;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const bimContent = [
    'Document No: MI-BIM-001',
    'Software Compatibility: Revit 2022, 2023, 2024, 2025',
    'Format: .rfa (Revit Family), .rvt (Revit Project)',
    '',
    'BIM FAMILY INDEX:',
    '',
    '1. PARTITION WALL FAMILIES',
    '   - VBOARD_Partition_90mm.rfa',
    '   - VBOARD_Partition_132mm.rfa',
    '   - VBOARD_Partition_Fire_120mm.rfa',
    '   - VBOARD_Partition_Acoustic_STC55.rfa',
    '   - VBOARD_Partition_Acoustic_STC65.rfa',
    '',
    '2. CEILING FAMILIES',
    '   - VBOARD_Ceiling_TGrid_600x600.rfa',
    '   - VBOARD_Ceiling_TGrid_600x1200.rfa',
    '   - VBOARD_Ceiling_Concealed.rfa',
    '',
    '3. CLADDING FAMILIES',
    '   - VBOARD_Cladding_8mm.rfa',
    '   - VBOARD_Cladding_12mm.rfa',
    '   - VBOARD_Cladding_Rainscreen.rfa',
    '',
    '4. COMPONENT FAMILIES',
    '   - VBOARD_Stud_C_Section.rfa',
    '   - VBOARD_Track_U_Section.rfa',
    '   - VBOARD_Nogging.rfa',
    '',
    'FAMILY PARAMETERS INCLUDED:',
    '   - Fire Rating (0, 1, 2, 3 hours)',
    '   - STC Rating (45, 50, 55, 60, 65)',
    '   - Board Thickness',
    '   - System Width',
    '   - U-Value',
    '   - Cost per sqm (parametric)',
    '',
    'LOD LEVELS:',
    '   - LOD 100: Conceptual',
    '   - LOD 200: Approximate geometry',
    '   - LOD 300: Precise geometry (default)',
    '   - LOD 350: With connections',
  ];
  
  bimContent.forEach(line => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 20, y);
    y += 6;
  });
  
  doc.addPage();
  y = 20;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.text('SHARED PARAMETERS', 20, y);
  y += 15;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  
  const paramsContent = [
    'The following shared parameters are included:',
    '',
    'IDENTITY:',
    '   - Manufacturer: MASS INTERIORS',
    '   - Product Code: VBOARD Series',
    '   - Compliance: IS 14862:2000',
    '',
    'PERFORMANCE:',
    '   - Fire Resistance (minutes)',
    '   - Sound Transmission Class (STC)',
    '   - Thermal Conductivity (W/m.K)',
    '   - Water Absorption (%)',
    '',
    'SUSTAINABILITY:',
    '   - Recycled Content (%)',
    '   - VOC Emissions (μg/m³)',
    '   - EPD Reference Number',
    '',
    'INSTALLATION NOTES:',
    '1. Import shared parameters file before loading families.',
    '2. Families are configured for metric units.',
    '3. Type catalogs available for bulk loading.',
    '',
    'TECHNICAL SUPPORT:',
    'For BIM support, contact: massinteriors.ind@gmail.com',
    '',
    '© 2025 MASS INTERIORS. All rights reserved.',
  ];
  
  paramsContent.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  return doc;
};

// Generate Technical Datasheets PDF
export const generateTechnicalDatasheetsPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(245, 200, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('MASS INTERIORS', 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('TECHNICAL DATA SHEET', 20, 33);
  
  doc.setTextColor(0, 0, 0);
  let y = 55;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('VBOARD FIBER CEMENT BOARD', 20, y);
  y += 10;
  doc.setFontSize(10);
  doc.text('Product Code: VBOARD-STD | Revision: 05 | Date: December 2025', 20, y);
  y += 15;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('1. PRODUCT DESCRIPTION', 20, y);
  y += 8;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const desc = 'VBOARD is a high-density fiber cement board manufactured using Portland cement, cellulose fibers, and silica. The board is autoclaved for enhanced strength and dimensional stability.';
  const descLines = doc.splitTextToSize(desc, pageWidth - 40);
  doc.text(descLines, 20, y);
  y += descLines.length * 5 + 10;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('2. PHYSICAL PROPERTIES', 20, y);
  y += 10;
  
  // Table
  doc.setFontSize(9);
  const tableData = [
    ['Property', 'Test Method', 'Value', 'Unit'],
    ['Density', 'IS 14862', '1200-1350', 'kg/m³'],
    ['Flexural Strength (Dry)', 'IS 14862', '≥13', 'N/mm²'],
    ['Flexural Strength (Wet)', 'IS 14862', '≥9', 'N/mm²'],
    ['Water Absorption', 'IS 14862', '≤36', '%'],
    ['Moisture Movement', 'IS 14862', '≤0.1', '%'],
    ['Thermal Conductivity', 'IS 3346', '0.172', 'W/m.K'],
    ['pH Value', 'Laboratory', '10.4', '-'],
    ['Combustibility', 'IS 1734', 'Non-combustible', '-'],
  ];
  
  let tableY = y;
  const colWidths = [60, 40, 45, 25];
  const rowHeight = 7;
  
  tableData.forEach((row, rowIndex) => {
    let x = 20;
    row.forEach((cell, colIndex) => {
      if (rowIndex === 0) {
        doc.setFont('helvetica', 'bold');
        doc.setFillColor(40, 40, 40);
        doc.setTextColor(255, 255, 255);
        doc.rect(x, tableY - 5, colWidths[colIndex], rowHeight, 'F');
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        doc.setDrawColor(200, 200, 200);
        doc.rect(x, tableY - 5, colWidths[colIndex], rowHeight);
      }
      doc.text(cell, x + 2, tableY);
      x += colWidths[colIndex];
    });
    tableY += rowHeight;
  });
  
  y = tableY + 10;
  
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('3. FIRE PERFORMANCE', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const fireData = [
    'Fire Classification: Class P (Non-combustible) per IS 1734',
    'Surface Spread of Flame: Class 1 per BS 476 Part 7',
    'Fire Propagation Index: 2.79 per BS 476 Part 6',
    'Fire Resistance: Up to 3 hours (system dependent)',
  ];
  fireData.forEach(line => {
    doc.text('• ' + line, 20, y);
    y += 6;
  });
  
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('4. AVAILABLE SIZES', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('Standard Width: 1220mm', 20, y);
  y += 6;
  doc.text('Standard Lengths: 1830mm, 2440mm, 2745mm, 3050mm', 20, y);
  y += 6;
  doc.text('Thickness: 4mm, 6mm, 8mm, 10mm, 12mm, 18mm, 25mm', 20, y);
  y += 6;
  doc.text('Custom sizes available on request.', 20, y);
  
  // Page 2
  doc.addPage();
  y = 20;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('5. ACOUSTIC PERFORMANCE (WALL SYSTEMS)', 20, y);
  y += 10;
  
  doc.setFontSize(9);
  const acousticTable = [
    ['System Configuration', 'Thickness', 'STC Rating'],
    ['Single layer on single stud', '90mm', 'STC 45'],
    ['Double layer on single stud', '102mm', 'STC 50'],
    ['Double layer on staggered stud', '132mm', 'STC 55'],
    ['Double layer on double stud', '178mm', 'STC 60'],
    ['Triple layer on double stud', '244mm', 'STC 65'],
  ];
  
  tableY = y;
  const acousticColWidths = [80, 40, 40];
  
  acousticTable.forEach((row, rowIndex) => {
    let x = 20;
    row.forEach((cell, colIndex) => {
      if (rowIndex === 0) {
        doc.setFont('helvetica', 'bold');
        doc.setFillColor(40, 40, 40);
        doc.setTextColor(255, 255, 255);
        doc.rect(x, tableY - 5, acousticColWidths[colIndex], rowHeight, 'F');
      } else {
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 0, 0);
        doc.rect(x, tableY - 5, acousticColWidths[colIndex], rowHeight);
      }
      doc.text(cell, x + 2, tableY);
      x += acousticColWidths[colIndex];
    });
    tableY += rowHeight;
  });
  
  y = tableY + 15;
  
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('6. COMPLIANCE & CERTIFICATIONS', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const compliance = [
    'IS 14862:2000 - Fiber Cement Flat Sheets',
    'ASTM C 1186 - Standard Specification for Flat Fiber Cement Sheets',
    'BS EN 12467 - Fiber Cement Flat Sheets',
    'IGBC / GRIHA Compliant for Green Building Projects',
  ];
  compliance.forEach(line => {
    doc.text('• ' + line, 20, y);
    y += 6;
  });
  
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('7. WARRANTY', 20, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.text('VBOARD products carry a manufacturer warranty against defects in', 20, y);
  y += 5;
  doc.text('material and workmanship. Contact MASS INTERIORS for warranty terms.', 20, y);
  
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.text('CONTACT INFORMATION', 20, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.text('MASS INTERIORS', 20, y);
  y += 5;
  doc.text('Email: massinteriors.ind@gmail.com', 20, y);
  y += 5;
  doc.text('Location: Raipur, Chhattisgarh, India', 20, y);
  
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('© 2025 MASS INTERIORS. All rights reserved.', 20, 285);
  
  return doc;
};

// Generate Installation Guides PDF
export const generateInstallationGuidesPDF = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Header
  doc.setFillColor(8, 8, 8);
  doc.rect(0, 0, pageWidth, 40, 'F');
  doc.setTextColor(245, 200, 0);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('MASS INTERIORS', 20, 25);
  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  doc.text('INSTALLATION GUIDE', 20, 33);
  
  doc.setTextColor(0, 0, 0);
  let y = 55;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(14);
  doc.text('VBOARD PARTITION WALL INSTALLATION', 20, y);
  y += 10;
  doc.setFontSize(10);
  doc.text('Document No: MI-IG-001 | Version: 2.0', 20, y);
  y += 15;
  
  doc.setFontSize(11);
  doc.text('1. GENERAL REQUIREMENTS', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const general = [
    '• Ensure substrate is level, plumb, and free from debris.',
    '• Acclimatize boards on site for minimum 48 hours.',
    '• Store boards flat on a dry, level surface.',
    '• Use appropriate PPE during installation.',
    '• Temperature during installation: 5°C to 40°C.',
  ];
  general.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('2. TOOLS REQUIRED', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  const tools = [
    '• Electric drill with clutch setting',
    '• Scoring knife with tungsten carbide blade',
    '• Spirit level (1200mm minimum)',
    '• Tape measure and chalk line',
    '• Snips for cutting steel sections',
    '• Safety glasses and dust mask',
  ];
  tools.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('3. STEEL FRAME INSTALLATION', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  const frame = [
    'Step 1: Mark floor and ceiling for track positions.',
    'Step 2: Fix floor track using appropriate anchors at 600mm centers.',
    'Step 3: Fix ceiling track aligned with floor track.',
    'Step 4: Install vertical studs at 610mm centers (406mm for fire-rated).',
    'Step 5: Insert studs into tracks and secure with screws.',
    'Step 6: Install noggings at 1200mm vertical centers.',
    'Step 7: Install door/window frames as per detail drawings.',
  ];
  frame.forEach((line, i) => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 5;
  doc.setFont('helvetica', 'bold');
  doc.text('4. BOARD INSTALLATION', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  const board = [
    'Step 1: Cut boards to size (score and snap or power saw).',
    'Step 2: Leave 10mm gap at floor level for expansion.',
    'Step 3: Position board with smooth side facing outward.',
    'Step 4: Fix boards using self-drilling screws at:',
    '        - 10mm from edges',
    '        - 200mm centers at edges, 300mm in field',
    'Step 5: Stagger board joints by minimum 600mm.',
    'Step 6: Install second layer (if required) with offset joints.',
  ];
  board.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  // Page 2
  doc.addPage();
  y = 20;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.text('5. JOINT TREATMENT', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  const joints = [
    'Step 1: Apply first coat of joint compound to all joints.',
    'Step 2: Embed fiber mesh tape into wet compound.',
    'Step 3: Apply second coat, feathering 150mm from joint.',
    'Step 4: Allow to dry completely (24 hours minimum).',
    'Step 5: Apply third coat, feathering 200mm from joint.',
    'Step 6: Sand lightly when dry for Level 4 finish.',
    'Step 7: Fill screw heads and corner beads.',
  ];
  joints.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('6. IMPORTANT NOTES', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  const notes = [
    '• Do not over-tighten screws - head should be flush, not countersunk.',
    '• Use appropriate screws for board thickness.',
    '• For wet areas, apply waterproof membrane before tiling.',
    '• For fire-rated systems, seal all penetrations with fire-rated sealant.',
    '• Follow acoustic insulation requirements for STC-rated walls.',
    '• Allow 3mm gap between boards at butt joints.',
  ];
  notes.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('7. QUALITY CHECKLIST', 20, y);
  y += 10;
  
  doc.setFont('helvetica', 'normal');
  const checklist = [
    '□ Frame plumb and level within 3mm in 2m',
    '□ Stud spacing as per specification',
    '□ Board joints staggered correctly',
    '□ Screw spacing and edge distance correct',
    '□ All joints taped and finished',
    '□ Fire stopping installed (fire-rated systems)',
    '□ Acoustic seals installed (acoustic systems)',
  ];
  checklist.forEach(line => {
    doc.text(line, 20, y);
    y += 6;
  });
  
  y += 15;
  doc.setFont('helvetica', 'bold');
  doc.text('TECHNICAL SUPPORT', 20, y);
  y += 8;
  doc.setFont('helvetica', 'normal');
  doc.text('For installation support, contact:', 20, y);
  y += 5;
  doc.text('Email: massinteriors.ind@gmail.com', 20, y);
  y += 5;
  doc.text('Location: Raipur, Chhattisgarh, India', 20, y);
  
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.text('© 2025 MASS INTERIORS. All rights reserved.', 20, 285);
  
  return doc;
};

// Download PDF function
export const downloadPDF = (type) => {
  let doc;
  let filename;
  
  switch(type) {
    case 'cad':
      doc = generateCADDrawingsPDF();
      filename = 'MASS_INTERIORS_CAD_Drawings.pdf';
      break;
    case 'bim':
      doc = generateBIMObjectsPDF();
      filename = 'MASS_INTERIORS_BIM_Objects.pdf';
      break;
    case 'datasheet':
      doc = generateTechnicalDatasheetsPDF();
      filename = 'MASS_INTERIORS_Technical_Datasheet.pdf';
      break;
    case 'installation':
      doc = generateInstallationGuidesPDF();
      filename = 'MASS_INTERIORS_Installation_Guide.pdf';
      break;
    default:
      return;
  }
  
  doc.save(filename);
};

// Open PDF in new tab
export const openPDFInNewTab = (type) => {
  let doc;
  
  switch(type) {
    case 'cad':
      doc = generateCADDrawingsPDF();
      break;
    case 'bim':
      doc = generateBIMObjectsPDF();
      break;
    case 'datasheet':
      doc = generateTechnicalDatasheetsPDF();
      break;
    case 'installation':
      doc = generateInstallationGuidesPDF();
      break;
    default:
      return;
  }
  
  const pdfBlob = doc.output('blob');
  const pdfUrl = URL.createObjectURL(pdfBlob);
  window.open(pdfUrl, '_blank');
};
