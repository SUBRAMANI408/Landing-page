import React, { useState } from 'react';
import { CompetitionExplorer } from '../components/CompetitionExplorer';
import { CompetitionModal } from '../components/CompetitionModal';
import { Trophy, Sparkles } from 'lucide-react';

export const CompetitionsPage = () => {
  const [selectedComp, setSelectedComp] = useState(null);

  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
              ALL-INDIA COMPETITION ROSTER
            </span>
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
              Championship Competitions
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm">
              Explore track &amp; field, mind sports, collegiate leagues, fine arts, and algorithmic coding sprints. Filter by participant category or discipline.
            </p>
          </div>
        </div>
      </div>

      <CompetitionExplorer onSelectCompetition={(comp) => setSelectedComp(comp)} />

      {selectedComp && (
        <CompetitionModal
          competition={selectedComp}
          onClose={() => setSelectedComp(null)}
        />
      )}
    </div>
  );
};
