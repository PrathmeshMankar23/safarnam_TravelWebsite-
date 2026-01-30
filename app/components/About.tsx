"use client";

import React from "react";

const About: React.FC = () => {
  const handleStartJourney = () => {
    const destinationsSection = document.getElementById('destinations');
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      image: "/assets/images/12345.png",
      bio: "With over 15 years of experience in travel industry, Rajesh founded Safarnama with a vision to make travel accessible to everyone."
    },
    {
      name: "Priya Patel",
      role: "Co-Founder & CTO",
      image: "/assets/images/67890.png",
      bio: "Priya brings her tech expertise to create seamless travel experiences through innovative technology solutions."
    },
    {
      name: "Amit Kumar",
      role: "Head of Operations",
      image: "/assets/images/33333.png",
      bio: "Amit ensures every journey is perfectly executed with attention to detail and customer satisfaction."
    },
    {
      name: "Neha Singh",
      role: "Head of Customer Experience",
      image: "/assets/images/444444.png",
      bio: "Neha leads our customer service team to provide exceptional support throughout your travel journey."
    }
  ];

  const services = [
    { icon: "🛡️", title: "Safe & Secure", desc: "Verified partners & secure payments" },
    { icon: "🏅", title: "Best Price Guarantee", desc: "Best prices with extra discounts" },
    { icon: "🏠", title: "Accommodation", desc: "Local & overseas stays" },
    { icon: "📅", title: "Travel Planning", desc: "Expert planning support" },
    { icon: "🎧", title: "24/7 Support", desc: "Always available for you" }
  ];

  const reviews = [
    { name: "Sarah Johnson", loc: "New York", initial: "SJ", text: "Amazing travel experience!" },
    { name: "Michael Chen", loc: "Singapore", initial: "MC", text: "Perfectly organized Paris trip." },
    { name: "Emma Williams", loc: "London", initial: "EW", text: "Best value Bali package." }
  ];

  return (
    <div id="about" className="about-page-wrapper">
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Safarnama</h1>
          <p>Your trusted travel partner for unforgettable adventures around the world</p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h3>How It All Began</h3>
            <p>
              Safarnama was born in 2018 from a simple observation: travel should be effortless, enriching, and accessible to everyone. Our founder, Rajesh Sharma, experienced firsthand the challenges of planning complex international trips and realized there was a better way.
            </p>
            <p>
              What started as a small team of passionate travelers in a tiny office has now grown into a thriving community of over 50,000 happy travelers. We've helped people explore destinations across 6 continents, creating memories that last a lifetime.
            </p>
            <p>
              Today, Safarnama stands as a testament to the power of dreams and the magic of travel. We're not just a travel company; we're a family of explorers, storytellers, and adventure seekers who believe that the world is meant to be discovered.
            </p>
          </div>
          <div className="story-stats">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-item">
              <h3>2018</h3>
              <p>Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAFARNAMA (OLD SERVICES SECTION) */}
      <section className="services-section">
        <div className="destinations-header">
          <h2>Why Choose Safarnama?</h2>
          <p>We make your travel dreams come true</p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-item">
              <div className="service-icon-box">{s.icon}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="team-section">
        <div className="destinations-header">
          <h2>Meet Our Team</h2>
          <p>The passionate people behind your perfect journeys</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="member-info">
                <h4>{member.name}</h4>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <div className="destinations-header">
          <h2>What Our Travelers Say</h2>
          <p>Join thousands of happy travelers</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div key={i} className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"{r.text}"</p>
              <div className="reviewer">
                <div className="reviewer-avatar">{r.initial}</div>
                <div className="reviewer-info">
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-location">{r.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Join thousands of happy travelers who have discovered the world with Safarnama</p>
          <button className="btn-journey" onClick={handleStartJourney}>
            Explore Destinations →
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
