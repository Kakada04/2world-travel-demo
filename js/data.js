/**
 * 2World Travel Cambodia — Structured Data Store
 * Source of Truth: appinformation.txt (Audit & Specification)
 * 
 * Content is concise, accurate, and scannable.
 */

export const COMPANY_INFO = {
  name: "2World Travel (Cambodia) Ltd",
  shortName: "2World Travel",
  tagline: "Inbound Destination Management & Tailored Journeys Across Cambodia",
  founded: 2010,
  licenses: {
    commerce: "So. 0021KH/2010",
    tourism: "098/11",
    associations: ["CATA", "PATA"]
  },
  contacts: {
    landline: "+855 (0)23 222 727",
    hotline1: "+855 (0)12 222 623",
    hotline2: "+855 (0)16 985 400",
    emails: {
      general: "info@2worldtravel.com",
      tours: "tours@2worldtravel.com",
      ticketing: "ticket@2worldtravel.com",
      visa: "visa@2worldtravel.com",
      outbound: "outbound@2worldtravel.com",
      siemReap: "angkor@2worldtravel.com"
    }
  },
  locations: {
    phnomPenh: "Phnom Penh Head Office, Cambodia",
    siemReap: "Siem Reap Operations Desk, Cambodia"
  },
  insurancePartner: "Forte Insurance (Cambodia)",
  transportPartners: ["Giant Ibis", "Mekong Express", "Virak Buntham", "Soriya"]
};

export const TOURS_DATA = [
  {
    id: "tour-1",
    tourCode: "2WT-SR-4D3N",
    title: "Angkor Heritage & Tonle Sap",
    destination: "Siem Reap",
    region: "Northwest",
    durationDays: 4,
    durationNights: 3,
    style: "Classic Heritage",
    boardBasis: "B&B + 2 Lunches",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Angkor Wat reflection pool at sunrise",
    summary: "Angkor Wat sunrise, the stone faces of Bayon, Ta Prohm ruins, and a boat excursion on Tonle Sap Lake.",
    highlights: [
      "Angkor Wat sunrise with temple historian",
      "Bayon temple & Angkor Thom ancient city",
      "Ta Prohm ruins embraced by jungle roots"
    ]
  },
  {
    id: "tour-2",
    tourCode: "2WT-SCE-7D6N",
    title: "South Coast: Kampot, Kep & Koh Rong",
    destination: "South Coast",
    region: "Southern Coast",
    durationDays: 7,
    durationNights: 6,
    style: "Coastal Escape",
    boardBasis: "B&B + Selected Meals",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pristine white sand beach and turquoise sea in southern Cambodia",
    summary: "Colonial riverside charm in Kampot, the famous Kep crab market, and tropical island beaches on Koh Rong.",
    highlights: [
      "Organic Kampot pepper plantation tasting",
      "Bokor National Park scenic hill plateau",
      "Island catamaran transfer to Koh Rong"
    ]
  },
  {
    id: "tour-3",
    tourCode: "2WT-NE-6D5N",
    title: "Northeast: Kratie & Mondulkiri",
    destination: "Northeast",
    region: "Highlands",
    durationDays: 6,
    durationNights: 5,
    style: "Eco-Adventure",
    boardBasis: "Full Board in Field",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Lush tropical green waterfall and forest canopy",
    summary: "Spot rare Mekong Irrawaddy dolphins in Kratie and observe rescued elephants in Mondulkiri's highlands.",
    highlights: [
      "Freshwater dolphin boat cruise on the Mekong",
      "Bousra multi-tier waterfall in the pine hills",
      "Ethical elephant sanctuary forest trek"
    ]
  },
  {
    id: "tour-4",
    tourCode: "2WT-IC-6D5N",
    title: "Introducing Cambodia: Two Capitals",
    destination: "Phnom Penh & Siem Reap",
    region: "Cross-Country",
    durationDays: 6,
    durationNights: 5,
    style: "Classic Heritage",
    boardBasis: "B&B + 3 Lunches",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Royal Palace spires in Phnom Penh",
    summary: "Phnom Penh Royal Palace and historic riverside followed by the monumental temple ruins of Angkor.",
    highlights: [
      "Royal Palace, Silver Pagoda & National Museum",
      "Scenic overland transfer through countryside",
      "Comprehensive guided discovery of Angkor"
    ]
  },
  {
    id: "tour-5",
    tourCode: "2WT-BC-10D9N",
    title: "Cambodia Birding Expedition",
    destination: "Northeast & Preah Vihear",
    region: "Protected Reserves",
    durationDays: 10,
    durationNights: 9,
    style: "Special Interest",
    boardBasis: "Full Board in Field",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Misty forest canopy at sunrise",
    summary: "Targeting Cambodia's critically endangered species including Giant Ibis and Bengal Florican with expert guides.",
    highlights: [
      "Tmatboey dipterocarp forest for Giant Ibis",
      "Tonle Sap grassland habitats for Bengal Florican",
      "Preah Vihear clifftop temple sanctuary"
    ]
  },
  {
    id: "tour-6",
    tourCode: "2WT-SIC-3D2N",
    title: "Angkor Highlights (Seat-in-Coach)",
    destination: "Siem Reap",
    region: "Northwest",
    durationDays: 3,
    durationNights: 2,
    style: "Seat-in-Coach",
    boardBasis: "Bed & Breakfast",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Carved stone relief at Angkor temple",
    summary: "Guaranteed weekly group departures connecting Angkor Wat, Bayon, and Ta Prohm with licensed guides.",
    highlights: [
      "Angkor Wat, South Gate & Bayon temple",
      "Ta Prohm and Banteay Srei jewel temple",
      "Air-conditioned minibus & English-speaking guide"
    ]
  }
];

export const DESTINATIONS_DATA = [
  {
    id: "dest-siem-reap",
    name: "Siem Reap",
    subtitle: "Temples & Heritage",
    toursCount: "6 Tours",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Angkor Wat stone towers in Siem Reap"
  },
  {
    id: "dest-phnom-penh",
    name: "Phnom Penh",
    subtitle: "Capital & Mekong",
    toursCount: "5 Tours",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Royal Palace in Phnom Penh"
  },
  {
    id: "dest-south-coast",
    name: "South Coast",
    subtitle: "Kampot · Kep · Islands",
    toursCount: "3 Tours",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Coastal beach in southern Cambodia"
  },
  {
    id: "dest-northeast",
    name: "Northeast",
    subtitle: "Wild Cambodia",
    toursCount: "4 Tours",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Lush green rainforest and waterfall"
  }
];

export const HISTORICAL_REVIEWS = [
  {
    id: "rev-1",
    author: "Sylvie & Pierre Durand",
    country: "France",
    date: "Nov 2012",
    tourTaken: "Phnom Penh & Siem Reap Classical",
    text: "Our French-speaking guide, Vanna, was remarkably knowledgeable about Angkor. Transport was punctual and comfortable. Seamless travel from start to finish."
  },
  {
    id: "rev-2",
    author: "Mark & Sarah Whittaker",
    country: "Australia",
    date: "Feb 2013",
    tourTaken: "Birding & Northern Temples",
    text: "A fantastic bird-watching expedition. We spotted the Giant Ibis at Tmatboey. Honest advice and completely transparent local arrangements."
  },
  {
    id: "rev-3",
    author: "Dr. Hans-Jürgen Krause",
    country: "Germany",
    date: "Dec 2011",
    tourTaken: "South Coast & Bokor Private Tour",
    text: "Reliable service from the Phnom Penh office. The Kampot and Kep routing was well-paced, allowing us to explore colonial sites without any rush."
  }
];
