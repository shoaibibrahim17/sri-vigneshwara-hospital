Sri Vigneshwara Hospital — Claude Code Project Guide
Project Overview
Name: Sri Vigneshwara Orthopaedic & Maternity Hospital Website
Location: Adilabad, Telangana, India
Type: Static landing page (Astro + Tailwind + shadcn/ui)
Hosting: Cloudflare Pages (free, commercial-friendly)
Client: Sk Ibrahim
Approach: Mobile-first responsive design
Hospital Details
Full Name: Sri Vigneshwara Orthopaedic & Maternity Hospital
Address: Raviteja Hotel Lane, Vidya Nagar, Adilabad, Telangana 504001, India
Phone: 98492 87515
Doctors: Dr. Ravikanth Rao (Paediatrician), MD OBGYN (Obstetrics & Gynaecology)
Services: Orthopaedics, Maternity, Paediatrics, Gynaecology
Beds: 10
Rating: 5.0★
Timings: Mon-Sun, 11AM-5PM (Dr. Rao: Mon-Sat 9:30AM-6:30PM)
Tech Stack
Framework: Astro (static export)
Styling: Tailwind CSS v4
UI Components: shadcn/ui
Icons: Lucide React
Fonts: Playfair Display (headings), Inter (body), Space Grotesk (numbers)
Forms: Formspree (free tier)
Design Philosophy: Anti-AI
What Anti-AI Design Means
No generic AI patterns — no floating chat bubbles, no robot illustrations, no "AI-powered" badges
No decorative geometric patterns — no abstract blobs, no gradient meshes, no random circles
No stock AI aesthetics — no purple-blue gradients, no glassmorphism, no neon glows
No cookie-cutter layouts — no identical hero-left-text-right-image splits
Human-first design — real textures, real photography, real imperfections
Anti-AI Design Rules (STRICT)
NO gradient text — solid colors only
NO decorative background patterns — use solid colors, subtle textures, or photography
NO abstract blob shapes — use rectangles, circles with purpose, or organic hand-drawn elements
NO glassmorphism — no frosted glass, no blur effects on overlays
NO neon or electric colors — muted, natural, trustworthy palette
NO animated floating elements — static, stable, professional
NO generic stock illustrations — use real photos, icons, or simple geometric shapes
NO "chat with us" AI widgets — simple WhatsApp button only
NO particle effects — no confetti, no floating dots, no sparkles
NO auto-playing videos — static images or user-initiated video only
Design System
Colors
Table
Role	Hex	Usage
Primary Dark	#0F4C4B	Header, footer, dark sections, ortho accents
Primary Deep	#0B3D3C	Hero gradient start
Primary Mid	#147A78	Hero gradient end, hover states
Maternity Accent	#E8A0B0	Rose highlights, maternity cards, subtle glows
Maternity Soft	#FDF2F4	Light maternity backgrounds
CTA	#F4A261	Buttons, click-to-call, urgent actions
CTA Hover	#E07A3F	Button hover state
Text Dark	#1A1A2E	Headings on light backgrounds
Text Body	#333333	Body text
Text Muted	#666666	Secondary text, captions
Text Light	#F8F9FA	Text on dark backgrounds
White	#FFFFFF	Card backgrounds
Off-White	#FAFAFA	Page background
Border Light	#E5E5E5	Card borders, dividers
Border Dark	#2A5554	Borders on dark backgrounds
Success	#2E7D32	Positive indicators
Error	#C62828	Alerts, errors
Typography
Table
Role	Font	Weight	Size (Desktop)	Size (Mobile)	Line Height	Letter Spacing
H1 (Hero)	Playfair Display	700	48px	32px	1.1	-0.02em
H2 (Section)	Playfair Display	600	36px	26px	1.2	-0.01em
H3 (Card Title)	Inter	600	24px	20px	1.3	0
H4 (Subsection)	Inter	600	18px	16px	1.4	0
Body Large	Inter	400	18px	16px	1.6	0
Body	Inter	400	16px	14px	1.6	0
Body Small	Inter	400	14px	13px	1.5	0
Caption	Inter	400	12px	11px	1.4	0.02em
Label	Inter	600	12px	11px	1.4	0.05em
Stats Number	Space Grotesk	700	48px	36px	1.0	-0.02em
Stats Label	Inter	500	14px	12px	1.4	0.05em
Button	Inter	600	16px	14px	1.0	0.02em
Nav Link	Inter	500	15px	14px	1.0	0
Typography Rules
Never use font-weight below 400 — too thin for readability
Never use more than 3 font sizes in one section — hierarchy through weight, not just size
Line height minimum 1.5 for body text — readability first
Max line length: 65 characters — prevent eye strain
Mobile: reduce heading sizes by 25-33% — proportional scaling
Spacing System
Table
Token	Value	Usage
xs	4px	Tight gaps, icon padding
sm	8px	Inline elements, small gaps
md	16px	Component padding, gaps
lg	24px	Section internal padding
xl	32px	Between components
2xl	48px	Between sections (mobile)
3xl	64px	Between sections (desktop)
4xl	96px	Major section breaks
Border Radius
Table
Token	Value	Usage
none	0px	Sharp edges for authority (stats bar, header)
sm	4px	Buttons, small elements
md	8px	Input fields, tags
lg	12px	Cards, containers
xl	16px	Large cards, modals
2xl	24px	Feature cards, photos
full	9999px	Circular elements (avatars, pills)
Shadows
Table
Token	Value	Usage
sm	0 1px 2px rgba(0,0,0,0.05)	Subtle elevation
md	0 4px 6px -1px rgba(0,0,0,0.1)	Cards default
lg	0 10px 15px -3px rgba(0,0,0,0.1)	Cards hover, dropdowns
xl	0 20px 25px -5px rgba(0,0,0,0.1)	Modals, overlays
none	—	Flat design elements
Mobile-First Design Rules
Breakpoints
Table
Name	Width	Tailwind Prefix
Mobile	< 640px	(default)
Tablet	640px+	sm:
Desktop	768px+	md:
Wide	1024px+	lg:
Extra Wide	1280px+	xl:
Mobile-First Principles
Design for 375px width first — iPhone SE is the baseline
Touch targets minimum 44x44px — buttons, links, form fields
Font sizes never below 14px — readability on small screens
Single column layouts on mobile — stack everything vertically
Horizontal padding: 16px minimum — prevent text touching edges
Images full-width on mobile — no side margins
Navigation becomes hamburger menu — below 768px
Stats stack vertically — 2x2 grid on mobile, 4-column on desktop
Cards full-width with 16px gap — no side-by-side on mobile
CTA buttons full-width on mobile — easy thumb reach
Mobile-Specific Behaviors
Click-to-call prominent — patients browse on phones
WhatsApp button fixed bottom-right — always accessible
Map opens in Google Maps app — native behavior
Form fields use correct input types — tel: for phone, email: for email
No hover-dependent interactions — mobile has no hover
Reduce animation on mobile — respect battery and data
Page Structure
Section Order
Header — Sticky nav, text logo, hamburger (mobile), click-to-call CTA
Hero — Dark gradient, headline, subheadline, 2 CTAs, stats bar
Trust Bar — 4 stats in a row (rating, beds, years, emergency)
Services — 4-card grid (Ortho, Maternity, Paediatrics, Gynaecology)
Journey — Split layout: Ortho timeline left, Maternity timeline right
Doctors — 2 profile cards with circular photos
Testimonials — 3 review cards, horizontal scroll on mobile
Contact — Dark background, map, form, click-to-call
Footer — 4 columns, copyright, disclaimer
Section Spacing
Between sections: 64px mobile, 96px desktop
Internal padding: 48px mobile, 64px desktop
Content max-width: 1200px, centered
Component Specifications
Header
Height: 64px mobile, 72px desktop
Background: white, shadow on scroll
Logo: Text-based "SRI VIGNESHWARA" + subtitle
Nav links: Home, Services, Doctors, Contact
CTA: "98492 87515" coral button, click-to-call
Mobile: Hamburger menu, logo + CTA only visible
Hero
Background: linear-gradient(135deg, #0B3D3C 0%, #147A78 100%)
Height: 100vh mobile (min), auto desktop
Content: centered vertically, left-aligned text
H1: "Expert Care for Every Bone, Joint & New Life"
Subtitle: "Trusted Orthopaedic Surgery & Maternity Care in the heart of Adilabad"
CTAs: "Book Appointment" (coral solid), "Call Now" (white outline)
Stats bar: below fold on mobile, inline on desktop
Services Cards
Grid: 1 column mobile, 2 columns tablet, 4 columns desktop
Card: white background, rounded-2xl, shadow-md
Top border: 4px solid (teal for ortho/paed, rose for maternity/gynae)
Padding: 24px
Icon: 48px container, rounded-full, light tinted background
Title: H3, Inter 600
List: bullet points, body small
Hover: shadow-lg, translateY(-4px), transition 300ms
Doctor Cards
Layout: stacked mobile, side-by-side desktop
Card: white, rounded-2xl, shadow-md, padding 32px
Photo: circular, 120px mobile, 160px desktop
Accent ring: 4px border (teal or rose)
Name: Playfair Display, 24px
Title: Inter 500, muted color
Details: icon + text pairs
CTA: full-width button on mobile
Testimonials
Background: #FDF2F4 to white gradient
Cards: white, rounded-xl, shadow-sm
Quote icon: rose color, top-left
Stars: 5 filled, coral color
Quote: body text, italic
Author: initials only (privacy), caption style
Layout: horizontal scroll on mobile, grid on desktop
Contact
Background: #0F4C4B
Two-column: map left, info right (stacked on mobile)
Map: rounded-2xl, rose border, 100% width mobile
Phone: coral color, 32px, click-to-call
Address: icon + text
Form: white card overlapping section, rounded-2xl, shadow-xl
Fields: Name, Phone, Department select, Message textarea
Submit: coral button, full-width mobile
Footer
Background: #0B3D3C
4 columns on desktop, 2x2 grid on tablet, stacked on mobile
Column 1: About hospital (2-3 lines)
Column 2: Quick links
Column 3: Services list
Column 4: Contact info
Bottom bar: copyright, disclaimer, separator line
Animation Rules (Minimal, Purposeful)
No auto-playing animations — user must scroll to trigger
Duration: 300ms max — snappy, not sluggish
Easing: ease-out — natural deceleration
Properties only: opacity, transform — GPU-friendly
Respect prefers-reduced-motion — disable for accessibility
Allowed animations:
Fade-in on scroll (subtle, 200ms)
Card hover lift (translateY -4px, shadow increase)
Button hover (background color change, 150ms)
Mobile menu slide (transform translateX, 300ms)
Accessibility Requirements
Color contrast ratio: 4.5:1 minimum — all text readable
Focus states visible — outline on all interactive elements
Alt text on all images — descriptive, not decorative
ARIA labels on icons — screen reader friendly
Form labels always visible — no placeholder-only labels
Skip to content link — keyboard navigation
Semantic HTML — proper heading hierarchy (H1 → H2 → H3)
File Structure
plain
sri-vigneshwara-hospital/
├── public/
│   ├── images/
│   │   ├── Reference_1_Premium_Orthopaedic_Dark.png
│   │   ├── Reference_2_Maternity_Soft_Curves.png
│   │   ├── Reference_3_German_Ortho_Arch.png
│   │   ├── Reference_4_Birth_Clinic_Bold.png
│   │   ├── Reference_5_Full_Medical_Green.png
│   │   ├── doctor-rao.jpg (placeholder)
│   │   ├── doctor-obgyn.jpg (placeholder)
│   │   └── hospital-building.jpg (placeholder)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── StatsBar.astro
│   │   ├── Services.astro
│   │   ├── Journey.astro
│   │   ├── Doctors.astro
│   │   ├── Testimonials.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── globals.css
│   └── lib/
│       └── utils.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── components.json
└── CLAUDE.md
Commands
npm run dev — Start dev server (localhost:4321)
npm run build — Build static site to ./dist
npm run preview — Preview built site locally
npx wrangler pages deploy dist — Deploy to Cloudflare Pages
Constraints
Static export only (no SSR, no API routes)
Images: use <img> tag or unoptimized: true
All phone numbers: <a href="tel:9849287515">
WhatsApp: <a href="https://wa.me/919849287515">
Form action: Formspree endpoint (get from client)
Map: Embedded Google Maps iframe
No external fonts loading — use Google Fonts CDN or self-host
Max page weight: 2MB total (images optimized)
Lighthouse score target: 90+ on all metrics
Reference Images
Located in /public/images/:
Reference_1_Premium_Orthopaedic_Dark.png — Dark green hero, stats bar, anatomical elements
Reference_2_Maternity_Soft_Curves.png — Wavy dividers, teal gradient, soft illustrations
Reference_3_German_Ortho_Arch.png — Arch photo frames, coral CTAs, info pills
Reference_4_Birth_Clinic_Bold.png — Serif headings, circular photos, checklist services
Reference_5_Full_Medical_Green.png — Complete page flow, video section, testimonials
Checklist Before Delivery
[ ] All text uses hospital's actual information
[ ] Phone numbers are click-to-call
[ ] WhatsApp button works
[ ] Map shows correct location
[ ] Form submits correctly
[ ] Mobile responsive (test on actual phone)
[ ] Tablet responsive
[ ] Desktop responsive
[ ] Images optimized (< 200KB each)
[ ] Lighthouse score 90+
[ ] No console errors
[ ] Meta tags for SEO
[ ] Favicon set
[ ] Client approves demo