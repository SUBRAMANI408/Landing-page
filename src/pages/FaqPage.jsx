import React from 'react';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export const FaqPage = () => {
  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
            HELPDESK &amp; KNOWLEDGE BASE
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Frequently Asked Questions &amp; Support
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Everything you need to know about category divisions, documentation, registration procedure, and event day instructions.
          </p>
        </div>
      </div>

      <FaqSection />
      <ContactSection />
    </div>
  );
};
