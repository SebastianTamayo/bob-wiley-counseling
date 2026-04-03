"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';
import './Hero.css';

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'hero-consultation');
    await submitLead(formData);
    setIsSubmitting(false);
    setSuccess(true);
  }
  return (
    <section className="hero-section section-alt" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-kicker">HELPING YOU FIND A BETTER WAY TO LIVE</p>
          <h1 className="hero-title">There Is Nothing Wrong With You</h1>
          <p className="hero-subtitle">
            Life is easier than you think. Together, we'll discover the beliefs that keep you stuck, 
            giving you a clear path out and transforming how you see the world through the lens of 'awesomeness'.
          </p>
          
          <ul className="hero-benefits">
            <li><CheckCircle className="icon-check" /> Overcome anxiety and restore inner peace</li>
            <li><CheckCircle className="icon-check" /> Feel heard, validated, and understood</li>
            <li><CheckCircle className="icon-check" /> Build habits that build true resilience</li>
            <li><CheckCircle className="icon-check" /> Find the "Missing Key" to personal happiness</li>
          </ul>

          <div className="hero-ctas">
            <Button variant="outline">See my free guide</Button>
          </div>
        </div>

        <div className="hero-form-card">
          <h3 className="form-card-title"><strong>Request your free consult.</strong></h3>
          <p className="form-card-desc">Fill out the brief form below and I will get back to you within one business day.</p>
          
          {success ? (
            <div className="form-success-alert">
              <h4>Request Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="hero-form" onSubmit={handleSubmit}>
              <Input name="name" placeholder="First and Last Name" required />
              <Input type="email" name="email" placeholder="Email Address" required />
              <Button variant="outline" type="submit" className="form-submit-btn btn-danger-outline" disabled={isSubmitting}>
                {isSubmitting ? 'Requesting...' : 'Schedule a Free Consult'}
              </Button>
            </form>
          )}
          
          <p className="form-disclaimer">We promise to never rent, share, or sell your information.</p>
        </div>
      </div>
    </section>
  );
}
