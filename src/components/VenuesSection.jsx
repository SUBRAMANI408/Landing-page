import React, { useState } from 'react';
import { MapPin, Users, CheckCircle2, Navigation, Layers, Compass, ExternalLink } from 'lucide-react';
import { venuesData } from '../data/venues';

export const VenuesSection = () => {
  const [activeVenueId, setActiveVenueId] = useState(venuesData[0].id);
  const activeVenue = venuesData.find((v) => v.id === activeVenueId) || venuesData[0];

  return (
    <section id="venues" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-portal-saffron" />
            <span>National Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Official Championship Venues
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Five state-of-the-art facilities hosting athletics, indoor wooden courts, high-tech computing labs, and acoustic cultural auditoriums.
          </p>
        </div>

        {/* Interactive Vector Map Visual & Venue Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* LEFT: Schematic Static Vector Map (No Google Maps API) */}
          <div className="lg:col-span-5 bg-slate-900 rounded-2xl p-5 text-white flex flex-col justify-between shadow-portal-card relative overflow-hidden border border-slate-800">
            {/* Top map info */}
            <div className="flex items-center justify-between mb-3 z-10">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-portal-saffron animate-spin-slow" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Sector Enclave Schematic Map
                </span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                Central Championship Grid
              </span>
            </div>

            {/* SVG Interactive Map Canvas */}
            <div className="relative w-full aspect-4/3 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex items-center justify-center p-2">
              <svg viewBox="0 0 500 380" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Grid Lines */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.8" />
                </pattern>
                <rect width="500" height="380" fill="url(#grid)" />

                {/* Roads / Corridors */}
                <path d="M 30 190 Q 250 180 470 190" stroke="#334155" strokeWidth="14" strokeLinecap="round" />
                <path d="M 30 190 Q 250 180 470 190" stroke="#FF671F" strokeWidth="2" strokeDasharray="8 6" />

                <path d="M 230 40 Q 240 200 230 350" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
                <path d="M 230 40 Q 240 200 230 350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="6 4" />

                <path d="M 120 70 L 400 320" stroke="#1E293B" strokeWidth="8" strokeDasharray="4 4" />

                {/* Metro Line Indicator */}
                <path d="M 60 340 L 440 60" stroke="#046A38" strokeWidth="3" opacity="0.6" strokeDasharray="10 5" />

                {/* Venue 1: Main Stadium (Central Big) */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveVenueId('main-stadium')}
                >
                  <circle cx="210" cy="170" r="32" fill="#0B2545" stroke={activeVenueId === 'main-stadium' ? '#FF671F' : '#3B82F6'} strokeWidth={activeVenueId === 'main-stadium' ? '4' : '2'} />
                  <ellipse cx="210" cy="170" rx="20" ry="14" fill="#046A38" opacity="0.7" />
                  <circle cx="210" cy="170" r="5" fill="#FFFFFF" />
                  <text x="210" y="220" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle">Main Stadium</text>
                </g>

                {/* Venue 2: Indoor Sports Arena */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveVenueId('indoor-arena')}
                >
                  <rect x="330" y="90" width="46" height="38" rx="6" fill="#1E293B" stroke={activeVenueId === 'indoor-arena' ? '#FF671F' : '#64748B'} strokeWidth={activeVenueId === 'indoor-arena' ? '3' : '1.5'} />
                  <circle cx="353" cy="109" r="6" fill="#3B82F6" />
                  <text x="353" y="145" fill="#94A3B8" fontSize="10" fontWeight="600" textAnchor="middle">Indoor Arena</text>
                </g>

                {/* Venue 3: Tech Centre */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveVenueId('tech-centre')}
                >
                  <rect x="370" y="240" width="42" height="36" rx="6" fill="#1E293B" stroke={activeVenueId === 'tech-centre' ? '#FF671F' : '#64748B'} strokeWidth={activeVenueId === 'tech-centre' ? '3' : '1.5'} />
                  <circle cx="391" cy="258" r="5" fill="#10B981" />
                  <text x="391" y="293" fill="#94A3B8" fontSize="10" fontWeight="600" textAnchor="middle">Tech Centre</text>
                </g>

                {/* Venue 4: Tagore Auditorium */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveVenueId('tagore-auditorium')}
                >
                  <circle cx="100" cy="110" r="22" fill="#1E293B" stroke={activeVenueId === 'tagore-auditorium' ? '#FF671F' : '#64748B'} strokeWidth={activeVenueId === 'tagore-auditorium' ? '3' : '1.5'} />
                  <circle cx="100" cy="110" r="5" fill="#F59E0B" />
                  <text x="100" y="145" fill="#94A3B8" fontSize="10" fontWeight="600" textAnchor="middle">Auditorium</text>
                </g>

                {/* Venue 5: Community Pavilion */}
                <g
                  className="cursor-pointer transition-transform hover:scale-105"
                  onClick={() => setActiveVenueId('community-pavilion')}
                >
                  <circle cx="110" cy="270" r="22" fill="#1E293B" stroke={activeVenueId === 'community-pavilion' ? '#FF671F' : '#64748B'} strokeWidth={activeVenueId === 'community-pavilion' ? '3' : '1.5'} />
                  <circle cx="110" cy="270" r="5" fill="#EC4899" />
                  <text x="110" y="305" fill="#94A3B8" fontSize="10" fontWeight="600" textAnchor="middle">Community Pavilion</text>
                </g>
              </svg>
            </div>

            {/* Map Legend */}
            <div className="pt-3 text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800">
              <span>Click on any venue marker to inspect details.</span>
              <span className="font-mono text-slate-500">5 Venues Synchronized</span>
            </div>
          </div>

          {/* RIGHT: Active Selected Venue Spotlight */}
          <div className="lg:col-span-7 bg-portal-gray-light rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              {/* Badge & Category */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-portal-navy text-white">
                  {activeVenue.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-800 border border-orange-200">
                  {activeVenue.badge}
                </span>
              </div>

              {/* Title & Address */}
              <h3 className="text-2xl font-heading font-bold text-portal-navy mb-2">
                {activeVenue.name}
              </h3>

              <div className="space-y-1 text-xs text-slate-600 mb-6 bg-white p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-portal-saffron shrink-0" />
                  <span className="font-semibold text-slate-800">{activeVenue.address}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 pl-6">
                  <span>Landmark: {activeVenue.landmark}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 pl-6 pt-1 border-t border-slate-100 font-medium">
                  <Users className="w-3.5 h-3.5 text-portal-blue" />
                  <span>Audience Capacity: <strong>{activeVenue.capacity}</strong></span>
                </div>
              </div>

              {/* Competitions Hosted */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Competitions Hosted at this Venue:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeVenue.availableCompetitions.map((cName, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-md bg-white text-xs font-semibold text-portal-navy border border-slate-200 shadow-2xs"
                    >
                      {cName}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facilities List */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Venue Facilities & Amenities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeVenue.facilities.map((fac, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-portal-green shrink-0" />
                      <span className="truncate">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Venue Selector Tabs at bottom */}
            <div className="pt-6 mt-6 border-t border-slate-200 flex flex-wrap gap-2">
              <span className="text-xs font-bold text-slate-400 self-center mr-1">Switch:</span>
              {venuesData.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVenueId(v.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeVenueId === v.id
                      ? 'bg-portal-navy text-white font-bold shadow-xs'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {v.name.split(' ')[0]} {v.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
