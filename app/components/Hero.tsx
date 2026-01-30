"use client";

import React, { useState } from "react";
import EnquireForm from './EnquireForm';

// Destination data - matching Destinations component
const destinationData = [
   {
  id: 1,
  title: "Swiss Alps ",
  category: "Adventure",
  rating: 4.9,
  price: "₹1,07,907/per person",
  img: "/assets/images/images-swips.jpg",

  duration: "10 Days / 9 Nights",
  groupSize: "12 Pax",

  about:
    "A thrilling journey through Swiss Alps covering iconic peaks, charming villages, glacier adventures, scenic rail rides, and unforgettable alpine experiences.",

  highlights: [
    "Paragliding over Interlaken",
    "Jungfraujoch – Top of Europe",
    "Matterhorn viewpoint",
    "Glacier Express scenic train",
    "Lake Lucerne cruise",
    "Mt. Titlis cable car & snow park"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Zurich – Transfer to Interlaken",
      desc: "Arrive in Zurich and enjoy scenic rail journey.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Airport welcome and assistance",
        "Scenic train ride through Swiss countryside",
        "Check-in to Alpine chalet",
        "Welcome dinner with Swiss specialties",
        "Orientation briefing"
      ]
    },

    {
      day: 2,
      title: "Jungfraujoch Excursion – Top of Europe",
      desc: "Visit Europe’s highest railway station with snow activities and glacier views.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Cogwheel train ride",
        "Ice Palace visit",
        "Snow park activities",
        "Photography time",
        "Return to hotel"
      ]
    },

    /* ✅ NEW DAYS START HERE */

    {
      day: 3,
      title: "Interlaken Adventure Day",
      desc: "Enjoy thrilling outdoor activities in the adventure capital of Switzerland.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Paragliding over Interlaken",
        "Lake Thun boat ride",
        "Shopping at local markets",
        "Optional skydiving",
        "Leisure evening"
      ]
    },

    {
      day: 4,
      title: "Zermatt & Matterhorn Visit",
      desc: "Travel to Zermatt and witness the iconic Matterhorn peak.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Scenic train to Zermatt",
        "Matterhorn viewpoint hike",
        "Village exploration",
        "Cable car ride",
        "Overnight stay in Zermatt"
      ]
    },

    {
      day: 5,
      title: "Glacier Express Scenic Train",
      desc: "Experience one of the world’s most beautiful train journeys.",
      image: "https://source.unsplash.com/1600x900/?glacier-express,train,alps",
      activities: [
        "Panoramic train ride",
        "Snowy valleys & bridges view",
        "Onboard lunch",
        "Photography stops",
        "Arrival at St. Moritz"
      ]
    },

    {
      day: 6,
      title: "Mt. Titlis & Lucerne Tour",
      desc: "Cable car ride to Mt. Titlis and explore beautiful Lucerne city.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Rotair revolving cable car",
        "Cliff walk bridge",
        "Snow tubing",
        "Lucerne Chapel Bridge visit",
        "Lake Lucerne cruise"
      ]
    },

    {
      day: 7,
      title: "Zurich City Tour & Departure",
      desc: "Explore Zurich city highlights before departure.",
      image: "/assets/images/images-swips.jpg",
      activities: [
        "Old town walking tour",
        "Bahnhofstrasse shopping",
        "Chocolate tasting",
        "Airport transfer",
        "Departure"
      ]
    }
  ],

  included: [
    "Hotel accommodation",
    "Daily breakfast",
    "Professional guide",
    "Sightseeing transfers",
    "Train tickets for excursions"
  ],

  notIncluded: [
    "International flights",
    "Lunch & dinner",
    "Insurance",
    "Personal expenses",
    "Optional adventure activities"
  ]
},
  {
    id: 2,
    title: "Manali",
    category: "Mountains",
    rating: 4.7,
    price: "₹67,000/per person",
    img: "/assets/images/shimla&Manali.jpeg",
    duration: "5 Days / 4 Nights",
    groupSize: "Private Tour (Innova Crysta)",
    about:
      "Experience the beauty of Himachal Pradesh with this scenic Manali getaway. From snow-clad mountains and serene temples to riverside camps in Kasol, this trip promises unforgettable memories.",
    highlights: [
      "Drive through scenic Himalayan roads",
      "Visit Solang Valley & Atal Tunnel",
      "Explore Sissu Lake & waterfalls",
      "Local Manali sightseeing",
      "Kasol & Manikaran excursion"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Manali – Arrival & Mall Road",
        desc: "Begin your journey from Chandigarh to Manali with a scenic mountain drive.",
        image: "/assets/images/shimla&Manali_1.jpeg",
        activities: [
          "Pickup from Chandigarh",
          "Scenic drive to Manali (6–7 hours)",
          "Hotel check-in",
          "Evening visit to Mall Road",
          "Dinner and overnight stay"
        ]
      },
      {
        day: 2,
        title: "Solang Valley & Atal Tunnel Excursion",
        desc: "Explore high-altitude attractions and breathtaking landscapes.",
        image: "/assets/images/manali-day2.jpg",
        activities: [
          "Breakfast at hotel",
          "Visit Solang Valley",
          "Drive through Atal Tunnel",
          "Visit Sissu Lake",
          "Return to hotel for dinner"
        ]
      },
      {
        day: 3,
        title: "Manali Local Sightseeing",
        desc: "Discover the cultural and spiritual charm of Manali.",
        image: "/assets/images/manali-day3.jpg",
        activities: [
          "Hidimba Devi Temple",
          "Buddhist Monastery",
          "Old Manali walk",
          "Vashisht Kund",
          "Mall Road visit"
        ]
      },
      {
        day: 4,
        title: "Manali to Kasol & Manikaran",
        desc: "Visit Parvati Valley and enjoy riverside camping.",
        image: "/assets/images/manali-day4.jpg",
        activities: [
          "Drive to Kasol",
          "Visit Manikaran Gurudwara",
          "Explore Kasol market",
          "Riverside camp stay",
          "Dinner at camps"
        ]
      },
      {
        day: 5,
        title: "Return Journey",
        desc: "Conclude your journey with beautiful memories.",
        image: "/assets/images/manali-day5.jpg",
        activities: [
          "Breakfast",
          "Checkout",
          "Return to Ambala",
          "Trip ends"
        ]
      }
    ],
    included: [
      "Accommodation (Breakfast & Dinner)",
      "Private transportation (Innova Crysta)",
      "Toll taxes & parking"
    ],
    notIncluded: [
      "Flights / Train tickets",
      "Lunch",
      "Adventure activities",
      "Personal expenses"
    ]
  }, 
  {
  id: 3,
  title: "Delhi – Churdhar – Shimla",
  category: "Adventure",
  rating: 4.8,
  price: "₹18,999 / per person",
  img: "https://images.unsplash.com/photo-1609232529165-da44951373fa?q=80&w=735&auto=format&fit=crop",
  duration: "6 Days / 5 Nights",
  groupSize: "Up to 12 People",
  about:
    "Experience the untouched beauty of Himachal Pradesh with this adventurous Churdhar trek combined with leisure time in Shimla. From remote mountain villages and forest trails to breathtaking sunrise views from Churdhar Peak (3650 m) and the colonial charm of Shimla, this tour offers the perfect blend of trekking, culture, and relaxation.",
  highlights: [
    "Trek to Churdhar Peak (3650 m)",
    "Stay in scenic mountain camps",
    "Bonfire & candlelight dinner under the stars",
    "Village walk and interaction with locals",
    "Sunrise from Churdhar top",
    "Explore colonial Shimla"
  ],

  itinerary: [
    {
      day: 1,
      title: "Delhi to Solan – Overnight Journey",
      desc:
        "Start your adventure with an overnight Volvo bus journey from Delhi to Solan.",
      image:
        "https://images.unsplash.com/photo-1612380635197-a025736ddba1?q=80&w=1170&auto=format&fit=crop",
      activities: [
        "Evening departure from Delhi",
        "Overnight Volvo bus journey",
        "Scenic mountain road travel"
      ]
    },
    {
      day: 2,
      title: "Solan to Gyankot Village",
      desc:
        "Arrive in Solan and drive to the peaceful mountain village of Gyankot.",
      image:
        "https://images.unsplash.com/photo-1605689380471-e395f069d0b5?q=80&w=1332&auto=format&fit=crop",
      activities: [
        "Arrival at Solan bus station",
        "Meet local driver",
        "Drive to Gyankot village",
        "Homestay check-in",
        "Breakfast & dinner",
        "Rest and acclimatization"
      ]
    },
    {
      day: 3,
      title: "Gyankot – Pab – Jiunthi Trek",
      desc:
        "Drive to Pab and trek through forest trails to Jiunthi village.",
      image:
        "https://images.unsplash.com/photo-1584075612901-259c1bcbd9b2?q=80&w=1074&auto=format&fit=crop",
      activities: [
        "Breakfast at homestay",
        "Drive to Pab",
        "2–3 hour trek to Jiunthi",
        "Campsite check-in",
        "Bonfire & candlelight dinner",
        "Optional sunset walk"
      ]
    },
    {
      day: 4,
      title: "Jiunthi to Bherog / Tisri Trek",
      desc:
        "A long yet rewarding trek through alpine landscapes toward Churdhar.",
      image:
        "https://plus.unsplash.com/premium_photo-1754590179764-0f36db5fcbb0?q=80&w=1170&auto=format&fit=crop",
      activities: [
        "Morning tea with locals",
        "Village walk",
        "Breakfast",
        "14 km trek to Bherog/Tisri",
        "Packed lunch",
        "Bonfire & dinner at campsite"
      ]
    },
    {
      day: 5,
      title: "Churdhar Peak Sunrise & Shimla Transfer",
      desc:
        "Early morning trek to Churdhar Peak for sunrise, then descend and drive to Shimla.",
      image:
        "https://images.unsplash.com/photo-1740383234486-4137f1dee821?q=80&w=1170&auto=format&fit=crop",
      activities: [
        "Early morning wake-up",
        "Trek to Churdhar summit",
        "Sunrise view",
        "Descend to Churdhar temple",
        "Breakfast",
        "Trek down to Madhalani",
        "Drive to Shimla",
        "Hotel check-in & dinner"
      ]
    },
    {
      day: 6,
      title: "Shimla Sightseeing & Return to Delhi",
      desc:
        "Explore Shimla’s iconic attractions before returning to Delhi.",
      image:
        "https://images.unsplash.com/photo-1609232529165-da44951373fa?q=80&w=735&auto=format&fit=crop",
      activities: [
        "Breakfast & checkout",
        "Jakhoo Temple visit",
        "Viceregal Lodge",
        "Christ Church & The Ridge",
        "Shopping at Mall Road",
        "Evening dinner",
        "Overnight Volvo bus to Delhi"
      ]
    }
  ],

  included: [
    "Accommodation in homestays, camps & hotel",
    "Breakfast and dinner",
    "All transfers as per itinerary",
    "Camping equipment",
    "Bonfire during campsite stays",
    "Experienced trek guide",
    "Forest entry permits"
  ],

  notIncluded: [
    "Lunch on all days",
    "Personal expenses",
    "Adventure activities not mentioned",
    "Travel insurance",
    "Monument entry tickets",
    "Tips & gratuities"
  ]
},
{
  id: 4,
  title: "Churdhar",
  category: "Trekking",
  rating: 4.8,
  price: "₹18,999 / per person",
  img: "https://plus.unsplash.com/premium_photo-1754590179764-0f36db5fcbb0?q=80&w=1170&auto=format&fit=crop",
  duration: "4 Days / 3 Nights",
  groupSize: "Up to 15 People",
  about:
    "Experience an adventurous trekking and camping tour to Churdhar, the highest peak of the Outer Himalayas. This short yet thrilling Himalayan escape offers dense deodar forests, scenic villages, stunning sunrises, and peaceful camping nights under the stars.",
  highlights: [
    "Trek to Churdhar – highest peak of Outer Himalayas",
    "Camping under the stars with bonfire",
    "Panoramic views of Shivalik ranges",
    "Sunrise at Churdhar peak (3650 m)",
    "Walk through dense deodar forests",
    "Local village interaction at Jiunthi"
  ],

  itinerary: [
    {
      day: 1,
      title: "Chandigarh to Pab | Trek to Jiunthi",
      desc:
        "Drive from Chandigarh to Pab followed by an acclimatization trek to Jiunthi village.",
      image:
        "https://plus.unsplash.com/premium_photo-1661874827736-a08da3e9bff0?q=80&w=1171&auto=format&fit=crop",
      activities: [
        "Meet & greet at Chandigarh",
        "Drive to Pab (145 km / 5–6 hrs)",
        "Breakfast & lunch en route",
        "Trek from Pab to Jiunthi (4 km)",
        "Walk through deodar forest",
        "Camp stay at Jiunthi village",
        "Bonfire under the stars",
        "Optional sunset walk to Srainkufar"
      ]
    },
    {
      day: 2,
      title: "Jiunthi to Bherog / Tisri Trek",
      desc:
        "A scenic long trek toward higher altitude camps with breathtaking Himalayan views.",
      image:
        "https://images.unsplash.com/photo-1696355931547-e3e0208685f2?q=80&w=863&auto=format&fit=crop",
      activities: [
        "Morning village walk & tea with locals",
        "Breakfast at campsite",
        "Trek from Jiunthi to Bherog/Tisri (12 km)",
        "Packed lunch during trek",
        "Reach campsite at 3200 m altitude",
        "Evening rest & bonfire",
        "Dinner at campsite"
      ]
    },
    {
      day: 3,
      title: "Churdhar Summit | Descent to Kalabag",
      desc:
        "Early morning summit trek to Churdhar peak followed by descent to Kalabag.",
      image:
        "https://images.unsplash.com/photo-1619100319880-c158cc8f563f?q=80&w=1074&auto=format&fit=crop",
      activities: [
        "Early wake-up tea",
        "Sunrise trek to Churdhar top (3 km)",
        "Time at Churdhar peak (3650 m)",
        "Descend to Churdhar temple",
        "Breakfast after descent",
        "Trek down to Kalabag (2 km)",
        "Camp stay at Kalabag",
        "Dinner & bonfire"
      ]
    },
    {
      day: 4,
      title: "Kalabag to Madhalani | Return Journey",
      desc:
        "Final descent trek followed by drive back toward the city.",
      image:
        "https://images.unsplash.com/photo-1605689380471-e395f069d0b5?q=80&w=1332&auto=format&fit=crop",
      activities: [
        "Breakfast at campsite",
        "Trek from Kalabag to Madhalani (4 km)",
        "Drive back to Shimla or Solan",
        "End of memorable trekking experience"
      ]
    }
  ],

  included: [
    "3 nights camping with mattress & sleeping bag",
    "Dry toilet tent",
    "Vegetarian meals as per itinerary",
    "Bonfire for all camping nights",
    "Certified mountaineer trek guide",
    "Assistant guide & cook",
    "First aid kit",
    "Guided trek from Pab to Madhalani"
  ],

  notIncluded: [
    "Transportation from Chandigarh to Pab & return",
    "Day 1 breakfast",
    "Day 4 lunch & dinner",
    "Personal expenses (snacks, alcohol, etc.)",
    "Medical expenses if any"
  ]
},
{
  id: 5,
  title: "Churdhar Peak Trek",
  category: "Trekking",
  rating: 4.9,
  price: "₹22,999 / per person",
  img: "https://plus.unsplash.com/premium_photo-1664298444073-9368b4d4234b?q=80&w=627&auto=format&fit=crop",
  duration: "5 Days / 4 Nights",
  groupSize: "Up to 15 People",
  about:
    "Churdhar Peak (3,647 m) is the highest peak of the Outer Himalayas and holds immense religious and natural significance. This 5-day trek takes you through dense forests, alpine camps, traditional villages, sacred temples, and offers a breathtaking sunrise summit experience at one of Himachal’s most revered peaks.",
  highlights: [
    "Summit Churdhar Peak (3,647 m)",
    "Religious significance of Shri Shirgul Maharaj",
    "Alpine camping with bonfire",
    "Picnic lunch inside dense jungle",
    "Interaction with locals at Jiunthi village",
    "Sunrise view from Churdhar summit",
    "Visit to Jatoli Temple (Asia’s largest Shiva temple)",
    "River-side lunch near Giri River"
  ],

  itinerary: [
    {
      day: 1,
      title: "Arrival in Chandigarh",
      desc:
        "Arrive in Chandigarh, check in at the hotel, and prepare for the trek ahead.",
      image:
        "https://images.unsplash.com/photo-1697308539756-edc84fa04a9b?q=80&w=687&auto=format&fit=crop",
      activities: [
        "Arrival at Chandigarh",
        "Hotel check-in",
        "Trip briefing",
        "Overnight stay in Chandigarh"
      ]
    },
    {
      day: 2,
      title: "Chandigarh to Pab | Trek to Jiunthi",
      desc:
        "Scenic drive to Pab followed by acclimatization hikes and camping at Jiunthi village.",
      image:
        "https://images.unsplash.com/photo-1646912951442-7a2bc5e8cd06?q=80&w=1025&auto=format&fit=crop",
      activities: [
        "Early morning checkout",
        "Drive from Chandigarh to Pab (145 km / 5–6 hrs)",
        "Trek to Jade ki Karai",
        "Picnic lunch in jungle",
        "Acclimatization walk to Jiunthi (2 km)",
        "Bonfire & alpine camp stay",
        "Traditional Himachali Siddu dinner",
        "Thoda Game Show"
      ]
    },
    {
      day: 3,
      title: "Jiunthi to Bherog / Tisri Trek",
      desc:
        "Long scenic trek through high-altitude trails with panoramic Himalayan views.",
      image:
        "https://images.unsplash.com/photo-1695901048826-842a3757856c?q=80&w=1973&auto=format&fit=crop",
      activities: [
        "Morning village walk & tea with locals",
        "Breakfast at campsite",
        "Trek from Jiunthi to Bherog/Tisri (13 km)",
        "Packed lunch en route",
        "Reach campsite at 3200 m altitude",
        "Evening bonfire & dinner"
      ]
    },
    {
      day: 4,
      title: "Churdhar Summit | Descent to Gyankot",
      desc:
        "Summit day with sunrise views from Churdhar Peak followed by descent.",
      image:
        "https://images.unsplash.com/photo-1562756131-51a05c378d9b?q=80&w=1074&auto=format&fit=crop",
      activities: [
        "Early morning wake-up tea",
        "Sunrise trek to Churdhar Peak (3 km)",
        "Time at summit (3,647 m)",
        "Descend to Churdhar temple",
        "Breakfast after descent",
        "Trek down to Madhalani (6 km)",
        "Lunch at Madhalani",
        "Drive to Gyankot",
        "Overnight stay at alpine camp"
      ]
    },
    {
      day: 5,
      title: "Gyankot to Chandigarh | Return Journey",
      desc:
        "Final day with a peaceful river walk, temple visit, and return to Chandigarh.",
      image:
        "https://images.unsplash.com/photo-1766916478876-ac7e48afbdfb?q=80&w=687&auto=format&fit=crop",
      activities: [
        "Breakfast at campsite",
        "Walk down to Giri River",
        "River-side lunch",
        "Visit Jatoli Temple",
        "Drive back to Chandigarh",
        "Tour concludes with memories"
      ]
    }
  ],

  included: [
    "4 nights accommodation (hotel + alpine camps)",
    "Camping with mattress & sleeping bag",
    "Bonfire nights",
    "Vegetarian meals as per itinerary",
    "Traditional Himachali dinner (Siddu)",
    "Certified trek guide",
    "Assistant guide & cook",
    "First aid kit",
    "Trek support from Pab to Gyankot"
  ],

  notIncluded: [
    "Personal expenses (snacks, alcohol, etc.)",
    "Medical expenses if any",
    "Travel insurance",
    "Meals not mentioned in inclusions"
  ]
},
{
  id: 6,
  title: "Shimla – Manali – Kasol ",
  image: "/assets/images/shimla&manali.jpeg",
  category: "Himalayan Tour",
  rating: 4.8,
  price: 34999,
  duration: "6–7 Days",
  groupSize: "Up to 20 people",
  description: "Explore the best of Himachal Pradesh with this 6–7 days tour covering Shimla, Manali, and Kasol. Enjoy scenic drives, local sightseeing, adventure activities, and serene village walks along the Parvati River.",
  highlights: [
    "Shimla local sightseeing",
    "Solang Valley adventure & paragliding",
    "Manali cultural and nature exploration",
    "Kasol riverside cafés & Parvati valley",
    "Kheerganga or Tosh / Chalal trekking",
    "Optional visit to Manikaran Sahib Gurudwara"
  ],
  itinerary: [
    {
      "day": 1,
      "title": "Arrival in Shimla – Local Sightseeing",
      "description": "Explore Shimla’s colonial charm and local highlights.",
      "activities": [
        "Mall Road – Shopping & cafés",
        "The Ridge – Sunset views",
        "Christ Church – Historic landmark",
        "Scandal Point",
        "Lakkar Bazaar – Wooden handicrafts",
        "Overnight stay in Shimla"
      ],
      image: "https://plus.unsplash.com/premium_photo-1697730487072-c7c29e113007?q=80&w=805&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "day": 2,
      "title": "Shimla – Kufri – Chail (Optional)",
      "description": "Visit nearby scenic locations and enjoy nature activities.",
      "activities": [
        "Kufri sightseeing",
        "Mahasu Peak (horse ride)",
        "Himalayan Nature Park",
        "Chail Palace",
        "World’s highest cricket ground",
        "Overnight stay in Shimla"
      ],
      image: "https://images.unsplash.com/photo-1627880556981-e088653665ca?q=80&w=1332&auto=format&fit=crop"
    },
    {
      "day": 3,
      "title": "Shimla → Manali (Scenic Drive)",
      "description": "Travel through beautiful valleys with stops at lakes and dams.",
      "activities": [
        "Drive to Manali (~250 km / 7–8 hrs)",
        "Sundernagar Lake, Pandoh Dam, Beas River Valley",
        "Mall Road & Manu Market",
        "Local food tasting",
        "Overnight stay in Manali"
      ],
      image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop"
    },
    {
      "day": 4,
      "title": "Manali Local + Solang Valley",
      "description": "Explore Manali and indulge in adventure activities.",
      "activities": [
        "Hadimba Devi Temple",
        "Vashisht Hot Springs",
        "Old Manali cafés",
        "Solang Valley adventure",
        "Overnight stay in Manali"
      ],
      image: "https://images.unsplash.com/photo-1713063968789-adf139c4a1eb?q=80&w=1074&auto=format&fit=crop"
    },
    {
      "day": 5,
      "title": "Manali → Kasol",
      "description": "Travel to Kasol and explore the Parvati Valley.",
      "activities": [
        "Drive to Kasol",
        "Kasol Market exploration",
        "Parvati River walk",
        "Riverside cafés",
        "Overnight stay in Kasol"
      ],
      image: "https://images.unsplash.com/photo-1606220975728-f94e0d9ed642?q=80&w=691&auto=format&fit=crop"
    },
    {
      "day": 6,
      "title": "Kasol – Nearby Villages / Trek",
      "description": "Explore nearby villages or trek options.",
      "activities": [
        "Chalal / Tosh / Kheerganga",
        "Photography & cafés",
        "Overnight stay"
      ],
      image: "https://images.unsplash.com/photo-1624881256794-a7ee33ecbb99?q=80&w=1026&auto=format&fit=crop"
    },
    {
      "day": 7,
      "title": "Manikaran Sahib – Departure",
      "description": "Visit Gurudwara & hot springs before departure.",
      "activities": [
        "Manikaran Sahib Gurudwara",
        "Hot water springs",
        "Departure"
      ],
      image: "https://images.unsplash.com/photo-1675515642414-d99b23e2d95f?q=80&w=735&auto=format&fit=crop"
    }
  ],
  included: [
    "Accommodation as per itinerary",
    "Daily breakfast",
    "AC vehicle transfers",
    "Sightseeing",
    "Solang adventure activities",
    "Local guide support"
  ],
  notIncluded: [
    "Personal expenses",
    "Travel insurance",
    "Flights / trains",
    "Lunch & dinner",
    "Optional activities"
  ],
},
{
  id: 7,
  title: "Char Dham Yatra",
  image: "/assets/images/char-dham.jpg",
  category: "Spiritual",
  rating: 4.9,
  price: 54999,
  duration: "9–10 Days",
  groupSize: "Up to 15 people",
  description: "Embark on the sacred Char Dham Yatra covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Experience divine blessings, scenic Himalayan vistas, and spiritual awakening in this soul-stirring journey.",
  highlights: [
    "Ganga Aarti at Har Ki Pauri, Haridwar",
    "Yamunotri Trek & Hot Springs",
    "Gangotri Dham and Bhagirathi Shila",
    "Kedarnath Jyotirlinga Darshan",
    "Badrinath Dham & Tapt Kund",
    "Scenic drives through Tehri, Alaknanda & Mandakini rivers"
  ],
  itinerary: [
    {
      "day": 1,
      "title": "Arrival at Haridwar / Rishikesh",
      "description": "Reach Haridwar or Rishikesh and prepare for the Yatra.",
      "activities": [
        "Ganga Aarti at Har Ki Pauri",
        "Rest & yatra briefing",
        "Overnight stay at Haridwar / Rishikesh"
      ],
      image: "https://images.unsplash.com/photo-1687735175748-a19b5adb7591?q=80&w=1375&auto=format&fit=crop"
    },
    {
      "day": 2,
      "title": "Haridwar / Rishikesh → Barkot",
      "description": "Drive to Barkot, base for Yamunotri trek.",
      "activities": [
        "Drive (~180 km / 7–8 hrs)",
        "Scenic Yamuna valley views",
        "Overnight stay at Barkot"
      ],
      image: "https://images.unsplash.com/photo-1657077684125-c46749cabed2?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 3,
      "title": "Barkot → Yamunotri → Barkot",
      "description": "Trek to Yamunotri Dham and experience holy rituals.",
      "activities": [
        "Drive to Janki Chatti",
        "6 km trek to Yamunotri (pony/palki available)",
        "Visit Yamunotri Dham – source of River Yamuna",
        "Surya Kund (hot spring) & Divya Shila",
        "Return to Barkot for overnight stay"
      ],
      image: "https://images.unsplash.com/photo-1695236547282-7f927fe12197?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 4,
      "title": "Barkot → Uttarkashi",
      "description": "Travel to Uttarkashi, the spiritual town on Bhagirathi River.",
      "activities": [
        "Drive (~100 km / 4–5 hrs)",
        "Visit Vishwanath Temple & Shakti Temple",
        "Overnight stay at Uttarkashi"
      ],
      image: "https://images.unsplash.com/photo-1664853311988-9ee6f316e185?q=80&w=1074&auto=format&fit=crop"
    },
    {
      "day": 5,
      "title": "Uttarkashi → Gangotri → Uttarkashi",
      "description": "Visit Gangotri Dham and explore nearby spiritual landmarks.",
      "activities": [
        "Drive (~100 km one way / 4 hrs)",
        "Gangotri Temple – origin of River Ganga",
        "Bhagirathi Shila & Pandava Gufa",
        "Return to Uttarkashi for overnight stay"
      ],
      image: "https://images.unsplash.com/photo-1668160747331-4275e35f0713?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 6,
      "title": "Uttarkashi → Guptkashi / Phata",
      "description": "Long drive through Tehri region to Guptkashi / Phata.",
      "activities": [
        "Drive (~220 km / 8–9 hrs)",
        "Scenic views of Alaknanda & Mandakini rivers",
        "Overnight stay at Guptkashi / Phata"
      ],
      image: "https://images.unsplash.com/photo-1709623868300-e3b78cad10e1?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 7,
      "title": "Guptkashi → Kedarnath",
      "description": "Trek or helicopter to Kedarnath Dham.",
      "activities": [
        "Drive to Gaurikund",
        "16 km trek to Kedarnath (helicopter optional)",
        "Visit Kedarnath Jyotirlinga – altitude 3,583 m",
        "Overnight stay at Kedarnath"
      ],
      image: "https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?q=80&w=677&auto=format&fit=crop"
    },
    {
      "day": 8,
      "title": "Kedarnath → Guptkashi",
      "description": "Morning darshan at Kedarnath and return to Guptkashi.",
      "activities": [
        "Early morning Abhishek & Darshan",
        "Return trek / helicopter to Gaurikund",
        "Drive back to Guptkashi",
        "Overnight stay at Guptkashi"
      ],
      image: "https://images.unsplash.com/photo-1666688434599-70659872cb22?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 9,
      "title": "Guptkashi → Badrinath",
      "description": "Drive to Badrinath Dham via scenic towns.",
      "activities": [
        "Drive (~200 km / 7–8 hrs)",
        "Visit Joshimath & Vishnuprayag",
        "Overnight stay at Badrinath"
      ],
      image: "https://images.unsplash.com/photo-1729409141463-3dfbf786e756?q=80&w=735&auto=format&fit=crop"
    },
    {
      "day": 10,
      "title": "Badrinath Darshan & Departure",
      "description": "Visit Badrinath Dham and surrounding attractions before departure.",
      "activities": [
        "Badrinath Temple – dedicated to Lord Vishnu",
        "Tapt Kund (hot spring)",
        "Mana Village – last Indian village",
        "Bhim Pul & Vasudhara Falls (time permitting)",
        "Return to Rudraprayag / Srinagar / Haridwar next day"
      ],
      image: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1170&auto=format&fit=crop"
    }
  ],
  included: [
    "Accommodation as per itinerary",
    "Daily breakfast",
    "All local transfers and sightseeing",
    "Experienced Yatra guide",
    "Trek support at Kedarnath (porters/assistants optional)",
    "Helicopter services if opted"
  ],
  notIncluded: [
    "Personal expenses (shopping, snacks, drinks)",
    "Travel insurance",
    "Flights / trains to Haridwar / Rishikesh",
    "Lunch & dinner unless specified",
    "Medical expenses",
    "Optional activities not listed"
  ],
},
  // Add more destinations here
];

