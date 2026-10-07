import React from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle } from 'lucide-react';
import { masterMilestones } from '../data/schedule';

export const ImportantDates = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Championship Roadmap 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Important Dates & Deadlines
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Track key milestones from portal launch through the national valedictory medal presentation.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masterMilestones.slice(0, 8).map((item, idx) => {
            const isCompleted = item.status === 'Completed';
            const isInProgress = item.status === 'In Progress';

            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-emerald-50/50 border-emerald-200'
                    : isInProgress
                    ? 'bg-orange-50/50 border-portal-saffron/40 shadow-xs ring-1 ring-portal-saffron/30'
                    : 'bg-portal-gray-light border-slate-200 hover:border-portal-navy/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Phase {item.step}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
                      isCompleted
                        ? 'bg-emerald-100 text-emerald-800'
                        : isInProgress
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-slate-200 text-slate-700'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-portal-navy mb-1.5">
                    {item.phase}
                  </h3>

                  <div className="p-2.5 rounded-lg bg-white border border-slate-200/80 mb-3">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-portal-saffron shrink-0" />
                      <span>{item.date}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
