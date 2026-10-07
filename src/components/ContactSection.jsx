import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, AlertCircle, User } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    // Basic email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    // Short frontend artificial delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-portal-navy text-xs font-bold uppercase tracking-wider border border-slate-200">
            <Phone className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Support & Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Need Help? Contact the Secretariat
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Reach out to our event coordination desk for inquiries regarding participant documentation, team fixtures, or venue access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Official Helpdesk Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-portal-navy text-white rounded-2xl p-6 sm:p-8 shadow-portal-card space-y-6">
              <div>
                <span className="text-xs font-mono uppercase font-bold text-portal-saffron">
                  Official Communication Node
                </span>
                <h3 className="text-xl font-heading font-bold text-white mt-1">
                  Championship Control Cell
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Dedicated desk managing athlete verification, venue logistics, and institutional accreditations.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Chief Convener Spotlight */}
                <div className="flex items-start gap-3 bg-white/10 p-3.5 rounded-xl border border-white/15">
                  <div className="w-8 h-8 rounded-lg bg-portal-saffron text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-portal-saffron block font-bold">Chief Organizing Convener</span>
                    <span className="font-bold text-white text-sm block">Venkata Subramani S</span>
                    <a href="tel:9585899506" className="font-mono text-xs text-slate-200 hover:text-white flex items-center gap-1 mt-0.5 font-bold">
                      <Phone className="w-3 h-3 text-portal-saffron" />
                      +91 95858 99506
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-portal-saffron" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Official Secretariat Helpline</span>
                    <span className="font-mono font-bold text-white text-base">+91 95858 99506 / 1800-202-6000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-portal-blue-light" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Official Secretariat Email</span>
                    <span className="font-semibold text-white">helpdesk@natsc2026.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-portal-green-light" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Office Hours</span>
                    <span className="font-medium text-slate-200">Monday – Saturday: 09:00 AM – 06:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-portal-saffron" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-bold">Secretariat Address</span>
                    <span className="font-medium text-slate-200">
                      National Championship Secretariat, Administrative Wing 3, Sector 4, Central Championship Enclave, New Delhi - 110001
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-portal-gray-light p-4 rounded-xl border border-slate-200 text-xs text-slate-700">
              <p>
                <strong>Official Liaison Notice:</strong> For immediate assistance regarding fixture appeals, athlete accreditation cards, or call room reporting, please contact the Central Helpdesk or visit the Secretariat desk at Sector 4, New Delhi.
              </p>
            </div>
          </div>

          {/* RIGHT: Working Frontend Contact Form */}
          <div className="lg:col-span-7 bg-portal-gray-light rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
            <h3 className="text-xl font-heading font-bold text-portal-navy mb-2">
              Send an Official Query
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill the form below to submit inquiries regarding category selection, school rosters, or rules clarification.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-portal-green mx-auto" />
                <h4 className="text-base font-bold text-emerald-950">
                  Message submitted successfully
                </h4>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Your query has been logged in the frontend system. The Secretariat Helpdesk will review your submission shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 bg-portal-navy text-white text-xs font-bold uppercase rounded-lg hover:bg-portal-navy-light"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. ramesh@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Subject / Concern
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Inquiry regarding Kids Athletics spike rules"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your query details here..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    required
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-150 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-3.5 h-3.5 text-portal-saffron" />
                        Submit Message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
