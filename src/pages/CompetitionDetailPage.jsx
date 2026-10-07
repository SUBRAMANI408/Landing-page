import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { competitionsData } from '../data/competitions';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Award, 
  CheckCircle2, 
  FileText, 
  ArrowLeft, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export const CompetitionDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const comp = competitionsData.find((c) => c.id === id);

  if (!comp) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold text-portal-navy">Competition Not Found</h2>
        <p className="text-xs text-slate-500 mt-1 mb-4">The requested competition ID does not exist in the official roster.</p>
        <Link to="/competitions" className="px-4 py-2 bg-portal-navy text-white text-xs font-bold rounded-lg">
          Back to Competitions
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-portal-gray-light min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <Link to="/competitions" className="text-portal-navy hover:underline font-semibold flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Competitions
          </Link>
          <span className="font-mono bg-white px-2 py-0.5 rounded border border-slate-200">
            ID: {comp.id}
          </span>
        </div>

        {/* Main Details Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-portal-card overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-portal-navy text-white p-6 sm:p-10 border-b border-portal-navy-dark">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider bg-portal-saffron text-white">
                {comp.category} Category
              </span>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-white/10 text-slate-200">
                {comp.type} • {comp.mode}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
              {comp.name}
            </h1>

            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              {comp.description}
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-50 border-b border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block font-medium">Event Date</span>
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-4 h-4 text-portal-saffron" />
                {comp.date}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block font-medium">Reporting Time</span>
              <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Clock className="w-4 h-4 text-portal-blue" />
                {comp.time}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block font-medium">Official Entry Fee</span>
              <span className="text-sm font-bold font-mono text-portal-green flex items-center gap-1.5 mt-0.5">
                ₹{comp.fee} <span className="text-[10px] text-slate-500 font-normal">(Subsidized)</span>
              </span>
            </div>

            <div>
              <span className="text-slate-500 block font-medium">Registration Cutoff</span>
              <span className="text-sm font-bold text-rose-700 block mt-0.5">
                {comp.registrationDeadline}
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Venue & Eligibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-portal-navy mb-2">
                  <MapPin className="w-4 h-4 text-portal-saffron" />
                  <span>Assigned Venue &amp; Facilities</span>
                </div>
                <p className="text-base font-bold text-slate-900">{comp.venue}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Central Championship Enclave, New Delhi - 110001
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-portal-navy mb-2">
                  <Users className="w-4 h-4 text-portal-blue" />
                  <span>Participant Age &amp; Eligibility</span>
                </div>
                <p className="text-base font-bold text-slate-900">{comp.ageRequirement}</p>
                <p className="text-xs text-slate-600 mt-1">{comp.eligibility}</p>
              </div>
            </div>

            {/* Rules */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Competition Rules &amp; Technical Requirements
              </h3>
              <ul className="space-y-2 bg-portal-gray-light p-5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                {comp.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-portal-green shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scoring & Prizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                  <Award className="w-4 h-4 text-blue-700" />
                  <span>Evaluation &amp; Scoring Mechanism</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {comp.scoringSystem}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">
                  <Trophy className="w-4 h-4 text-portal-saffron" />
                  <span>Awards &amp; Cash Prizes</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {comp.prizes}
                </p>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Scrutiny Documentation Checklist
              </h3>
              <div className="flex flex-wrap gap-2">
                {comp.documentsRequired.map((doc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    {doc}
                  </span>
                ))}
              </div>
            </div>

            {/* Register CTA Box */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/competitions"
                className="text-xs font-bold text-slate-600 hover:text-slate-900 uppercase tracking-wider"
              >
                ← Back to Competitions
              </Link>

              <button
                type="button"
                onClick={() => navigate(`/register?competitionId=${comp.id}&category=${encodeURIComponent(comp.category)}`)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-portal-saffron hover:bg-portal-saffron-dark text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Register for this Event</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
