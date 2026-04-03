import Link from 'next/link';
import { Button } from './ui/Button';
import { CheckCircle, CrossCircle } from './ui/Icons';

export default function Comparison() {
  return (
    <section className="section section-alt" id="what-to-expect">
      <div className="container comparison-container">
        <div className="comparison-content">
          <p className="kicker">TRANSFORMATION, NOT JUST TALKING</p>
          <h2 className="section-title">A Different Way Forward</h2>
          <p className="section-desc">
            Most traditional therapy goes like this: You show up, vent about your week,
            and leave feeling a little lighter—but nothing really changes. We focus on identifying
            the root patterns and core beliefs that keep you stuck, so you can experience
            true momentum and transform how you experience your life.
          </p>
          <div className="comparison-cta">
            <Link href="#hero" className="btn btn-dark">Book a consult</Link>
          </div>
        </div>

        <div className="comparison-cards">
          <div className="card card-traditional">
            <h3 className="card-title">Typical Counseling...</h3>
            <ul className="cross-list">
              <li><CrossCircle className="icon-cross" /> Focusing heavily on diagnosing you with a label</li>
              <li><CrossCircle className="icon-cross" /> Relying purely on talk therapy without tools</li>
              <li><CrossCircle className="icon-cross" /> Endless exploration of the past without clear steps forward</li>
              <li><CrossCircle className="icon-cross" /> Feeling like you're stuck in the same cycles of feeling</li>
            </ul>
          </div>
          <div className="card card-modern">
            <div className="card-accent" />
            <h3 className="card-title text-primary">Imagine instead...</h3>
            <ul className="check-list">
              <li><CheckCircle className="icon-check" /> Identifying precisely why you feel the way you do</li>
              <li><CheckCircle className="icon-check" /> Learning the mechanics of how your mind works</li>
              <li><CheckCircle className="icon-check" /> Practical exercises for immediate relief</li>
              <li><CheckCircle className="icon-check" /> A proven system mapped to your specific challenges</li>
              <li><CheckCircle className="icon-check" /> Finally mastering your personal state of mind and finding a sense of well-being</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
