import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Tag, Users, CheckCircle, Search, RefreshCw } from 'lucide-react';
import { detailedScheduleData } from '../data/schedule';

export const ScheduleSection = ({ isFullPage = false }) => {
  const [selectedDate, setSelectedDate] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const dateOptions = [
    { label: 'All Days', value: 'All' },
    { label: 'Dec 12 (Day 1)', value: '2026-12-12' },
    { label: 'Dec 13 (Day 2)', value: '2026-12-13' },
    { label: 'Dec 14 (Day 3)', value: '2026-12-14' },
    { label: 'Dec 15 (Day 4)', value: '2026-12-15' },
  ];

  const categoryOptions = ['All', 'Kids', 'Middle Age', 'Under 35'];
  const typeOptions = ['All', 'Sports', 'Cultural', 'Technical', 'Fitness', 'Creative', 'Ceremony'];

  const filteredSchedule = useMemo(() => {
    return detailedScheduleData.filter((item) => {
      if (selectedDate !== 'All' && item.date !== selectedDate) return false;
      if (selectedCategory !== 'All' && item.category !== 'All' && item.category !== selectedCategory) return false;
      if (selectedType !== 'All' && item.type.toLowerCase() !== selectedType.toLowerCase()) return false;
      return true;
    });
  }, [selectedDate, selectedCategory, selectedType]);

  const handleReset = () => {
    setSelectedDate('All');
    setSelectedCategory('All');
    setSelectedType('All');
  };

  return (
    <section id="schedule" className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Master Timetable & Fixtures</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Event Schedule
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Review detailed daily timings, venue assignments, and round progressions across the championship days.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Filter by Day */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Filter by Competition Date:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {dateOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSelectedDate(opt.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedDate === opt.value
                        ? 'bg-portal-navy text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Category */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Filter by Category:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {categoryOptions.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedCategory === cat
                        ? 'bg-portal-saffron text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Type */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                Discipline Type:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {typeOptions.map((tOpt) => (
                  <button
                    key={tOpt}
                    onClick={() => setSelectedType(tOpt)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedType === tOpt
                        ? 'bg-slate-800 text-white font-bold shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tOpt}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Active status */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
            <span>Showing <strong>{filteredSchedule.length}</strong> scheduled fixtures</span>
            {(selectedDate !== 'All' || selectedCategory !== 'All' || selectedType !== 'All') && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-1 font-bold text-portal-navy hover:text-portal-saffron cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Schedule Table / Cards List */}
        {filteredSchedule.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <Clock className="w-10 h-10 mx-auto text-slate-400 mb-2" />
            <h3 className="text-base font-bold text-portal-navy">No scheduled fixtures match your filters.</h3>
            <p className="text-xs text-slate-500 mt-1 mb-3">Try choosing "All Days" or clearing category criteria.</p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-portal-navy text-white text-xs font-bold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredSchedule.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-portal-navy/40 shadow-xs hover:shadow-portal-card transition-all duration-150 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Date badge */}
                  <div className="w-16 sm:w-20 shrink-0 text-center bg-portal-navy/5 p-2 rounded-lg border border-portal-navy/10">
                    <span className="block text-[11px] uppercase font-bold text-portal-navy">
                      {item.date.split('-')[1] === '12' ? 'DEC' : 'EVENT'}
                    </span>
                    <span className="block text-xl font-mono font-extrabold text-portal-navy leading-none">
                      {item.date.split('-')[2]}
                    </span>
                    <span className="block text-[10px] text-slate-500 font-semibold mt-0.5">
                      2026
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-portal-navy border border-slate-200">
                        {item.category}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-orange-50 text-portal-saffron border border-orange-200">
                        {item.type}
                      </span>
                      <span className="text-xs text-slate-400 font-medium hidden sm:inline">•</span>
                      <span className="text-xs font-semibold text-slate-600">{item.round}</span>
                    </div>

                    <h3 className="text-base font-bold text-portal-navy">
                      {item.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-portal-saffron" />
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1 truncate max-w-xs">
                        <MapPin className="w-3.5 h-3.5 text-portal-blue" />
                        {item.venue}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-portal-green border border-green-200">
                    <CheckCircle className="w-3 h-3" />
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
