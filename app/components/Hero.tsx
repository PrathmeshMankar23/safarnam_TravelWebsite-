"use client";

import React, { useState } from "react";
import EnquireForm from './EnquireForm';

// Destination data - matching Destinations component
const destinationData = [
  {
    id: 1,
    title: "Swiss Alps Adventure",
    category: "Adventure",
    rating: 4.9,
    price: "₹1,07,907/per person",
    img: "/assets/images/download.jpg",
    duration: "7 Days / 6 Nights",
    groupSize: "12 Pax",
    about: "A thrilling journey through Swiss Alps covering iconic peaks, charming villages, and unforgettable alpine experiences.",
    highlights: [
      "Paragliding over Interlaken",
      "Jungfraujoch – Top of Europe",
      "Matterhorn viewpoint"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Zurich – Transfer to Interlaken",
        desc: "Arrive in Zurich and enjoy scenic rail journey.",
        image: "/assets/images/shimla&manali.jpeg",
        activities: [
          'Airport welcome and assistance',
          'Scenic train ride through Swiss countryside',
          'Check-in to Alpine chalet',
          'Welcome dinner with Swiss specialties'
        ]
      }
    ],
    included: ["Hotel accommodation", "Daily breakfast", "Professional guide"],
    notIncluded: ["Flights", "Lunch & dinner", "Insurance"]
  },
  {
    id: 2,
    title: "Manali Scenic Escape",
    category: "Mountains",
    rating: 4.7,
    price: "₹67,000/per person",
    img: "/assets/images/manali.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "15 Pax",
    about: "Discover the breathtaking beauty of Manali with snow-capped mountains, ancient temples, and adventure activities.",
    highlights: [
      "Solang Valley",
      "Rohtang Pass",
      "Hadimba Temple"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Manali – Arrival & Mall Road",
        desc: "Begin your journey from Chandigarh to Manali with a scenic mountain drive.",
        image: "/assets/images/shimla&Manali_1.jpeg",
        activities: [
          'Scenic drive from Chandigarh to Manali',
          'Check-in to hotel and refresh',
          'Evening stroll on Mall Road',
          'Dinner at a local restaurant'
        ]
      }
    ],
    included: ["Hotel accommodation", "Daily breakfast", "Transportation", "Sightseeing"],
    notIncluded: ["Adventure sports", "Lunch & dinner", "Personal expenses"]
  },
  {
    id: 3,
    title: "Delhi – Churdhar – Shimla Adventure",
    category: "Adventure",
    rating: 4.8,
    price: "₹18,999 / per person",
    img: "https://images.unsplash.com/photo-1609232529165-da44951373fa?q=80&w=735&auto=format&fit=crop",
    duration: "6 Days / 5 Nights",
    groupSize: "12 Pax",
    about: "Experience the untouched beauty of Himachal Pradesh with this adventurous Churdhar trek combined with leisure time in Shimla.",
    highlights: [
      "Trek to Churdhar Peak (3650 m)",
      "Stay in scenic mountain camps",
      "Bonfire & candlelight dinner under the stars"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Solan – Overnight Journey",
        desc: "Start your adventure with an overnight Volvo bus journey from Delhi to Solan.",
        image: "https://images.unsplash.com/photo-1612380635197-a025736ddba1?q=80&w=1170&auto=format&fit=crop",
        activities: [
          "Evening departure from Delhi",
          "Overnight Volvo bus journey",
          "Scenic mountain road travel"
        ]
      }
    ],
    included: ["Accommodation in camps/hotels", "All meals during trek", "Transportation", "Trek guide"],
    notIncluded: ["Adventure activities", "Personal expenses", "Insurance"]
  },
  {
    id: 4,
    title: "Churdhar Trek Adventure",
    category: "Trekking",
    rating: 4.8,
    price: "₹18,999 / per person",
    img: "/assets/images/churdhar.jpg",
    duration: "4 Days / 3 Nights",
    groupSize: "12 Pax",
    about: "A challenging trek to the sacred Churdhar Peak, offering breathtaking Himalayan views and spiritual experiences.",
    highlights: [
      "Churdhar Peak summit (3650m)",
      "Forest trails and alpine meadows",
      "Mountain camping experience"
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Pab | Trek to Jiunthi",
        desc: "Drive from Chandigarh to Pab followed by an acclimatization trek to Jiunthi village.",
        image: "/assets/images/churdhar-day1.jpg",
        activities: [
          'Scenic drive to Pab',
          'Acclimatization trek to Jiunthi',
          'Camping setup and dinner'
        ]
      }
    ],
    included: ["Trekking guide", "Camping equipment", "All meals", "Transportation"],
    notIncluded: ["Personal expenses", "Insurance", "Porter services"]
  },
  {
    id: 5,
    title: "Churdhar Peak Trek Expedition",
    category: "Trekking",
    rating: 4.9,
    price: "₹22,999 / per person",
    img: "/assets/images/churdhar-peak.jpg",
    duration: "5 Days / 4 Nights",
    groupSize: "10 Pax",
    about: "An extended expedition to Churdhar Peak with comprehensive trekking experience and cultural immersion.",
    highlights: [
      "Extended Churdhar trek",
      "Cultural village visits",
      "Professional trekking support"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Chandigarh",
        desc: "Arrive in Chandigarh, check in at the hotel, and prepare for the trek ahead.",
        image: "/assets/images/chandigarh.jpg",
        activities: [
          'Airport pickup and transfer',
          'Hotel check-in and briefing',
          'Trek preparation and gear check'
        ]
      }
    ],
    included: ["Professional guide", "All accommodation", "Meals", "Transportation", "Camping gear"],
    notIncluded: ["Personal expenses", "Insurance", "Alcoholic beverages"]
  },
  {
    id: 6,
    title: "Shimla – Manali – Kasol Adventure",
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
      "Kasol riverside camping & cafes"
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimla Arrival & Local Sightseeing",
        description: "Arrive in Shimla and explore the colonial charm and scenic beauty.",
        activities: [
          "Mall Road exploration",
          "Jakhu Temple visit",
          "Kufri day trip",
          "Evening at The Ridge"
        ]
      }
    ],
    included: [
      "Transportation (AC vehicle)",
      "Hotel accommodation (3-star)",
      "Daily breakfast",
      "Sightseeing as per itinerary",
      "Driver allowances"
    ],
    notIncluded: [
      "Personal expenses (snacks, alcohol, etc.)",
      "Medical expenses if any",
      "Travel insurance",
      "Meals not mentioned in inclusions"
    ]
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
