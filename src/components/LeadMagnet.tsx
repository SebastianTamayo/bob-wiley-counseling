"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';

export default function LeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'ebook-download');
    try {
      const result = await submitLead(formData);
      setIsSubmitting(false);
      if (result && result.success) {
        setSuccess(true);
      } else {
        setErrorMsg(result?.message || "Please check your inputs and try again.");
      }
    } catch (err) {
      setIsSubmitting(false);
      setErrorMsg("A network error occurred. Please try again.");
    }
  }
  return (
    <section className="section" id="resources">
      <div className="container magnet-container">
        <div className="magnet-image">
          <img src="/images/ebook-cover.jpg" alt="Free Counseling E-Book: Your Key to Personal Happiness by Bob Wiley" className="magnet-image-el" />
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
            <form className="magnet-form" onSubmit={handleSubmit}>
              <input type="text" name="_botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {errorMsg && <div className="form-error-alert" style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{errorMsg}</div>}
              <div className="magnet-input-group" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Input name="name" placeholder="Full Name" required className="magnet-input" />
                <Input type="email" name="email" placeholder="Your best email address" required className="magnet-input" />
              </div>
              <Button variant="outline" type="submit" disabled={isSubmitting}>
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
