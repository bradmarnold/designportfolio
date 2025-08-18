# Bradford Arnold Portfolio

A modern, production-ready portfolio site built with Next.js 14, featuring yellow accent branding and showcasing work in pattern design, fabrication, and teaching.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Components**: Custom UI library with shadcn/ui patterns
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Themes**: next-themes for light/dark mode

## 🎨 Brand System

### Colors
- **Primary Yellow**: `#F7D23E` - Call-to-action buttons and highlights
- **Hover Yellow**: `#E6C21D` - Interactive states
- **Background Yellow**: `#FFF8D6` - Subtle accent areas

### Typography
- **UI/Body**: Inter font family
- **Headlines**: Source Serif Pro for pull quotes and headers

### Theme Tokens
Update colors in `tailwind.config.ts`:

```typescript
'brand-yellow': {
  DEFAULT: '#F7D23E',
  50: '#FFF8D6',
  600: '#E6C21D',
  // ... other shades
}
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── projects/          # Projects listing and detail pages
│   ├── contact/           # Contact form
│   ├── about/             # About page
│   ├── resume/            # Resume page
│   └── teaching/          # Teaching demo page
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── sections/         # Page section components
├── lib/                  # Utilities and helpers
content/                  # Content management
├── projects/             # Project MDX files (future)
└── tests/                # Test units data (future)
public/                   # Static assets
└── images/               # Project images and logos
```

## 📝 Content Management

### Adding a New Project

1. **Add project data** to the projects array in `src/app/projects/page.tsx`
2. **Create project detail** in `src/app/projects/[slug]/page.tsx` projectData object
3. **Add project images** to `public/images/projects/[slug]/`
4. **Update featured projects** in `src/components/sections/featured-projects.tsx` if needed

#### Project Data Structure

```typescript
{
  title: "Project Title",
  slug: "project-slug",
  summary: "Brief description",
  image: "/images/projects/slug-cover.svg",
  tags: ["Pattern Design", "Research"],
  date: "2024-01-15",
  roles: ["Designer", "Researcher"],
  tools: ["CAD Software", "Laser Cutter"],
  content: `Markdown content here...`
}
```

### Adding a New Test Unit

Create JSON file in `content/tests/units.json`:

```json
{
  "units": [
    {
      "id": "unit-1",
      "title": "Pattern Basics",
      "questions": [
        {
          "id": "q1",
          "type": "multiple-choice",
          "question": "What is the primary purpose of...",
          "options": ["A", "B", "C", "D"],
          "correct": 2
        }
      ]
    }
  ]
}
```

## 🖼️ Image Management

### Adding Project Images

1. **Create project folder**: `public/images/projects/[project-slug]/`
2. **Add cover image**: `cover.jpg` (400x300 aspect ratio recommended)
3. **Add gallery images**: `gallery-1.jpg`, `gallery-2.jpg`, etc.
4. **Update alt text** in component props for accessibility

### Image Naming Convention

- Cover images: `[slug]-cover.svg` or `.jpg`
- Gallery images: `[slug]-gallery-[number].jpg`
- Logos: `[organization]-logo.svg`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy automatically** on push to main branch

### GitHub Pages (Static Export)

1. **Build static site**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Copy `dist/` contents to `gh-pages` branch
   - Enable GitHub Pages in repository settings

### Custom Server

1. **Build application**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Contact form endpoint (optional)
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Build Configuration

The `next.config.js` is configured for static export:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## ♿ Accessibility Features

- **Keyboard Navigation**: Full tab support throughout the site
- **Focus States**: Visible focus indicators on all interactive elements
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects `prefers-reduced-motion` setting

## 🧪 Testing

### Component Testing

```bash
# Run unit tests (if implemented)
npm test
```

### Manual Testing Checklist

- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Project filtering and sorting functions
- [ ] Theme toggle works
- [ ] Mobile responsive design
- [ ] Keyboard navigation
- [ ] Print stylesheet for resume page

## 📊 Performance

### Optimization Features

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next/Image with responsive sizing
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging unused styles

### Monitoring

Use Lighthouse to check:
- Performance: Target 95+
- Accessibility: Target 100
- Best Practices: Target 95+
- SEO: Target 95+

## 🔄 Development Workflow

### Making Changes

1. **Create feature branch**: `git checkout -b feature/new-feature`
2. **Make changes** and test locally with `npm run dev`
3. **Build and test**: `npm run build` to ensure no errors
4. **Commit changes**: Use descriptive commit messages
5. **Create pull request** for review

### Code Style

- **ESLint**: Enforced code style rules
- **Prettier**: Automatic code formatting
- **TypeScript**: Strict type checking enabled

## 📞 Support

### Common Issues

**Build Errors**: Check TypeScript compilation with `npx tsc --noEmit`

**Styling Issues**: Verify Tailwind classes and custom theme configuration

**Image Loading**: Ensure images exist in `public/images/` directory

**Navigation Problems**: Check route definitions in App Router structure

### Getting Help

- Check Next.js 14 documentation for App Router patterns
- Review Tailwind CSS documentation for styling
- Consult Framer Motion docs for animation issues

## 📋 Content Checklist for Bradford

### Content Updates Needed

- [ ] Replace placeholder project images with professional photos
- [ ] Add detailed project case studies with process documentation
- [ ] Update contact information and social media links
- [ ] Add professional headshot for about page
- [ ] Create actual pattern files for download links
- [ ] Write authentic project content based on real work
- [ ] Add testimonials or client feedback
- [ ] Create video demonstrations for teaching section
- [ ] Update resume with current experience and skills
- [ ] Add Google Analytics tracking code

### Regular Maintenance

- [ ] Update project portfolio quarterly
- [ ] Review and update contact information
- [ ] Monitor site performance and accessibility
- [ ] Update dependencies monthly for security
- [ ] Back up any custom content additions

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.