import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-brand">Bob Wiley Counseling</h3>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Bob Wiley Counseling. All rights reserved.</p>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <p className="footer-text">hello@bobwileycounseling.com</p>
          <p className="footer-text">(555) 123-4567</p>
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
