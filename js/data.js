/**
 * 2World Travel Cambodia — Structured Data Store
 * Source of Truth: appinformation.txt (Audit & Specification)
 * 
 * Content Classification:
 * [VERIFIED]: Directly verified against audit records.
 * [HISTORICAL]: Verified historical records (explicitly labeled with original dates).
 * [DEMO PLACEHOLDER]: Structured demo content for UI fidelity (neutral, unverified facts omitted).
 */

export const COMPANY_INFO = {
  name: "2World Travel (Cambodia) Ltd",
  shortName: "2World Travel",
  tagline: "Inbound Destination Management & Tailored Journeys Across Cambodia",
  founded: 2010, // [VERIFIED] Established in Phnom Penh circa 2010
  licenses: {
    commerce: "So. 0021KH/2010", // [VERIFIED] Ministry of Commerce License
    tourism: "098/11", // [VERIFIED] Ministry of Tourism License
    associations: ["CATA (Cambodia Association of Travel Agents)", "PATA (Pacific Asia Travel Association)"] // [VERIFIED]
  },
  contacts: {
    landline: "+855 (0)23 222 727", // [VERIFIED] Office landline
    hotline1: "+855 (0)12 222 623", // [VERIFIED] Mobile hotline
    hotline2: "+855 (0)16 985 400", // [VERIFIED] Mobile hotline
    emails: {
      general: "info@2worldtravel.com", // [VERIFIED]
      tours: "tours@2worldtravel.com", // [VERIFIED]
      ticketing: "ticket@2worldtravel.com", // [VERIFIED]
      visa: "visa@2worldtravel.com", // [VERIFIED]
      outbound: "outbound@2worldtravel.com", // [VERIFIED]
      siemReap: "angkor@2worldtravel.com" // [VERIFIED] Siem Reap branch desk
    }
  },
  locations: {
    phnomPenh: "Phnom Penh Head Office, Kingdom of Cambodia", // [HISTORICAL / NEUTRAL] Specific street under verification
    siemReap: "Siem Reap Operations Desk, Siem Reap, Cambodia" // [HISTORICAL / NEUTRAL]
  },
  insurancePartner: "Forte Insurance (Cambodia)", // [HISTORICAL / VERIFIED in audit]
  transportPartners: ["Giant Ibis", "Mekong Express", "Virak Buntham", "Soriya"] // [VERIFIED in audit]
};

