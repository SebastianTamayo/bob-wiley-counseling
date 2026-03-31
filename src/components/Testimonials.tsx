import './Testimonials.css';
import { StarIcon } from './ui/Icons';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I have been in conventional therapy off and on for 20 years. I learned more working with Bob in three months than I did in all my prior therapy. Life is totally different for me now.",
      author: "David M."
    },
    {
      text: "When we started, I was in a downward spiral of anxiety and self-doubt. Bob gave me the tools to understand that I was not 'broken' like I felt, and restored my trust in myself. I'm taking charge of my life again.",
      author: "Sarah L."
    },
    {
      text: "Bob is a deeply empathetic and intuitive guide. He helped me shift my mindset and I'm experiencing a profound level of peace and fulfillment I didn't think was possible anymore.",
      author: "Michael T."
    }
  ];

  return (
    <section className="section section-alt">
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
              <p className="test-author">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
