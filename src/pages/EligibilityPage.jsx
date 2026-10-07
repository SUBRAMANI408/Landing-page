import React from 'react';
import { EligibilitySection } from '../components/EligibilitySection';
import { CategoriesSection } from '../components/CategoriesSection';
import { useNavigate } from 'react-router-dom';

export const EligibilityPage = () => {
  const navigate = useNavigate();

  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
            SCRUTINY &amp; ADMISSION STANDARDS
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Eligibility &amp; Verification Rules
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Detailed age brackets, identity documentation, institutional verification, and parental consent criteria for NATSC 2026.
          </p>
        </div>
      </div>

      <EligibilitySection />
      <CategoriesSection onSelectCategory={(cat) => navigate(`/competitions?category=${encodeURIComponent(cat)}`)} />
    </div>
  );
};
