import { StarIcon } from './ui/Icons';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I have been in counseling most of my adult life and I would like to say that no other approach has been as profound in my life as what I have learned working with Bob. The 'belief exploration process' that I have acquired... has changed my life dramatically.",
      author: "K. L.",
      role: "Homemaker"
    },
    {
      text: "When I came to Bob, I was so mired in my own misery, shame and self-doubt... The belief exploration process showed me that I always have a choice. Bob has been my guide, my mentor, in the process of rediscovering my life.",
      author: "D. M.",
      role: "Teacher"
    },
    {
      text: "The belief exploration process is something that has changed my life, allowing me to look at the truth behind my false pain and giving me a new perspective within which to live my life. Now I have a process that allows choice.",
      author: "E. L.",
      role: "Healing Arts Professional"
    }
  ];

  return (
    <section className="section" id="testimonials">
      <div className="container test-container">
        <div className="test-header">
          <p className="kicker">CLIENT STORIES</p>
          <h2 className="section-title">"I finally feel like I have room to breathe."</h2>
        </div>
        
        <div className="test-grid">
          {testimonials.map((t, idx) => (
            <div key={idx} className="test-card">
              <div className="test-stars">
                <StarIcon className="icon-star" />
                <StarIcon className="icon-star" />
                <StarIcon className="icon-star" />
                <StarIcon className="icon-star" />
                <StarIcon className="icon-star" />
              </div>
              <p className="test-text">"{t.text}"</p>
              <div className="test-meta">
                <p className="test-author">— {t.author}</p>
                <p className="test-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
