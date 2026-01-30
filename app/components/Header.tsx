import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="logo">
        <img src="/assets/images/Eazy-Travels.png" alt="Eazy Travels" className="logo-image" />
      </div>
      <nav className="nav-links">
        {/* These must match the 'id' attributes in your sections */}
        <Link href="#hero">Home</Link>
        <Link href="#destinations">Destinations</Link>
        <Link href="#about">About</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;