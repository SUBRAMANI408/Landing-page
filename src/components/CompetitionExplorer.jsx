import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Eye, 
  ArrowRight, 
  RefreshCw,
  Activity,
  Layers
} from 'lucide-react';
import { competitionsData } from '../data/competitions';
import { useLanguage } from '../context/LanguageContext';

export const CompetitionExplorer = ({ onSelectCompetition, initialCategory = 'All' }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSport, setSelectedSport] = useState('All');
  const [selectedMode, setSelectedMode] = useState('All');

  // Categories list
  const categoryFilters = ['All', 'Kids', 'Middle Age', 'Under 35'];
  
  // Specific sports filter list
  const specificSportFilters = [
    { label: 'All Disciplines', value: 'All', icon: '🏆' },
    { label: 'Athletics & Track', value: 'Athletics', icon: '🏃' },
    { label: 'Cricket', value: 'Cricket', icon: '🏏' },
    { label: 'Football', value: 'Football', icon: '⚽' },
    { label: 'Badminton', value: 'Badminton', icon: '🏸' },
    { label: 'Chess Masters', value: 'Chess', icon: '♟️' },
    { label: 'Volleyball', value: 'Volleyball', icon: '🏐' },
    { label: 'Throwball', value: 'Throwball', icon: '🤾' },
    { label: 'Coding & Tech', value: 'Coding & Tech', icon: '💻' },
    { label: 'Fine Arts', value: 'Fine Arts', icon: '🎨' },
    { label: 'Photography', value: 'Photography', icon: '📷' },
    { label: 'Quiz & Debate', value: 'Quiz & Debate', icon: '🧠' },
    { label: 'Music & Arts', value: 'Music & Arts', icon: '🎵' }
  ];

  const modeFilters = ['All', 'Individual', 'Team'];

  const filteredCompetitions = useMemo(() => {
    return competitionsData.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All') {
        if (selectedCategory === 'Kids' && item.category !== 'Kids') return false;
        if (selectedCategory === 'Middle Age' && item.category !== 'Middle Age') return false;
        if (selectedCategory === 'Under 35' && item.category !== 'Under 35') return false;
      }

      // Specific Sport filter
      if (selectedSport !== 'All' && item.sport !== selectedSport) {
        return false;
      }

      // Mode filter
      if (selectedMode !== 'All' && item.mode.toLowerCase() !== selectedMode.toLowerCase()) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesVenue = item.venue.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesSport = item.sport ? item.sport.toLowerCase().includes(q) : false;
        const matchesType = item.type.toLowerCase().includes(q);
        if (!matchesName && !matchesVenue && !matchesDesc && !matchesSport && !matchesType) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedSport, selectedMode]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSport('All');
    setSelectedMode('All');
  };

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case 'Kids':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Middle Age':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'Under 35':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="competitions" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <Trophy className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Championship Events Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Explore Competitions &amp; Sports
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Filter fixtures by specific sports, participant age divisions, or participation format.
          </p>
        </div>

        {/* SPECIFIC SPORTS FILTER BAR (New High-Value Feature) */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-portal-navy flex items-center gap-1.5">
              <Activity className="w-4 h-4 text-portal-saffron" />
              <span>Filter by Specific Sport / Event:</span>
            </span>
            {selectedSport !== 'All' && (
              <button
                type="button"
                onClick={() => setSelectedSport('All')}
                className="text-xs font-semibold text-portal-saffron hover:underline"
              >
                Clear Sport Filter
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {specificSportFilters.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setSelectedSport(s.value)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer shrink-0 border ${
                  selectedSport === s.value
                    ? 'bg-portal-navy text-white border-portal-navy shadow-sm font-bold scale-[1.02]'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-portal-navy/40 hover:bg-slate-50'
                }`}
              >
                <span>{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter & Search Control Panel */}
        <div className="bg-portal-gray-light p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs mb-10 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search competitions by sport, discipline, name, or venue..."
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-portal-navy focus:border-portal-navy shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 rounded cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Rows */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Category Filter Pills */}
            <div className="md:col-span-8 space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Age Division Filter:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-portal-saffron text-white shadow-xs font-bold'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Mode Filter */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Participation Mode:
              </label>
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-slate-200">
                {modeFilters.map((mFilter) => (
                  <button
                    key={mFilter}
                    type="button"
                    onClick={() => setSelectedMode(mFilter)}
                    className={`flex-1 py-1 rounded text-xs font-semibold transition-colors cursor-pointer ${
                      selectedMode === mFilter
                        ? 'bg-slate-800 text-white font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mFilter}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Active Status & Reset Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200/80 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="font-bold text-portal-navy font-mono text-sm">
                {filteredCompetitions.length}
              </span>
              <span>official competitions found</span>
              {(selectedCategory !== 'All' || selectedSport !== 'All' || selectedMode !== 'All' || searchQuery) && (
                <span className="text-[11px] bg-slate-200 px-2 py-0.5 rounded-full font-medium">
                  Filtered View
                </span>
              )}
            </div>

            {(selectedCategory !== 'All' || selectedSport !== 'All' || selectedMode !== 'All' || searchQuery) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-portal-navy hover:text-portal-saffron font-bold text-xs cursor-pointer transition-colors"
              >
                <RefreshCw className="w-3 h-3" />
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Competitions Cards Grid */}
        {filteredCompetitions.length === 0 ? (
          <div className="text-center py-16 bg-portal-gray-light rounded-2xl border-2 border-dashed border-slate-300 p-8">
            <div className="w-14 h-14 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-500 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-portal-navy">No competitions found.</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto mt-1 mb-4">
              No championship fixtures matched your current criteria. Try choosing a different sport or age category.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="px-4 py-2 bg-portal-navy text-white text-xs font-bold uppercase rounded-lg hover:bg-portal-navy-light cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompetitions.map((comp) => (
              <div
                key={comp.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-portal-navy/40 shadow-portal-card hover:shadow-portal-hover transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Top Category Ribbon */}
                <div className="p-5 pb-3">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider border ${getCategoryBadgeClass(comp.category)}`}>
                      {comp.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <span className="px-2 py-0.5 rounded bg-slate-100 font-semibold text-slate-700">
                        {comp.sport || comp.type}
                      </span>
                      <span>•</span>
                      <span>{comp.mode}</span>
                    </div>
                  </div>

                  {/* Competition Title */}
                  <h3 className="text-lg font-heading font-bold text-portal-navy group-hover:text-portal-blue transition-colors leading-snug mb-2">
                    {comp.name}
                  </h3>

                  {/* Age Requirement Highlight */}
                  <div className="text-xs font-medium text-slate-500 mb-3 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-portal-saffron"></span>
                    <span>Eligibility: <strong>{comp.ageRequirement}</strong></span>
                  </div>

                  {/* Metadata List */}
                  <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100 mb-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5 text-portal-saffron" />
                        Date &amp; Time:
                      </span>
                      <span className="font-semibold text-slate-800">{comp.date} ({comp.time})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5 text-portal-blue" />
                        Venue:
                      </span>
                      <span className="font-semibold text-slate-800 truncate max-w-[170px]" title={comp.venue}>
                        {comp.venue}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Users className="w-3.5 h-3.5 text-portal-green" />
                        Cap / Registered:
                      </span>
                      <span className="font-semibold text-slate-800 font-mono">
                        {comp.enrolledCount} / {comp.maxParticipants}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200">
                      <span className="text-slate-500 font-medium">Entry Fee:</span>
                      <span className="font-bold text-portal-green font-mono">
                        ₹{comp.fee} <span className="text-[10px] text-slate-400 font-normal">(Subsidized)</span>
                      </span>
                    </div>
                  </div>

                  {/* Deadline warning */}
                  <div className="text-[11px] text-slate-500 flex items-center justify-between px-1">
                    <span>Deadline:</span>
                    <span className="font-semibold text-rose-700">{comp.registrationDeadline}</span>
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-200 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectCompetition && onSelectCompetition(comp)}
                    className="py-2 px-3 rounded-lg border border-slate-300 text-slate-700 hover:bg-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => navigate(`/register?competitionId=${comp.id}&category=${encodeURIComponent(comp.category)}`)}
                    className="py-2 px-3 rounded-lg bg-portal-saffron hover:bg-portal-saffron-dark text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