const Hero: React.FC = () => {
  const [showEnquireForm, setShowEnquireForm] = useState(false);

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("Duration");
  const [budget, setBudget] = useState("Budget");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Get unique destination titles for suggestions
  const destinationSuggestions = destinationData.map(dest => dest.title);

  const handleSearch = () => {
    console.log('Search clicked with:', { destination, duration, budget });
    setShowSuggestions(false);
    
    // Find matching destination
    const searchTerm = destination.toLowerCase().trim();
    console.log('Searching for:', searchTerm);
    
    const foundDestination = destinationData.find((dest: any) => 
      dest.title.toLowerCase().includes(searchTerm)
    );
    
    console.log('Found destination:', foundDestination);
    
    if (foundDestination) {
      // Store searched destination in sessionStorage
      sessionStorage.setItem('searchedDestination', JSON.stringify(foundDestination));
      console.log('Stored in sessionStorage:', foundDestination.title);
      console.log('Stored destination object:', foundDestination);
      
      // Verify it was stored
      const stored = sessionStorage.getItem('searchedDestination');
      console.log('Verification - stored data:', stored);
      
      // Navigate to destinations section
      handleExploreMore();
      
      // Wait for scroll to complete, then trigger modal
      setTimeout(() => {
        console.log('Attempting to open modal after scroll...');
        // Try to open modal directly by dispatching custom event
        const event = new CustomEvent('openDestinationModal', { detail: foundDestination });
        window.dispatchEvent(event);
      }, 1000); // 1 second delay for scroll completion
    } else {
      alert('Destination not found. Showing all destinations.');
      handleExploreMore();
    }
  };

  const handleExploreMore = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClear = () => {
    setDestination("");
    setDuration("Duration");
    setBudget("Budget");
  };

  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Discover Your Next Adventure</h1>
        <p className="hero-subtitle">
          Explore breathtaking destinations around the world with exclusive deals
        </p>

        {/* SEARCH CARD */}
        <div className="search-card">
          <div className="search-input-group">
            <span>📍</span>
            <input
              type="text"
              placeholder="Enter destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="search-input-group">
            <span>📅</span>
            <select value={duration} onChange={(e) => setDuration(e.target.value)}>
              <option>Duration</option>
              <option>1-3 Days</option>
              <option>4-5 Days</option>
              <option>5-7 Days</option>
              <option>7-10 Days</option>
            </select>
          </div>

          <div className="search-input-group">
            <span>₹</span>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option>Budget</option>
              <option>Under ₹20,000</option>
              <option>₹20,000 - ₹50,000</option>
              <option>₹50,000 - ₹1,00,000</option>
              <option>Above ₹1,00,000</option>
            </select>
          </div>

          <div className="search-button-group">
            <button className="btn-search" onClick={handleSearch}>
              Search
            </button>
            <button className="btn-clear" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="hero-actions">
          <button
            className="btn-primary"
            onClick={handleExploreMore}
          >
            Explore More →
          </button>

          <button className="btn-outline" onClick={() => setShowEnquireForm(true)}>
            💬 Enquire Now
          </button>
        </div>
      </div>

      {/* ENQUIRE FORM */}
      <EnquireForm
        isOpen={showEnquireForm}
        onClose={() => setShowEnquireForm(false)}
      />
    </section>
  );
};

export default Hero;
