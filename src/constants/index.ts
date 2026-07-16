export const WEDDING_DATA = {
  bride: 'Nadia Felicia',
  groom: 'Alexander Duncan',
  date: new Date('2026-11-07'),
  location: 'Surabaya',
  googleMapsUrl: 'https://maps.google.com/?q=Surabaya',
  musicUrl: '/assets/audio/wedding-music.mp3',
} as const;

export const COLORS = {
  ivory: '#FFFBF5',
  warmWhite: '#FAF8F3',
  sageGreen: '#9BA99C',
  dustyPink: '#D4A5A5',
  powderBlue: '#B8C8D8',
  darkTaupe: '#6B5B56',
} as const;

export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Details', href: '#details' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'RSVP', href: '#rsvp' },
  { label: 'Wishes', href: '#wishes' },
] as const;

export const EVENTS = [
  {
    id: 1,
    title: 'Wedding Ceremony',
    date: '2026-11-07',
    time: '10:00 AM',
    location: 'Grand Ballroom, Surabaya',
    description: 'Join us for our wedding ceremony',
  },
  {
    id: 2,
    title: 'Reception',
    date: '2026-11-07',
    time: '6:00 PM',
    location: 'Grand Ballroom, Surabaya',
    description: 'Dinner and celebration',
  },
] as const;

export const GALLERY_IMAGES = [
  { id: 1, src: '/assets/images/gallery-1.jpg', alt: 'Engagement photo 1' },
  { id: 2, src: '/assets/images/gallery-2.jpg', alt: 'Engagement photo 2' },
  { id: 3, src: '/assets/images/gallery-3.jpg', alt: 'Engagement photo 3' },
  { id: 4, src: '/assets/images/gallery-4.jpg', alt: 'Engagement photo 4' },
  { id: 5, src: '/assets/images/gallery-5.jpg', alt: 'Engagement photo 5' },
  { id: 6, src: '/assets/images/gallery-6.jpg', alt: 'Engagement photo 6' },
] as const;

export const API_ENDPOINTS = {
  getGuests: process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || '',
  submitRSVP: process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || '',
  submitWish: process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || '',
} as const;
