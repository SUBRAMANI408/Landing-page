import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, Award, FileEdit, QrCode, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      step: '01',
      title: 'Choose Category',
      desc: 'Select your age division: Kids (< 13), Middle Age (35–59), or Under 35 (18–34).',
      icon: UserCheck
    },
    {
      step: '02',
      title: 'Select Competition',
      desc: 'Browse certified sporting disciplines, coding tracks, or cultural showcases.',
      icon: Award
    },
    {
      step: '03',
      title: 'Enter Participant Details',
      desc: 'Fill basic bio-details, city of origin, and emergency contact information.',
      icon: FileEdit
    },
    {
      step: '04',
      title: 'Receive Registration ID',
      desc: 'Instantly download your official National Acknowledgement Slip with QR code.',
      icon: QrCode
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <span>Seamless Digital Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            How Registration Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Complete your national championship entry in 4 simple steps with immediate confirmation.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-portal-card hover:shadow-portal-hover transition-all duration-200 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-3xl font-extrabold text-slate-200 group-hover:text-portal-saffron transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-portal-navy text-white flex items-center justify-center shadow-2xs group-hover:bg-portal-blue transition-colors">
                      <Icon className="w-5 h-5 text-portal-saffron" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-base font-bold text-portal-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-portal-blue">
                  <span>Step {item.step} of 04</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <Link
            to="/register"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm uppercase tracking-wider font-bold rounded-xl text-white bg-portal-saffron hover:bg-portal-saffron-dark shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Start Registration</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <p className="text-xs text-slate-500 mt-2">
            No real payments required • Instant Registration ID generated
          </p>
        </div>

      </div>
    </section>
  );
};
