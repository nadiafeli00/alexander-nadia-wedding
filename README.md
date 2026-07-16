# Wedding Website - Alexander & Nadia

> A beautiful, responsive wedding invitation website built with Next.js, React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Elegant and responsive design
- ✨ Smooth animations with Framer Motion
- 📱 Mobile-first responsive layout
- 🎵 Background music control
- ⏱️ Wedding countdown timer
- 🖼️ Image gallery with carousel
- 📍 Embedded Google Maps
- 📋 RSVP form integration
- 💬 Guest wishes/messages
- 🎁 Wedding gift information
- 📊 Google Sheets integration for data collection
- 🔍 SEO optimized
- ♿ Accessible design

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Carousel**: [Swiper](https://swiperjs.com/)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nadiafeli00/alexander-nadia-wedding.git
cd alexander-nadia-wedding
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Google Apps Script URL.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

### Google Apps Script Integration

To enable RSVP and wishes submission:

1. Create a Google Sheet for collecting responses
2. Create a Google Apps Script project
3. Set up the script to handle POST requests
4. Deploy as a web app and get the deployment URL
5. Add the URL to `.env.local`

### Customization

Edit the following files to customize the website:

- `src/constants/index.ts` - Wedding details, names, date, location
- `src/components/sections/CoverSection.tsx` - Main header text
- `tailwind.config.ts` - Colors and styling
- `public/` - Add your images and music here

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   └── Text.tsx
│   ├── effects/
│   │   ├── FloatingFlower.tsx
│   │   ├── ScrollProgressBar.tsx
│   │   ├── MusicControl.tsx
│   │   └── BackToTopButton.tsx
│   └── sections/
│       ├── CoverSection.tsx
│       ├── GreetingSection.tsx
│       ├── WeddingDetailsSection.tsx
│       ├── CountdownSection.tsx
│       ├── EventsSection.tsx
│       ├── MapsSection.tsx
│       ├── GallerySection.tsx
│       ├── WeddingGiftSection.tsx
│       ├── RSVPSection.tsx
│       ├── WeddingWishesSection.tsx
│       └── ClosingSection.tsx
├── constants/
│   └── index.ts
├── hooks/
│   ├── useCountdown.ts
│   ├── useScrollProgress.ts
│   └── useMusic.ts
├── types/
│   └── index.ts
├── utils/
│   ├── api.ts
│   ├── dates.ts
│   └── cn.ts
└── styles/
    └── globals.css
```

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

The site is optimized for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Deployment Options

- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Railway](https://railway.app/)
- Traditional hosting with Node.js

## Customizing Content

### Update Wedding Details

Edit `src/constants/index.ts`:

```typescript
export const WEDDING_DATA = {
  bride: 'Nadia Felicia',
  groom: 'Alexander Duncan',
  date: new Date('2026-11-07'),
  location: 'Surabaya',
  // ...
};
```

### Add Images

1. Place images in `public/assets/images/`
2. Update gallery paths in constants
3. Images are optimized automatically by Next.js

### Add Music

1. Place audio file in `public/assets/audio/`
2. Update path in `MusicControl` component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Lighthouse Score: 95+
- Fast page load with image optimization
- Code splitting and lazy loading
- Optimized CSS and animations

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader friendly

## SEO

- Meta tags and Open Graph
- XML sitemap
- Robots.txt
- Structured data ready

## License

Private use only. All rights reserved.

## Support

For issues and questions, please contact the developers.

---

Made with 💕 by Alexander & Nadia
