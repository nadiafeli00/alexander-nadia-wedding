# Google Apps Script for Wedding RSVP & Wishes

This script handles form submissions from the wedding website and stores them in Google Sheets.

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet named "Wedding RSVP"
3. Create three sheets:
   - "RSVP" - for RSVP responses
   - "Wishes" - for guest wishes
   - "Guests" - for guest list (optional)

### 2. Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Create a new project
3. Delete the default code
4. Paste the script below
5. Replace `YOUR_SHEET_ID` with your sheet ID (from the URL)

### 3. Deploy as Web App

1. Click "Deploy" → "New Deployment"
2. Select type: "Web app"
3. Execute as: Your account
4. Who has access: "Anyone"
5. Click "Deploy"
6. Copy the deployment URL
7. Add to `.env.local` in the project

## Script Code

```javascript
const SHEET_ID = "YOUR_SHEET_ID";
const RSVP_SHEET_NAME = "RSVP";
const WISHES_SHEET_NAME = "Wishes";
const GUESTS_SHEET_NAME = "Guests";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    
    if (payload.action === "getGuest") {
      return getGuest(payload, ss);
    } else if (payload.action === "submitRSVP") {
      return submitRSVP(payload, ss);
    } else if (payload.action === "submitWish") {
      return submitWish(payload, ss);
    }
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: "Unknown action" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getGuest(payload, ss) {
  const sheet = ss.getSheetByName(GUESTS_SHEET_NAME);
  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({ guest: null })
    ).setMimeType(ContentService.MimeType.JSON);
  }
  
  const data = sheet.getDataRange().getValues();
  const guest = data.find(row => row[0] === payload.name);
  
  return ContentService.createTextOutput(
    JSON.stringify({ guest: guest || null })
  ).setMimeType(ContentService.MimeType.JSON);
}

function submitRSVP(payload, ss) {
  const sheet = ss.getSheetByName(RSVP_SHEET_NAME);
  
  sheet.appendRow([
    payload.guestName,
    payload.attendance,
    payload.guestCount,
    payload.specialRequests || "",
    payload.timestamp
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}

function submitWish(payload, ss) {
  const sheet = ss.getSheetByName(WISHES_SHEET_NAME);
  
  sheet.appendRow([
    payload.guestName,
    payload.message,
    payload.timestamp,
    false // approved
  ]);
  
  return ContentService.createTextOutput(
    JSON.stringify({ success: true })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

## Sheet Format

### RSVP Sheet
- Column A: Guest Name
- Column B: Attendance (attending/not-attending)
- Column C: Guest Count
- Column D: Special Requests
- Column E: Timestamp

### Wishes Sheet
- Column A: Guest Name
- Column B: Message
- Column C: Timestamp
- Column D: Approved (TRUE/FALSE)

### Guests Sheet (Optional)
- Column A: Guest Name
- Column B: Email
- Column C: Phone
- Column D: Max Guests
