import axios from 'axios';
import type { Guest, RSVPData, WeddingWish } from '@/types';

const getScriptUrl = () => {
  return process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || '';
};

export const guestAPI = {
  getGuestByName: async (name: string): Promise<Guest | null> => {
    try {
      const response = await axios.post(getScriptUrl(), {
        action: 'getGuest',
        name,
      });
      return response.data.guest || null;
    } catch (error) {
      console.error('Error fetching guest:', error);
      return null;
    }
  },

  submitRSVP: async (data: RSVPData): Promise<boolean> => {
    try {
      await axios.post(getScriptUrl(), {
        action: 'submitRSVP',
        ...data,
      });
      return true;
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      return false;
    }
  },

  submitWish: async (data: Omit<WeddingWish, 'id' | 'approved'>): Promise<boolean> => {
    try {
      await axios.post(getScriptUrl(), {
        action: 'submitWish',
        ...data,
      });
      return true;
    } catch (error) {
      console.error('Error submitting wish:', error);
      return false;
    }
  },
};
