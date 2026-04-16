import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';

const projectTypes = [
  'Hospital / Healthcare',
  'Hotel / Hospitality',
  'Corporate Office',
  'Residential Villa',
  'Retail / Mall',
  'Prefab / Industrial',
  'Airport / Infrastructure',
  'Other',
];

const productInterests = [
  { id: 'fire-rated', label: 'Fire-Rated Partitions' },
  { id: 'acoustic', label: 'Acoustic Systems' },
  { id: 'ceiling', label: 'False Ceiling' },
  { id: 'wet-area', label: 'Wet Area Boards' },
  { id: 'cladding', label: 'External Cladding' },
  { id: 'wall-panel', label: 'Wall Paneling' },
];

export const LeadForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    phone: '',
    company: '',
    projectType: '',
    estimatedArea: '',
    productInterests: [],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }
    
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, projectType: value });
  };

  const handleCheckboxChange = (id, checked) => {
    if (checked) {
      setFormData({
        ...formData,
        productInterests: [...formData.productInterests, id],
      });
    } else {
      setFormData({
        ...formData,
        productInterests: formData.productInterests.filter((i) => i !== id),
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="form-section section-padding" data-testid="lead-form-section">
        <div className="container-premium">
          <motion.div 
            className="max-w-2xl mx-auto text-center py-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-16 h-16 text-yellow mx-auto mb-6" />
            <h2 className="font-display text-display-md mb-4">INQUIRY RECEIVED</h2>
            <p className="text-cloud text-lg mb-8">
              Thank you for your interest. Our technical team will review your 
              requirements and respond within 24 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="btn-secondary"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="form-section section-padding" data-testid="lead-form-section">
      <div className="container-premium">
        <div className="form-grid">
          {/* Visual Side */}
          <motion.div 
            className="form-visual image-placeholder"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <img 
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" 
              alt="Premium interior construction"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <span className="mono-label text-yellow block mb-2">GET STARTED</span>
              <span className="font-display text-3xl text-white">
                LET'S BUILD<br/>SOMETHING<br/>EXCEPTIONAL
              </span>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="form-header">
              <div className="section-eyebrow mb-4">
                <div className="rule-yellow"></div>
                <span className="mono-label text-yellow">BOQ REQUEST</span>
              </div>
              <h2 className="form-title">REQUEST A QUOTE</h2>
              <p className="form-subtitle">
                Share your project details and our technical team will 
                prepare a detailed Bill of Quantities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="form-fields" data-testid="lead-form">
              {/* Row 1: Name & Email */}
              <div className="form-row">
                <div className="form-group">
                  <Label className="form-label-industrial">Full Name *</Label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className={`form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none ${errors.fullName ? 'border-red' : ''}`}
                    data-testid="input-fullname"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-red flex items-center gap-1 mt-1">
                      <AlertCircle size={12} />
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <Label className="form-label-industrial">Work Email *</Label>
                  <Input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none ${errors.workEmail ? 'border-red' : ''}`}
                    data-testid="input-email"
                  />
                  {errors.workEmail && (
                    <span className="text-xs text-red flex items-center gap-1 mt-1">
                      <AlertCircle size={12} />
                      {errors.workEmail}
                    </span>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Company */}
              <div className="form-row">
                <div className="form-group">
                  <Label className="form-label-industrial">Phone Number *</Label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className={`form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none ${errors.phone ? 'border-red' : ''}`}
                    data-testid="input-phone"
                  />
                  {errors.phone && (
                    <span className="text-xs text-red flex items-center gap-1 mt-1">
                      <AlertCircle size={12} />
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <Label className="form-label-industrial">Company / Firm Name</Label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your organization"
                    className="form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none"
                    data-testid="input-company"
                  />
                </div>
              </div>

              {/* Row 3: Project Type & Area */}
              <div className="form-row">
                <div className="form-group">
                  <Label className="form-label-industrial">Project Type</Label>
                  <Select onValueChange={handleSelectChange}>
                    <SelectTrigger 
                      className="form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none text-white"
                      data-testid="select-project-type"
                    >
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-charcoal border-steel rounded-none">
                      {projectTypes.map((type) => (
                        <SelectItem 
                          key={type} 
                          value={type}
                          className="text-white hover:bg-iron focus:bg-iron rounded-none"
                        >
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="form-group">
                  <Label className="form-label-industrial">Estimated Area</Label>
                  <Input
                    type="text"
                    name="estimatedArea"
                    value={formData.estimatedArea}
                    onChange={handleInputChange}
                    placeholder="e.g., 10,000 sq.ft"
                    className="form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none"
                    data-testid="input-area"
                  />
                </div>
              </div>

              {/* Product Interests */}
              <div className="form-group">
                <Label className="form-label-industrial mb-3 block">Product Interest</Label>
                <div className="grid grid-cols-2 gap-3">
                  {productInterests.map((product) => (
                    <div key={product.id} className="flex items-center gap-2">
                      <Checkbox
                        id={product.id}
                        checked={formData.productInterests.includes(product.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(product.id, checked)}
                        className="border-steel data-[state=checked]:bg-yellow data-[state=checked]:border-yellow rounded-none"
                        data-testid={`checkbox-${product.id}`}
                      />
                      <label 
                        htmlFor={product.id}
                        className="text-sm text-cloud cursor-pointer"
                      >
                        {product.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <Label className="form-label-industrial">Project Brief / Message</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project requirements..."
                  rows={4}
                  className="form-input-industrial bg-transparent border-steel focus:border-yellow rounded-none resize-none"
                  data-testid="textarea-message"
                />
              </div>

              {/* Upload Placeholder */}
              <div className="form-group">
                <Label className="form-label-industrial">Upload BOQ / Drawing (Optional)</Label>
                <div 
                  className="border border-dashed border-steel p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-yellow transition-colors"
                  data-testid="upload-placeholder"
                >
                  <Upload className="w-6 h-6 text-mid" />
                  <span className="text-sm text-mid">Click to upload or drag and drop</span>
                  <span className="mono-label text-mid">PDF, DWG, XLS up to 10MB</span>
                </div>
              </div>

              {/* Submit */}
              <div className="form-footer">
                <button 
                  type="submit" 
                  className="btn-primary w-full justify-center"
                  disabled={isSubmitting}
                  data-testid="form-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <ArrowUpRight size={14} />
                    </>
                  )}
                </button>
                <p className="text-xs text-mid mt-4 text-center">
                  By submitting, you agree to our privacy policy. 
                  We'll respond within 24 business hours.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
