# St. Clair Design

A modern design studio and portfolio website for St. Clair Design. Showcases design expertise, services, and portfolio work with smooth animations, custom interactions, and seamless user experience.

[![Next.js](https://img.shields.io/badge/Next.js-14+-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Features

- **Custom Cursor** - Branded cursor interaction following mouse movement
- **Scroll Reveal Animations** - Elements animate into view on scroll with smooth transitions
- **Services Marquee** - Animated scrolling display of design services
- **Portfolio Grid** - Showcase of design work with interactive preview
- **Expert Showcase** - Team expertise and credentials display
- **Contact Form** - Direct communication channel for inquiries
- **Responsive Design** - Optimized for all device sizes and screen resolutions
- **Smooth Navigation** - Seamless page transitions with Next.js routing

## Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **Next.js** | React framework with App Router | 14+ |
| **TypeScript** | Type-safe JavaScript | 5+ |
| **Tailwind CSS** | Utility-first CSS framework | 3+ |
| **React** | UI library | 18+ |
| **Framer Motion** | Animation library (optional) | Latest |

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd stclair-design
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit http://localhost:3000
   - Site is fully interactive with hot-reload enabled

## Project Structure

```
stclair-design/
├── app/                              # Next.js App Router
│   ├── layout.tsx                    # Root layout with navigation
│   ├── page.tsx                      # Homepage
│   └── favicon.ico                   # Site favicon
├── components/                       # React components
│   ├── CustomCursor.tsx              # Custom cursor interaction
│   ├── ScrollReveal.tsx              # Scroll animation wrapper
│   ├── Navigation.tsx                # Header navigation
│   ├── Hero.tsx                      # Homepage hero section
│   ├── ServicesMarquee.tsx           # Services scrolling display
│   ├── About.tsx                     # Studio about section
│   ├── Divider.tsx                   # Visual divider component
│   ├── Portfolio.tsx                 # Portfolio showcase grid
│   ├── Expertise.tsx                 # Skills and expertise
│   ├── Quote.tsx                     # Testimonial or quote
│   ├── Contact.tsx                   # Contact form section
│   └── Footer.tsx                    # Footer with links
├── public/                           # Static assets
│   ├── images/                       # Portfolio images and assets
│   └── fonts/                        # Custom fonts (if any)
├── styles/                           # Global styles
│   └── globals.css                   # Tailwind and global CSS
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── package.json
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Key Components

### CustomCursor
Renders a branded cursor that follows mouse movement with smooth animation.

### ScrollReveal
Wrapper component that animates child elements into view as they scroll into viewport. Configure animation timing and direction per element.

### Navigation
Header component with logo and navigation links. Sticky positioning for persistent access.

### Hero
Eye-catching homepage banner with call-to-action button directing to contact or portfolio section.

### ServicesMarquee
Horizontally scrolling animated marquee displaying design services in a continuous loop.

### Portfolio
Grid showcase of design projects with images, descriptions, and links to detailed case studies.

### Expertise
Section highlighting team members, skills, credentials, and design specialties.

### Contact
Functional contact form for client inquiries with validation and submission handling.

## Styling & Customization

### Tailwind Configuration

The project uses Tailwind CSS utility classes. Customize theme in `tailwind.config.ts`:
- Color scheme
- Typography scales
- Breakpoints
- Custom animations

### Global Styles

Global CSS and custom styles are in `styles/globals.css`. This includes:
- CSS variables for theme colors
- Custom animation keyframes
- Utility classes
- Font imports

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the official Next.js deployment platform with zero-config support.

#### Step 1: Push to GitHub

```bash
cd stclair-design
git init
git add -A
git commit -m "Initial commit"
gh repo create stclair-design --private --push --source .
```

#### Step 2: Deploy on Vercel

1. Go to [Vercel.com](https://vercel.com/new)
2. Click **Import Git Repository**
3. Select your `stclair-design` repository
4. Vercel auto-detects Next.js configuration
5. Click **Deploy**

#### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard, go to **Settings → Domains**
2. Click **Add Domain** and enter your domain (e.g., stclairdesign.com)
3. Follow DNS configuration instructions

### Other Deployment Options

- **Docker**: Build a Docker image and deploy to any container service
- **Self-hosted**: Build and run with `npm run build && npm run start`
- **Netlify**: Requires build configuration adjustments

## Performance Optimization

- **Image Optimization**: Use Next.js `<Image>` component for automatic optimization
- **Code Splitting**: App Router automatically code-splits by route
- **CSS-in-JS**: Tailwind purges unused styles in production
- **Font Loading**: Optimize font loading with `next/font`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Development Server Not Starting

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Start development server
npm run dev
```

### Build Errors

```bash
# Verify TypeScript configuration
npx tsc --noEmit

# Check for missing dependencies
npm install

# Rebuild
npm run build
```

### Styling Issues

- Ensure Tailwind classes are used correctly
- Check `tailwind.config.ts` for custom configurations
- Verify CSS file imports in layout components
- Clear browser cache and rebuild

## Author

Designed and developed by **St. Clair Design Co.**

---

## License

MIT License - see LICENSE file for details

## Support

For questions about Next.js, Tailwind CSS, and TypeScript:
1. Check [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS documentation](https://tailwindcss.com/docs)
3. See [TypeScript documentation](https://www.typescriptlang.org/docs)
