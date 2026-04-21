"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { submitLead } from '../app/actions';
import { CheckCircle } from './ui/Icons';
import './Hero.css';

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    const formData = new FormData(e.currentTarget);
    formData.append('type', 'hero-consultation');
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
    <section className="hero-section section-alt" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-kicker">THERE IS NOTHING WRONG WITH YOU</p>
          <h1 className="hero-title">The Problem Isn't You. It's What You've Been Taught.</h1>
          <p className="hero-subtitle">
            Life is easier than you think. Together, we’ll uncover the beliefs that have been creating your struggles and discover the inner peace, clarity and confidence you’ve been searching for.
          </p>
          <p className="hero-subtitle" style={{ marginTop: '1rem' }}>
            Most people are struggling not because they're broken, but because they've learned to see themselves and their world in ways that create suffering.
          </p>

          <div className="hero-ctas">
            <Link href="#resources" className="btn btn-primary">Get a free guide (e-book)</Link>
          </div>
        </div>

        <div className="hero-form-card">
          <h3 className="form-card-title"><strong>What best describes the challenges you are facing?</strong></h3>
          <p className="form-card-desc">Fill out the brief form below and I will get back to you within one business day.</p>
          
          {success ? (
            <div className="form-success-alert">
              <h4>Request Sent Successfully!</h4>
              <p>Thank you for reaching out. I'll be in touch soon.</p>
            </div>
          ) : (
            <form className="hero-form" onSubmit={handleSubmit}>
              <input type="text" name="_botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              {errorMsg && <div className="form-error-alert" style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{errorMsg}</div>}
              <Input name="name" placeholder="First and Last Name" required />
              <Input type="email" name="email" placeholder="Email Address" required />
              <textarea 
                name="details" 
                placeholder="Describe areas to focus on" 
                className="input-field" 
                rows={3} 
                style={{ width: '100%', marginBottom: '1rem', resize: 'vertical' }}
              />
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
