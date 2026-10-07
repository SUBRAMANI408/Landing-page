import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqsData } from '../data/faqs';

export const FaqSection = () => {
  const [openFaqId, setOpenFaqId] = useState(faqsData[0].id);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Championship FAQ
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Find answers to common inquiries regarding registration, documentation, scheduling, and participant eligibility.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}.
                    </span>
                    <span className="text-sm sm:text-base font-bold text-portal-navy">
                      {faq.question}
                    </span>
                  </div>
                  <div className="text-slate-400 p-1 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-portal-saffron" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
