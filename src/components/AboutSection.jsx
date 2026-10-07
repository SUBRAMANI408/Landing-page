import React from 'react';
import { Target, Eye, Users, Award, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { number: '50+', label: 'Competition Events', sub: 'Across 6 distinct disciplines' },
    { number: '3', label: 'Participant Categories', sub: 'Kids, Middle Age & Under 35' },
    { number: '1,000+', label: 'Expected Participants', sub: 'Colleges, clubs & individuals' },
    { number: '10+', label: 'Official Venues', sub: 'World-class arenas & labs' }
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Our Purpose',
      desc: 'To cultivate grassroots sporting spirit, cultural legacy, and technological innovation through a transparent, high-integrity national competition platform.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To establish an inclusive annual benchmark where competitors of every generation—from budding school children to active veterans—compete with dignity and honor.'
    },
    {
      icon: HeartHandshake,
      title: 'Universal Inclusivity',
      desc: 'Tailored competition tracks designed specifically for age groups, guaranteeing balanced competition, certified medical monitoring, and equal opportunity.'
    },
    {
      icon: ShieldCheck,
      title: 'National Standards',
      desc: 'Federation-certified referees, computerized timing systems, anti-doping awareness, and accredited adjudicators ensuring 100% fair play.'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <span>Official Event Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            About the National Annual Championship
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            The National Annual Talent & Sports Championship (NATSC) represents India’s premier multi-generational talent arena, unifying physical athleticism, cultural artistry, and technological intellect under one national banner.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-portal-gray-light p-6 rounded-xl border border-slate-200 hover:border-portal-navy/40 shadow-xs hover:shadow-portal-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-portal-navy text-white flex items-center justify-center mb-4 shadow-xs">
                    <Icon className="w-6 h-6 text-portal-saffron" />
                  </div>
                  <h3 className="text-base font-bold text-portal-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Who Can Participate & Why Participate Split Box */}
        <div className="bg-gradient-to-br from-portal-navy to-portal-navy-dark text-white rounded-2xl p-8 sm:p-10 shadow-portal-card mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron mb-2">
                ELIGIBILITY FRAMEWORK
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Who Can Participate?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                The championship is open to individual enthusiasts, school delegations, university varsity squads, club teams, and corporate fitness clubs across India.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-saffron shrink-0 mt-0.5" />
                  <span><strong>Kids Bracket:</strong> Children under 13 years (Ages 5–12) with parental/school endorsement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-saffron shrink-0 mt-0.5" />
                  <span><strong>Middle Age Bracket:</strong> Active adults & veterans aged 35 to 59 years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-saffron shrink-0 mt-0.5" />
                  <span><strong>Under 35 Bracket:</strong> Youth, college athletes, and professionals aged 18 to 34 years.</span>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron mb-2">
                CHAMPIONSHIP VALUE
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Why Participate in NATSC 2026?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Beyond medals, NATSC offers a recognized collegiate and national credential, exposure to state federation scouts, and cash grants.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-green-light shrink-0 mt-0.5" />
                  <span><strong>National Hologram Certificate:</strong> Official participation credentials for portfolios.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-green-light shrink-0 mt-0.5" />
                  <span><strong>Substantial Cash Awards:</strong> Over ₹3,00,000 total prize pool across all disciplines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-portal-green-light shrink-0 mt-0.5" />
                  <span><strong>Olympic-Caliber Arenas:</strong> Synthetic tracks, teak-wood courts, and high-tech computing labs.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* STATISTICS COUNTERS BAR */}
        <div className="bg-portal-gray-light border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">
              OFFICIAL CHAMPIONSHIP SCALE
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {stats.map((stat, idx) => (
              <div key={idx} className="pt-4 lg:pt-0 lg:px-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-portal-navy tracking-tight">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
