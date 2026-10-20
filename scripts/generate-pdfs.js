const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

// Ensure public/downloads directory exists
const downloadsDir = path.join(__dirname, '..', 'public', 'downloads');
if (!fs.existsSync(downloadsDir)) {
  fs.mkdirSync(downloadsDir, { recursive: true });
}

// 27 Resource Specifications
const resources = [
  // TRAVEL JOURNALS
  {
    fileName: 'forever-adventurer-daily-travel-journal.pdf',
    title: 'DAILY TRAVEL JOURNAL & REFLECTION SHEET',
    category: 'Travel Journals',
    pages: 2,
    type: 'journal',
    subtitle: 'Morning Intentions, Sensory Notes & Evening Gratitude',
    howToUse: [
      'Fill in your morning intention and destination focus before leaving your lodging.',
      'Jot down sensory impressions—sounds, street scents, and local phrases—in real time.',
      'Unwind at dusk by recording your most memorable meal and moment of gratitude.'
    ]
  },
  {
    fileName: 'forever-adventurer-30-day-travel-diary.pdf',
    title: '30-DAY EXTENDED JOURNEY DIARY',
    category: 'Travel Journals',
    pages: 4,
    type: 'monthly_journal',
    subtitle: 'Daily Milestone Tracker for Sabbaticals & Long Journeys',
    howToUse: [
      'Document one enduring sentence or standout cultural encounter each day.',
      'Track weekly personal growth, comfort-zone milestones, and energy levels.',
      'Keep as a permanent tactile chronicle of your extended worldwide journey.'
    ]
  },
  {
    fileName: 'forever-adventurer-solo-travel-journal.pdf',
    title: 'SOLO TRAVEL CONFIDENCE & DISCOVERY JOURNAL',
    category: 'Travel Journals',
    pages: 3,
    type: 'solo_journal',
    subtitle: 'Navigating Solitude, Intuition & Comfort-Zone Growth',
    howToUse: [
      'Use the intuition check-in when navigating new neighborhoods alone.',
      'Celebrate solo wins: navigating foreign transit, dining alone, or finding quiet spots.',
      'Reflect on how independence and self-reliance deepen with every mile.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-memories-journal.pdf',
    title: 'TRAVEL MEMORIES & KEEPSAKE JOURNAL',
    category: 'Travel Journals',
    pages: 3,
    type: 'keepsake',
    subtitle: 'Ephemera Frames, Local Quotes & Sensory Maps',
    howToUse: [
      'Affix train ticket stubs, dried wildflowers, or museum passes inside ephemera frames.',
      'Record meaningful conversations with locals, shopkeepers, and fellow wanderers.',
      'Sketch a quick map or note the atmospheric qualities of your favourite alleyway.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-reflection-prompts.pdf',
    title: '50 MINDFUL TRAVEL REFLECTION PROMPTS',
    category: 'Travel Journals',
    pages: 2,
    type: 'prompts',
    subtitle: 'Inquiries to Unlock Meaningful Travel Observations',
    howToUse: [
      'Select 1–2 prompts while sipping morning coffee at a neighborhood cafe.',
      'Shift your gaze from tourist highlights to how residents live their ordinary days.',
      'Notice personal preconceptions being overturned by genuine local experiences.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-bucket-list-journal.pdf',
    title: 'WANDERLUST BUCKET LIST & LIFE DREAMS LOG',
    category: 'Travel Journals',
    pages: 2,
    type: 'bucket_list',
    subtitle: 'Purpose-Driven Dream Planning & Memory Tracking',
    howToUse: [
      'Categorize life dreams into cultural immersions, wilderness wonders, and historic trails.',
      'Define the underlying reason why each dream matters to your personal journey.',
      'Record completion dates alongside a single memorable takeaway sentence.'
    ]
  },

  // CALENDARS & PLANNERS
  {
    fileName: 'forever-adventurer-undated-monthly-calendar.pdf',
    title: 'UNDATED MINIMALIST MONTHLY TRAVEL CALENDAR',
    category: 'Calendars & Planners',
    pages: 2,
    type: 'calendar',
    subtitle: 'Trip Timeline, Booking Deadlines & Flight Milestones',
    howToUse: [
      'Mark flight windows, hotel cancellation cutoff dates, and festival schedules.',
      'Colour-code transit days versus multi-night deep exploration bases.',
      'Keep one copy pinned to your wall and take a second folded copy in your daypack.'
    ]
  },
  {
    fileName: 'forever-adventurer-annual-travel-planner.pdf',
    title: 'ANNUAL YEAR-AT-A-GLANCE TRAVEL PLANNER',
    category: 'Calendars & Planners',
    pages: 2,
    type: 'annual',
    subtitle: '12-Month Vacation Leave & Seasonal Weather Matrix',
    howToUse: [
      'Map public holidays and long weekends against optimal dry-season weather months.',
      'Plan one slow extended trip alongside 2–3 seasonal weekend immersions.',
      'Balance high-intensity active adventures with restorative nature retreats.'
    ]
  },
  {
    fileName: 'forever-adventurer-trip-countdown-calendar.pdf',
    title: '60-DAY VISUAL TRIP COUNTDOWN CALENDAR',
    category: 'Calendars & Planners',
    pages: 1,
    type: 'countdown',
    subtitle: 'Departure Milestone Tracker (T-60 to Day 0)',
    howToUse: [
      'Cross off each square daily as departure approaches to maintain excitement.',
      'Target specific milestones: visa approval at T-45, gear fitting at T-30, packing at T-7.',
      'Arrive at departure day fully rested and prepared without last-minute panic.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-savings-planner.pdf',
    title: 'DREAM DESTINATION TRAVEL SAVINGS PLANNER',
    category: 'Calendars & Planners',
    pages: 2,
    type: 'savings',
    subtitle: 'Weekly Savings Milestones & Expense Trade-off Tracker',
    howToUse: [
      'Establish your comprehensive trip budget target (transport, lodging, activities).',
      'Track weekly contributions and trade-offs (e.g. eating in to fund a guided hike).',
      'Watch your adventure fund grow toward tangible, unforgettable experiences.'
    ]
  },
  {
    fileName: 'forever-adventurer-holiday-preparation-planner.pdf',
    title: 'MASTER HOLIDAY PREPARATION & HOUSEHOLD PLANNER',
    category: 'Calendars & Planners',
    pages: 2,
    type: 'household',
    subtitle: 'Pet Care, Home Security & Pre-Departure Shutdown',
    howToUse: [
      'Complete home maintenance items: mail holding, plant watering, and security timers.',
      'Coordinate pet sitting instructions and emergency veterinary contacts.',
      'Perform final departure checks (water valves, thermostats, refrigerator clear-out).'
    ]
  },

  // PACKING LISTS
  {
    fileName: 'forever-adventurer-general-holiday-packing-list.pdf',
    title: 'THE ESSENTIAL HOLIDAY PACKING CHECKLIST',
    category: 'Packing Lists',
    pages: 2,
    type: 'packing',
    subtitle: 'Clothing, Toiletries, Tech & Carry-On Essentials',
    howToUse: [
      'Lay all selected garments on a bed first; reduce by one third before packing.',
      'Check off items as they physically enter your bag to avoid duplicates or omissions.',
      'Reserve the right-hand column for destination-specific items and gifts.'
    ]
  },
  {
    fileName: 'forever-adventurer-carry-on-only-checklist.pdf',
    title: 'ULTRALIGHT CARRY-ON-ONLY MASTER CHECKLIST',
    category: 'Packing Lists',
    pages: 2,
    type: 'carry_on',
    subtitle: 'Minimalist Travel, TSA 3-1-1 & Capsule Wardrobe',
    howToUse: [
      'Strictly select quick-drying, neutral merino wool or linen garments that mix and match.',
      'Decant liquids into 100ml leak-proof bottles within a clear transparent toiletry bag.',
      'Wear your heaviest layers and walking boots onto the flight to save weight.'
    ]
  },
  {
    fileName: 'forever-adventurer-backpacking-packing-list.pdf',
    title: 'WILDERNESS & BACKPACKER GEAR CHECKLIST',
    category: 'Packing Lists',
    pages: 2,
    type: 'backpacking',
    subtitle: 'The Ten Essentials, Camp Kitchen & Base-Weight Tracker',
    howToUse: [
      'Verify the "Ten Essentials" including water filtration, headlamp, and emergency bivy.',
      'Log base pack weight versus consumable weight (fuel, food, water).',
      'Inspect seam waterproofing and battery levels 48 hours prior to trail departure.'
    ]
  },
  {
    fileName: 'forever-adventurer-beach-holiday-packing-list.pdf',
    title: 'COASTAL & TROPICAL BEACH HOLIDAY CHECKLIST',
    category: 'Packing Lists',
    pages: 2,
    type: 'beach',
    subtitle: 'Sun Protection, Swimwear, Snorkel & Evening Attire',
    howToUse: [
      'Pack reef-safe mineral sunscreen (SPF 50+) and protective UV rash guards.',
      'Include a waterproof dry-bag for island boat transfers and sea kayaking.',
      'Bring breathable cotton and linen for warm coastal dinners.'
    ]
  },
  {
    fileName: 'forever-adventurer-winter-travel-packing-list.pdf',
    title: 'COLD WEATHER & WINTER EXPEDITION CHECKLIST',
    category: 'Packing Lists',
    pages: 2,
    type: 'winter',
    subtitle: 'Base, Mid & Shell Layering System & Cold Battery Care',
    howToUse: [
      'Follow the 3-layer system: thermal base layer, insulating fleece/down, windproof shell.',
      'Keep phone and camera batteries in inside coat pockets to prevent freezing drain.',
      'Pack crampons or slip-on ice cleats for slippery mountain streets.'
    ]
  },
  {
    fileName: 'forever-adventurer-long-term-travel-checklist.pdf',
    title: 'LONG-TERM & NOMADIC TRAVEL PACKING ROSTER',
    category: 'Packing Lists',
    pages: 3,
    type: 'nomad',
    subtitle: 'Four-Season Versatility, Remote Work Gear & Repair Kit',
    howToUse: [
      'Select gear durable enough for multiple climates and regular wash-sink cycles.',
      'Include universal power adapters, portable door stop alarm, and compact gear repair kit.',
      'Audit your pack every 3 months; donate items you have not touched in 60 days.'
    ]
  },

  // TRIP PLANNING
  {
    fileName: 'forever-adventurer-daily-itinerary-template.pdf',
    title: 'DETAILED DAILY TRIP ITINERARY TEMPLATE',
    category: 'Trip Planning',
    pages: 2,
    type: 'itinerary',
    subtitle: 'Hour-by-Hour Pacing, Reservations & Transit Connections',
    howToUse: [
      'Schedule one primary anchor activity per half-day to avoid burnout.',
      'Note confirmation booking codes, opening hours, and last-entry times.',
      'Leave open buffer hours for spontaneous walking, cafe resting, and discovering side streets.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-budget-tracker.pdf',
    title: 'COMPREHENSIVE TRAVEL BUDGET & EXPENSE TRACKER',
    category: 'Trip Planning',
    pages: 2,
    type: 'budget',
    subtitle: 'Lodging, Transit, Dining & Foreign Exchange Ledger',
    howToUse: [
      'Establish a daily allowance and calculate your local currency conversion rate.',
      'Record card and cash outlays nightly into transit, food, lodging, and activities.',
      'Maintain an emergency buffer fund of 10–15% for unexpected transit re-routes.'
    ]
  },
  {
    fileName: 'forever-adventurer-flight-and-accommodation-organiser.pdf',
    title: 'FLIGHT, TRAIN & ACCOMMODATION MASTER ORGANISER',
    category: 'Trip Planning',
    pages: 2,
    type: 'transport_org',
    subtitle: 'Booking References, Host Contact Numbers & Keybox Codes',
    howToUse: [
      'Assemble flight confirmation codes, terminal numbers, and luggage allowance details.',
      'Write hotel / Airbnb physical addresses in both English and the local destination language.',
      'Keep this physical sheet accessible in your daypack in case your mobile battery depletes.'
    ]
  },
  {
    fileName: 'forever-adventurer-pre-departure-checklist.pdf',
    title: 'ULTIMATE PRE-DEPARTURE CHECKLIST (T-4 WEEKS TO DAY 0)',
    category: 'Trip Planning',
    pages: 2,
    type: 'pre_departure',
    subtitle: 'Passport, Visas, Bank Travel Notices, eSIMs & Health',
    howToUse: [
      'Confirm passport has at least 6 months validity from planned return date.',
      'Notify your bank of international travel and activate an international eSIM.',
      'Store digital backups of travel insurance policies in secure cloud storage.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-documents-organiser.pdf',
    title: 'TRAVEL DOCUMENTS & EMERGENCY INFORMATION SHEET',
    category: 'Trip Planning',
    pages: 2,
    type: 'emergency_docs',
    subtitle: 'Embassy Contacts, Insurance Numbers & Passport Backup',
    howToUse: [
      'Record your national embassy phone number and local 24-hour emergency medical contacts.',
      'Write down travel insurance policy numbers and international assistance claim hotlines.',
      'Keep one physical copy in your luggage separate from your passport and phone.'
    ]
  },
  {
    fileName: 'forever-adventurer-road-trip-planner.pdf',
    title: 'THE GREAT ROAD TRIP ROUTE & FUEL PLANNER',
    category: 'Trip Planning',
    pages: 2,
    type: 'road_trip',
    subtitle: 'Leg Mileages, Rental Walk-Around & Scenic Stops',
    howToUse: [
      'Photograph all exterior scratches and wheel condition before driving off the rental lot.',
      'Estimate driving leg times and identify mountain passes requiring snow chains or tolls.',
      'Mark scenic overlook viewpoints and family-run bakeries along the route.'
    ]
  },

  // WORLD EXPLORATION
  {
    fileName: 'forever-adventurer-countries-visited-tracker.pdf',
    title: 'WORLDWIDE COUNTRIES VISITED TRACKER (195 NATIONS)',
    category: 'World Exploration',
    pages: 3,
    type: 'countries',
    subtitle: 'Africa, Americas, Asia, Europe & Oceania Directory',
    howToUse: [
      'Color in each sovereign nation as you set foot upon its soil and engage with its culture.',
      'Record the year of your first visit and write down your single favourite memory.',
      'Use as an inspiring visual reminder of how vast and welcoming our planet remains.'
    ]
  },
  {
    fileName: 'forever-adventurer-world-travel-bucket-list.pdf',
    title: '100 ICONIC WONDERS & NATURAL PHENOMENON CHECKLIST',
    category: 'World Exploration',
    pages: 2,
    type: 'wonders',
    subtitle: 'Ancient Marvels, Wild Landscapes & Cultural Festivals',
    howToUse: [
      'Browse timeless wonders across every continent, from glacial fjords to ancient citadels.',
      'Highlight 3 destinations you commit to exploring over the next 24 months.',
      'Research seasonal guidance and travel respect guidelines before planning your route.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-photography-checklist.pdf',
    title: 'TRAVEL PHOTOGRAPHY SHOT LIST & STORYTELLING GUIDE',
    category: 'World Exploration',
    pages: 2,
    type: 'photo',
    subtitle: 'The 5-Shot Visual Narrative Framework & Gear Tally',
    howToUse: [
      'Capture the 5-shot narrative: Wide Establishing, Medium Character, Intimate Detail, Action, Portrait.',
      'Shoot during golden hour (first hour after sunrise, last hour before sunset).',
      'Always ask respectful permission before capturing close-up portraits of local artisans.'
    ]
  },
  {
    fileName: 'forever-adventurer-weekend-getaway-planner.pdf',
    title: '48-HOUR WEEKEND GETAWAY QUICK PLANNER',
    category: 'World Exploration',
    pages: 1,
    type: 'weekend',
    subtitle: 'Friday Evening to Sunday Dusk Optimization',
    howToUse: [
      'Pick a single walkable neighborhood base to eliminate transit friction.',
      'Pre-book one standout dinner and leave the rest of the weekend entirely spontaneous.',
      'Pack in a single 25L daypack to skip bag drop and hit the ground exploring immediately.'
    ]
  },
  {
    fileName: 'forever-adventurer-travel-memories-worksheet.pdf',
    title: 'POST-TRIP MEMORIES & DEBRIEF WORKSHEET',
    category: 'World Exploration',
    pages: 2,
    type: 'debrief',
    subtitle: 'Best Meals, Kindest Strangers & Life Lessons Learned',
    howToUse: [
      'Complete within 72 hours of returning home while impressions are vivid and vibrant.',
      'Identify what travel habit or mindset you want to integrate into your everyday life.',
      'Reflect on unexpected moments that became the highlight of your journey.'
    ]
  }
];

// Color definitions (RGB 0.0 - 1.0)
const FOREST_GREEN = rgb(0.09, 0.23, 0.17); // #173B2B
const FOREST_MID = rgb(0.18, 0.42, 0.31);   // #2E6B4F
const WARM_CREAM = rgb(0.97, 0.96, 0.93);   // #F7F5EE
const TERRACOTTA = rgb(0.78, 0.38, 0.24);   // #C8613D
const CHARCOAL = rgb(0.12, 0.14, 0.13);     // #1E2421
const MUTED_GRAY = rgb(0.45, 0.45, 0.45);
const BORDER_GRAY = rgb(0.85, 0.83, 0.80);
const PURE_WHITE = rgb(1, 1, 1);

function drawHeader(page, fontBold, fontRegular, title, subtitle, category, pageNum, totalPages) {
  const { width, height } = page.getSize();

  // Top masthead brand name
  page.drawText('FOREVER ADVENTURER', {
    x: 40,
    y: height - 38,
    size: 13,
    font: fontBold,
    color: FOREST_GREEN,
  });

  page.drawText('YOUR TRAVEL HUB · COMPLIMENTARY PRINTABLE RESOURCE', {
    x: 40,
    y: height - 50,
    size: 7.5,
    font: fontRegular,
    color: FOREST_MID,
  });

  // Category Pill on Right
  page.drawRectangle({
    x: width - 210,
    y: height - 48,
    width: 170,
    height: 18,
    color: WARM_CREAM,
    borderColor: BORDER_GRAY,
    borderWidth: 0.5,
  });

  page.drawText(`${category.toUpperCase()} · PG ${pageNum}/${totalPages}`, {
    x: width - 202,
    y: height - 42,
    size: 7,
    font: fontBold,
    color: FOREST_GREEN,
  });

  // Thin dividing line
  page.drawLine({
    start: { x: 40, y: height - 58 },
    end: { x: width - 40, y: height - 58 },
    thickness: 1,
    color: BORDER_GRAY,
  });
}

function drawFooter(page, fontRegular, fontBold, pageNum, totalPages) {
  const { width } = page.getSize();
  page.drawLine({
    start: { x: 40, y: 36 },
    end: { x: width - 40, y: 36 },
    thickness: 0.75,
    color: BORDER_GRAY,
  });

  page.drawText('FOREVER ADVENTURER', {
    x: 40,
    y: 24,
    size: 7.5,
    font: fontBold,
    color: FOREST_GREEN,
  });

  page.drawText('· Your Travel Hub for Discovering Destinations, Finding Inspiration & Planning Smarter · www.foreveradventurer.com', {
    x: 135,
    y: 24,
    size: 7,
    font: fontRegular,
    color: MUTED_GRAY,
  });

  page.drawText(`Page ${pageNum} of ${totalPages}`, {
    x: width - 95,
    y: 24,
    size: 7,
    font: fontRegular,
    color: MUTED_GRAY,
  });
}

async function generateAllPdfs() {
  console.log(`Starting Master-Styled PDF generation for ${resources.length} resources...`);

  // Load high-resolution cover photos
  const coverPath = path.join(__dirname, '..', 'public', 'assets', 'cover.jpg');
  const dubrovnikPath = path.join(__dirname, '..', 'public', 'assets', 'dubrovnik.jpg');

  let coverBytes = null;
  let dubrovnikBytes = null;
  if (fs.existsSync(coverPath)) coverBytes = fs.readFileSync(coverPath);
  if (fs.existsSync(dubrovnikPath)) dubrovnikBytes = fs.readFileSync(dubrovnikPath);

  for (const res of resources) {
    const pdfDoc = await PDFDocument.create();
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    let embeddedCover = null;
    let embeddedDubrovnik = null;
    if (coverBytes) {
      try { embeddedCover = await pdfDoc.embedJpg(coverBytes); } catch (e) {}
    }
    if (dubrovnikBytes) {
      try { embeddedDubrovnik = await pdfDoc.embedJpg(dubrovnikBytes); } catch (e) {}
    }

    const numPages = res.pages || 2;

    for (let p = 1; p <= numPages; p++) {
      // Standard A4 dimensions (595.28 x 841.89 points)
      const page = pdfDoc.addPage([595.28, 841.89]);
      const { width, height } = page.getSize();

      drawHeader(page, fontBold, fontRegular, res.title, res.subtitle, res.category, p, numPages);
      drawFooter(page, fontRegular, fontBold, p, numPages);

      let curY = height - 70;

      // ==========================================
      // PAGE 1: EDITORIAL COVER BANNER & GUIDE
      // ==========================================
      if (p === 1) {
        // Choose cover photo: coastal/city for packing/planning, mountain/wilderness for journals/exploration
        const chosenImage = (res.category === 'Packing Lists' || res.category === 'Calendars & Planners')
          ? (embeddedDubrovnik || embeddedCover)
          : (embeddedCover || embeddedDubrovnik);

        if (chosenImage) {
          const photoHeight = 85;
          page.drawImage(chosenImage, {
            x: 40,
            y: curY - photoHeight,
            width: width - 80,
            height: photoHeight,
          });

          // Outer frame
          page.drawRectangle({
            x: 40,
            y: curY - photoHeight,
            width: width - 80,
            height: photoHeight,
            borderColor: BORDER_GRAY,
            borderWidth: 0.75,
          });

          // Elegant dark badge overlay on photo
          page.drawRectangle({
            x: 52,
            y: curY - photoHeight + 10,
            width: 190,
            height: 18,
            color: rgb(0.09, 0.23, 0.17),
          });
          page.drawText('FOREVER ADVENTURER FIELD GUIDE', {
            x: 60,
            y: curY - photoHeight + 15,
            size: 7,
            font: fontBold,
            color: PURE_WHITE,
          });

          curY -= (photoHeight + 14);
        }

        // Title and Subtitle Block
        page.drawText(res.title, {
          x: 40,
          y: curY,
          size: 13,
          font: fontBold,
          color: CHARCOAL,
        });
        curY -= 14;

        if (res.subtitle) {
          page.drawText(res.subtitle, {
            x: 40,
            y: curY,
            size: 8.5,
            font: fontOblique,
            color: FOREST_MID,
          });
          curY -= 18;
        }

        // "HOW TO USE THIS RESOURCE" Field Box
        const instructions = res.howToUse || [
          'Print on standard A4 or US Letter paper for your travel binder or daypack.',
          'Complete key sections in real-time to preserve fresh memories and stay organized.',
          'Review notes post-trip to reflect on learnings and plan future adventures.'
        ];

        page.drawRectangle({
          x: 40,
          y: curY - 56,
          width: width - 80,
          height: 56,
          color: WARM_CREAM,
          borderColor: BORDER_GRAY,
          borderWidth: 0.75,
        });

        // Box header badge
        page.drawRectangle({
          x: 48,
          y: curY - 14,
          width: 120,
          height: 14,
          color: TERRACOTTA,
        });
        page.drawText('HOW TO USE THIS PRINTABLE', {
          x: 54,
          y: curY - 10,
          size: 6.5,
          font: fontBold,
          color: PURE_WHITE,
        });

        let tipY = curY - 26;
        instructions.forEach((tip, idx) => {
          page.drawText(`${idx + 1}.`, { x: 50, y: tipY, size: 7.5, font: fontBold, color: FOREST_GREEN });
          page.drawText(tip, { x: 62, y: tipY, size: 7.5, font: fontRegular, color: CHARCOAL });
          tipY -= 13;
        });

        curY -= 68;
      } else {
        // Subsequent Pages: Title Bar
        page.drawText(res.title, {
          x: 40,
          y: curY,
          size: 12,
          font: fontBold,
          color: CHARCOAL,
        });
        curY -= 14;
        page.drawText(`${res.subtitle || ''} (Continued)`, {
          x: 40,
          y: curY,
          size: 8,
          font: fontOblique,
          color: FOREST_MID,
        });
        curY -= 20;
      }

      // ==========================================
      // SECTION BODY BY RESOURCE TYPE
      // ==========================================
      if (res.type.includes('journal') || res.type === 'keepsake' || res.type === 'prompts') {
        // Daily Journal / Keepsake Layout
        // Date & Location Bar
        page.drawRectangle({
          x: 40,
          y: curY - 22,
          width: width - 80,
          height: 22,
          color: WARM_CREAM,
          borderColor: BORDER_GRAY,
          borderWidth: 0.75,
        });

        page.drawText('DATE: __________________      DESTINATION / BASE: ___________________________________      WEATHER: [ ] Clear  [ ] Mist  [ ] Rain', {
          x: 48,
          y: curY - 15,
          size: 7.5,
          font: fontRegular,
          color: CHARCOAL,
        });

        curY -= 36;

        const availableHeight = curY - 50;
        const box1Height = Math.min(55, availableHeight * 0.18);
        const box2Height = Math.min(105, availableHeight * 0.38);
        const box3Height = Math.min(65, availableHeight * 0.22);
        const box4Height = Math.min(75, availableHeight * 0.22);

        // Box 1: Morning Intention
        page.drawText('1. MORNING INTENTION & MINDSET FOCUS:', { x: 40, y: curY, size: 8.5, font: fontBold, color: FOREST_GREEN });
        curY -= 10;
        page.drawRectangle({ x: 40, y: curY - box1Height, width: width - 80, height: box1Height, color: PURE_WHITE, borderColor: BORDER_GRAY, borderWidth: 0.75 });
        // Guidelines inside
        for (let l = 1; l < 3; l++) {
          page.drawLine({ start: { x: 48, y: curY - l * 18 }, end: { x: width - 48, y: curY - l * 18 }, thickness: 0.5, color: rgb(0.92, 0.92, 0.90) });
        }
        curY -= (box1Height + 16);

        // Box 2: Sensory Observations
        page.drawText('2. SENSORY OBSERVATIONS (Sounds, Light, Market Aromas, Architectural Textures):', { x: 40, y: curY, size: 8.5, font: fontBold, color: FOREST_GREEN });
        curY -= 10;
        page.drawRectangle({ x: 40, y: curY - box2Height, width: width - 80, height: box2Height, color: PURE_WHITE, borderColor: BORDER_GRAY, borderWidth: 0.75 });
        for (let l = 1; l < 5; l++) {
          page.drawLine({ start: { x: 48, y: curY - l * 20 }, end: { x: width - 48, y: curY - l * 20 }, thickness: 0.5, color: rgb(0.92, 0.92, 0.90) });
        }
        curY -= (box2Height + 16);

        // Box 3: Local Food & Culinary Encounters
        page.drawText('3. CULINARY EXPERIENCES & LOCAL SPECIALTIES ENJOYED:', { x: 40, y: curY, size: 8.5, font: fontBold, color: FOREST_GREEN });
        curY -= 10;
        page.drawRectangle({ x: 40, y: curY - box3Height, width: width - 80, height: box3Height, color: PURE_WHITE, borderColor: BORDER_GRAY, borderWidth: 0.75 });
        for (let l = 1; l < 3; l++) {
          page.drawLine({ start: { x: 48, y: curY - l * 20 }, end: { x: width - 48, y: curY - l * 20 }, thickness: 0.5, color: rgb(0.92, 0.92, 0.90) });
        }
        curY -= (box3Height + 16);

        // Box 4: Evening Gratitude
        if (curY - box4Height > 45) {
          page.drawText('4. EVENING GRATITUDE & UNEXPECTED MOMENT OF THE DAY:', { x: 40, y: curY, size: 8.5, font: fontBold, color: FOREST_GREEN });
          curY -= 10;
          page.drawRectangle({ x: 40, y: curY - box4Height, width: width - 80, height: box4Height, color: PURE_WHITE, borderColor: BORDER_GRAY, borderWidth: 0.75 });
          for (let l = 1; l < 3; l++) {
            page.drawLine({ start: { x: 48, y: curY - l * 20 }, end: { x: width - 48, y: curY - l * 20 }, thickness: 0.5, color: rgb(0.92, 0.92, 0.90) });
          }
        }
      } else if (res.type.includes('packing') || res.type.includes('carry_on') || res.type.includes('backpacking') || res.type.includes('beach') || res.type.includes('winter') || res.type.includes('nomad')) {
        // Multi-Column Editorial Packing Grid
        const colWidth = (width - 100) / 3;
        const columns = [
          {
            title: 'CLOTHING & LAYERS',
            items: [
              'Linen / Oxford shirts (x4)',
              'Tailored trousers / Chinos (x2)',
              'Lightweight weatherproof shell',
              'Merino wool layering jumper',
              'Comfortable walking trainers',
              'Evening loafers / Flats',
              'Breathable underwear (x7)',
              'Merino wool walking socks (x5)',
              'Sleepwear & lounge layer',
              'Packable sun hat / UV cap'
            ]
          },
          {
            title: 'TOILETRIES & WELLNESS',
            items: [
              'TSA clear quart toiletry bag',
              'Solid shampoo & soap bars',
              'Toothbrush & travel paste',
              'Broad-spectrum reef-safe SPF 50',
              'Personal prescriptions & copy',
              'Compact travel first-aid pouch',
              'Insect repellent spray / wipes',
              'Moisturizing lip balm & lotion',
              'Earplugs & contoured eye mask',
              'Electrolyte rehydration packs'
            ]
          },
          {
            title: 'TECH, DOCS & GEAR',
            items: [
              'Universal worldwide plug adapter',
              'High-speed 10,000mAh power bank',
              'Braided phone charging cable',
              'Noise-canceling headphones',
              'Passport & visa hard copies',
              'Payment cards (no foreign fee)',
              'Emergency cash reserve ($/€)',
              'Travel journal & archival pen',
              'Compact daypack (packable)',
              'TSA-approved luggage lock'
            ]
          }
        ];

        columns.forEach((col, colIdx) => {
          const colX = 40 + colIdx * (colWidth + 10);
          let boxY = curY;

          // Column Header
          page.drawRectangle({
            x: colX,
            y: boxY - 22,
            width: colWidth,
            height: 22,
            color: FOREST_GREEN,
          });

          page.drawText(col.title, {
            x: colX + 8,
            y: boxY - 15,
            size: 7.5,
            font: fontBold,
            color: PURE_WHITE,
          });

          boxY -= 30;

          const boxBottom = 55;
          page.drawRectangle({
            x: colX,
            y: boxBottom,
            width: colWidth,
            height: boxY - boxBottom,
            color: PURE_WHITE,
            borderColor: BORDER_GRAY,
            borderWidth: 0.75,
          });

          let itemY = boxY - 14;
          col.items.forEach((item) => {
            if (itemY > boxBottom + 12) {
              page.drawText('[  ]  ' + item, {
                x: colX + 8,
                y: itemY,
                size: 7.5,
                font: fontRegular,
                color: CHARCOAL,
              });
              itemY -= 20;
            }
          });

          // Custom Write-in lines
          while (itemY > boxBottom + 12) {
            page.drawText('[  ]  ...........................................', {
              x: colX + 8,
              y: itemY,
              size: 7.5,
              font: fontRegular,
              color: rgb(0.65, 0.65, 0.65),
            });
            itemY -= 20;
          }
        });
      } else {
        // Universal Planning & Itinerary Matrix
        page.drawRectangle({
          x: 40,
          y: curY - 22,
          width: width - 80,
          height: 22,
          color: FOREST_GREEN,
        });

        page.drawText('MASTER TRIP PLANNING & RECORD MATRIX', {
          x: 48,
          y: curY - 15,
          size: 8,
          font: fontBold,
          color: PURE_WHITE,
        });

        curY -= 32;

        const sections = [
          { title: 'MORNING: Priority Activity & Transit Window', height: Math.min(80, (curY - 60) * 0.28) },
          { title: 'AFTERNOON: Cultural Exploration & Lunch Venue', height: Math.min(80, (curY - 60) * 0.28) },
          { title: 'EVENING: Sunset Overlook, Dining & Lodging Base', height: Math.min(75, (curY - 60) * 0.25) },
          { title: 'LOGISTICS: Booking Codes, Emergency Contacts & Budget', height: Math.min(65, (curY - 60) * 0.19) }
        ];

        sections.forEach((sec) => {
          if (curY - sec.height > 45) {
            page.drawText(sec.title, { x: 40, y: curY, size: 8, font: fontBold, color: FOREST_MID });
            curY -= 10;
            page.drawRectangle({
              x: 40,
              y: curY - sec.height,
              width: width - 80,
              height: sec.height,
              color: PURE_WHITE,
              borderColor: BORDER_GRAY,
              borderWidth: 0.75,
            });

            // Subtle inner write-in guides
            const numLines = Math.floor(sec.height / 20);
            for (let l = 1; l < numLines; l++) {
              page.drawLine({
                start: { x: 48, y: curY - l * 20 },
                end: { x: width - 48, y: curY - l * 20 },
                thickness: 0.5,
                color: rgb(0.92, 0.92, 0.90)
              });
            }

            curY -= (sec.height + 14);
          }
        });
      }
    }

    const pdfBytes = await pdfDoc.save();
    const filePath = path.join(downloadsDir, res.fileName);
    fs.writeFileSync(filePath, pdfBytes);
  }

  console.log(`Successfully generated all ${resources.length} Master-Styled PDF files in public/downloads!`);
}

generateAllPdfs().catch(console.error);
