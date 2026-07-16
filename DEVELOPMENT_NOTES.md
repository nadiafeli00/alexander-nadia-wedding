# Development Notes

## Image Setup

The gallery expects images in the following location:
```
public/assets/images/
├─��� gallery-1.jpg
├── gallery-2.jpg
├── gallery-3.jpg
├── gallery-4.jpg
├── gallery-5.jpg
└── gallery-6.jpg
```

## Audio Setup

Background music should be placed at:
```
public/assets/audio/wedding-music.mp3
```

## Color Palette

The website uses a sophisticated luxury palette:

- **Ivory** (#FFFBF5) - Main background
- **Warm White** (#FAF8F3) - Secondary background
- **Sage Green** (#9BA99C) - Accent/primary CTA
- **Dusty Pink** (#D4A5A5) - Accent/secondary
- **Powder Blue** (#B8C8D8) - Accent/tertiary
- **Dark Taupe** (#6B5B56) - Text/borders

## Font Stack

- **Serif** (Headings): Cormorant Garamond - elegant, luxury feel
- **Sans** (Body): Inter - clean, readable
- **Display** (CTAs/Labels): DM Sans - modern, bold

## Animation Principles

- Scroll-triggered animations use `whileInView`
- Hover states are subtle and smooth
- Loading screen duration: 3 seconds
- Floating flowers: 6 second duration
- Countdown: updates every 1 second

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting by route
- CSS-in-JS with Tailwind
- Lazy loading of components
- Optimized animations with GPU acceleration

## Browser Compatibility

Tested on:
- Chrome 120+
- Firefox 121+
- Safari 17+
- Edge 120+
- Mobile Safari (iOS 15+)
- Chrome Mobile (Android 11+)

## SEO Considerations

- Meta tags set in layout.tsx
- Open Graph tags for social sharing
- Sitemap generated dynamically
- Robots.txt configured
- Structured data ready for JSON-LD

## Accessibility Features

- ARIA labels on buttons
- Keyboard navigation support
- Focus management
- Color contrast ratios meet WCAG AA
- Form labels associated with inputs
- Screen reader friendly

## Future Enhancements

- [ ] Admin dashboard for managing RSVPs
- [ ] Email notifications
- [ ] Guest authentication/login
- [ ] Multiple language support
- [ ] QR code for digital invitation
- [ ] Live event streaming integration
- [ ] Guest seating chart
- [ ] Wedding budget tracker (private)
- [ ] Honeymoon fund integration
- [ ] Social media integration
