# HackZit - Software Development Company Website

HackZit's official website - A modern, bilingual portfolio and company website built with Next.js showcasing our software development services, projects, and team.

## 🌟 Features

- **Bilingual Support**: Full English and Spanish localization
- **Modern Design**: Clean, responsive UI with smooth animations
- **SEO Optimized**: Comprehensive SEO with structured data for enhanced search visibility
- **Interactive Elements**: Custom cursor, ripple effects, and smooth scrolling
- **Performance Focused**: Built with Next.js 15 and optimized for speed
- **Mobile-First**: Fully responsive design across all devices

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Analytics**: Vercel Analytics
- **Development**: Turbopack for fast development builds

## 📱 Website Sections

- **Hero Section**: Company introduction and call-to-action
- **Services**: Software development services offered
- **Technologies**: Tech stack and expertise showcase
- **Projects**: Portfolio of completed work
- **Team**: Meet the HackZit team members
- **Contact**: Get in touch with the company

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sebaxe07/hackzit-web.git
cd hackzit-web
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
hackzit-web/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── BackToTopButton.tsx
│   │   ├── ContactSection.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SEO.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── TechnologiesSection.tsx
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx
│   ├── data/               # Static data files
│   │   └── projects.json
│   ├── lib/                # Utility functions
│   │   └── scrollUtils.ts
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
│   ├── HACKZIT_LOGO/      # Company logos
│   ├── team photos/        # Team member photos
│   └── icons/             # Various icons
└── Configuration files
```

## 🌐 Internationalization

The website supports both English and Spanish languages with:

- Dynamic language switching
- Localized content for all sections
- SEO optimization for both languages
- Context-based translation management

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 📊 SEO & Analytics

- Comprehensive meta tags and Open Graph data
- Structured data for enhanced search results
- Vercel Analytics integration
- Sitemap and robots.txt included

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sebaxe07/hackzit-web)

### Other Deployment Options

This Next.js application can be deployed on any platform that supports Node.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to HackZit.

## 📧 Contact

For any questions or inquiries:

- Website: [hackzit.com](https://hackzit.com)
- Email: contact@hackzit.com

---

Built with ❤️ by the HackZit team
