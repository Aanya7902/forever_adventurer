export interface TravelDiary {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  destination: string;
  country: string;
  date: string;
  readTime: string;
  category: 'Solo Travel' | 'Slow Journeys' | 'Cultural Immersion' | 'Wilderness' | 'Culinary Trails';
  heroImage: string;
  heroCaption: string;
  excerpt: string;
  content: string[];
  reflections: string[];
  practicalTakeaways: string[];
  suggestedDownloads: string[];
  tags: string[];
  isIllustrativeSample: boolean;
  featured?: boolean;
}

export const travelDiariesData: TravelDiary[] = [
  {
    id: 'diary-dubrovnik-dawn',
    slug: 'walking-the-limestone-at-dawn-dubrovnik',
    title: 'Walking the Limestone at Dawn: Why Solitude Transforms the Adriatic Coast',
    subtitle: 'Before the cruise liners drop anchor and the midday heat settles over Dalmatian stone, a quiet medieval rhythm awakens.',
    destination: 'Dubrovnik',
    country: 'Croatia',
    date: '14 October 2024',
    readTime: '6 min read',
    category: 'Slow Journeys',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    heroCaption: 'The ancient stone towers of Dubrovnik glowing warm under the morning sun across the Adriatic.',
    excerpt: 'At 6:15 AM, the Stradun is not a tourist thoroughfare. It is a river of wet, mirror-polished limestone reflecting soft peach morning light, broken only by bakery delivery carts and swallows darting between bell towers.',
    content: [
      'The morning stillness in Dubrovnik carries a texture that visitors who arrive after breakfast will never experience. While thousands of travelers know this fortified city as a lively summer spectacle, its true soul reveals itself only in the tender hour before the city wall gates officially swing open.',
      'I stepped out onto the polished flagstones near the Pile Gate while the streetlamps were still casting amber circles onto the cool stone. The air smelled of salted sea breeze, rosemary from garden pots hanging on green-shuttered balconies, and the unmistakable aroma of espresso brewing in the earliest corner café.',
      'Climbing the narrow staircase toward the upper ramparts near Minčeta Tower, the Mediterranean reveals its scale. Looking outward, the open Adriatic stretches into a hazy cobalt horizon; looking inward, a sea of terracotta roof tiles spans centuries of resilient Mediterranean history.',
      'To experience overvisited wonders with reverence, you do not need to avoid them entirely. You simply need to align your clock with the quiet hours of the people who actually call the stones home.'
    ],
    reflections: [
      'Solitude is not about isolation; it is about having enough quiet space to notice the small, enduring details of a place.',
      'Waking early is the single most transformative habit a traveler can cultivate in high-traffic destinations.',
      'Limestone worn smooth by six centuries of human footsteps creates an emotional continuity you cannot fabricate.'
    ],
    practicalTakeaways: [
      'Purchase your city wall ticket online the evening prior to bypass morning queues at the Pile Gate entrance.',
      'Start your wall walk at exactly 8:00 AM sharp to experience the entire 2km circuit with minimal crowds.',
      'Wear shoes with good rubber traction; six centuries of foot traffic have polished the limestone to a glass-like finish.'
    ],
    suggestedDownloads: ['daily-travel-journal', 'solo-travel-journal', 'carry-on-only-checklist'],
    tags: ['Croatia', 'Dalmatia', 'Slow Travel', 'Morning Walks', 'Mediterranean'],
    isIllustrativeSample: true,
    featured: true
  },
  {
    id: 'diary-kyoto-gardens',
    slug: 'the-grammar-of-silence-kyoto-zen-gardens',
    title: 'The Grammar of Silence: What Kyoto’s Rock Gardens Teach Us About Journeying',
    subtitle: 'Sitting on the wooden veranda of Ryoan-ji, where fifteen stones refuse to be seen all at once.',
    destination: 'Kyoto',
    country: 'Japan',
    date: '28 September 2024',
    readTime: '7 min read',
    category: 'Cultural Immersion',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    heroCaption: 'Early morning light filtering through autumn maple branches framing a quiet temple garden in eastern Kyoto.',
    excerpt: 'In the dry rock garden of Ryoan-ji, fifteen stones are arranged in moss islands across a sea of raked white gravel. From whatever vantage point you sit on the wooden engawa, at least one stone remains hidden from view.',
    content: [
      'There is a quiet paradox at the heart of traveling to Japan: the more you rush to take in every celebrated sight, the less you actually perceive. It took an overcast autumn morning on the cedar veranda of Ryoan-ji to bring this lesson home.',
      'The garden designer intended for one stone to stay hidden from any single physical angle. It is an intentional architectural reminder of human incompleteness—and a gentle caution against our obsession with consuming the "complete" bucket-list experience.',
      'Sitting in silence with thirty strangers, without phone chatter or hurried movements, the sound of raked stones, bamboo swaying in a soft breeze, and temple bells echoing across the hills become a symphony.',
      'When we strip away the relentless urge to document every instant, travel returns to its essential purpose: opening our attention to what is right here.'
    ],
    reflections: [
      'Incompleteness is not a flaw in your travel itinerary; it is the space where wonder and humility breathe.',
      'Ten minutes of uninterrupted contemplation at a single temple leaves a deeper impression than ticking off eight sights in one afternoon.',
      'Silence is a shared language that connects strangers without needing translation.'
    ],
    practicalTakeaways: [
      'Visit Ryoan-ji and nearby Daitoku-ji right at opening time (8:30 AM) on a weekday for peaceful contemplation.',
      'Slip-on shoes are a traveler’s best companion in Kyoto, where you will remove shoes dozens of times a day.',
      'Keep a pocket notebook and fountain pen handy; temple courtyards are exceptional spaces for quiet travel journaling.'
    ],
    suggestedDownloads: ['travel-reflection-prompts', 'travel-memories-journal', 'daily-itinerary-template'],
    tags: ['Kyoto', 'Japan', 'Mindful Travel', 'Temples', 'Zen Philosophy'],
    isIllustrativeSample: true,
    featured: true
  },
  {
    id: 'diary-lofoten-midnight-sun',
    slug: 'sleeping-when-the-sun-never-sets-lofoten',
    title: 'Sleeping When the Sun Refuses to Set: An Arctic Midsummer Diary',
    subtitle: 'Navigating twenty-four hours of golden hour across the razor-sharp fjords of northern Norway.',
    destination: 'Lofoten Islands',
    country: 'Norway',
    date: '18 August 2024',
    readTime: '5 min read',
    category: 'Wilderness',
    heroImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1600&auto=format&fit=crop',
    heroCaption: 'Crimson wooden rorbu cabins reflected in the calm waters of Reinefjorden beneath granite cliffs.',
    excerpt: 'When daylight never fades, time loses its tyrannical grip. At 1:30 AM, bathed in a low, molten amber glow that refuses to sink below the ocean, we stood on the ridge above Uttakleiv listening to gentle Arctic breakers.',
    content: [
      'Human beings are creatures of the dark-light cycle. When you cross into the Arctic Circle in midsummer, that biological rhythm unravels into something surprisingly liberating.',
      'In Reine, the iconic red wooden cabins called rorbu perch on stilts over water that looks tropical in photographs but bites your fingers with glacial intensity. Our days quickly discarded conventional schedules: dinner was eaten at midnight, hikes up mountain ridges began at 10:00 PM, and sleep arrived when exhaustion finally called our bluff.',
      'Hiking during the Arctic midnight sun is unlike anything in the temperate world. The light does not race through sunset into blackness; it simply hovers at the horizon for hours, bathing craggy peaks in rose-gold warmth while the sea turns molten lavender.',
      'You return from the Arctic with a recalibrated understanding of daylight—and an enduring love for wild horizons.'
    ],
    reflections: [
      'When you abandon rigid schedules, you rediscover the childlike pleasure of moving when your body genuinely wants to move.',
      'The Arctic wilderness demands preparation and humility; the rewards are unmatched sensory clarity.'
    ],
    practicalTakeaways: [
      'Pack a high-quality contoured eye mask; wooden coastal cabins rarely feature full blackout blinds.',
      'Pack warm windproof layers even in July; temperatures drop from 18°C in sunshine to 4°C with ocean wind.',
      'Take advantage of 24-hour light to climb popular viewpoints late at night when trails are entirely deserted.'
    ],
    suggestedDownloads: ['winter-travel-packing-list', 'backpacking-packing-list', 'road-trip-planner'],
    tags: ['Norway', 'Lofoten', 'Arctic', 'Midnight Sun', 'Hiking'],
    isIllustrativeSample: true,
    featured: false
  }
];
