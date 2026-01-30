"use client";

import React, { useState } from 'react';
import { X } from "lucide-react";

interface EnquireFormProps {
  isOpen: boolean;
  onClose: () => void;
  destinationTitle?: string;
}

const EnquireForm: React.FC<EnquireFormProps> = ({ isOpen, onClose, destinationTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry submitted:', { ...formData, destination: destinationTitle });
    alert("Enquiry Sent! We'll contact you soon.");
    onClose();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="enquire-overlay">
      <div className="enquire-modal">
        <button className="close-enquire" onClick={onClose}>
          <X size={22} />
        </button>

        <h2>Enquire for {destinationTitle || 'Your Trip'}</h2>

        <form className="enquire-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="message"
            placeholder="Tell us about your trip..."
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
          />

          <button type="submit" className="submit-enquiry">
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquireForm;
