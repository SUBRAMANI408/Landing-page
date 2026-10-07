import React from 'react';
import { Link } from 'react-router-dom';
import { ContactSection } from '../components/ContactSection';
import { User, Phone, Mail, MapPin, Clock, ShieldCheck, Sparkles, Building, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="py-8 bg-portal-gray-light min-h-screen">
      {/* Contact Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-portal-navy text-white rounded-2xl p-8 sm:p-12 shadow-portal-card relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-2">
              OFFICIAL LIAISON &amp; SECRETARIAT HELPDESK
            </span>
            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-4">
              Contact the Championship Secretariat
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Connect directly with our central organizing committee, convener office, and participant support cell for inquiries regarding registrations, categories, venues, or institutional affiliations.
            </p>

            <div className="flex flex-wrap gap-4 text-xs">
              <a
                href="tel:9585899506"
                className="px-5 py-2.5 bg-portal-saffron hover:bg-portal-saffron-dark text-white font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 shadow-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Convener: +91 95858 99506</span>
              </a>
              <Link
                to="/register"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider rounded-lg flex items-center gap-2 transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                <span>New Registration</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prominent Chief Organizing Convener Identity Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-white rounded-2xl border-2 border-portal-navy/20 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-portal-navy text-white flex items-center justify-center shrink-0 shadow-md">
                <User className="w-9 h-9 text-portal-saffron" />
              </div>
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-100 text-portal-saffron-dark border border-orange-200 mb-1">
                  Secretariat Executive Leadership
                </span>
                <h2 className="text-2xl font-heading font-extrabold text-portal-navy">
                  Venkata Subramani S
                </h2>
                <p className="text-sm font-semibold text-slate-700">
                  Chief Organizing Convener &amp; Executive Director
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  National Annual Talent &amp; Sports Championship (NATSC 2026)
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:9585899506"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-portal-saffron" />
                <span>+91 95858 99506</span>
              </a>
              <a
                href="mailto:helpdesk@natsc2026.org"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-300 transition-all"
              >
                <Mail className="w-4 h-4 text-portal-navy" />
                <span>Email Convener</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <div className="p-4 rounded-xl bg-portal-gray-light border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Official Convener Phone</span>
              <a href="tel:9585899506" className="text-sm font-mono font-bold text-portal-navy hover:underline">
                +91 95858 99506
              </a>
            </div>
            <div className="p-4 rounded-xl bg-portal-gray-light border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Direct Helpdesk Cell</span>
              <span className="text-sm font-mono font-bold text-portal-navy">
                1800-202-6000 (Toll Free)
              </span>
            </div>
            <div className="p-4 rounded-xl bg-portal-gray-light border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Secretariat Email</span>
              <a href="mailto:helpdesk@natsc2026.org" className="text-sm font-bold text-portal-navy hover:underline">
                helpdesk@natsc2026.org
              </a>
            </div>
            <div className="p-4 rounded-xl bg-portal-gray-light border border-slate-200">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Office Working Hours</span>
              <span className="text-xs font-semibold text-slate-700">
                Mon - Sat: 9:00 AM - 6:00 PM IST
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Contact Section with interactive Form and Maps / Address */}
      <ContactSection />
    </div>
  );
};
