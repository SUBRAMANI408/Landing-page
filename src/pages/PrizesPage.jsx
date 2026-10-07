import React from 'react';
import { PrizesSection } from '../components/PrizesSection';

export const PrizesPage = () => {
  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
            MERIT HONORS &amp; PERFORMANCE GRANTS
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Prizes, Medals &amp; Citations
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Gold, Silver, Bronze podium trophies, plus special discretionary honours and monetary grants totaling over ₹3,00,000.
          </p>
        </div>
      </div>

      <PrizesSection />
    </div>
  );
};
