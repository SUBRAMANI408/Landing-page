import React, { useState } from 'react';
import { Volume2, Calendar, ArrowRight, X, AlertCircle, CheckCircle, Info, ShieldAlert } from 'lucide-react';
import { announcementsData } from '../data/announcements';

export const AnnouncementsSection = ({ onOpenAnnouncement }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const getBadgeStyle = (type) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'danger':
        return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'warning':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-blue-50 text-blue-800 border-blue-200';
    }
  };

  const handleOpen = (item) => {
    if (onOpenAnnouncement) {
      onOpenAnnouncement(item);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <section id="announcements" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <Volume2 className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Official Gazette & Bulletins</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Latest Announcements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Stay updated with vital bulletins, committee notices, schedule modifications, and venue communications.
          </p>
        </div>

        {/* Announcements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcementsData.map((item) => (
            <div
              key={item.id}
              className="bg-portal-gray-light rounded-xl p-6 border border-slate-200 hover:border-portal-navy/40 shadow-xs hover:shadow-portal-card transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${getBadgeStyle(item.badgeType)}`}>
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    <span>{item.dateFormatted}</span>
                  </div>
                </div>

                <h3 className="text-base font-heading font-bold text-portal-navy mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.shortDescription}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleOpen(item)}
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-portal-navy hover:text-portal-saffron transition-colors cursor-pointer"
                >
                  <span>Read Notice</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {item.isUrgent && (
                  <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                    High Priority
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing announcement details */}
        {selectedItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="announcement-modal-title"
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div
              className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close notification"
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getBadgeStyle(selectedItem.badgeType)}`}>
                  {selectedItem.badge}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {selectedItem.dateFormatted}
                </span>
              </div>

              <h2 id="announcement-modal-title" className="text-xl font-heading font-bold text-portal-navy mb-4">
                {selectedItem.title}
              </h2>

              <div className="text-sm text-slate-700 leading-relaxed space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p>{selectedItem.fullContent}</p>
              </div>

              <div className="flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-2 bg-portal-navy text-white text-xs font-bold uppercase rounded-lg hover:bg-portal-navy-light"
                >
                  Dismiss Notice
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
