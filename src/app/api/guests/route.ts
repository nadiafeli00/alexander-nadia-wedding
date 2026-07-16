import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    // This is a placeholder API route
    // In production, this should call your Google Apps Script endpoint
    // or handle the request directly

    switch (action) {
      case 'getGuest':
        // Call Google Apps Script to get guest data
        return Response.json({ guest: null });
      
      case 'submitRSVP':
        // Call Google Apps Script to save RSVP
        return Response.json({ success: true });
      
      case 'submitWish':
        // Call Google Apps Script to save wish
        return Response.json({ success: true });
      
      default:
        return Response.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    console.error('API error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
