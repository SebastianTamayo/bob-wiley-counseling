import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Bob Wiley Counseling" className="navbar-logo-img" />
        </Link>
        <nav className="navbar-nav desktop-nav">
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#resources" className="nav-link">Free Resources</Link>
          <Link href="#consult" className="btn btn-primary btn-sm">Book Consult</Link>
        </nav>
        {/* Mobile menu button would go here */}
      </div>
    </header>
  );
}
