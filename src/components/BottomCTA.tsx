"use client";

import { useState } from 'react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';

export default function BottomCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'bottom-cta-consultation');
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
          <h3 className="form-card-title">Are you ready for change?</h3>
          <p className="form-card-desc">Fill out the brief form below and I will get back to you within one business day.</p>
          {success ? (
            <div className="form-success-alert">
              <h4>Request Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input type="text" name="_botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {errorMsg && <div className="form-error-alert" style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{errorMsg}</div>}
              <Input name="name" placeholder="First and Last Name" required />
              <Input type="email" name="email" placeholder="Email Address" required />
              <textarea 
                name="details" 
                placeholder="What best describes the challenges you are facing?"
                className="input-field" 
                rows={3} 
                style={{ width: '100%', marginBottom: '1rem', resize: 'vertical' }}
              />
              <Button variant="outline" type="submit" className="form-submit-btn btn-danger-outline" disabled={isSubmitting}>
                {isSubmitting ? 'Requesting...' : 'Schedule a Free Consult'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
