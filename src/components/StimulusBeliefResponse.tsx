import React from 'react';
import { ArrowRight } from './ui/Icons';

export default function StimulusBeliefResponse() {
  return (
    <section className="section sbr-section" id="the-model">
      <div className="container">
        <div className="text-center mb-16">
          <p className="kicker">A DIFFERENT WAY FORWARD</p>
          <h2 className="section-title">The Stimulus-Belief-Response Model</h2>
          <p className="section-desc mx-auto">
            Most approaches focus on managing symptoms. I help you discover and transform the beliefs creating those symptoms.
          </p>
        </div>

        <div className="sbr-diagram">
          <div className="sbr-box sbr-stimulus">
            <h4 className="sbr-box-title">Stimulus</h4>
            <p className="sbr-box-text">What happens in life<br/>(neutral events)</p>
          </div>
          
          <div className="sbr-arrow">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>

          <div className="sbr-box sbr-belief highlighting">
            <h4 className="sbr-box-title">Belief</h4>
            <p className="sbr-box-text">Your interpretation<br/>(where your power lives)</p>
          </div>

          <div className="sbr-arrow">
            <ArrowRight className="w-6 h-6 text-primary" />
          </div>

          <div className="sbr-box sbr-response">
            <h4 className="sbr-box-title">Response</h4>
            <p className="sbr-box-text">Your emotions<br/>and behaviors</p>
          </div>
        </div>

        <div className="sbr-logic-contrast">
          <div className="logic-row">
            <span className="logic-label text-text-light">Most people think:</span>
            <span className="logic-flow">Events in life <ArrowRight className="w-4 h-4 inline" /> Directly create <ArrowRight className="w-4 h-4 inline" /> How they feel</span>
          </div>
          <div className="logic-row logic-truth">
            <span className="logic-label font-bold text-primary">The truth:</span>
            <span className="logic-flow">Events in life <ArrowRight className="w-4 h-4 inline" /> <span className="underline decoration-primary font-semibold">Are interpreted through beliefs</span> <ArrowRight className="w-4 h-4 inline" /> Which create feelings and behaviors</span>
          </div>
        </div>

        <div className="sbr-conclusion">
          <p>
            Your beliefs are the pivotal point of power. When you discover and examine them, you discover your ability to transform your experience.
          </p>
        </div>
      </div>
    </section>
  );
}
