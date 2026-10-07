import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Calendar, MapPin, Clock, Trophy, Award, FileText, CheckCircle2, AlertCircle, Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CompetitionModal = ({ competition, onClose }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!competition) return null;

  const handleRegister = () => {
    onClose();
    navigate(`/register?competitionId=${competition.id}&category=${encodeURIComponent(competition.category)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="competition-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-portal-navy text-white px-6 py-5 flex items-center justify-between border-b border-portal-navy-dark">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-portal-saffron text-white">
                {competition.category} Category
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-200">
                {competition.type} • {competition.mode}
              </span>
            </div>
            <h2 id="competition-modal-title" className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              {competition.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-portal-gray-light p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-medium block">Event Date</span>
              <span className="font-bold text-portal-navy text-sm flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-portal-saffron" />
                {competition.date}
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block">Reporting Time</span>
              <span className="font-bold text-portal-navy text-sm flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-portal-blue" />
                {competition.time}
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block">Registration Fee</span>
              <span className="font-bold text-portal-green text-sm flex items-center gap-1 mt-0.5 font-mono">
                ₹{competition.fee} <span className="text-[10px] font-normal text-slate-500">(Govt Subsidized)</span>
              </span>
            </div>
            <div>
              <span className="text-slate-500 font-medium block">Cutoff Deadline</span>
              <span className="font-bold text-rose-700 text-sm block mt-0.5">
                {competition.registrationDeadline}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Event Description
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {competition.description}
            </p>
          </div>

          {/* Venue & Eligibility */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-portal-navy mb-1">
                <MapPin className="w-4 h-4 text-portal-saffron" />
                <span>Venue & Location</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{competition.venue}</p>
              <p className="text-xs text-slate-500 mt-0.5">National Championship Enclave, New Delhi</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-portal-navy mb-1">
                <Users className="w-4 h-4 text-portal-blue" />
                <span>Eligibility & Age</span>
              </div>
              <p className="text-sm font-semibold text-slate-800">{competition.ageRequirement}</p>
              <p className="text-xs text-slate-500 mt-0.5">{competition.eligibility}</p>
            </div>
          </div>

          {/* Rules & Regulations */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Specific Rules & Guidelines
            </h3>
            <ul className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
              {competition.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-portal-green shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scoring System & Awards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-1">
                <Award className="w-4 h-4 text-blue-700" />
                <span>Scoring / Evaluation</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{competition.scoringSystem}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                <Trophy className="w-4 h-4 text-portal-saffron" />
                <span>Podium Awards & Cash Grants</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{competition.prizes}</p>
            </div>
          </div>

          {/* Documents Required */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Required Documents for Scrutiny
            </h3>
            <div className="flex flex-wrap gap-2">
              {competition.documentsRequired.map((doc, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  {doc}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-100 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={handleRegister}
            className="px-6 py-2.5 rounded-lg bg-portal-saffron hover:bg-portal-saffron-dark text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow flex items-center gap-2 transition-all transform active:scale-95"
          >
            <span>Register for this Event</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
