export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  continent: 'Europe' | 'Asia' | 'Africa' | 'North America' | 'South America' | 'Oceania';
  region: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  bestSeason: string;
  idealDuration: string;
  budgetLevel: '$' | '$$' | '$$$' | '$$$$';
  overview: string;
  highlights: string[];
  suggestedItinerary: {
    title: string;
    days: { day: number; title: string; description: string }[];
  };
  practicalTips: {
    transport: string;
    culture: string;
    currency: string;
    safetyVerifiedDate: string;
  };
  featured?: boolean;
}

export const destinationsData: Destination[] = [
  // ==========================================
  // DETAILED FLAGSHIP DESTINATIONS (12 GUIDES)
  // ==========================================
  {
    id: 'croatia-dubrovnik',
    slug: 'dubrovnik-croatia',
    name: 'Dubrovnik & The Dalmatian Coast',
    country: 'Croatia',
    continent: 'Europe',
    region: 'Southern Dalmatia',
    tagline: 'Ancient limestone fortifications rising dramatically above the azure Adriatic',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'May to June & September to October',
    idealDuration: '5–7 Days',
    budgetLevel: '$$$',
    overview: 'Perched on the rugged southern tip of Croatia, Dubrovnik is an architectural marvel enclosed by 16th-century stone walls. Cobblestone alleyways, terra-cotta rooftops, and the sparkling Adriatic Sea create one of Europe’s most breathtaking coastal landscapes.',
    highlights: [
      'Walk the 2km intact medieval city walls at golden hour',
      'Take the cable car to Mount Srđ for panoramic sunset vistas',
      'Kayak around Lokrum Island and hidden sea caves',
      'Wander the Stradun and marble-paved old town alleys',
      'Day trip to the tranquil Pelješac wine peninsula'
    ],
    suggestedItinerary: {
      title: '5-Day Dalmatian Splendour',
      days: [
        { day: 1, title: 'Arrival & The Stradun at Dusk', description: 'Arrive in Dubrovnik, check into your Old Town quarters, and stroll the Stradun limestone avenue as lanterns light up the stone facades.' },
        { day: 2, title: 'Medieval Fortresses & Lokrum', description: 'Walk the complete perimeter of the Old Town walls early in the morning, followed by a 15-minute ferry to the pine-scented peacocks of Lokrum Island.' },
        { day: 3, title: 'Sea Kayaking & Mount Srđ', description: 'Paddle sea kayaks along the towering cliff base, explore Betina Cave, and ascend Mount Srđ by cable car for an unforgettable Adriatic sunset.' },
        { day: 4, title: 'The Pelješac Peninsula & Ston', description: 'Venture north to taste fresh oysters in Mali Ston and sample robust Dingač red wine at family-run vineyards.' },
        { day: 5, title: 'Cavtat & Departure', description: 'Spend a leisurely final morning along the serene seaside promenade of Cavtat before your journey home.' }
      ]
    },
    practicalTips: {
      transport: 'Dubrovnik Old Town is strictly pedestrian-only. Comfortable walking shoes with rubber grip are essential for slick limestone streets. Local Libertas buses connect the port and suburbs.',
      culture: 'Croats take coffee culture seriously; never rush an espresso. Modest dress is required when entering historic churches.',
      currency: 'Euro (€) adopted January 2023. Cards widely accepted, but keep cash for small bakeries and fruit stands.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'japan-kyoto',
    slug: 'kyoto-japan',
    name: 'Kyoto: The Cultural Sanctuary',
    country: 'Japan',
    continent: 'Asia',
    region: 'Kansai',
    tagline: 'Centuries of zen gardens, vermilion torii gates, and bamboo groves',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'Late March to mid-April (Cherry Blossoms) & November (Autumn Foliage)',
    idealDuration: '4–6 Days',
    budgetLevel: '$$$',
    overview: 'Former imperial capital of Japan for over a thousand years, Kyoto remains the spiritual heart of Japanese aesthetics, craftsmanship, and seasonal culinary traditions.',
    highlights: [
      'Early sunrise walk through Fushimi Inari’s ten thousand torii gates',
      'Morning stillness at Arashiyama Bamboo Grove and Tenryu-ji Temple',
      'Contemplating moss and dry rock gardens at Ryoan-ji',
      'Traditional tea ceremony (Chado) in historic Gion',
      'Exploring Nishiki Market’s five-block culinary corridor'
    ],
    suggestedItinerary: {
      title: '4-Day Mindful Kyoto',
      days: [
        { day: 1, title: 'Eastern Temples & Gion', description: 'Explore Kiyomizu-dera perched over maple valleys, wander through preserved Sannenzaka alleys, and look for geiko in evening Gion.' },
        { day: 2, title: 'Arashiyama & Northern Zen', description: 'Catch early morning light in the bamboo grove, visit the Golden Pavilion (Kinkaku-ji), and contemplate the stone garden of Ryoan-ji.' },
        { day: 3, title: 'Fushimi Inari & Uji Green Tea', description: 'Hike the sacred mount of Fushimi Inari before crowds arrive, then train to nearby Uji to sample world-famous matcha.' },
        { day: 4, title: 'Philosopher’s Path & Nishiki', description: 'Stroll the peaceful canal path between Ginkaku-ji and Nanzen-ji, ending with tastings at Nishiki Market.' }
      ]
    },
    practicalTips: {
      transport: 'Extensive bus and subway network. An IC card (ICOCA/Suica) works across all trains and buses.',
      culture: 'Do not eat or drink while walking down the street. Always remove your shoes when stepping onto tatami mat flooring.',
      currency: 'Japanese Yen (¥). Cash is still preferred at temples, traditional shops, and ticket vending machines.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'norway-lofoten',
    slug: 'lofoten-islands-norway',
    name: 'Lofoten Islands: Arctic Drama',
    country: 'Norway',
    continent: 'Europe',
    region: 'Nordland',
    tagline: 'Towering granite pinnacles, red rorbu fishermen cabins, and midnight sun',
    heroImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'June to August (Midnight Sun hiking) or September to March (Aurora Borealis)',
    idealDuration: '6–8 Days',
    budgetLevel: '$$$$',
    overview: 'Draped across the turbulent waters of the Norwegian Sea, well above the Arctic Circle, the Lofoten archipelago offers an untamed wilderness of razor-sharp peaks, sheltered fjords, and open wave-swept shores.',
    highlights: [
      'Hike to the summit of Reinebringen for the iconic panoramic view',
      'Sleep in a converted wooden fisherman’s rorbu on stilts in Reine or Å',
      'Kayak through the crystal turquoise waters of Reinefjorden',
      'Watch the Northern Lights dance above snow-capped summits',
      'Explore white-sand Arctic beaches at Haukland and Uttakleiv'
    ],
    suggestedItinerary: {
      title: '6-Day Arctic Odyssey',
      days: [
        { day: 1, title: 'Svolvær to Henningsvær', description: 'Pick up a rental vehicle at Svolvær, drive the scenic E10 highway, and explore the artisan alleys and ocean soccer pitch of Henningsvær.' },
        { day: 2, title: 'Arctic Beaches of Vestvågøy', description: 'Walk barefoot across the cold turquoise shallows of Haukland Beach and hike over the pass to Uttakleiv.' },
        { day: 3, title: 'Reine & Reinebringen', description: 'Ascend the 1,560 Sherpa stone steps to Reinebringen for Norway’s most dramatic fjord view.' },
        { day: 4, title: 'The End of the Road: Å', description: 'Discover the historic stockfish museum and preserved 19th-century coastal village of Å.' },
        { day: 5, title: 'Nusfjord & Coastal Kayak', description: 'Visit UNESCO-nominated Nusfjord fishing harbour and paddle tranquil waters under towering cliffs.' },
        { day: 6, title: 'Return Journey via Kabelvåg', description: 'Browse local glassblowing and ceramic studios in Kabelvåg before returning your car.' }
      ]
    },
    practicalTips: {
      transport: 'Renting a car is essential for flexibility. Roads are well-maintained but narrow with single-lane passing bays.',
      culture: 'Norway’s "Allemannsretten" (right to roam) allows wild camping, but Lofoten has specific designated zones to protect fragile Arctic vegetation.',
      currency: 'Norwegian Krone (NOK). 99% cashless society; cards and mobile payments are used everywhere.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'namibia-sossusvlei',
    slug: 'sossusvlei-namibia',
    name: 'Sossusvlei & The Namib Desert',
    country: 'Namibia',
    continent: 'Africa',
    region: 'Hardap',
    tagline: 'Colossal rust-red dunes and 900-year-old skeletal camelthorn trees',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'May to October (Dry winter with pleasant daytime temperatures)',
    idealDuration: '3–5 Days',
    budgetLevel: '$$$',
    overview: 'The oldest desert on Earth, the Namib, features towering dunes rising more than 300 metres above stark white clay pans. Deadvlei’s petrified trees set against crimson sands provide an otherworldly landscape.',
    highlights: [
      'Climbing Dune 45 for first sunlight cascading over razor-edge ridges',
      'Walking among the eerie 900-year-old trees of Deadvlei',
      'Conquering Big Daddy, one of the world’s tallest sand dunes (325m)',
      'Stargazing beneath one of the planet’s only certified Dark Sky Reserves',
      'Exploring the narrow carved rock chambers of Sesriem Canyon'
    ],
    suggestedItinerary: {
      title: '4-Day Namibian Desert Expedition',
      days: [
        { day: 1, title: 'Drive from Windhoek to Sesriem', description: 'Scenic drive through the Khomas Hochland highlands down into the desert basin.' },
        { day: 2, title: 'Sunrise at Dune 45 & Deadvlei', description: 'Enter park gates at dawn to witness shifting shadows on Dune 45, then hike across the salt pan into surreal Deadvlei.' },
        { day: 3, title: 'Big Daddy & Sesriem Canyon', description: 'Ascend Big Daddy dune and run down its 300m slip face into the pan. Afternoon walk through Sesriem Canyon.' },
        { day: 4, title: 'Hot Air Balloon & Return', description: 'Optional sunrise balloon flight over the desert dunes before driving back toward Swakopmund or Windhoek.' }
      ]
    },
    practicalTips: {
      transport: 'High-clearance 4x4 vehicle is mandatory for driving through the soft sand from the 2WD parking area to Sossusvlei.',
      culture: 'Namibia is peaceful and warm; always greet people politely before asking questions or requesting directions.',
      currency: 'Namibian Dollar (NAD) pegged 1:1 with South African Rand (ZAR). Both currencies are accepted interchangeably.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'peru-sacred-valley',
    slug: 'sacred-valley-peru',
    name: 'Cusco & The Sacred Valley',
    country: 'Peru',
    continent: 'South America',
    region: 'Cusco Region',
    tagline: 'Inca engineering, Andean cloud forests, and living Quechua traditions',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'May to September (Dry season with crisp clear skies)',
    idealDuration: '7–9 Days',
    budgetLevel: '$$',
    overview: 'Stretching between Cusco and Machu Picchu, the Sacred Valley of the Incas is a cradle of ancient civilisation carved by the Urubamba River beneath snow-capped Andean peaks.',
    highlights: [
      'Exploring the colossal terraces of Ollantaytambo fortress',
      'Witnessing the geometric salt pools of Maras and concentric terraces of Moray',
      'Entering Machu Picchu through the Sun Gate on the Inca Trail',
      'Weaving demonstrations and natural dyes in high-altitude Chinchero',
      'Sampling high-altitude Andean gastronomy in Cusco’s San Blas'
    ],
    suggestedItinerary: {
      title: '7-Day Sacred Valley & Citadel',
      days: [
        { day: 1, title: 'Acclimatisation in Sacred Valley', description: 'Skip high-altitude Cusco initially; descend directly to Urubamba (2,870m) to adjust comfortably to altitude.' },
        { day: 2, title: 'Maras Salt Pans & Moray', description: 'Visit the thousands of artisan salt evaporation pools at Maras and the agricultural laboratory of Moray.' },
        { day: 3, title: 'Pisac Ruins & Artisan Market', description: 'Climb the cliffside terraces of Pisac and browse handwoven alpaca wool textiles.' },
        { day: 4, title: 'Ollantaytambo to Aguas Calientes', description: 'Tour the living Inca town of Ollantaytambo before boarding the scenic train along the Urubamba River.' },
        { day: 5, title: 'Machu Picchu Dawn', description: 'Early morning entry to the Lost Citadel as mist rises over Huayna Picchu.' },
        { day: 6, title: 'Imperial Cusco', description: 'Train back to Cusco; explore Sacsayhuamán stone fort and the bohemian artisan quarter of San Blas.' },
        { day: 7, title: 'Culinary Discovery & Departure', description: 'Visit San Pedro Market to taste exotic fruits and traditional Andean dishes before your onward flight.' }
      ]
    },
    practicalTips: {
      transport: 'Scenic trains (PeruRail/Inca Rail) link Ollantaytambo and Machu Picchu. Local "colectivo" minivans are cheap and efficient throughout the valley.',
      culture: 'Quechua heritage is deeply respected. Ask permission before photographing locals, particularly elders in traditional dress.',
      currency: 'Peruvian Sol (PEN). Cash is essential for small villages and markets.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'canada-banff',
    slug: 'banff-canadian-rockies',
    name: 'Banff & The Canadian Rockies',
    country: 'Canada',
    continent: 'North America',
    region: 'Alberta',
    tagline: 'Glacial turquoise waters, jagged alpine peaks, and wild pine forests',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'Late June to mid-September (Hiking & Canoeing) or December to March (Skiing)',
    idealDuration: '6–8 Days',
    budgetLevel: '$$$',
    overview: 'Canada’s first national park, Banff protects 6,641 square kilometres of untouched wilderness in the heart of the Canadian Rocky Mountains. Glacier-fed lakes glow with cyan and emerald hues.',
    highlights: [
      'Paddling a red canoe across the glass-like surface of Moraine Lake',
      'Driving the world-famous Icefields Parkway between Lake Louise and Jasper',
      'Hiking the Plain of Six Glaciers and visiting the historic teahouse',
      'Watching sunset over the iconic Mount Rundle from Vermilion Lakes',
      'Spotting elk, bighorn sheep, and grizzly bears from safe distances'
    ],
    suggestedItinerary: {
      title: '6-Day Rocky Mountain Wonder',
      days: [
        { day: 1, title: 'Banff Town & Hot Springs', description: 'Arrive from Calgary, ride the Banff Gondola to Sulphur Mountain summit, and soak in the historic mineral springs.' },
        { day: 2, title: 'Lake Louise & High Tea', description: 'Walk the shore of Lake Louise and hike up to the Lake Agnes Teahouse for fresh scones and herbal tea.' },
        { day: 3, title: 'Moraine Lake & Larch Valley', description: 'Catch early park shuttle to Moraine Lake in the Valley of the Ten Peaks; hike up into golden Larch Valley.' },
        { day: 4, title: 'Icefields Parkway', description: 'Drive one of the world’s most scenic highways; walk on the Athabasca Glacier and marvel at Peyto Lake’s wolf-head shape.' },
        { day: 5, title: 'Yoho National Park & Emerald Lake', description: 'Cross into British Columbia to admire Takakkaw Falls and hike around quiet Emerald Lake.' },
        { day: 6, title: 'Canmore & Departure', description: 'Explore the artsy town of Canmore beneath the Three Sisters peaks before heading to Calgary airport.' }
      ]
    },
    practicalTips: {
      transport: 'Moraine Lake road is closed to personal vehicles; booking Parks Canada shuttles or Roam Transit in advance is mandatory.',
      culture: 'Leave No Trace ethics are strictly enforced. Never approach or feed wildlife; carry bear spray and know how to use it.',
      currency: 'Canadian Dollar (CAD). Contactless payment universally accepted.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'new-zealand-south-island',
    slug: 'south-island-new-zealand',
    name: 'New Zealand’s Southern Alps & Fjords',
    country: 'New Zealand',
    continent: 'Oceania',
    region: 'South Island',
    tagline: 'Milford Sound waterfalls, braided alpine rivers, and starry dark skies',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'December to March (Warm summer hiking) or April to May (Autumn colours)',
    idealDuration: '10–14 Days',
    budgetLevel: '$$$',
    overview: 'A breathtaking realm of colossal glaciers, deep fiords, and tranquil beech forests. The South Island is revered as the ultimate destination for slow wilderness road-tripping and outdoor adventure.',
    highlights: [
      'Cruising under cascading waterfalls in dramatic Milford Sound',
      'Hiking the Hooker Valley track with views of Aoraki / Mount Cook',
      'Stargazing in the Aoraki Mackenzie International Dark Sky Reserve',
      'Exploring Queenstown, Wanaka, and the iconic solitary Wanaka tree',
      'Sampling world-class Pinot Noir in the Central Otago wine country'
    ],
    suggestedItinerary: {
      title: '10-Day Southern Wilderness',
      days: [
        { day: 1, title: 'Christchurch to Lake Tekapo', description: 'Pick up campervan or car, drive across Canterbury Plains to turquoise Lake Tekapo and Church of the Good Shepherd.' },
        { day: 2, title: 'Aoraki / Mount Cook', description: 'Walk across three suspension bridges along the Hooker Valley track to iceberg-strewn glacial lakes.' },
        { day: 3, title: 'Wanaka & Roy’s Peak', description: 'Drive through Lindis Pass to Lake Wanaka; hike the lower trails or Roy’s Peak for panoramic views.' },
        { day: 4, title: 'Queenstown & Wakatipu', description: 'Wander gold-mining history in Arrowtown and take in Lake Wakatipu vistas from Queenstown.' },
        { day: 5, title: 'Milford Sound Cruise', description: 'Drive the scenic Milford Road through Homer Tunnel and cruise beneath Mitre Peak’s sheer cliffs.' }
      ]
    },
    practicalTips: {
      transport: 'Driving is on the left. Roads are often winding with one-way bridges; allow 25% more driving time than GPS estimates.',
      culture: 'Embrace "Kaitiakitanga" — Māori guardianship of sky, land, and sea. Always carry your rubbish with you.',
      currency: 'New Zealand Dollar (NZD). Cards widely accepted everywhere.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'italy-amalfi',
    slug: 'amalfi-coast-italy',
    name: 'Amalfi Coast & Capri',
    country: 'Italy',
    continent: 'Europe',
    region: 'Campania',
    tagline: 'Vertical pastel villages, lemon groves, and cliffside Mediterranean panoramas',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'May, June & September (Avoid crowded August)',
    idealDuration: '5–7 Days',
    budgetLevel: '$$$$',
    overview: 'A legendary 50-kilometre stretch of mountainous coastline south of Naples, celebrated for dramatic limestone cliffs plunging into cobalt waters, fragrant sfusato lemon terraces, and historic cliffside villas.',
    highlights: [
      'Hiking the ancient Path of the Gods (Sentiero degli Dei) high above Positano',
      'Sipping fresh limoncello beneath cascading bougainvillea in Ravello',
      'Private wooden gozzo boat charter around the sea stacks of Capri',
      'Exploring Amalfi’s 9th-century Arab-Norman Duomo',
      'Dining on fresh scialatielli pasta with clams in seaside tavernas'
    ],
    suggestedItinerary: {
      title: '5-Day Coastal Romance',
      days: [
        { day: 1, title: 'Sorrento to Positano', description: 'Arrive via scenic coastal ferry; check into cliffside Positano and explore pastel pedestrian alleys.' },
        { day: 2, title: 'Path of the Gods', description: 'Hike the ridge trail from Bomerano down to Nocelle, offering Italy’s most breathtaking sea vistas.' },
        { day: 3, title: 'Ravello & Gardens', description: 'Ascend to hill-top Ravello to tour the cliff-edge infinity terrace of Villa Cimbrone and Villa Rufolo.' },
        { day: 4, title: 'Capri Day Voyage', description: 'Board morning hydrofoil to Capri, explore Anacapri, and chairlift to Mount Solaro.' },
        { day: 5, title: 'Amalfi & Atrani', description: 'Wander Amalfi’s historic maritime piazza and the quiet neighbouring fishing enclave of Atrani.' }
      ]
    },
    practicalTips: {
      transport: 'Driving the narrow coastal road is notoriously stressful. High-speed passenger ferries (Travelmar) are faster, scenic, and bypass cliff traffic entirely.',
      culture: 'Dinner is traditionally eaten after 8:00 PM. A small "coperto" (cover charge) is standard on dining bills.',
      currency: 'Euro (€). Contactless payment common, but bring cash for beach umbrellas and small cafes.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'iceland-ring-road',
    slug: 'ring-road-iceland',
    name: 'Iceland: The Ring Road & South Coast',
    country: 'Iceland',
    continent: 'Europe',
    region: 'South & East Iceland',
    tagline: 'Cascading waterfalls, black volcanic sands, and floating glacial icebergs',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'June to August (Lupines & 24hr daylight) or September to March (Northern Lights)',
    idealDuration: '7–10 Days',
    budgetLevel: '$$$$',
    overview: 'Route 1 circles the entire island of fire and ice, connecting volcanic craters, roaring waterfalls, thermal hot springs, and colossal ice caps.',
    highlights: [
      'Walking behind the thunderous curtain of Seljalandsfoss waterfall',
      'Admiring diamond-like ice chunks washed ashore at Diamond Beach',
      'Zodiac boat tour among towering icebergs in Jökulsárlón Glacier Lagoon',
      'Wandering the basalt sea stacks and black sand of Reynisfjara',
      'Soaking in geothermal mineral baths surrounded by volcanic fields'
    ],
    suggestedItinerary: {
      title: '7-Day South Coast & Glaciers',
      days: [
        { day: 1, title: 'Golden Circle', description: 'Thingvellir National Park rift valley, Geysir erupting springs, and massive Gullfoss waterfall.' },
        { day: 2, title: 'South Coast Waterfalls', description: 'Walk behind Seljalandsfoss, climb Skógafoss stairs, and visit Skógar Folk Museum.' },
        { day: 3, title: 'Reynisfjara to Vík', description: 'Black basalt columns of Reynisfjara beach and church viewpoint in Vík.' },
        { day: 4, title: 'Skaftafell & Glacier Hike', description: 'Crampon hike on Falljökull glacier tongue in Vatnajökull National Park.' },
        { day: 5, title: 'Jökulsárlón & Diamond Beach', description: 'Watch seals swim among blue icebergs in the lagoon before exploring Diamond Beach.' },
        { day: 6, title: 'Fjallsárlón & Canyon Walk', description: 'Hike through Fjaðrárgljúfur mossy serpentine canyon.' },
        { day: 7, title: 'Reykjavik & Hot Springs', description: 'Return west to explore Reykjavik harbor and soak in the Sky Lagoon.' }
      ]
    },
    practicalTips: {
      transport: 'A 4WD vehicle is required if driving into the interior highlands (F-roads). Check vedur.is and road.is multiple times daily for weather alerts.',
      culture: 'Always shower thoroughly with soap without a swimsuit before entering any geothermal pool or public bath.',
      currency: 'Icelandic Króna (ISK). Iceland is almost 100% cashless.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'jordan-petra',
    slug: 'petra-wadi-rum-jordan',
    name: 'Petra & The Desert of Wadi Rum',
    country: 'Jordan',
    continent: 'Asia',
    region: 'Ma\'an Governorate',
    tagline: 'Rose-red Nabataean rock temples and Martian desert landscapes',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'March to May & September to November',
    idealDuration: '5–7 Days',
    budgetLevel: '$$$',
    overview: 'Carved directly into vibrant pink sandstone cliffs over two millennia ago, the lost city of Petra stands as one of the ancient world’s greatest engineering triumphs, complemented by the vast silent desert of Wadi Rum.',
    highlights: [
      'Walking through the narrow Siq gorge to glimpse the Treasury (Al-Khazneh)',
      'Climbing 800 stone steps to the colossal cliff-top Monastery (Ad-Deir)',
      'Sleeping in a Bedouin desert camp beneath starry skies in Wadi Rum',
      'Sunset 4x4 ride across red dunes and natural sandstone arches',
      'Floating effortlessly in the hypersaline waters of the Dead Sea'
    ],
    suggestedItinerary: {
      title: '5-Day Bedouin Legacy',
      days: [
        { day: 1, title: 'Amman to Madaba & Mount Nebo', description: 'Arrive in Amman, tour Byzantine mosaics in Madaba, and drive the King’s Highway.' },
        { day: 2, title: 'The Rose-Red City of Petra', description: 'Enter the Siq at dawn, admire the Treasury, explore the Royal Tombs, and hike the High Place of Sacrifice.' },
        { day: 3, title: 'The Monastery & Little Petra', description: 'Climb to the monumental Monastery facade and visit Neolithic settlements in Siq al-Barid.' },
        { day: 4, title: 'Wadi Rum Desert Safari', description: 'Drive into Wadi Rum protected area; jeep tour to Lawrence’s Spring and sunset Bedouin feast.' },
        { day: 5, title: 'The Dead Sea & Departure', description: 'Descend to the lowest point on Earth to float in mineral mud before returning to Queen Alia Airport.' }
      ]
    },
    practicalTips: {
      transport: 'The Jordan Pass includes tourist visa fees plus entry to Petra and Wadi Rum, saving significant cost.',
      culture: 'Modest dress covering shoulders and knees is appreciated in towns and historic sites. Jordanians are famous for generous hospitality; greeting with "Marhaba" is warmly received.',
      currency: 'Jordanian Dinar (JOD). Cash is essential for Bedouin camps, local drivers, and Petra stalls.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'thailand-chiang-mai',
    slug: 'chiang-mai-thailand',
    name: 'Chiang Mai & Northern Highlands',
    country: 'Thailand',
    continent: 'Asia',
    region: 'Northern Thailand',
    tagline: 'Lanna teak temples, mist-shrouded mountain sanctuaries, and night bazaars',
    heroImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'November to February (Cool, dry winter season)',
    idealDuration: '5–7 Days',
    budgetLevel: '$',
    overview: 'Surrounded by emerald mountains, Chiang Mai is Thailand’s cultural anchor. Former capital of the Lanna Kingdom, the city boasts over 300 Buddhist temples, organic coffee plantations, and celebrated culinary night markets.',
    highlights: [
      'Sunrise monk offering (Tak Bat) and chanting at Wat Phra That Doi Suthep',
      'Savouring a rich bowl of curry noodle Khao Soi at a quiet street stall',
      'Visiting an ethical, no-riding elephant rescue sanctuary in the jungle',
      'Walking through the 14th-century moated Old City walls and temple courtyards',
      'Browsing handmade hill-tribe textiles at the Sunday Walking Street'
    ],
    suggestedItinerary: {
      title: '5-Day Lanna Cultural Trail',
      days: [
        { day: 1, title: 'Old City Teak Temples', description: 'Wander Wat Chedi Luang’s ancient brick stupa and admire golden murals at Wat Phra Singh.' },
        { day: 2, title: 'Doi Suthep Mountain Sanctum', description: 'Ascend the 306-step serpent staircase to Doi Suthep for panoramic city views and temple bells.' },
        { day: 3, title: 'Ethical Elephant Sanctuary', description: 'Observe rescued Asian elephants foraging and bathing in Mae Taeng valley.' },
        { day: 4, title: 'Northern Thai Cooking & Markets', description: 'Morning market visit to source herbs and fresh coconut milk, followed by hands-on cooking workshop.' },
        { day: 5, title: 'Artisan Village of Baan Kang Wat', description: 'Explore artist studios, indie ceramic shops, and specialty northern coffee cafes.' }
      ]
    },
    practicalTips: {
      transport: 'Red songthaew pickup trucks and Grab app are cheap and convenient. Renting a scooter requires an International Driving Permit with motorcycle endorsement.',
      culture: 'Never touch someone’s head or point your feet toward Buddha images or monks. Always remove shoes before stepping into temples.',
      currency: 'Thai Baht (THB). Cash is king at night markets, street food stalls, and transport songthaews.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },
  {
    id: 'costa-rica-arenal',
    slug: 'arenal-monteverde-costa-rica',
    name: 'Costa Rica: Arenal & Monteverde Cloud Forest',
    country: 'Costa Rica',
    continent: 'North America',
    region: 'Alajuela & Puntarenas',
    tagline: 'Volcanic hot springs, hanging canopy bridges, and resplendent quetzals',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1600&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    ],
    bestSeason: 'December to April (Dry season)',
    idealDuration: '6–8 Days',
    budgetLevel: '$$',
    overview: 'A global leader in conservation and renewable energy, Costa Rica harbors 5% of the planet’s biodiversity. Arenal Volcano’s geothermal springs and Monteverde’s mist-veiled cloud forest provide unmatched biodiversity.',
    highlights: [
      'Walking across suspension bridges through the misty Monteverde cloud forest canopy',
      'Soaking in natural geothermal river springs at the foot of Arenal Volcano',
      'Spotting sloths, red-eyed tree frogs, and toucans on guided night walks',
      'Hiking through the 1968 lava flow fields in Arenal Volcano National Park',
      'Kayaking across peaceful Lake Arenal with volcano backdrop views'
    ],
    suggestedItinerary: {
      title: '6-Day Pura Vida Adventure',
      days: [
        { day: 1, title: 'San José to La Fortuna', description: 'Scenic drive through cattle ranching valleys to the base of conical Arenal Volcano.' },
        { day: 2, title: 'Lava Trails & Geothermal Soak', description: 'Hike through old lava fields and spend the evening soaking in volcanic thermal rivers.' },
        { day: 3, title: 'La Fortuna Waterfall & Sloth Trail', description: 'Descend 500 steps to swim in turquoise pools below the 70m La Fortuna waterfall.' },
        { day: 4, title: 'Lake Arenal to Monteverde', description: 'Scenic boat crossing across Lake Arenal into the high-altitude cloud forest highlands.' },
        { day: 5, title: 'Hanging Bridges & Quetzal Search', description: 'Guided canopy walk through Monteverde reserve and hummingbird gallery.' },
        { day: 6, title: 'Coffee & Cacao Farm', description: 'Visit a sustainable organic plantation to learn traditional cacao roasting before return.' }
      ]
    },
    practicalTips: {
      transport: 'A 4WD SUV is recommended for the rugged dirt roads climbing into Monteverde. Shared tourist shuttles (Interbus) are reliable between hubs.',
      culture: 'Embrace "Pura Vida" (pure life)—it is a greeting, farewell, and reminder not to stress when things move on tropical time.',
      currency: 'Costa Rican Colón (CRC). US Dollars are also widely accepted.',
      safetyVerifiedDate: 'October 2024'
    },
    featured: true
  },

  // ==========================================
  // EXTENSIVE WORLDWIDE STARTER DIRECTORY (48 MORE COUNTRIES)
  // ==========================================

  // EUROPE
  {
    id: 'spain-andalusia',
    slug: 'andalusia-spain',
    name: 'Andalusia: Seville, Granada & Córdoba',
    country: 'Spain',
    continent: 'Europe',
    region: 'Southern Spain',
    tagline: 'Moorish palaces, passionate flamenco, and whitewashed hill villages',
    heroImage: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'April to May & October to November',
    idealDuration: '7–10 Days',
    budgetLevel: '$$',
    overview: 'The passionate heart of southern Spain, where Islamic and Christian architectural heritage merge in the Alhambra and Seville’s Alcázar among orange-scented plazas.',
    highlights: ['Alhambra palaces of Granada', 'Seville Cathedral & Alcázar', 'Mezquita-Cathedral of Córdoba', 'Pueblos Blancos of Ronda'],
    suggestedItinerary: { title: '7-Day Moorish Golden Age', days: [{ day: 1, title: 'Seville', description: 'Barrio Santa Cruz and Real Alcázar gardens.' }] },
    practicalTips: { transport: 'High-speed AVE trains link Seville, Córdoba, and Granada seamlessly.', culture: 'Afternoon siesta is real; shops often close 2–5 PM.', currency: 'Euro (€)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'portugal-algarve',
    slug: 'algarve-portugal',
    name: 'The Algarve & Costa Vicentina',
    country: 'Portugal',
    continent: 'Europe',
    region: 'Southern Portugal',
    tagline: 'Golden sandstone sea caves, wild Atlantic surf, and grilled sardines',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'May to June & September to October',
    idealDuration: '5–7 Days',
    budgetLevel: '$$',
    overview: 'Sun-drenched southern coast featuring dramatic sea arches like Benagil Cave alongside the preserved, wild coastal bluffs of the Costa Vicentina natural park.',
    highlights: ['Seven Hanging Valleys coastal hike', 'Ponta da Piedade sea stacks in Lagos', 'Wild surfing beaches of Sagres'],
    suggestedItinerary: { title: '5-Day Coastal Discovery', days: [{ day: 1, title: 'Faro & Tavira', description: 'Ria Formosa lagoon and preserved fishing villages.' }] },
    practicalTips: { transport: 'Rental car provides the best freedom to reach secluded western beaches.', culture: 'Small appetizers placed on your restaurant table are charged if eaten.', currency: 'Euro (€)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'greece-cyclades',
    slug: 'cyclades-islands-greece',
    name: 'The Cyclades: Naxos, Milos & Santorini',
    country: 'Greece',
    continent: 'Europe',
    region: 'Aegean Sea',
    tagline: 'Whitewashed cubic chapels, volcanic beaches, and turquoise bays',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'May to June & September',
    idealDuration: '7–10 Days',
    budgetLevel: '$$$',
    overview: 'Iconic Greek island archipelago balancing the volcanic cliffs of Santorini with the moonscape beaches of Milos and the authentic culinary mountain villages of Naxos.',
    highlights: ['Sarakiniko lunar beach in Milos', 'Sunset over Oia Caldera in Santorini', 'Temple of Apollo Portara in Naxos'],
    suggestedItinerary: { title: '8-Day Aegean Island Hopper', days: [{ day: 1, title: 'Arrival in Naxos', description: 'Explore the Venetian Kastro and sandy western shores.' }] },
    practicalTips: { transport: 'High-speed catamarans (Seajets/Blue Star) connect islands reliably.', culture: 'Greek hospitality (Philoxenia) is legendary; greet with "Kalispera" in late afternoon.', currency: 'Euro (€)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'scotland-highlands',
    slug: 'scottish-highlands-skye',
    name: 'Scottish Highlands & Isle of Skye',
    country: 'United Kingdom',
    continent: 'Europe',
    region: 'Scotland',
    tagline: 'Heather-clad glens, fairy pools, ruined clan castles, and single malt whisky',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'May to June (Best weather & fewer midges)',
    idealDuration: '6–8 Days',
    budgetLevel: '$$$',
    overview: 'Moody and majestic landscapes carved by glaciers, featuring the dramatic amphitheatre of Glen Coe, the Old Man of Storr on Skye, and Loch Ness.',
    highlights: ['Hiking the Quiraing on the Isle of Skye', 'Driving through the dramatic pass of Glen Coe', 'Tasting peaty single malt at Talisker Distillery'],
    suggestedItinerary: { title: '6-Day Highland Trail', days: [{ day: 1, title: 'Edinburgh to Fort William', description: 'Cross Rannoch Moor and pass through Glen Coe.' }] },
    practicalTips: { transport: 'Driving is on the left. Skye single-track roads require using passing places correctly.', culture: 'Scottish right-to-roam laws allow wild camping responsibly.', currency: 'British Pound (GBP £)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'france-provence',
    slug: 'provence-france',
    name: 'Provence & The Luberon',
    country: 'France',
    continent: 'Europe',
    region: 'Southern France',
    tagline: 'Purple lavender horizons, Roman aqueducts, and tranquil hill villages',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'June to July (Lavender bloom) or September',
    idealDuration: '5–7 Days',
    budgetLevel: '$$$',
    overview: 'The golden light of southern France that inspired Cézanne and Van Gogh. Perched medieval villages like Gordes and Roussillon overlook olive groves and vineyards.',
    highlights: ['Abbey of Sénanque lavender fields', 'Gordes cliff-top village', 'Pont du Gard Roman aqueduct', 'Aix-en-Provence farmers markets'],
    suggestedItinerary: { title: '5-Day Provencal Rhythms', days: [{ day: 1, title: 'Avignon & Palais des Papes', description: 'Tour the UNESCO papal fortress.' }] },
    practicalTips: { transport: 'Rental car is essential for exploring the Luberon countryside.', culture: 'Always say "Bonjour Madame/Monsieur" upon entering any shop or restaurant.', currency: 'Euro (€)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'switzerland-jungfrau',
    slug: 'jungfrau-region-switzerland',
    name: 'Jungfrau Region & Lauterbrunnen',
    country: 'Switzerland',
    continent: 'Europe',
    region: 'Bernese Oberland',
    tagline: '72 roaring waterfalls, alpine meadows, and the Eiger, Mönch & Jungfrau peaks',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'July to September (Alpine hiking) or January to March (Skiing)',
    idealDuration: '4–6 Days',
    budgetLevel: '$$$$',
    overview: 'The quintessential Swiss alpine landscape: Lauterbrunnen’s sheer valley walls, car-free alpine hamlets like Wengen and Mürren, and cogwheel trains.',
    highlights: ['Staubbach Falls in Lauterbrunnen', 'Cable car to Schilthorn Piz Gloria', 'Panoramic hiking from Männlichen to Kleine Scheidegg'],
    suggestedItinerary: { title: '4-Day Swiss Alpine Wonder', days: [{ day: 1, title: 'Lauterbrunnen Valley', description: 'Walk through the valley of 72 waterfalls.' }] },
    practicalTips: { transport: 'Swiss Travel Pass or Jungfrau Travel Pass provides unlimited train and cable car rides.', culture: 'Punctuality is a virtue; trains depart to the exact second.', currency: 'Swiss Franc (CHF)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'slovenia-lake-bled',
    slug: 'lake-bled-triglav-slovenia',
    name: 'Lake Bled & Julian Alps',
    country: 'Slovenia',
    continent: 'Europe',
    region: 'Upper Carniola',
    tagline: 'Fairy-tale island church, emerald glacial lakes, and Soca River rapids',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'May to September',
    idealDuration: '4–6 Days',
    budgetLevel: '$$',
    overview: 'One of Europe’s greenest and cleanest nations. A picturesque island church in the center of alpine Lake Bled, surrounded by Triglav National Park.',
    highlights: ['Riding a wooden pletna boat to Bled Island', 'Exploring the wild boardwalks of Vintgar Gorge', 'White-water rafting the emerald Soča River'],
    suggestedItinerary: { title: '4-Day Emerald Slovenia', days: [{ day: 1, title: 'Lake Bled & Castle', description: 'Circle the lake path and sample Kremna Rezina cream cake.' }] },
    practicalTips: { transport: 'Driving requires a digital motorway vignette purchased online before entering highways.', culture: 'Slovenians are passionate outdoor hikers; clean footwear is standard.', currency: 'Euro (€)', safetyVerifiedDate: 'October 2024' }
  },

  // ASIA
  {
    id: 'vietnam-ha-long',
    slug: 'hanoi-ha-long-bay-vietnam',
    name: 'Hanoi & Ha Long Bay',
    country: 'Vietnam',
    continent: 'Asia',
    region: 'Northern Vietnam',
    tagline: 'Towering limestone karst pillars, emerald waters, and street-food alleyways',
    heroImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'March to April & September to November',
    idealDuration: '6–8 Days',
    budgetLevel: '$',
    overview: 'From the chaotic, sensory motorbikes and egg coffee of Hanoi’s 36 Old Guild Streets to sleeping on a traditional junk boat beneath thousands of jungle-topped karst islands.',
    highlights: ['Overnight boat cruise in Lan Ha Bay or Ha Long', 'Street food tour in Hanoi Old Quarter (Pho & Bun Cha)', 'Rowboat through floating limestone caves in Ninh Binh'],
    suggestedItinerary: { title: '6-Day Northern Vietnam', days: [{ day: 1, title: 'Hanoi Old Quarter', description: 'Stroll Hoan Kiem lake and taste egg coffee.' }] },
    practicalTips: { transport: 'Crossing the street in Hanoi: walk slowly at a predictable pace; motorbikes flow around you.', culture: 'Bargaining at markets is expected but always done with a smile.', currency: 'Vietnamese Dong (VND)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'indonesia-bali-komodo',
    slug: 'bali-komodo-indonesia',
    name: 'Ubud & Komodo National Park',
    country: 'Indonesia',
    continent: 'Asia',
    region: 'Lesser Sunda Islands',
    tagline: 'Cascading rice terraces, ancient Hindu temples, and dragon-inhabited islands',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'April to October (Dry season)',
    idealDuration: '8–12 Days',
    budgetLevel: '$',
    overview: 'Balancing the spiritual and artistic heart of Bali’s central highlands with live-aboard sailing adventures around the rugged pink beaches and Komodo dragons of Flores.',
    highlights: ['Tegallalang emerald rice terraces in Ubud', 'Live-aboard cruise to Komodo and Padar Island', 'Snorkeling with manta rays in crystal waters'],
    suggestedItinerary: { title: '8-Day Island & Wilderness', days: [{ day: 1, title: 'Ubud Highlands', description: 'Monkey Forest sanctuary and artisan woodcraft villages.' }] },
    practicalTips: { transport: 'Domestic flights link Bali (DPS) and Labuan Bajo (LBJ) in under an hour.', culture: 'Wear a sarong and sash when entering Balinese temple complexes.', currency: 'Indonesian Rupiah (IDR)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'nepal-annapurna',
    slug: 'annapurna-kathmandu-nepal',
    name: 'Kathmandu Valley & Annapurna Foothills',
    country: 'Nepal',
    continent: 'Asia',
    region: 'Central Nepal',
    tagline: 'Himalayan giants, medieval Durbar squares, and prayer flags in the wind',
    heroImage: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'October to November & March to April',
    idealDuration: '8–12 Days',
    budgetLevel: '$',
    overview: 'A spiritual pilgrimage among the highest mountains on Earth. Medieval Newari brick architecture in Bhaktapur paired with sunrise over the Annapurna massifs in Pokhara.',
    highlights: ['Sunrise view of Annapurna South from Poon Hill', 'Boudhanath Stupa circumambulation in Kathmandu', 'Peaceful boat ride on Phewa Lake in Pokhara'],
    suggestedItinerary: { title: '8-Day Mountain & Spirit', days: [{ day: 1, title: 'Kathmandu Heritage', description: 'Swayambhunath Monkey Temple and Durbar Square.' }] },
    practicalTips: { transport: 'Tourist buses and short domestic flights connect Kathmandu and Pokhara.', culture: 'Always walk clockwise around stupas, chortens, and mani stones.', currency: 'Nepalese Rupee (NPR)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'sri-lanka-tea-country',
    slug: 'cultural-triangle-hill-country-sri-lanka',
    name: 'Sri Lanka: Cultural Triangle & Ella',
    country: 'Sri Lanka',
    continent: 'Asia',
    region: 'Central Province',
    tagline: 'Lion Rock fortress, misty Ceylon tea plantations, and scenic blue trains',
    heroImage: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'December to April (South & Hill Country)',
    idealDuration: '7–10 Days',
    budgetLevel: '$',
    overview: 'An island of astonishing variety: climb the ancient rock citadel of Sigiriya, ride the blue train through mountain tea estates, and search for wild leopards in Yala.',
    highlights: ['Climbing Sigiriya Lion Rock at dawn', 'World-famous train journey between Kandy and Ella', 'Tea plucking and tasting at Ceylon estates'],
    suggestedItinerary: { title: '7-Day Emerald Island', days: [{ day: 1, title: 'Sigiriya', description: 'Ascend the 1,200 steps to King Kashyapa’s palace.' }] },
    practicalTips: { transport: 'Hiring a private car with driver is remarkably affordable and safe.', culture: 'Remove shoes and hats when visiting Buddhist shrines.', currency: 'Sri Lankan Rupee (LKR)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'oman-deserts',
    slug: 'muscat-wahiba-sands-oman',
    name: 'Oman: Muscat, Wadis & Wahiba Sands',
    country: 'Oman',
    continent: 'Asia',
    region: 'Ad Dakhiliyah & Sharqiyah',
    tagline: 'Marble grand mosques, turquoise mountain pools, and golden desert camps',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'October to April',
    idealDuration: '6–8 Days',
    budgetLevel: '$$$',
    overview: 'One of the most welcoming and peaceful destinations in the Middle East. Pristine coastline, deep limestone wadi swimming canyons, and Bedouin desert hospitality.',
    highlights: ['Sultan Qaboos Grand Mosque in Muscat', 'Swimming in the turquoise canyon pools of Wadi Shab', 'Desert dune bashing in Wahiba Sands'],
    suggestedItinerary: { title: '6-Day Arabian Wonder', days: [{ day: 1, title: 'Muscat Old Town', description: 'Muttrah Souq, Corniche walk, and Grand Mosque.' }] },
    practicalTips: { transport: 'A 4x4 vehicle is required for mountain tracks and desert camps.', culture: 'Omanis are exceptionally hospitable; accept dates and cardamom coffee (Kahwa) gracefully.', currency: 'Omani Rial (OMR)', safetyVerifiedDate: 'October 2024' }
  },

  // AFRICA
  {
    id: 'morocco-marrakech',
    slug: 'marrakech-atlas-morocco',
    name: 'Marrakech, Ait Benhaddou & Atlas',
    country: 'Morocco',
    continent: 'Africa',
    region: 'Marrakech-Safi',
    tagline: 'Spice-filled medina souks, earthen desert kasbahs, and Berber mountain valleys',
    heroImage: 'https://images.unsplash.com/photo-1509299349698-dd22323b5963?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'March to May & September to November',
    idealDuration: '6–8 Days',
    budgetLevel: '$$',
    overview: 'A sensory whirlwind of terracotta ramparts, aromatic tagines, and mint tea. From the snake charmers of Jemaa el-Fnaa to the fortified mud citadel of Ait Benhaddou.',
    highlights: ['Wandering the maze of souks in Marrakech Medina', 'UNESCO earthen fortress of Ait Benhaddou', 'Hiking the Imlil valley beneath Mount Toubkal'],
    suggestedItinerary: { title: '6-Day Medina & Mountains', days: [{ day: 1, title: 'Marrakech Souks', description: 'Bahia Palace, Jardin Majorelle, and Jemaa el-Fnaa.' }] },
    practicalTips: { transport: 'High-speed Al Boraq train links Tangier and Casablanca; grand taxis for mountain legs.', culture: 'Politely say "La, Shukran" (No, thank you) if unsolicited guides approach you.', currency: 'Moroccan Dirham (MAD)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'south-africa-cape-town',
    slug: 'cape-town-garden-route-south-africa',
    name: 'Cape Town & The Garden Route',
    country: 'South Africa',
    continent: 'Africa',
    region: 'Western Cape',
    tagline: 'Table Mountain views, penguin colonies, and coastal wine estates',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'November to March (Summer)',
    idealDuration: '8–12 Days',
    budgetLevel: '$$',
    overview: 'Where two oceans meet beneath the dramatic flat summit of Table Mountain. World-class culinary dining in Franschhoek, coastal scenic drives, and Boulders Beach penguins.',
    highlights: ['Table Mountain cable car at sunset', 'Visiting African penguins at Boulders Beach', 'Wine tasting in historic Stellenbosch & Franschhoek', 'Driving Chapman’s Peak Drive'],
    suggestedItinerary: { title: '8-Day Cape Odyssey', days: [{ day: 1, title: 'Cape Town & Waterfront', description: 'Kirstenbosch Botanical Gardens and V&A Waterfront.' }] },
    practicalTips: { transport: 'Renting a car is ideal for the Garden Route and Cape Peninsula.', culture: 'Tipping 10–15% is customary at sit-down cafes and restaurants.', currency: 'South African Rand (ZAR)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'tanzania-serengeti',
    slug: 'serengeti-zanzibar-tanzania',
    name: 'Serengeti Safari & Zanzibar',
    country: 'Tanzania',
    continent: 'Africa',
    region: 'Northern Circuit & Zanzibar',
    tagline: 'The Great Wildlife Migration, Ngorongoro Crater, and spice island beaches',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'June to October (Dry season wildlife watching)',
    idealDuration: '9–12 Days',
    budgetLevel: '$$$$',
    overview: 'The quintessential African safari experience: watching millions of wildebeest traverse the golden Serengeti plains, followed by turquoise Indian Ocean relaxation in Stone Town.',
    highlights: ['Big Five game drives across the Serengeti', 'Descending 600m into Ngorongoro volcanic crater', 'Wandering the carved wooden doors of Stone Town'],
    suggestedItinerary: { title: '9-Day Bush & Beach', days: [{ day: 1, title: 'Tarangire Safari', description: 'Huge elephant herds and iconic baobab trees.' }] },
    practicalTips: { transport: 'Safari vehicles are custom pop-top 4x4s with dedicated driver-guides.', culture: 'Greetings are important in Swahili; say "Jambo" or "Habari".', currency: 'Tanzanian Shilling (TZS); US Dollars widely used for parks.', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'rwanda-volcanoes',
    slug: 'volcanoes-national-park-rwanda',
    name: 'Rwanda: Gorillas & Lake Kivu',
    country: 'Rwanda',
    continent: 'Africa',
    region: 'Northern & Western Province',
    tagline: 'Misty bamboo rainforests, endangered mountain gorillas, and serene lakes',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'June to September & December to February',
    idealDuration: '5–7 Days',
    budgetLevel: '$$$$',
    overview: 'Known as the "Land of a Thousand Hills," Rwanda offers one of the most transformative wildlife encounters on Earth: tracking gentle mountain gorillas in their rainforest habitat.',
    highlights: ['Guided gorilla trekking in Volcanoes National Park', 'Golden monkey tracking in bamboo canopies', 'Kayaking on tranquil Lake Kivu'],
    suggestedItinerary: { title: '5-Day Primate Sanctuary', days: [{ day: 1, title: 'Kigali to Musanze', description: 'Visit Kigali Genocide Memorial and drive north.' }] },
    practicalTips: { transport: 'Gorilla permits ($1,500) must be booked months in advance via Rwanda Development Board.', culture: 'Rwanda is plastic-bag free and one of the cleanest, safest countries in Africa.', currency: 'Rwandan Franc (RWF)', safetyVerifiedDate: 'October 2024' }
  },

  // NORTH AMERICA
  {
    id: 'usa-utah-parks',
    slug: 'utah-mighty-5-national-parks',
    name: 'Utah’s Mighty 5 National Parks',
    country: 'United States',
    continent: 'North America',
    region: 'Southwestern Utah',
    tagline: 'Towering sandstone arches, hoodoo amphitheaters, and slot canyons',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'April to May & September to October',
    idealDuration: '7–10 Days',
    budgetLevel: '$$$',
    overview: 'An epic desert road trip linking Zion, Bryce Canyon, Capitol Reef, Canyonlands, and Arches across red rock wilderness.',
    highlights: ['Wading through the Virgin River in Zion Narrows', 'Sunrise over the fairy hoodoos of Bryce Canyon', 'Standing beneath Delicate Arch at golden hour'],
    suggestedItinerary: { title: '7-Day Red Rock Odyssey', days: [{ day: 1, title: 'Zion National Park', description: 'Angels Landing permits and Riverside Walk.' }] },
    practicalTips: { transport: 'America the Beautiful annual interagency pass pays for itself across 3+ parks.', culture: 'Carry at least 3 liters of water per person daily during desert hikes.', currency: 'US Dollar (USD $)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'mexico-oaxaca',
    slug: 'oaxaca-valleys-mexico',
    name: 'Oaxaca: Gastronomy & Zapotec Heritage',
    country: 'Mexico',
    continent: 'North America',
    region: 'Southern Mexico',
    tagline: 'Seven varieties of mole, artisan mezcal distilleries, and ancient pyramids',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'October to March (Dia de los Muertos in late Oct/early Nov)',
    idealDuration: '5–7 Days',
    budgetLevel: '$',
    overview: 'Mexico’s undisputed culinary and indigenous arts capital. Zapotec weaving villages, Monte Albán mountain-top ruins, and smoky mezcal tastings.',
    highlights: ['Monte Albán Zapotec archaeological site', 'Tasting complex mole sauces in Mercado 20 de Noviembre', 'Visiting family-run palenques for artisanal mezcal'],
    suggestedItinerary: { title: '5-Day Culinary Heritage', days: [{ day: 1, title: 'Oaxaca Historic Center', description: 'Santo Domingo church and botanical ethnogarden.' }] },
    practicalTips: { transport: 'Taxis and "colectivos" link the valley villages efficiently.', culture: 'Tipping 10–15% is standard. Always say "Buen provecho" when passing diners.', currency: 'Mexican Peso (MXN)', safetyVerifiedDate: 'October 2024' }
  },

  // SOUTH AMERICA
  {
    id: 'chile-patagonia',
    slug: 'torres-del-paine-patagonia-chile',
    name: 'Torres del Paine & Chilean Patagonia',
    country: 'Chile',
    continent: 'South America',
    region: 'Magallanes',
    tagline: 'Granite horn spires, turquoise iceberg lakes, and wild guanacos',
    heroImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'November to March (Austral Summer)',
    idealDuration: '6–9 Days',
    budgetLevel: '$$$$',
    overview: 'One of the world’s ultimate trekking landscapes at the southern tip of the American continent. The famous "W Trek" circles colossal glaciers and horn-shaped granite peaks.',
    highlights: ['Sunrise trek to the base of the granite Torres del Paine towers', 'Grey Glacier boat cruise beside giant blue ice walls', 'Spotting wild guanacos and Andean condors'],
    suggestedItinerary: { title: '6-Day Patagonian Trek', days: [{ day: 1, title: 'Puerto Natales to Paine', description: 'Drive into park and check into eco-camp or refuge.' }] },
    practicalTips: { transport: 'Book CONAF park entry and refugio campsites months in advance; spots sell out quickly.', culture: 'Patagonian wind is ferocious; pack top-tier windproof shell jackets.', currency: 'Chilean Peso (CLP)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'colombia-coffee-region',
    slug: 'coffee-triangle-salento-colombia',
    name: 'Colombia’s Coffee Axis & Cocora Valley',
    country: 'Colombia',
    continent: 'South America',
    region: 'Quindío',
    tagline: 'Soaring 60m wax palms, colonial balconies, and aromatic arabica beans',
    heroImage: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'December to February & July to August',
    idealDuration: '4–6 Days',
    budgetLevel: '$',
    overview: 'Nestled in the lush Andean hills, the UNESCO Coffee Cultural Landscape features colorful colonial villages like Salento and the surreal giant wax palms of the Cocora Valley.',
    highlights: ['Hiking among 60-metre-tall wax palm trees in Cocora Valley', 'Touring family-run traditional coffee fincas', 'Riding in vintage Willys jeeps through mountain trails'],
    suggestedItinerary: { title: '4-Day Coffee Discovery', days: [{ day: 1, title: 'Salento & Calle Real', description: 'Climb the mirador steps for valley sunset views.' }] },
    practicalTips: { transport: 'Vintage Willys jeeps depart from Salento main plaza to Cocora Valley every 30 minutes.', culture: 'Colombians are famously warm and courteous; always greet with "Buenos días".', currency: 'Colombian Peso (COP)', safetyVerifiedDate: 'October 2024' }
  },

  // OCEANIA
  {
    id: 'australia-great-ocean-road',
    slug: 'great-ocean-road-melbourne-australia',
    name: 'Great Ocean Road & The Twelve Apostles',
    country: 'Australia',
    continent: 'Oceania',
    region: 'Victoria',
    tagline: 'Limestone sea stacks, wild southern ocean surf, and coastal koalas',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'November to April (Summer & Autumn)',
    idealDuration: '4–6 Days',
    budgetLevel: '$$$',
    overview: 'One of the world’s most scenic coastal road trips, stretching 243 kilometers along Victoria’s rugged coastline from Torquay to Allansford.',
    highlights: ['Twelve Apostles limestone stacks at sunset', 'Spotting wild koalas in the eucalyptus trees of Kennett River', 'Walking through ancient temperate rainforests in Great Otway National Park'],
    suggestedItinerary: { title: '4-Day Coastal Drive', days: [{ day: 1, title: 'Melbourne to Lorne', description: 'Surfing history in Torquay and coastal lookout points.' }] },
    practicalTips: { transport: 'Drive on the left. Watch for kangaroos grazing on road shoulders at dawn and dusk.', culture: 'Beach safety is paramount: only swim between the red and yellow flags.', currency: 'Australian Dollar (AUD $)', safetyVerifiedDate: 'October 2024' }
  },
  {
    id: 'fiji-yasawa',
    slug: 'yasawa-islands-fiji',
    name: 'Fiji’s Yasawa Islands',
    country: 'Fiji',
    continent: 'Oceania',
    region: 'Western Division',
    tagline: 'Coral reefs, traditional kava ceremonies, and tranquil turquoise lagoons',
    heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    galleryImages: [],
    bestSeason: 'May to October (Dry, pleasant season)',
    idealDuration: '6–8 Days',
    budgetLevel: '$$',
    overview: 'A chain of volcanic islands northwest of Viti Levu with crystal clear waters, friendly village homestays, and world-class manta ray swimming channels.',
    highlights: ['Swimming alongside gentle manta rays in the passage', 'Traditional "Sevusevu" village kava welcoming ceremony', 'Exploring Sawa-i-Lau subterranean limestone caves'],
    suggestedItinerary: { title: '6-Day Island Hopper', days: [{ day: 1, title: 'Denarau to Kuata', description: 'Board the Yasawa Flyer catamaran to barefoot Kuata.' }] },
    practicalTips: { transport: 'The Yasawa Flyer catamaran connects resorts daily with flexible Bula Passes.', culture: 'When visiting Fijian villages, remove hats and sunglasses and dress modestly.', currency: 'Fijian Dollar (FJD)', safetyVerifiedDate: 'October 2024' }
  }
];

export const continentsList = [
  { name: 'Europe', count: '32 Countries', image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop' },
  { name: 'Asia', count: '28 Countries', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Africa', count: '18 Countries', image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=800&auto=format&fit=crop' },
  { name: 'North America', count: '14 Countries', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop' },
  { name: 'South America', count: '12 Countries', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop' },
  { name: 'Oceania', count: '8 Countries', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop' },
];
