import React from 'react';

const TargetIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
);

const MapIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
);

const ZapIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const SparklesIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);

const ShieldIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const UserCheckIcon = ({ className = "", strokeWidth = 2 }: { className?: string; strokeWidth?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
);

const areas = [
  {
    title: "Root-Cause Focus",
    content: "We don't just treat symptoms. We identify the core beliefs that drive your reactions, creating changes that actually last.",
    icon: TargetIcon
  },
  {
    title: "Mechanics of Mind",
    content: "Learn the 'why' behind how you feel. We give you a clear map (S-B-R) to understand your internal world from the inside out.",
    icon: MapIcon
  },
  {
    title: "Practical Tools",
    content: "Get immediate relief with actionable exercises. You'll leave session with tools you can use right now to shift your state.",
    icon: ZapIcon
  },
  {
    title: "Transformation, Not Coping",
    content: "Conventional therapy often helps you 'manage' pain. This work is about transforming your baseline state into one of peace.",
    icon: SparklesIcon
  },
  {
    title: "Structured System",
    content: "Avoid aimless talk therapy. Our approach is a proven, step-by-step system specifically mapped to your unique challenges.",
    icon: ShieldIcon
  },
  {
    title: "Sustainable Change",
    content: "My goal is to put myself out of a job. I equip you with the skills to be your own guide, so you don't need therapy forever.",
    icon: UserCheckIcon
  }
];

export default function Differentiation() {
  return (
    <section className="section" id="what-makes-it-different">
      <div className="container">
        <div className="text-center mb-16">
          <p className="kicker">WHY THIS IS DIFFERENT</p>
          <h2 className="section-title">What Makes This Work Different</h2>
          <p className="section-desc mx-auto">
            Traditional therapy often focuses on the past or managing the present. 
            We focus on shifting your future by changing how you perceive the world.
          </p>
        </div>
        <div className="test-grid">
          {areas.map((area, index) => (
            <div key={index} className="test-card">
              <div className="mb-4">
                <area.icon className="w-8 h-8 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold mb-2 font-body">{area.title}</h3>
              <p className="text-sm text-text-light leading-relaxed">
                {area.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
