import { Button } from './ui/Button';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img src="/images/bob-headshot.jpg" alt="Bob Wiley, MA, LMHC, CSAT - Professional Counseling and Therapy" className="about-image-el" />
        </div>
        
        <div className="about-content">
          <p className="kicker">MEET BOB</p>
          <h2 className="section-title">A trusted guide for turning insight into lasting change.</h2>
          <p className="section-desc">
            My name is Bob Wiley and for the past 20+ years, I've been helping people find their way out of a state of survival, to a state of thrival. As a licensed mental health counselor and certified life coach, I specialize in working with individuals navigating anxiety, relationship issues, and the heavy burden that comes with self-doubt and feeling stuck.
          </p>
          <p className="section-desc">
            My approach goes beyond just listening. I will give you the framework to understand how you are built, why you react the way you do, and equip you to shift your core self so you don't need therapy forever.
          </p>
          
          <ul className="about-creds">
            <li><span className="check-icon">✓</span> Licensed Mental Health Counselor (LMHC)</li>
            <li><span className="check-icon">✓</span> Over two decades of experience helping individuals</li>
            <li><span className="check-icon">✓</span> Certified Clinical Anxiety Professional</li>
          </ul>
          
          <div className="about-cta">
            <Button variant="primary">Book a consult</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
