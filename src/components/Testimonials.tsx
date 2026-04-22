import { StarIcon } from './ui/Icons';

export default function Testimonials() {
  const testimonials = [
    {
      text: "I have been in counseling most of my adult life and I would like to say that no other approach has been as profound in my life as what I have learned working with Bob. The 'belief exploration process' that I have acquired in my experience with working with Bob has changed my life dramatically. Today I am a much healthier individual due to exploration of myself and my beliefs through the process that Bob helped me implement in my life. I am forever grateful that I am a healthier and happier me.",
      author: "K. L.",
      role: "Homemaker"
    },
    {
      text: "When I came to Bob, I was so mired in my own misery, shame and self-doubt that I had convinced myself that I had no choice in life. I believed that I deserved to feel terrible and allowed others to 'make me feel bad'. I was sure that I was a lost cause. I was wrong. The belief exploration process showed me that I always have a choice. It is up to me how I respond to the stimuli in my life and that doesn't make me a doormat; it empowers me! Bob has been my guide, my mentor, in the process of rediscovering my life. He has helped me to see that what happens in life isn't good or bad, it just is. It is up to me to give it meaning. How powerful is that? Nothing can have power over me unless I allow it. This is truly the best time of my life.",
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
