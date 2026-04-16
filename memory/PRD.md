# MASS INTERIORS - Premium Marketing Website PRD

## Original Problem Statement
Build a 2026 billion-dollar agency-grade marketing website frontend for MASS INTERIORS, India's premium fiber cement board systems and dry construction company.

**Design Direction:**
- Cinematic Industrial Luxury aesthetic
- NOT a SaaS startup - No colorful gradients, No consumer UI
- Everything engineered and premium

## Architecture & Tech Stack
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Animation Libraries**: Framer Motion, Lenis smooth scroll
- **Typography**: Bebas Neue (display), DM Sans (body), JetBrains Mono (technical labels)
- **Color Palette**: Void (#080808), Charcoal (#111111), Yellow accent (#F5C800)

## User Personas
1. **Architects & Specifiers** - Need technical downloads, CAD/BIM files, specifications
2. **Project Managers** - Need BOQ quotes, project consultation
3. **Construction Companies** - Need bulk orders, partnership inquiries

## Current Site Structure
```
/                    → Homepage (Hero, Trust Metrics, Solutions, Specs, Portfolio, Resources, Form, Footer)
/about               → About Us (Mission, Strengths, Stats, Certifications)
/compare             → Board Selector / Product Comparison (Horizontal Carousel)
/solutions/:slug     → 8 Solution Detail Pages
/projects/:slug      → 6 Case Study Pages
```

## What's Been Implemented

### Phase 1 - Homepage MVP
- [x] Hero section with cinematic background and 3D zone placeholder
- [x] Trust Metrics bar with animated counters
- [x] Solutions showcase - 8 product categories with links
- [x] Technical Specifications dashboard
- [x] Portfolio gallery - 6 flagship projects with links
- [x] Architect Resources section
- [x] Lead Generation form with validation
- [x] Enterprise footer with navigation

### Phase 2 - Multi-Page Architecture
- [x] About Us Page - Company story, mission, 4 strengths, stats, certifications
- [x] Solution Detail Pages (8 pages) - Full product information
- [x] Project Case Study Pages (6 pages) - Challenge/Solution/Results format
- [x] Product Comparison Carousel - Board selector with specs

### Phase 3 - Final Production Polish
- [x] Smooth scroll navigation (hash links work from any page)
- [x] Mobile menu with body scroll lock
- [x] Form validation with error states
- [x] Form loading and success states
- [x] SEO meta tags (title, description, keywords, Open Graph)
- [x] Font preloading and performance optimization
- [x] Reduced motion accessibility support
- [x] Print styles
- [x] High contrast mode support
- [x] Mobile touch target optimization
- [x] GPU-accelerated animations
- [x] iOS Safari viewport fix

## Prioritized Backlog

### P0 - Before Production Launch
- [ ] Connect form to backend API with email notification
- [ ] Add real phone number
- [ ] Replace stock images with actual project photography

### P1 - Enhancement
- [ ] Three.js 3D product visualization in hero
- [ ] Implement actual CAD/BIM file downloads
- [ ] WhatsApp quick contact integration

### P2 - Future
- [ ] Blog/News section
- [ ] Architect portal with login
- [ ] Multi-language support (Hindi)

## Contact Information
- **Email**: massinteriors.ind@gmail.com
- **Location**: Raipur, Chhattisgarh, India

## Technical Notes
- Form submission currently MOCKED (logs to console)
- All images use Unsplash placeholders
- Site optimized for desktop, tablet, and mobile
