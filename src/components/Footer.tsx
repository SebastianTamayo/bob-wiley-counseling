import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-link">
              <img src="/images/logo.png" alt="Bob Wiley Counseling" className="footer-logo-img" />
            </Link>
            <p className="footer-mission">
              Dedicated to helping you find personal happiness and transformation through structured, compassionate counseling.
            </p>
          </div>
          
          <div className="footer-links-wrapper">
            <div className="footer-col">
              <nav className="footer-nav">
                <Link href="#hero" className="footer-cta-link">Schedule a Free Consult</Link>
              </nav>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Links</h4>
              <nav className="footer-nav">
                <Link href="/">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#what-to-expect">What to Expect</Link>
                <Link href="#consult">Request a Consult</Link>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Bob Wiley Counseling. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
