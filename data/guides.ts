export interface TravelGuide {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  destination: string;
  country: string;
  duration: string;
  idealBudget: string;
  season: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  heroImage: string;
  overview: string;
  keySections: {
    heading: string;
    body: string;
    tips: string[];
  }[];
  itinerarySummary: {
    dayRange: string;
    title: string;
    focus: string;
  }[];
  packingEssentials: string[];
  suggestedDownloads: string[];
  publishedDate: string;
  verifiedDate: string;
  featured?: boolean;
}

export const travelGuidesData: TravelGuide[] = [
  {
    id: 'guide-dalmatian-coast-itinerary',
    slug: 'dalmatian-coast-7-day-guide',
    title: 'The Dalmatian Coast Uncovered: A 7-Day Road & Ferry Itinerary',
    subtitle: 'From Split’s Roman palaces to Dubrovnik’s ramparts via lavender-scented Hvar and quiet Korčula.',
    destination: 'Dalmatian Coast',
    country: 'Croatia',
    duration: '7 Days',
    idealBudget: '€90–€180 / day',
    season: 'May–June or September–October',
    difficulty: 'Easy',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1600&auto=format&fit=crop',
    overview: 'This comprehensive 7-day guide guides you along one of Europe’s most iconic shorelines, balancing UNESCO world heritage cities with tranquil island harbors, hidden pebble coves, and fresh seafood tavernas.',
    keySections: [
      {
        heading: 'Getting Around: Catamarans vs Rental Cars',
        body: 'If you are island-hopping primarily between Split, Hvar, and Dubrovnik, passenger catamarans (operated by Jadrolinija and Krilo) are faster and more stress-free than managing a car through narrow island ports. If exploring inland Pelješac or Plitvice Lakes, rent a car for just those specific segments.',
        tips: [
          'Book high-speed catamaran tickets 2–3 weeks in advance during peak summer months.',
          'Arrive at the ferry terminal 45 minutes prior to departure with printed or mobile QR codes.',
          'Luggage allowance is generous on catamarans, but compact rolling luggage is strongly recommended for cobblestone alleys.'
        ]
      },
      {
        heading: 'Culinary Highlights & Konoba Etiquette',
        body: 'Traditional family-run restaurants known as konobas offer the most authentic Dalmatian dining. Look for "Peka" (meat or octopus slow-cooked under an iron bell covered in hot embers) which typically requires pre-ordering several hours ahead.',
        tips: [
          'Order Peka in the morning when booking your evening table.',
          'Local table olive oil and domestic white wine (Pošip or Grk) are exceptional and very reasonable.',
          'Tipping is customary at 10% for attentive table service.'
        ]
      }
    ],
    itinerarySummary: [
      { dayRange: 'Days 1–2', title: 'Diocletian’s Palace in Split', focus: 'Roman underground cellars, Marjan Hill pine park, and waterfront Riva strolls.' },
      { dayRange: 'Days 3–4', title: 'Hvar Island & Pakleni Islets', focus: 'Historic Venetian fortress, lavender fields of Stari Grad, and secluded sailing coves.' },
      { dayRange: 'Day 5', title: 'Korčula Old Town', focus: 'Venetian Gothic stonework, Marco Polo heritage, and chilled Pošip white wine tasting.' },
      { dayRange: 'Days 6–7', title: 'Dubrovnik & Lokrum', focus: 'Medieval city walls, cliffside Buža bar sunsets, and forested Lokrum Island peacocks.' }
    ],
    packingEssentials: [
      'Neoprene water shoes for pebble beaches and sea urchins',
      'Comfortable walking trainers with non-slip soles for slick limestone',
      'High-SPF reef-safe sunscreen and UV sun hat',
      'Lightweight linen shirts and breezy evening attire'
    ],
    suggestedDownloads: ['daily-itinerary-template', 'beach-holiday-packing-list', 'flight-and-accommodation-organiser'],
    publishedDate: '10 October 2024',
    verifiedDate: 'October 2024',
    featured: true
  },
  {
    id: 'guide-kyoto-zen-itinerary',
    slug: 'essential-kyoto-4-day-cultural-guide',
    title: 'The Mindful Kyoto Guide: 4 Days of Art, Temples & Tea',
    subtitle: 'A thoughtful, crowd-beating blueprint for experiencing Japan’s imperial capital at a gentle pace.',
    destination: 'Kyoto',
    country: 'Japan',
    duration: '4 Days',
    idealBudget: '¥12,000–¥25,000 / day',
    season: 'Spring (Late March–April) or Autumn (November)',
    difficulty: 'Easy',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1600&auto=format&fit=crop',
    overview: 'Kyoto contains more than 1,600 Buddhist temples and 400 Shinto shrines. Trying to see everything leads to temple fatigue. This curated 4-day plan selects the most atmospheric corners while preserving space for slow walks, tea ceremonies, and culinary exploration.',
    keySections: [
      {
        heading: 'Beating the Crowds: The Golden Hour Strategy',
        body: 'Kyoto’s most famous landmarks (such as Fushimi Inari and Arashiyama) become heavily congested between 10:00 AM and 4:00 PM. By visiting one premier shrine at dawn (around 6:30–7:00 AM) and another in the late afternoon, you enjoy a tranquil and profoundly moving experience.',
        tips: [
          'Fushimi Inari is open 24 hours with no admission fee; sunrise here is magical and completely quiet.',
          'Save midday hours for indoor museum visits, quiet garden pavilions, or sitting down for multi-course Kaiseki lunches.',
          'Use bicycles or the Keihan and Hankyu rail lines to avoid bus traffic on city roads.'
        ]
      }
    ],
    itinerarySummary: [
      { dayRange: 'Day 1', title: 'Historic Eastern Kyoto', focus: 'Kiyomizu-dera, Sannenzaka preserved preservation area, and twilight in Gion.' },
      { dayRange: 'Day 2', title: 'Western Bamboo & Zen Gardens', focus: 'Arashiyama Bamboo Grove at dawn, Tenryu-ji cloud dragon ceiling, and Ryoan-ji rock garden.' },
      { dayRange: 'Day 3', title: 'Southern Shrine Trails & Uji Tea', focus: 'Fushimi Inari torii corridors followed by a tea ceremony in the historic cradle of Uji.' },
      { dayRange: 'Day 4', title: 'Philosopher’s Walk & Craft Alleys', focus: 'Silver Pavilion (Ginkaku-ji), canal-side stroll, and artisan handicraft shops.' }
    ],
    packingEssentials: [
      'Quality slip-on footwear (worn without socks at temple entryways)',
      'Compact universal transit card holder (or Apple/Google Wallet Suica)',
      'Coin pouch for temple admission counters and coin lockers',
      'Small hand towel (many public restrooms do not provide paper towels)'
    ],
    suggestedDownloads: ['travel-budget-tracker', 'daily-travel-journal', 'carry-on-only-checklist'],
    publishedDate: '15 September 2024',
    verifiedDate: 'October 2024',
    featured: true
  },
  {
    id: 'guide-canadian-rockies-roadtrip',
    slug: 'banff-jasper-icefields-roadtrip-guide',
    title: 'The Canadian Rockies Road Trip: Banff to Jasper via Icefields Parkway',
    subtitle: 'Glacial turquoise waters, alpine hiking passes, and wildlife corridors in Alberta.',
    destination: 'Canadian Rockies',
    country: 'Canada',
    duration: '6 Days',
    idealBudget: 'CAD $160–$320 / day',
    season: 'July to September',
    difficulty: 'Moderate',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1600&auto=format&fit=crop',
    overview: 'Driving the 232-kilometre Icefields Parkway between Lake Louise and Jasper is routinely ranked among the most spectacular road journeys in the world. This guide provides realistic driving times, trail recommendations, and wildlife safety rules.',
    keySections: [
      {
        heading: 'Park Passes & Reservation Logistics',
        body: 'Parks Canada requires a Discovery Pass for all national park visitors. Furthermore, Lake Moraine is completely inaccessible to personal vehicles; booking Parks Canada shuttles or commercial operators well in advance is essential.',
        tips: [
          'Book Lake Louise and Moraine Lake park shuttle tickets the day reservations open (usually spring).',
          'Always check highway conditions (511 Alberta) for wildlife closures and weather alerts.',
          'Fill your fuel tank completely in Banff or Lake Louise; there is only one fuel station on the Icefields Parkway at Saskatchewan River Crossing.'
        ]
      }
    ],
    itinerarySummary: [
      { dayRange: 'Days 1–2', title: 'Banff National Park Hub', focus: 'Sulphur Mountain, Johnston Canyon catwalks, and Vermilion Lakes reflection photography.' },
      { dayRange: 'Days 3–4', title: 'Lake Louise & Moraine Lake', focus: 'Canoeing iconic turquoise waters, Plain of Six Glaciers teahouse hike, and Larch Valley.' },
      { dayRange: 'Days 5–6', title: 'The Icefields Parkway & Jasper', focus: 'Peyto Lake viewpoint, Athabasca Glacier walk, Sunwapta Falls, and Maligne Canyon.' }
    ],
    packingEssentials: [
      'EPA-approved bear spray in quick-draw holster (cannot be flown in carry-on luggage)',
      'Waterproof Gore-Tex hiking boots with ankle support',
      'Merino wool base layers and packable down jacket for sudden mountain weather shifts',
      'Polarized sunglasses for snow and glacial water glare'
    ],
    suggestedDownloads: ['road-trip-planner', 'backpacking-packing-list', 'pre-departure-checklist'],
    publishedDate: '01 August 2024',
    verifiedDate: 'October 2024',
    featured: false
  }
];
