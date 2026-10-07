import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Users, Award, ShieldCheck, HeartHandshake, CheckCircle, User, Phone, Mail, Building } from 'lucide-react';
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

        {/* EXECUTIVE LEADERSHIP & SECRETARIAT DIRECTORATE */}
        <div className="mt-16 bg-white border-2 border-portal-navy/15 rounded-2xl p-8 sm:p-10 shadow-portal-card">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-portal-saffron-dark text-xs font-extrabold uppercase tracking-wider border border-orange-200 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Championship Directorate &amp; Governance</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-portal-navy">
              Executive Organizing Secretariat
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              The National Annual Talent &amp; Sports Championship operates under a dedicated governing secretariat responsible for tournament fairness, venue compliance, and nationwide athlete coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Chief Convener Primary Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-portal-navy to-portal-navy-dark text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-portal-saffron text-white shadow-xs">
                    Chief Organizing Convener &amp; Executive Director
                  </span>
                  <span className="text-xs text-slate-300 font-mono">
                    ID: NATSC-DIR-2026
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <User className="w-8 h-8 text-portal-saffron" />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                      Venkata Subramani S
                    </h4>
                    <p className="text-sm font-semibold text-portal-saffron-light">
                      Director of Central Operations &amp; National Convener
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Spearheading the overall tournament infrastructure, federation compliance, participant certification, and nationwide institutional affiliations for the 2026 championship edition.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-portal-saffron" />
                  <span className="text-xs text-slate-300">Direct Helpline:</span>
                  <a href="tel:9585899506" className="text-sm font-mono font-bold text-white hover:text-portal-saffron transition-colors">
                    +91 95858 99506
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-portal-saffron" />
                  <a href="mailto:helpdesk@natsc2026.org" className="text-xs text-slate-200 hover:text-white transition-colors">
                    helpdesk@natsc2026.org
                  </a>
                </div>
              </div>
            </div>

            {/* Secretariat Office Details Card */}
            <div className="bg-portal-gray-light rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-portal-navy mb-2 flex items-center gap-2">
                  <Building className="w-4 h-4 text-portal-navy" />
                  Secretariat Headquarters
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Administrative Wing 3, Sector 4, Central Championship Enclave, New Delhi - 110001.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-700 block">Chief Convener:</span>
                    <span className="text-portal-navy font-semibold">Venkata Subramani S</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-700 block">Direct Line:</span>
                    <a href="tel:9585899506" className="font-mono text-portal-navy font-bold hover:underline">
                      +91 95858 99506
                    </a>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="font-bold text-slate-700 block">Working Hours:</span>
                    <span className="text-slate-600">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-lg bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Contact Secretariat Desk
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
