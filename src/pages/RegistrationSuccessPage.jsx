import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Printer, 
  Download, 
  Home, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  ShieldCheck, 
  QrCode, 
  FileText, 
  Award,
  ArrowRight
} from 'lucide-react';
import { getLatestRegistration } from '../utils/storage';

export const RegistrationSuccessPage = () => {
  const navigate = useNavigate();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    const reg = getLatestRegistration();
    if (!reg) {
      navigate('/register');
      return;
    }
    setRecord(reg);
  }, [navigate]);

  const handlePrint = () => {
    window.print();
  };

  if (!record) {
    return (
      <div className="py-20 text-center">
        <div className="w-8 h-8 border-4 border-portal-navy border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="text-xs text-slate-500 mt-2">Loading Acknowledgement Slip...</p>
      </div>
    );
  }

  return (
    <div className="py-12 bg-portal-gray-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Success Banner */}
        <div className="no-print bg-emerald-600 text-white p-6 sm:p-8 rounded-2xl shadow-portal-card mb-8 text-center space-y-2">
          <CheckCircle2 className="w-14 h-14 text-white mx-auto animate-bounce-subtle" />
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Registration Successful
          </h1>
          <p className="text-emerald-100 text-sm max-w-lg mx-auto">
            Your registration has been received and verified by the frontend portal. Please retain and download your Official Acknowledgement Slip below.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-lg bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print Acknowledgement</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
            <Link
              to="/"
              className="px-5 py-2.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* PRINTABLE OFFICIAL ACKNOWLEDGEMENT SLIP */}
        <div
          id="printable-acknowledgement"
          className="bg-white rounded-2xl border-2 border-slate-300 shadow-portal-card overflow-hidden p-8 sm:p-12 relative"
        >
          {/* Top Tricolor Strip */}
          <div className="tricolor-strip w-full absolute top-0 inset-x-0" aria-hidden="true"></div>

          {/* Slip Header */}
          <div className="border-b-2 border-slate-200 pb-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-full bg-portal-navy text-white flex items-center justify-center p-1">
                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="46" fill="#0B2545" stroke="#FF671F" strokeWidth="2.5" />
                  <path d="M50 18 C53 28, 62 33, 62 44 C62 52, 56 57, 50 57 C44 57, 38 52, 38 44 C38 33, 47 28, 50 18 Z" fill="#FF671F" />
                  <path d="M43 59 L57 59 L55 76 L45 76 Z" fill="#046A38" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-portal-saffron block">
                  ALL-INDIA ANNUAL COMPETITION
                </span>
                <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-portal-navy">
                  National Annual Talent &amp; Sports Championship 2026
                </h2>
                <span className="text-xs text-slate-500 font-semibold block">
                  Official Candidate Registration Acknowledgement Slip
                </span>
              </div>
            </div>

            {/* Registration ID Stamp */}
            <div className="bg-slate-50 border-2 border-dashed border-portal-navy/40 p-3 rounded-xl text-center min-w-[200px]">
              <span className="text-[10px] uppercase font-bold text-slate-500 block">Registration ID</span>
              <span className="text-lg font-mono font-extrabold text-portal-navy tracking-tight block">
                {record.registrationId}
              </span>
              <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5 border border-emerald-200">
                Status: {record.status || 'Confirmed'}
              </span>
            </div>
          </div>

          {/* Core Candidate & Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-xs sm:text-sm">
            
            {/* Candidate Card */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                <User className="w-4 h-4 text-portal-navy" />
                <span>Candidate Information</span>
              </h3>
              
              <div className="flex justify-between">
                <span className="text-slate-500">Participant Name:</span>
                <strong className="text-slate-900">{record.fullName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Category Division:</span>
                <span className="font-bold text-portal-navy">{record.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date of Birth / Gender:</span>
                <span className="text-slate-700 font-mono">{record.dob} ({record.gender})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Registered Mobile:</span>
                <span className="text-slate-700 font-mono">{record.mobile}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Email Address:</span>
                <span className="text-slate-700">{record.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">City / State:</span>
                <span className="text-slate-700">{record.city}, {record.state}</span>
              </div>
            </div>

            {/* Event & Venue Card */}
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1.5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-portal-saffron" />
                <span>Event &amp; Venue Assignment</span>
              </h3>

              <div className="flex justify-between">
                <span className="text-slate-500">Competition:</span>
                <strong className="text-portal-navy">{record.competitionName}</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Designated Venue:</span>
                <span className="text-slate-800 font-semibold">{record.venue}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Event Date:</span>
                <span className="text-slate-800 font-bold">{record.eventDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Reporting Time:</span>
                <span className="text-slate-800 font-mono">{record.eventTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Payment Status:</span>
                <span className="text-emerald-700 font-bold">100% Subsidized (National Talent Grant)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Emergency Contact:</span>
                <span className="text-slate-700">{record.emergencyContactName} ({record.emergencyPhone})</span>
              </div>
            </div>

          </div>

          {/* QR Code & Barcode Mockup */}
          <div className="border border-slate-200 rounded-xl p-5 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6 bg-portal-gray-light">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white border border-slate-300 rounded-lg p-1.5 flex items-center justify-center shrink-0">
                {/* SVG QR Code Simulation */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900" fill="currentColor">
                  <rect x="10" y="10" width="25" height="25" fill="#0B2545" />
                  <rect x="15" y="15" width="15" height="15" fill="#FFFFFF" />
                  <rect x="19" y="19" width="7" height="7" fill="#0B2545" />
                  <rect x="65" y="10" width="25" height="25" fill="#0B2545" />
                  <rect x="70" y="15" width="15" height="15" fill="#FFFFFF" />
                  <rect x="74" y="19" width="7" height="7" fill="#0B2545" />
                  <rect x="10" y="65" width="25" height="25" fill="#0B2545" />
                  <rect x="15" y="70" width="15" height="15" fill="#FFFFFF" />
                  <rect x="19" y="74" width="7" height="7" fill="#0B2545" />
                  {/* Random QR elements */}
                  <rect x="45" y="15" width="6" height="6" fill="#0B2545" />
                  <rect x="52" y="25" width="6" height="6" fill="#0B2545" />
                  <rect x="42" y="45" width="16" height="16" fill="#0B2545" />
                  <rect x="45" y="70" width="6" height="6" fill="#0B2545" />
                  <rect x="65" y="55" width="8" height="8" fill="#0B2545" />
                  <rect x="75" y="75" width="14" height="14" fill="#0B2545" />
                </svg>
              </div>

              <div>
                <span className="text-xs font-bold text-portal-navy block">
                  Digital Scrutiny Barcode &amp; Hologram Seal
                </span>
                <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                  Present this printed barcode at the Call Room / Stadium Accreditation Desk for instant RFID race-bib or badge collection.
                </p>
                <div className="font-mono text-[10px] text-slate-400 mt-1">
                  TIMESTAMP: {record.createdAt || new Date().toISOString()}
                </div>
              </div>
            </div>

            <div className="text-right shrink-0 border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-6">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Authorized Signatory &amp; Convener</span>
              <div className="font-heading font-extrabold text-sm text-portal-navy mt-1">
                Venkata Subramani S
              </div>
              <span className="text-[10px] font-semibold text-slate-500 block">Chief Convener (Helpline: +91 95858 99506)</span>
            </div>
          </div>

          {/* Instructions & Footnotes */}
          <div className="border-t border-slate-200 pt-4 text-[11px] text-slate-500 space-y-1">
            <p><strong>Reporting Instructions:</strong> 1. Report 45 minutes prior to event time. 2. Carry original Government/Institutional ID and one passport photograph. 3. Kids category must have parental consent signature.</p>
            <p className="text-slate-500 font-medium">Official Directive: This registration slip is digitally authenticated by the Central Organizing Committee. Please present this printed receipt at Call Room check-in on match day.</p>
          </div>

        </div>

        {/* Action Controls for Non-Print Mode */}
        <div className="no-print mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/my-registrations"
            className="text-xs font-bold text-portal-navy hover:underline flex items-center gap-1"
          >
            <span>View All Saved Registrations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-lg bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print Slip</span>
            </button>
            <Link
              to="/competitions"
              className="px-5 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Explore More Competitions</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
