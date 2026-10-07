import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CountdownTimer = () => {
  const { t } = useLanguage();

  // Target Championship Inauguration Date: December 12, 2026, 08:30 AM IST
  const targetDate = new Date('2026-12-12T08:30:00+05:30').getTime();

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isFinished: false };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds },
  ];

  return (
    <section aria-label="Event Countdown" className="bg-portal-navy text-white relative overflow-hidden py-10 border-y border-portal-navy-dark">
      {/* Background geometric accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true"></div>
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-portal-saffron opacity-10 blur-3xl" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Header Title */}
          <div className="text-center lg:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-portal-saffron border border-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Championship Launch Countdown</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-white">
              {timeLeft.isFinished ? t.eventStarted : t.countdownHeading}
            </h2>
            <p className="text-slate-300 text-sm mt-1">
              Grand Inauguration Ceremony on <strong className="text-white">December 12, 2026</strong> at Main Stadium, New Delhi.
            </p>
          </div>

          {/* Countdown Blocks */}
          {timeLeft.isFinished ? (
            <div className="bg-portal-green/20 border border-portal-green-light px-8 py-4 rounded-xl text-center">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-portal-saffron" />
                {t.eventStarted}
              </span>
              <p className="text-xs text-slate-300 mt-1">Fixtures are live across all venues.</p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full sm:w-auto">
              {timeBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] rounded-lg bg-portal-navy-dark/90 border border-slate-700/80 shadow-inner group hover:border-portal-saffron transition-colors"
                >
                  <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                    {String(block.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
                    {block.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
