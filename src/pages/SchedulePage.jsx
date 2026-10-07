import React from 'react';
import { ScheduleSection } from '../components/ScheduleSection';
import { ImportantDates } from '../components/ImportantDates';

export const SchedulePage = () => {
  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-10 shadow-portal-card">
          <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
            OFFICIAL FIXTURES &amp; TIMETABLE
          </span>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">
            Championship Schedule 2026
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl">
            Track daily reporting hours, venue arenas, preliminary heats, semifinals, and the national medal valedictory ceremony.
          </p>
        </div>
      </div>

      <ScheduleSection isFullPage={true} />
      <ImportantDates />
    </div>
  );
};
