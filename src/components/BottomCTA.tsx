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
          <p className="hero-kicker text-white opacity-80 mb-2">THERE IS NOTHING WRONG WITH YOU</p>
          <h2 className="section-title text-white">Take That Hardest First Step</h2>
          <p className="cta-desc text-white opacity-90 leading-relaxed max-w-xl mb-8">
            Book a free 20-minute consult to see if working together feels right. We'll talk about what you're dealing with, our approach, and outline the next steps.
          </p>
          
          <ul className="cta-benefits text-white space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sky-200" />
              <span>20 minutes to share what's going on</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sky-200" />
              <span>Learning about my counseling process</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-sky-200" />
              <span>A concrete roadmap for your success</span>
            </li>
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
