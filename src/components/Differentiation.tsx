import React from 'react';
import { 
  HeartIcon, 
  SearchIcon, 
  LightbulbIcon, 
  LeafIcon, 
  CrosshairIcon, 
  SparklesIcon 
} from './ui/Icons';

const areas = [
  {
    title: "Loving Non-Judgment",
    content: "There is nothing wrong with you. We explore from a place of love and acceptance, not criticism. This is the foundation that makes genuine transformation possible.",
    icon: HeartIcon
  },
  {
    title: "Deep Exploration",
    content: "Through non-directive questioning, we go beyond surface symptoms to uncover the core beliefs creating your experience. I'm the 'why guy'—helping you strike at the root, not just hack at the branches.",
    icon: SearchIcon
  },
  {
    title: "Your Own Answers",
    content: "You are the expert on you. I don't tell you what to believe or how to feel. I ask the questions that help you access your own wisdom and discover your own clarity.",
    icon: LightbulbIcon
  },
  {
    title: "Natural Change",
    content: "When beliefs are brought to light and examined with love, they shift naturally. You don't have to force yourself to be different—transformation emerges from understanding.",
    icon: LeafIcon
  },
  {
    title: "True Self-Ownership",
    content: "It is through self-ownership from a loving, non-judgmental perspective that we truly heal. You reclaim your power by understanding how you create your experience.",
    icon: CrosshairIcon
  },
  {
    title: "Lasting Results",
    content: "This isn't about coping strategies or managing symptoms. This is about fundamental shifts in how you see yourself and your world—changes that last.",
    icon: SparklesIcon
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
            Traditional therapy often focuses on managing the present. 
            We focus on shifting your future by changing your fundamental perception of the world.
          </p>
        </div>
        <div className="test-grid">
          {areas.map((area, index) => (
            <div key={index} className="test-card">
              <div className="mb-4">
                <area.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-body">{area.title}</h3>
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
