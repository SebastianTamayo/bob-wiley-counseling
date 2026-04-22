import Link from 'next/link';

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container about-container">
        <div className="about-credentials-side">
          <div className="credentials-card">
            <h3 className="credentials-title">Credentials</h3>
            <ul className="credentials-list">
              <li><span className="check">✓</span> MA in Counseling</li>
              <li><span className="check">✓</span> Licensed Mental Health Counselor (LMHC)</li>
              <li><span className="check">✓</span> Certified Substance Abuse Counselor (CSAC)</li>
              <li><span className="check">✓</span> 29+ years of experience</li>
              <li><span className="check">✓</span> Author of <em>Life is Easier Than You THINK</em></li>
              <li><span className="check">✓</span> Trained in Option Process Dialogue®</li>
            </ul>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">About Bob Wiley</h2>
          <div className="about-bio">
            <p>
              I believe that successful living comes from unconditional self-love and non-judgmental self-ownership. For over 29 years, I have been helping individuals from all walks of life discover this truth for themselves.
            </p>
            <p>
              My own journey of personal growth led me to the profound teachings of Barry Neil Kaufman and the Option Institute. What I discovered transformed not only my life but my entire approach to helping others.
            </p>
            <p>
              I am passionate and excited about the therapeutic work I do with each individual I see. I work to build a safe, trusting and honest therapeutic relationship where genuine exploration can happen.
            </p>
            <p>
              My role is not to fix you—because there is nothing wrong with you. My role is to ask the questions that help you uncover your own wisdom, discover your own clarity, and access your own power to create the life you truly want.
            </p>
            <h3 className="credentials-title">Credentials</h3>
            <ul className="about-creds-list">
              <li><span className="check-icon">✓</span> MA in Counseling</li>
              <li><span className="check-icon">✓</span> Licensed Mental Health Counselor (LMHC)</li>
              <li><span className="check-icon">✓</span> Certified Substance Abuse Counselor (CSAC)</li>
              <li><span className="check-icon">✓</span> 29+ years of experience</li>
              <li><span className="check-icon">✓</span> Author of <em>Life is Easier Than You THINK</em></li>
              <li><span className="check-icon">✓</span> Trained in Option Process Dialogue®</li>
            </ul>
          </div>
          
          <div className="about-cta-centered">
            <Link href="#hero" className="btn btn-primary btn-lg">Book a consult</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
