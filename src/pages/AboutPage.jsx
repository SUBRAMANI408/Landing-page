import React from 'react';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/AboutSection';
import { ImportantDates } from '../components/ImportantDates';
import { Sparkles, ArrowRight, ShieldCheck, Trophy } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-portal-navy text-white rounded-2xl p-8 sm:p-12 shadow-portal-card relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
              NATIONAL INTEGRATION THROUGH SPORT &amp; TALENT
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
              About the National Annual Championship 2026
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Organized under national excellence standards to discover, honor, and nurture athletes and creative thinkers across all generations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/register"
                className="px-6 py-3 bg-portal-saffron hover:bg-portal-saffron-dark text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-sm transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register Now</span>
              </Link>
              <Link
                to="/competitions"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors"
              >
                <span>View All 50+ Events</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AboutSection />
      <ImportantDates />
    </div>
  );
};
