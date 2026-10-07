import React, { useState } from 'react';
import { Volume2, ArrowRight, X, Phone, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { announcementsData } from '../data/announcements';

export const AnnouncementBar = ({ onOpenAnnouncement }) => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);
  const latestAnnouncement = announcementsData[0];

  if (!visible) return null;

  return (
    <aside aria-label="Official announcements" className="bg-portal-navy-dark text-white border-b border-portal-navy border-opacity-40 text-xs">
      <div className="tricolor-strip w-full" aria-hidden="true"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-portal-saffron text-white shrink-0">
            <Volume2 className="w-3 h-3" />
            <span>UPDATE</span>
          </span>
          <p className="truncate text-slate-200 text-xs font-medium">
            {latestAnnouncement.title}
          </p>
          <button
            type="button"
            onClick={() => onOpenAnnouncement && onOpenAnnouncement(latestAnnouncement)}
            className="hidden md:inline-flex items-center gap-1 text-portal-saffron-light hover:text-white underline underline-offset-2 shrink-0 font-semibold cursor-pointer text-xs transition-colors"
          >
            {t.viewDetails} <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Convener Helpline in Announcement Bar */}
        <div className="hidden lg:flex items-center gap-2 shrink-0 border-l border-white/20 pl-3 text-[11px] text-slate-300">
          <span>Convener: <strong className="text-white">Venkata Subramani S</strong></span>
          <a
            href="tel:9585899506"
            className="inline-flex items-center gap-1 font-mono font-bold text-portal-saffron hover:underline"
            title="Convener Helpline"
          >
            <Phone className="w-3 h-3" />
            +91 95858 99506
          </a>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onOpenAnnouncement && onOpenAnnouncement(latestAnnouncement)}
            className="md:hidden inline-flex items-center gap-0.5 text-[11px] text-portal-saffron hover:text-white font-medium cursor-pointer"
          >
            {t.viewDetails} →
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
