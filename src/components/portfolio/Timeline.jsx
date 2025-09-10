import React from 'react';
import { Dot } from 'lucide-react';
import InteractiveTitle from './InteractiveTitle.jsx';

const Timeline = ({ title, milestones }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <InteractiveTitle text={title} />
        </h2>
      </h2>
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 -ml-0.5 w-1 h-full bg-[var(--color-highlight)]"></div>

        {milestones.map((milestone, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-1/2"></div>
            
            <div className="absolute left-0 md:left-1/2 -ml-3 md:-ml-3.5 w-6 h-6 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
              <Dot className="w-4 h-4 text-white" />
            </div>

            <div className="w-full md:w-1/2 px-4 py-2 border-2 rounded-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2" style={{borderColor: 'var(--color-highlight)'}}>
              <p className="text-sm font-bold text-[var(--color-accent)]">{milestone.year}</p>
              <p className="text-sm mt-2 opacity-80">{milestone.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;