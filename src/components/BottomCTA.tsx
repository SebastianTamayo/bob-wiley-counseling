"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';

export default function BottomCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'bottom-cta-consultation');
    await submitLead(formData);
    setIsSubmitting(false);
    setSuccess(true);
  }
  return (
    <section className="section section-cta" id="consult">
      <div className="container cta-container">
        <div className="cta-content">
          <h2 className="section-title text-white">Ready for an empowered next chapter?</h2>
          <p className="cta-desc text-white-alpha">
            Book a free 20-minute consult to see if working together feels right. We'll talk about what you're dealing with, our approach, and outline the next steps.
          </p>
          
          <ul className="cta-benefits text-white">
            <li><CheckCircle className="check-icon accent-icon" /> 20 minutes to share what's going on</li>
            <li><CheckCircle className="check-icon accent-icon" /> Learning about my counseling process</li>
            <li><CheckCircle className="check-icon accent-icon" /> A concrete roadmap for your success</li>
          </ul>
        </div>
        
        <div className="cta-form-card">
          <h3 className="form-card-title">Book your consult</h3>
          <p className="form-card-desc">Please fill out the brief form below and I will be in touch shortly.</p>
          {success ? (
            <div className="form-success-alert">
              <h4>Consultation Booked!</h4>
              <p>We've received your request and will contact you shortly to confirm the time.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <Input name="name" placeholder="First and Last Name" required />
              <Input type="email" name="email" placeholder="Email Address" required />
              <Button variant="outline" type="submit" className="form-submit-btn btn-danger-outline" disabled={isSubmitting}>
                {isSubmitting ? 'Requesting...' : 'Request my Consult'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
