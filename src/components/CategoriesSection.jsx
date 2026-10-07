import React from 'react';
import { Sparkles, Flame, Trophy, ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CategoriesSection = ({ onSelectCategory }) => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 'kids',
      filterKey: 'Kids',
      title: 'KIDS',
      age: 'Below 13 years (Ages 5–12)',
      badge: 'Junior Champions',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      accentColor: 'border-blue-600',
      icon: Sparkles,
      iconBg: 'bg-blue-600',
      description: 'Competitions designed to encourage creativity, confidence, teamwork, and sporting spirit among children in a secure, supportive arena.',
      buttonText: 'Explore Kids Events',
      buttonClass: 'bg-blue-600 hover:bg-blue-700 text-white',
      cardBorder: 'hover:border-blue-500',
      sampleEvents: ['Junior Athletics (60m/100m)', 'Drawing Challenge', 'Rapid Chess', 'Young Minds Quiz', 'Kids Badminton Singles']
    },
    {
      id: 'middle-age',
      filterKey: 'Middle Age',
      title: 'MIDDLE AGE',
      age: '35–59 years',
      badge: 'Veterans & Masters',
      badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
      accentColor: 'border-portal-saffron',
      icon: Flame,
      iconBg: 'bg-portal-saffron',
      description: 'A dedicated category encouraging active participation, fitness, talent, and community engagement for seasoned adults and masters.',
      buttonText: 'Explore Middle Age Events',
      buttonClass: 'bg-portal-saffron hover:bg-portal-saffron-dark text-white',
      cardBorder: 'hover:border-portal-saffron',
      sampleEvents: ['5K Master Walking Challenge', 'Veterans Chess Masters', 'Senior Badminton Doubles', 'Throwball Championship', 'Classical/Folk Vocal Solo']
    },
    {
      id: 'under-35',
      filterKey: 'UNDER 35',
      title: 'UNDER 35',
      age: '18–34 years',
      badge: 'Youth & Elite',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      accentColor: 'border-portal-green',
      icon: Trophy,
      iconBg: 'bg-portal-green',
      description: 'A competitive platform for young adults to demonstrate talent, athletic ability, digital prowess, and leadership on the national stage.',
      buttonText: 'Explore Under 35 Events',
      buttonClass: 'bg-portal-green hover:bg-portal-green-light text-white',
      cardBorder: 'hover:border-portal-green',
      sampleEvents: ['7v7 Football Cup', 'Inter-Collegiate T20 Cricket', 'National Volleyball', 'Algorithmic Coding Sprint', '100m/400m Track Dash', 'Oratory & Debate']
    }
  ];

  return (
    <section id="categories" className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <span>Official Competition Divisions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Participant Categories
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            NATSC 2026 organizes competitions under three distinct eligibility categories to ensure fair play, balanced athletic benchmarks, and equal opportunity for all generations.
          </p>
          <p className="text-xs text-slate-500 italic max-w-xl mx-auto">
            * Age criteria are established strictly as tournament regulations for NATSC 2026 and do not constitute statutory classifications.
          </p>
        </div>

        {/* 3 Large Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.filterKey)}
                className={`bg-white rounded-2xl border-2 border-slate-200 ${cat.cardBorder} shadow-portal-card hover:shadow-portal-hover transition-all duration-200 flex flex-col justify-between overflow-hidden cursor-pointer group`}
              >
                {/* Top Banner Stripe */}
                <div className={`h-2.5 w-full ${cat.iconBg}`}></div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl ${cat.iconBg} text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${cat.badgeColor}`}>
                        {cat.badge}
                      </span>
                    </div>

                    {/* Category Title */}
                    <h3 className="text-2xl font-heading font-extrabold text-portal-navy tracking-tight mb-1">
                      {cat.title}
                    </h3>

                    {/* Age Range Display */}
                    <div className="inline-block px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold font-mono uppercase tracking-wider mb-4 border border-slate-200">
                      Age Rule: {cat.age}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    {/* Sample Featured Events */}
                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Competitions Included:
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {cat.sampleEvents.map((event, eIdx) => (
                          <li key={eIdx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-portal-green shrink-0" />
                            <span className="truncate">{event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectCategory) onSelectCategory(cat.filterKey);
                    }}
                    className={`w-full py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-150 ${cat.buttonClass} group-hover:shadow-md`}
                  >
                    <span>{cat.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