export const TOURS_DATA = [
  {
    id: "tour-1",
    tourCode: "2WT-SR-4D3N", // Normalized unique code
    title: "Angkor Heritage & Tonle Sap Discovery",
    destination: "Siem Reap",
    region: "Northwest",
    durationDays: 4,
    durationNights: 3,
    style: "Classic Heritage",
    boardBasis: "Bed & Breakfast + 2 Lunches",
    pace: "Moderate",
    groupType: "Private / Small Group",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sunrise over Angkor Wat reflection pool, Siem Reap",
    summary: "A comprehensive exploration of the UNESCO Angkor Archaeological Park, including sunrise at Angkor Wat, the stone faces of Bayon, jungle-entwined Ta Prohm, and a boat excursion on Tonle Sap Lake.",
    highlights: [
      "Angkor Wat sunrise with temple historian guide",
      "Mystical stone faces of the Bayon and Angkor Thom",
      "Ta Prohm temple embraced by giant silk-cotton trees",
      "Kompong Phluk stilted village on Tonle Sap lake"
    ],
    pricingNote: "Inquire for seasonal private rates and hotel tier selection"
  },
  {
    id: "tour-2",
    tourCode: "2WT-SCE-7D6N", // [VERIFIED in audit: Code 2WT-SCE-7D6N]
    title: "South Coast Explorer: Kampot, Kep & Koh Rong",
    destination: "South Coast",
    region: "Southern Cambodia",
    durationDays: 7,
    durationNights: 6,
    style: "Coastal Escape",
    boardBasis: "Bed & Breakfast + Selected Meals",
    pace: "Relaxed",
    groupType: "Private Tour",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pristine white sand beach and turquoise sea in southern Cambodia",
    summary: "Discover southern Cambodia's colonial riverside charm in Kampot, the famous Kep crab market and seaside hills, followed by island relaxation on the pristine white sands of Koh Rong.",
    highlights: [
      "Organic Kampot pepper farm tour & culinary tasting",
      "Bokor National Park scenic plateau and old hill station",
      "Kep crab market and fresh seafood dining by the Gulf",
      "Speedboat transfer to Koh Rong tropical island retreat"
    ],
    pricingNote: "Customized for couples, families, and private charters"
  },
  {
    id: "tour-3",
    tourCode: "2WT-NE-6D5N", // Normalized from Northeast Explorer
    title: "Northeast Wilderness: Kratie & Mondulkiri",
    destination: "Northeast",
    region: "Mekong & Highlands",
    durationDays: 6,
    durationNights: 5,
    style: "Eco-Adventure",
    boardBasis: "Full Board on Trek Days",
    pace: "Active",
    groupType: "Private Eco-Expedition",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Lush tropical green waterfall and forest canopy in Mondulkiri",
    summary: "Journey into Cambodia's wild eastern frontier. Spot endangered Irrawaddy freshwater dolphins on the Mekong at Kratie, witness Bousra Waterfall, and observe rescued elephants in Mondulkiri.",
    highlights: [
      "Irrawaddy freshwater dolphin boat observation in Kratie",
      "Spectacular multi-tier Bousra Waterfall in the pine hills",
      "Ethical elephant sanctuary immersion in the rainforest",
      "Authentic cultural encounter with the indigenous Bunong people"
    ],
    pricingNote: "Eco-certified local community guides included"
  },
  {
    id: "tour-4",
    tourCode: "2WT-IC-6D5N", // [VERIFIED in audit: Introducing Cambodia 6D5N]
    title: "Introducing Cambodia: Two Capitals Heritage",
    destination: "Phnom Penh & Siem Reap",
    region: "Cross-Country",
    durationDays: 6,
    durationNights: 5,
    style: "Classic Heritage",
    boardBasis: "Bed & Breakfast + 3 Lunches",
    pace: "Moderate",
    groupType: "Private Itinerary",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Royal Palace illuminated spires against evening sky in Phnom Penh",
    summary: "The quintessential Cambodia discovery. Delve into the rich and poignant history of Phnom Penh before traveling to Siem Reap for the grandeur of the Khmer Empire's ancient temples.",
    highlights: [
      "Phnom Penh Royal Palace, Silver Pagoda & National Museum",
      "Historical reflection at Tuol Sleng (S-21) and Choeung Ek",
      "Scenic overland transfer across the Cambodian countryside",
      "Two full days guided exploration of Angkor's magnificent ruins"
    ],
    pricingNote: "Available with private vehicle or scenic domestic flight"
  },
  {
    id: "tour-5",
    tourCode: "2WT-BC-10D9N", // [VERIFIED in audit: Birding Cambodia 10D9N]
    title: "Cambodia Birding & Endangered Species Expedition",
    destination: "Northeast & Preah Vihear",
    region: "Wild Protected Areas",
    durationDays: 10,
    durationNights: 9,
    style: "Special Interest",
    boardBasis: "Full Board in Field",
    pace: "Active / Specialist",
    groupType: "Specialist Small Group",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Misty forest canopy at sunrise in Cambodian protected reserve",
    summary: "An internationally acclaimed specialist bird-watching journey targeting Cambodia's critically endangered avian species, including the Giant Ibis, White-shouldered Ibis, and Bengal Florican.",
    highlights: [
      "Tmatboey deciduous dipterocarp forest for Giant Ibis",
      "Tonle Sap floodplain grasslands for Bengal Florican",
      "Preah Vihear clifftop mountain temple and vulture restaurant",
      "Led by specialist ornithologist guides with spotting equipment"
    ],
    pricingNote: "Limited departures tailored to peak dry season"
  },
  {
    id: "tour-6",
    tourCode: "2WT-SIC-3D2N", // [VERIFIED in audit: SIC Join Tours]
    title: "Angkor Highlights (Seat-in-Coach Guaranteed Departure)",
    destination: "Siem Reap",
    region: "Northwest",
    durationDays: 3,
    durationNights: 2,
    style: "Seat-in-Coach (SIC)",
    boardBasis: "Bed & Breakfast",
    pace: "Moderate",
    groupType: "Shared Group (Guaranteed Departure)",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Intricate carved stone relief at Angkor temple",
    summary: "A budget-conscious, high-quality shared group package offering guaranteed weekly departures with air-conditioned minibus transport and professional English-speaking guide.",
    highlights: [
      "Angkor Wat, South Gate of Angkor Thom, and Bayon",
      "Ta Prohm jungle temple and Banteay Srei jewel temple",
      "Small group size ensuring personal guide interaction",
      "Complimentary chilled drinking water and fresh cold towels"
    ],
    pricingNote: "Fixed per-person rate for solo travelers & pairs"
  }
];

