import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserCheck, Calendar, MapPin, Printer, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { getStoredRegistrations } from '../utils/storage';

export const MyRegistrationPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedReg, setSelectedReg] = useState(null);

  useEffect(() => {
    const list = getStoredRegistrations();
    setRegistrations(list);
    if (list.length > 0) {
      setSelectedReg(list[0]);
    }
  }, []);

  const filtered = registrations.filter((r) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      r.registrationId.toLowerCase().includes(q) ||
      r.fullName.toLowerCase().includes(q) ||
      r.mobile.includes(q) ||
      r.competitionName.toLowerCase().includes(q)
    );
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-12 bg-portal-gray-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider mb-2">
            <UserCheck className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Participant Self-Service</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-portal-navy">
            Lookup Registration Status &amp; Acknowledgement
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Search stored candidate entries by Registration ID, Participant Name, or Registered Mobile Number.
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-8 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Registration ID (e.g. NATSC26-KID-10452), Name, or Mobile Number..."
            className="w-full text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Master-Detail Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Candidate List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
              <span>Saved Candidate Records ({filtered.length})</span>
              <span className="text-[11px] text-slate-400 font-normal">Stored Locally</span>
            </div>

            {filtered.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center">
                <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h3 className="text-sm font-bold text-slate-700">No matching record found.</h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Verify the Registration ID or register a new candidate.
                </p>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-portal-navy text-white text-xs font-bold uppercase rounded-lg"
                >
                  Register Now
                </Link>
              </div>
            ) : (
              filtered.map((item) => {
                const isSelected = selectedReg && selectedReg.registrationId === item.registrationId;
                return (
                  <div
                    key={item.registrationId}
                    onClick={() => setSelectedReg(item)}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer bg-white ${
                      isSelected
                        ? 'border-portal-navy shadow-md ring-1 ring-portal-navy/10'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="font-mono text-xs font-extrabold text-portal-navy bg-slate-100 px-2 py-0.5 rounded">
                        {item.registrationId}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {item.status || 'Confirmed'}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 mb-0.5">
                      {item.fullName}
                    </h3>
                    <p className="text-xs text-slate-500 mb-2 truncate">
                      {item.competitionName}
                    </p>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                      <span>Category: <strong>{item.category}</strong></span>
                      <span>Mobile: {item.mobile}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT: Selected Registration Details / Preview Slip */}
          <div className="lg:col-span-7">
            {selectedReg ? (
              <div className="bg-white rounded-2xl border border-slate-200 shadow-portal-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-portal-saffron block">
                      OFFICIAL REGISTRATION DOSSIER
                    </span>
                    <h2 className="text-xl font-heading font-extrabold text-portal-navy">
                      {selectedReg.fullName}
                    </h2>
                  </div>

                  <button
                    onClick={handlePrint}
                    className="px-3.5 py-2 rounded-lg bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print Slip</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>
                    <span className="text-slate-500 block">Registration ID</span>
                    <span className="font-mono font-bold text-portal-navy text-sm">{selectedReg.registrationId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Category</span>
                    <span className="font-bold text-slate-800 text-sm">{selectedReg.category}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Date of Birth / Gender</span>
                    <span className="font-semibold text-slate-800">{selectedReg.dob} ({selectedReg.gender})</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact Mobile</span>
                    <span className="font-mono font-semibold text-slate-800">{selectedReg.mobile}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="text-slate-500">Selected Event:</span>
                    <strong className="text-portal-navy">{selectedReg.competitionName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="text-slate-500">Assigned Venue:</span>
                    <span className="text-slate-800 font-semibold">{selectedReg.venue}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="text-slate-500">Event Date &amp; Time:</span>
                    <span className="text-slate-800">{selectedReg.eventDate} ({selectedReg.eventTime})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="text-slate-500">City / State:</span>
                    <span className="text-slate-800">{selectedReg.city}, {selectedReg.state}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 py-1.5">
                    <span className="text-slate-500">Emergency Contact:</span>
                    <span className="text-slate-800">{selectedReg.emergencyContactName} ({selectedReg.emergencyRelationship} - {selectedReg.emergencyPhone})</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-500">Verification Status:</span>
                    <span className="text-emerald-700 font-bold">Document Scrutiny Pending Call Room</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-portal-saffron shrink-0 mt-0.5" />
                  <p>
                    Please carry a physical printout of this acknowledgement slip and your original identification proof to the Call Room on match day.
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 text-xs">
                Select a candidate from the left panel to view their complete dossier.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
