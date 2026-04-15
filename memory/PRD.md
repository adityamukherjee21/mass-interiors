# MASS INTERIORS - Premium Marketing Website PRD

## Original Problem Statement
Build a 2026 billion-dollar agency-grade marketing website frontend for MASS INTERIORS, India's premium fiber cement board systems and dry construction company.

**Design Direction:**
- Cinematic Industrial Luxury aesthetic
- NOT a SaaS startup - No colorful gradients, No consumer UI
- Everything engineered and premium

## Architecture & Tech Stack
- **Frontend**: React 19 + Tailwind CSS
- **Animation Libraries**: Framer Motion, Lenis (smooth scroll)
- **Typography**: Bebas Neue (display), DM Sans (body), JetBrains Mono (technical labels)
- **Color Palette**: Void (#080808), Charcoal (#111111), Yellow accent (#F5C800)

## User Personas
1. **Architects & Specifiers** - Need technical downloads, CAD/BIM files, specifications
2. **Project Managers** - Need BOQ quotes, project consultation
3. **Construction Companies** - Need bulk orders, partnership inquiries

## Core Requirements (Static)
- Premium industrial design language
- Technical product showcasing (fire ratings, acoustic STC, dimensions)
- Portfolio of flagship projects
- Lead capture form with BOQ request

## What's Been Implemented

### Phase 1 - December 2025 (Homepage)
- [x] Hero section with cinematic background and 3D zone placeholder
- [x] Trust Metrics bar with animated counters
- [x] Solutions showcase - 8 product categories
- [x] Technical Specifications dashboard
- [x] Portfolio gallery - 6 flagship projects
- [x] Architect Resources section
- [x] Lead Generation form with all fields
- [x] Enterprise footer with wordmark
- [x] Smooth scroll navigation (Lenis)
- [x] Loading screen animation
- [x] Scroll progress indicator
- [x] Mobile responsive design

### Phase 2 - December 2025 (Multi-Page)
- [x] **About Us Page** (`/about`) - Company story, mission, 4 strengths, stats, certifications
- [x] **Solution Detail Pages** (8 pages) - `/solutions/:slug`
  - Fire-Rated Partitions, Acoustic Systems, False Ceilings, Wet Area Boards
  - External Cladding, Mezzanine Flooring, Prefab/LGSF, Wall Paneling
  - Each with: hero, overview, applications, specs grid, benefits, CTA
- [x] **Project Case Study Pages** (6 pages) - `/projects/:slug`
  - Corporate Office, Luxury Hotel, Hospital OT, Villa Exterior, Airport, Prefab Resort
  - Each with: hero, challenge/solution, results, specs, testimonial, gallery
- [x] **Product Comparison Carousel** (`/compare`) - Board Selector
  - Horizontal sliding carousel with 6 board types
  - Auto-play, prev/next navigation, dots
  - Quick comparison table
- [x] Updated navigation and footer links

## Current Site Structure
```
/                    → Homepage
/about               → About Us
/compare             → Board Selector / Product Comparison
/solutions/:slug     → 8 Solution Detail Pages
/projects/:slug      → 6 Case Study Pages
```

## Prioritized Backlog

### P0 - Critical (Before Launch)
- [ ] Connect form to backend API endpoint
- [ ] Add form validation with Zod
- [ ] Add SEO meta tags and Open Graph
- [ ] Add actual phone number

### P1 - High Priority
- [ ] Implement actual file upload functionality
- [ ] Three.js 3D product visualization in hero
- [ ] Implement actual CAD/BIM file downloads
- [ ] Add Google Analytics / tracking

### P2 - Medium Priority
- [ ] WhatsApp integration for quick contact
- [ ] Add more project case studies (when available)
- [ ] Privacy Policy & Terms pages

### P3 - Nice to Have
- [ ] Blog/News section
- [ ] Project cost calculator
- [ ] Architect portal with login
- [ ] Multi-language support (Hindi)

## Contact Information
- **Email**: massinteriors.ind@gmail.com
- **Location**: Raipur, Chhattisgarh, India

## Next Tasks
1. Connect lead form to backend API with email notification
2. Add SEO meta tags
3. Replace placeholder images with actual project photography
4. Add real phone number
