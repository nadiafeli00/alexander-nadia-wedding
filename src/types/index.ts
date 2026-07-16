export interface Guest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  maxGuests: number;
  hasRsvped: boolean;
  attendance?: 'attending' | 'not-attending';
  guestCount?: number;
  specialRequests?: string;
  timestamp?: string;
}

export interface RSVPData {
  guestId: string;
  guestName: string;
  attendance: 'attending' | 'not-attending';
  guestCount: number;
  specialRequests?: string;
  timestamp: string;
}

export interface Wedding {
  bride: string;
  groom: string;
  date: Date;
  location: string;
}

export interface WeddingWish {
  id: string;
  guestName: string;
  message: string;
  timestamp: string;
  approved: boolean;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}
