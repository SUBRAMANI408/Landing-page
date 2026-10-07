import React from 'react';
import { Trophy, Award, Medal, Crown, Sparkles, Users, ShieldCheck } from 'lucide-react';
import { podiumAwards, specialExcellenceAwards } from '../data/prizes';

export const PrizesSection = () => {
  return (
    <section id="prizes" className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-portal-saffron" />
            <span>National Honors & Citations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Recognizing Excellence
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Prestigious medals, institutional shields, certified national diplomas, and monetary performance grants across all competitive disciplines.
          </p>
        </div>

        {/* 3 Main Podium Tier Cards: Gold, Silver, Bronze */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {podiumAwards.map((item, idx) => {
            const isGold = item.tier === 'Gold';

            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border-2 ${
                  isGold ? 'border-amber-400 shadow-portal-hover relative -translate-y-2' : 'border-slate-200 shadow-portal-card'
                } p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-200`}
              >
                {/* Top Badge */}
                {isGold && (
                  <div className="bg-amber-500 text-white text-[11px] font-extrabold uppercase tracking-widest text-center py-1 absolute top-0 inset-x-0">
                    Highest National Honor
                  </div>
                )}

                <div className={isGold ? 'pt-4' : ''}>
                  {/* Medal Icon Graphic */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.medalColor} text-white flex items-center justify-center shadow-md`}>
                      <Medal className="w-8 h-8 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200 font-mono">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-portal-navy mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-4">
                    {item.trophyText}
                  </div>

                  {/* Cash Grant Highlight */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Performance Cash Grant:
                    </span>
                    <span className="text-lg font-mono font-extrabold text-portal-green">
                      {item.cashGrant}
                    </span>
                  </div>

                  {/* Included benefits */}
                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Conferred Honors:
                    </div>
                    {item.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <Award className="w-3.5 h-3.5 text-portal-saffron shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Conferred by National Jury
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Excellence Awards Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl font-heading font-bold text-portal-navy mb-2">
              Special Discretionary Honors
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Conferred by the Technical Adjudication Board in recognition of exemplary attitude, character, and breakthrough talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialExcellenceAwards.map((award) => {
              return (
                <div
                  key={award.id}
                  className="p-5 rounded-xl bg-portal-gray-light border border-slate-200 hover:border-portal-navy/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-portal-navy text-white">
                        {award.categoryTag}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-portal-navy mb-1">
                      {award.title}
                    </h4>

                    <div className="text-xs font-mono font-bold text-portal-saffron-dark mb-3">
                      {award.cashGrant}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {award.criteria}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
