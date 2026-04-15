import { motion } from 'framer-motion';
import { FileText, Box, Download, Layers } from 'lucide-react';

const resourcesData = [
  {
    title: 'CAD DRAWINGS',
    desc: 'AutoCAD-compatible detail drawings for all VBOARD systems and configurations.',
    format: 'DWG / DXF',
    icon: Box,
  },
  {
    title: 'BIM OBJECTS',
    desc: 'Revit families and BIM objects for seamless integration into your design workflow.',
    format: 'RFA / RVT',
    icon: Layers,
  },
  {
    title: 'TECHNICAL DATASHEETS',
    desc: 'Complete specifications, test reports, and compliance certificates.',
    format: 'PDF',
    icon: FileText,
  },
  {
    title: 'INSTALLATION GUIDES',
    desc: 'Step-by-step installation manuals and best practice recommendations.',
    format: 'PDF / VIDEO',
    icon: Download,
  },
];

export const Resources = () => {
  return (
    <section id="resources" className="resources-section section-padding" data-testid="resources-section">
      <div className="container-premium">
        {/* Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="section-eyebrow">
            <div className="rule-yellow"></div>
            <span className="mono-label text-yellow">ARCHITECT RESOURCES</span>
          </div>
          <h2 className="section-title">
            TECHNICAL<br/>DOWNLOADS
          </h2>
          <p className="section-desc">
            Everything specifiers need. CAD details, BIM objects, datasheets, 
            and installation guides — all in one place.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {resourcesData.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div 
                key={index}
                className="resource-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.76, 0, 0.24, 1]
                }}
                data-testid={`resource-card-${index}`}
              >
                <div className="resource-icon">
                  <Icon size={24} />
                </div>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-desc">{resource.desc}</p>
                <span className="resource-format">{resource.format}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Download Notice */}
        <motion.div 
          className="mt-8 p-6 bg-iron border border-steel text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-cloud text-sm">
            Access to technical resources requires registration. 
            <a href="#contact" className="text-yellow ml-1 hover:underline">
              Contact us for architect portal access.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resources;
