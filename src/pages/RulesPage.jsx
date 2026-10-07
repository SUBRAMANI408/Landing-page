import React from 'react';
import { RulesSection } from '../components/RulesSection';

export const RulesPage = () => {
  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
            REGULATORY PROTOCOL &amp; DISCIPLINE
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Rules, Guidelines &amp; Participant Code
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Governing rules regarding registration cutoff, venue conduct, call room protocol, safety guidelines, and arbitration appeals.
          </p>
        </div>
      </div>

      <RulesSection />
    </div>
  );
};
