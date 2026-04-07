PROJECT_ARCHITECTURE.md
Project Overview

This project is a Next.js agency website built with the App Router and styled with Tailwind CSS through globals.css.

The site is designed as a premium Amazon-growth/agency landing site with:

a strong homepage hero
brand trust section
services preview
case studies
testimonials
CTA
contact form with backend API
Tech Stack
Next.js
React
Tailwind CSS
Framer Motion
Next/Image
Nodemailer for contact form email sending
High-Level Flow
Public Pages
/ → Homepage
/services → Full services page
/contact → Contact page
Backend
/api/contact → POST API route for contact form submission


my-agency-site/
│
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js
│   │
│   ├── contact/
│   │   ├── page.js
│   │   └── ContactClient.js
│   │
│   ├── services/
│   │   └── page.js
│   │
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── BrandSection.js
│   ├── CTASection.js
│   ├── FadeUp.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── SectionHeading.js
│   ├── ServiceCard.js
│   ├── ServicesPreview.js
│   ├── CaseStudies.js
│   ├── Testimonials.js
│   └── TopBanner.js
│
├── public/
│   └── images/
│       ├── hero-new.png
│       ├── case1.jpeg
│       ├── case2.jpeg
│       ├── case3.jpeg
│       ├── case4.jpeg
│       ├── brands/
│       │   ├── brand1.png
│       │   ├── brand2.png
│       │   ├── brand3.png
│       │   ├── brand4.png
│       │   └── brand5.png
│       ├── brandsection/
│       │   └── why-sellerova.png
│       └── servicecard/
│           ├── card1.png
│           ├── card2.png
│           └── card3.png
│
├── .env.local
├── next.config.js
├── package.json
└── PROJECT_ARCHITECTURE.md

Page Architecture
1. Homepage — app/page.js

This is the main landing page.

It renders the homepage sections in this order:

<Hero />
<BrandSection />
<ServicesPreview />
<CaseStudies />
<Testimonials />
<CTASection />

Purpose of each section
Hero → First impression, main value proposition, CTA, stats
BrandSection → Trust-building logos + explanatory copy
ServicesPreview → Key services offered
CaseStudies → Results and proof
Testimonials → Social proof
CTASection → Conversion section before footer

Purpose of each section
Hero → First impression, main value proposition, CTA, stats
BrandSection → Trust-building logos + explanatory copy
ServicesPreview → Key services offered
CaseStudies → Results and proof
Testimonials → Social proof
CTASection → Conversion section before footer

2. Services Page — app/services/page.js

Used for a dedicated full services page.

Purpose:

expand on service offering
provide detailed descriptions
support SEO for service-specific queries
3. Contact Page — app/contact/page.js

Server wrapper page.

It renders:
<ContactClient />

Reason:

page.js can hold metadata
ContactClient.js handles client-side form state
Backend Architecture
Contact API — app/api/contact/route.js

Handles form submission from the contact page.

Responsibilities
receive POST request
validate name, email, message
send email using Nodemailer
return success/error response
Frontend Consumer
app/contact/ContactClient.js
Components Architecture
Hero.js

Main homepage hero section.

Responsibilities:

render main heading
show supporting text
render CTA buttons
show hero visual
render stat cards beneath hero

Editable content:

main headline
subheadline
buttons
stat values
hero image path
BrandSection.js

Trust section below hero.

Responsibilities:

show “Trusted by Growing Amazon Brands”
auto-scrolling logo slider
left trust-building copy
right visual + supporting explanation

Editable content:

logo list
trust headline
left descriptive text
right heading/text
brand section image
ServicesPreview.js

Homepage services section.

Responsibilities:

render section heading
map service data into cards

Editable content:

services array
service titles
descriptions
images

Uses:

ServiceCard.js
ServiceCard.js

Reusable service card component.

Responsibilities:

render service title
render service description
render bottom image
keep all service cards visually aligned

Props:

title
description
image
CaseStudies.js

Homepage case studies grid.

Responsibilities:

render case study cards
render case image
show result numbers
show support text

Important:

use unique React keys
case images live in public/images/
Testimonials.js

Social proof section.

Responsibilities:

show selected testimonials
build trust before CTA
CTASection.js

Final action-driving section.

Responsibilities:

push user toward contact/conversion
Navbar.js

Top navigation.

Responsibilities:

site navigation
link users to pages
Footer.js

Site footer.

Responsibilities:

copyright
short brand statement
final polish
TopBanner.js

Optional announcement bar above navbar.

Responsibilities:

promotional CTA
closable message
banner-level campaign content
FadeUp.js

Reusable animation wrapper.

Responsibilities:

consistent reveal animation across sections

Use case:

wrap headings, cards, blocks for smooth motion
Styling Architecture
Global Styles — app/globals.css

This file is the core design system.

What it controls
theme colors
reusable layout spacing
typography classes
buttons
cards
service card system
hero-specific styling
brand section styling
homepage-specific utilities
Key class groups
.section, .section-tight, .section-loose
.container
.heading, .subheading, .text-muted
.btn-primary, .btn-outline
.card, .card-soft
.hero-*
.brand-*
.service-card*
Rule

Keep most repeated styling in globals.css instead of inline utility duplication.

Image Architecture

All images should live inside public/images/.

Main categories
hero-new.png → homepage hero visual
brands/ → brand logo strip
brandsection/ → right-side trust image
servicecard/ → service card images
case*.jpeg → case study images
Example usage
<Image src="/images/servicecard/card1.png" ... />
Rule

Always use exact file names and extensions.

Content Editing Guide
To change homepage hero text

Edit:
components/Hero.js
To change trust logos

Edit:

components/BrandSection.js
public/images/brands/
To change service cards

Edit:

components/ServicesPreview.js
components/ServiceCard.js
public/images/servicecard/
To change case studies

Edit:

components/CaseStudies.js
public/images/case*.jpeg
To change testimonials

Edit:

components/Testimonials.js
To change global colors, spacing, buttons

Edit:

app/globals.css
Deployment Architecture
Recommended Hosting
Vercel for hosting
Hostinger for domain only
Setup
deploy app to Vercel
connect Hostinger domain to Vercel
add environment variables in Vercel
Environment Variables

Stored locally in:

.env.local

Expected variables:

EMAIL_USER=your_email
EMAIL_PASS=your_password_or_app_password
EMAIL_TO=destination_email

These must also be added in Vercel for production.

Performance / Maintenance Notes
1. Next/Image

When using fill, always add sizes.

Example:

sizes="(max-width: 768px) 100vw, 33vw"
2. Important above-the-fold image

For hero or first visible image, use:

priority

or

loading="eager"
3. Unique React keys

Never use repeating titles as keys.

Wrong:

key={item.title}

Correct:

key={`${item.title}-${index}`}
4. Cached images

If image replacement doesn’t show:

rename image file
restart dev server
hard refresh browser
Recommended Development Rules
One section = one component
Shared styles go to globals.css
Keep image paths inside public/images/
Keep page files clean and structural
Put interactive logic in client components only
Use SectionHeading or shared heading patterns for consistency
