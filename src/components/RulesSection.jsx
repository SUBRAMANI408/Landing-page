import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { rulesAndGuidelines } from '../data/rules';

export const RulesSection = () => {
  // Allow toggling open state for accordions
  const [openIds, setOpenIds] = useState(['general-rules']);

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(rulesAndGuidelines.map((r) => r.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section id="rules" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Code of Governance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Rules & Regulations
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Review championship regulations governing participant eligibility, venue safety, dispute protocol, and tournament integrity.
          </p>
        </div>

        {/* Global Expand/Collapse controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6 text-xs text-slate-500">
          <span>6 Regulatory Chapters</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleExpandAll}
              className="text-portal-navy hover:text-portal-saffron font-bold cursor-pointer transition-colors"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={handleCollapseAll}
              className="text-slate-500 hover:text-slate-800 font-semibold cursor-pointer transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {rulesAndGuidelines.map((item) => {
            const isOpen = openIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-portal-gray-light rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-portal-navy/10 text-portal-navy flex items-center justify-center font-bold text-xs">
                      <ShieldCheck className="w-4 h-4 text-portal-navy" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-portal-navy">
                        {item.category}
                      </h3>
                      <p className="text-xs text-slate-500 hidden sm:block">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                  <div className="text-slate-400 p-1">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-portal-saffron" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 py-5 bg-portal-gray-light border-t border-slate-100">
                    <ul className="space-y-3">
                      {item.items.map((clause, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-portal-green shrink-0 mt-0.5" />
                          <span>{clause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