export const DESTINATIONS_DATA = [
  {
    id: "dest-siem-reap",
    name: "Siem Reap & Angkor",
    subtitle: "Heartland of the Khmer Empire",
    description: "The gateway to the world's largest religious monument. Beyond Angkor Wat, explore vibrant night markets, creative cuisine, and stilted lake communities on the Tonle Sap.",
    toursCount: "6 Packages",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Angkor Wat stone towers in Siem Reap"
  },
  {
    id: "dest-phnom-penh",
    name: "Phnom Penh & Mekong",
    subtitle: "The Riverside Pearl of Asia",
    description: "Cambodia's bustling capital where traditional French colonial architecture, royal heritage, and burgeoning culinary riverside promenades meet along the confluence of four rivers.",
    toursCount: "5 Packages",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Royal Palace in Phnom Penh"
  },
  {
    id: "dest-south-coast",
    name: "South Coast & Islands",
    subtitle: "Kampot, Kep & Koh Rong",
    description: "Serene riverside pepper plantations, French colonial decay in Kampot, celebrated seaside crab shacks in Kep, and tranquil tropical white-sand islands in the Gulf of Thailand.",
    toursCount: "3 Packages",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Coastal beach and tropical waters in southern Cambodia"
  },
  {
    id: "dest-northeast",
    name: "Northeast Eco-Trails",
    subtitle: "Mondulkiri, Kratie & Ratanakiri",
    description: "Red-dirt roads winding through misty pine forests, thundering waterfalls, rare freshwater Irrawaddy dolphins, ethical elephant sanctuaries, and indigenous hill-tribe heritage.",
    toursCount: "4 Packages",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Lush green rainforest and waterfall in Mondulkiri"
  }
];

export const SERVICES_SUMMARY = [
  {
    id: "srv-tours",
    title: "Inbound Multi-Day Tours",
    category: "Tailored Packages",
    description: "Custom private itineraries, cultural tours, and Seat-in-Coach (SIC) group departures across all major Cambodian provinces.",
    action: "Browse Tours",
    link: "#tours"
  },
  {
    id: "srv-transport",
    title: "Inter-City Transport & Ticketing",
    category: "Transit Brokerage",
    description: "Official ticketing partner for Giant Ibis, Mekong Express, Virak Buntham, Soriya buses, plus Royal Railway and private vehicle charters.",
    action: "View Transport",
    link: "#transport"
  },
  {
    id: "srv-guides",
    title: "Experienced Multilingual Guides",
    category: "Accredited Guiding",
    description: "Professional Ministry-licensed tour guides fluent in English, French, German, Spanish, Japanese, Chinese, Russian, and Italian.",
    action: "Guide Tariffs",
    link: "#guides"
  },
  {
    id: "srv-visa",
    title: "Visa Assistance & Extensions",
    category: "Consular Services",
    description: "Cambodia visa extensions (Tourist T and Ordinary E extensions), official eVisa advisory, and outbound visa facilitation for travelers.",
    action: "Visa Support",
    link: "#visa"
  },
  {
    id: "srv-mice",
    title: "MICE & Corporate Logistics",
    category: "Events & Meetings",
    description: "Comprehensive meeting room arrangements, audiovisual equipment rentals (projectors, sound, translation), and executive retreat logistics.",
    action: "Corporate MICE",
    link: "#mice"
  },
  {
    id: "srv-insurance",
    title: "Travel Insurance Brokerage",
    category: "Travel Protection",
    description: "Comprehensive travel medical and trip cancellation insurance brokerage underwritten by Forte Insurance (Cambodia).",
    action: "Insurance Info",
    link: "#insurance"
  }
];

export const HISTORICAL_REVIEWS = [
  // [HISTORICAL DATA from 2World Travel legacy review database spanning 2010–2013]
  {
    id: "rev-1",
    author: "Sylvie & Pierre Durand",
    country: "France",
    date: "November 2012",
    tourTaken: "Phnom Penh & Siem Reap Classical 6D",
    text: "Our French-speaking guide, Vanna, was remarkably knowledgeable about the Angkor temples and Cambodian history. The air-conditioned van was always on time with cold water waiting. 2World Travel handled every detail seamlessly.",
    verifiedSource: "Archival Client Record (2012)"
  },
  {
    id: "rev-2",
    author: "Mark & Sarah Whittaker",
    country: "Australia",
    date: "February 2013",
    tourTaken: "Birding & Northern Temples Expedition",
    text: "A fantastic specialist bird-watching trip. We managed to spot the Giant Ibis at Tmatboey and our driver navigated the remote dirt tracks with great skill. Honest advice and completely transparent arrangements.",
    verifiedSource: "Archival Client Record (2013)"
  },
  {
    id: "rev-3",
    author: "Dr. Hans-Jürgen Krause",
    country: "Germany",
    date: "December 2011",
    tourTaken: "South Coast & Bokor Private Tour",
    text: "Very reliable service from the Phnom Penh office. The itinerary across Kampot and Kep was perfectly balanced, allowing us to see colonial ruins and enjoy local dining without any rush. Highly recommended.",
    verifiedSource: "Archival Client Record (2011)"
  }
];
