import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Award, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const strengths = [
    {
      icon: Shield,
      title: 'CERTIFIED SYSTEMS',
      desc: 'All products tested to IS 14862:2000 and ASTM C 1186 standards with full compliance documentation.',
    },
    {
      icon: Clock,
      title: 'RAPID DEPLOYMENT',
      desc: 'Dry construction means faster project completion — up to 60% reduction in build time versus conventional methods.',
    },
    {
      icon: Award,
      title: 'PERFORMANCE GUARANTEE',
      desc: 'Fire ratings up to 3 hours, acoustic isolation up to STC 65 — engineered performance you can specify with confidence.',
    },
    {
      icon: Users,
      title: 'TECHNICAL PARTNERSHIP',
      desc: 'From BOQ to installation — our technical team supports architects and contractors at every project stage.',
    },
  ];

  return (
    <div className="min-h-screen bg-void" data-testid="about-page">
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-steel">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="section-eyebrow mb-6">
              <div className="rule-yellow"></div>
              <span className="mono-label text-yellow">ABOUT US</span>
            </div>
            <h1 className="font-display text-display-xl text-white mb-6">
              BUILDING<br />
              <span className="text-yellow">INDIA'S FUTURE.</span>
            </h1>
            <p className="text-cloud text-lg max-w-2xl leading-relaxed">
              MASS INTERIORS is Chhattisgarh's trusted partner for premium dry construction 
              systems. We deliver engineered interior solutions — fire-rated partitions, 
              acoustic systems, and architectural cladding — for India's most demanding projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-charcoal">
        <div className="container-premium">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-muted block mb-4">OUR MISSION</span>
            <p className="font-display text-3xl sm:text-4xl text-white leading-tight">
              "TO ENGINEER INTERIOR SYSTEMS THAT PROTECT LIVES, ENHANCE SPACES, 
              AND STAND THE TEST OF TIME."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-eyebrow mb-4">
              <div className="rule-yellow"></div>
              <span className="mono-label text-yellow">WHY MASS INTERIORS</span>
            </div>
            <h2 className="font-display text-display-md text-white">
              ENGINEERED FOR<br />EXCELLENCE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-charcoal border border-steel p-8 hover:border-yellow transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  data-testid={`strength-card-${index}`}
                >
                  <Icon className="w-8 h-8 text-yellow mb-4" />
                  <h3 className="font-display text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-charcoal border-y border-steel">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2018', label: 'ESTABLISHED' },
              { value: '500+', label: 'PROJECTS' },
              { value: '15M', label: 'SQ.FT INSTALLED' },
              { value: '100%', label: 'CLIENT RETENTION' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-mono text-3xl sm:text-4xl text-white mb-2">{stat.value}</div>
                <div className="mono-label text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-premium">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mono-label text-muted block mb-4">COMPLIANCE & STANDARDS</span>
            <h2 className="font-display text-display-md text-white mb-6">
              CERTIFIED EXCELLENCE
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {['IS 14862:2000', 'ASTM C 1186', 'IGBC COMPLIANT', 'GRIHA RATED'].map((cert, i) => (
                <div 
                  key={i}
                  className="px-6 py-3 border border-steel font-mono text-sm text-cloud"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal border-t border-steel">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-display-md text-white mb-6">
              READY TO BUILD?
            </h2>
            <p className="text-cloud mb-8 max-w-lg mx-auto">
              Let's discuss your project requirements. Our technical team is ready to help.
            </p>
            <Link to="/#contact" className="btn-primary">
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
