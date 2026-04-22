import Link from 'next/link';
import { Button } from './ui/Button';
import { CheckCircle, CrossCircle } from './ui/Icons';

export default function Comparison() {
  return (
    <section className="section section-alt" id="what-to-expect">
      <div className="container">
        <div className="comparison-grid">
          <div className="comparison-content">
            <p className="kicker">TRANSFORMATION, NOT JUST TALKING</p>
            <h2 className="section-title">A Different Way Forward</h2>
            <p className="section-desc">
              Most approaches focus on managing symptoms. I help you discover and transform the beliefs creating those symptoms.
            </p>
          </div>

          <div className="comparison-cards">
            <div className="card card-traditional reveal">
              <h3 className="card-title">Are You Experiencing...</h3>
              <ul className="cross-list">
                <li><CrossCircle className="icon-cross" /> Anxiety that won't let you rest</li>
                <li><CrossCircle className="icon-cross" /> Feeling stuck in the same patterns</li>
                <li><CrossCircle className="icon-cross" /> Relationship difficulties</li>
                <li><CrossCircle className="icon-cross" /> Depression and emotional exhaustion</li>
                <li><CrossCircle className="icon-cross" /> Harsh self-criticism and self-doubt</li>
                <li><CrossCircle className="icon-cross" /> Fear of rejection or not being enough</li>
                <li><CrossCircle className="icon-cross" /> The weight of past regrets</li>
                <li><CrossCircle className="icon-cross" /> Worry about the future</li>
                <li><CrossCircle className="icon-cross" /> Feeling like you're barely holding it together</li>
              </ul>
            </div>
            <div className="card card-modern reveal reveal-delay-2">
              <div className="card-accent" />
              <h3 className="card-title text-primary">Imagine Instead...</h3>
              <ul className="check-list">
                <li><CheckCircle className="icon-check-glow" /> <strong>Inner peace and confidence</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Clarity about who you are</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Healthier, more authentic relationships</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Freedom from anxiety and depression</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Self-trust and self-acceptance</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Emotional resilience</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>The ability to handle life's challenges</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Living from the inside out</strong></li>
                <li><CheckCircle className="icon-check-glow" /> <strong>Finally feeling comfortable in your own skin</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="quote-box">
          <p className="quote-text">
            "We do not have to be victims of the events in our world. We can take charge of our lives and provide ourselves with the inner ease and comfort to face all challenges with confidence and clarity."
          </p>
        </div>
      </div>
    </section>
  );
}
