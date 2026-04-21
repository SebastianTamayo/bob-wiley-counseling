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
            Most counseling focuses on managing your reactions. We focus on the internal mechanics that create them. 
            By understanding the <strong>Stimulus - Belief - Response</strong> model, we uncover the hidden beliefs 
            mediating your experience, giving you the power to transform your response and find lasting peace.
          </p>
          <div className="comparison-cta">
            <Link href="#hero" className="btn btn-dark">Book a consult</Link>
          </div>
        </div>

        <div className="comparison-cards">
          <div className="card card-traditional">
            <h3 className="card-title">Are you experiencing...</h3>
            <ul className="cross-list">
              <li><CrossCircle className="icon-cross" /> Anxiety that won't let you rest</li>
              <li><CrossCircle className="icon-cross" /> Feeling stuck in the same cycles</li>
              <li><CrossCircle className="icon-cross" /> Heavy burden of self-doubt</li>
              <li><CrossCircle className="icon-cross" /> Traditional therapy hasn't worked</li>
            </ul>
          </div>
          <div className="card card-modern">
            <div className="card-accent" />
            <h3 className="card-title text-primary">Imagine instead...</h3>
            <ul className="check-list">
              <li><CheckCircle className="icon-check" /> Waking with inner peace and confidence</li>
              <li><CheckCircle className="icon-check" /> Accepting yourself completely, without judgment</li>
              <li><CheckCircle className="icon-check" /> Breaking free from old patterns permanently</li>
              <li><CheckCircle className="icon-check" /> Creating authentic, loving connections</li>
              <li><CheckCircle className="icon-check" /> Letting go of the need to control</li>
              <li><CheckCircle className="icon-check" /> Taking full ownership of your experience</li>
              <li><CheckCircle className="icon-check" /> Experiencing transformation, not just coping</li>
              <li><CheckCircle className="icon-check" /> Living from a place of genuine happiness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
