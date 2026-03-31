"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';

export default function LeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'ebook-download');
    await submitLead(formData);
    setIsSubmitting(false);
    setSuccess(true);
  }
  return (
    <section className="section section-alt" id="resources">
      <div className="container magnet-container">
        <div className="magnet-image">
          <img src="/images/ebook-cover.jpg" alt="Your Key to Personal Happiness E-Book Cover" className="magnet-image-el" />
        </div>
        
        <div className="magnet-content">
          <p className="kicker">FREE E-BOOK</p>
          <h2 className="section-title">A Guide to Understand Yourself from the Inside Out</h2>
          <p className="section-desc">
            You are not fundamentally flawed. The frustration you are feeling points toward an incomplete map of who you are. This e-book gives you a complete picture so you can start removing the blocks preventing your happiness.
          </p>
          
          <ul className="check-list">
            <li><CheckCircle className="icon-check" /> Discover why traditional methods only scratch the surface</li>
            <li><CheckCircle className="icon-check" /> Learn the secret to completely shifting how you naturally perceive stressors</li>
            <li><CheckCircle className="icon-check" /> Replace limiting beliefs without forcing "positive thinking" paradigms</li>
            <li><CheckCircle className="icon-check" /> Reclaim the calm and centered perspective you've been looking for</li>
          </ul>

          {success ? (
            <div className="form-success-alert">
              <h4>E-Book Sent!</h4>
              <p>Check your inbox in a few minutes for the download link.</p>
            </div>
          ) : (
            <form className="magnet-form" onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 250px' }}>
                <Input type="email" name="email" placeholder="Your best email address" required style={{ marginBottom: 0 }} />
              </div>
              <Button variant="outline" type="submit" className="btn-danger-outline" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Get the free E-book'}
              </Button>
            </form>
          )}
          <p className="form-disclaimer">We will never spam you and you can unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}
