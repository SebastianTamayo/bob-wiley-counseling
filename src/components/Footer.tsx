import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link href="/" className="footer-brand-link">
            <img src="/images/logo.png" alt="Bob Wiley Counseling" className="footer-logo-img" />
          </Link>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Bob Wiley Counseling. All rights reserved.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <nav className="footer-nav">
            <a href="mailto:hello@bobwileycounseling.com">hello@bobwileycounseling.com</a>
            <a href="tel:+15551234567">(555) 123-4567</a>
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
    </footer>
  );
}
