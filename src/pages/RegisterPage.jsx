import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { 
  UserCheck, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Trophy, 
  FileText, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar,
  Lock
} from 'lucide-react';
import { competitionsData } from '../data/competitions';
import { saveNewRegistration } from '../utils/storage';

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Pre-fill parameters if clicked from competition card or modal
  const paramCompId = searchParams.get('competitionId');
  const paramCategory = searchParams.get('category');

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProgress, setSubmissionProgress] = useState('');
  const [formError, setFormError] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    category: paramCategory || 'Kids',
    // Step 2
    fullName: '',
    dob: '',
    gender: 'Male',
    mobile: '',
    email: '',
    address: '',
    city: '',
    state: 'Delhi',
    // Step 3
    competitionId: paramCompId || '',
    // Step 4
    emergencyContactName: '',
    emergencyRelationship: 'Parent',
    emergencyPhone: '',
    // Step 5
    declarationAccepted: false
  });

  // Filter competitions matching current category
  const availableCompetitions = competitionsData.filter(
    (c) => c.category.toLowerCase() === formData.category.toLowerCase()
  );

  // Auto-select first matching competition if current selection isn't in filtered list
  useEffect(() => {
    if (paramCompId) {
      const match = competitionsData.find((c) => c.id === paramCompId);
      if (match) {
        setFormData((prev) => ({
          ...prev,
          category: match.category,
          competitionId: match.id
        }));
        return;
      }
    }

    if (availableCompetitions.length > 0 && !availableCompetitions.find((c) => c.id === formData.competitionId)) {
      setFormData((prev) => ({
        ...prev,
        competitionId: availableCompetitions[0].id
      }));
    }
  }, [formData.category, paramCompId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formError) setFormError('');
  };

  const selectedCompDetails = competitionsData.find((c) => c.id === formData.competitionId) || availableCompetitions[0];

  // Step Validations
  const validateStep = (step) => {
    setFormError('');

    if (step === 1) {
      if (!formData.category) {
        setFormError('Please select a participant category.');
        return false;
      }
      return true;
    }

    if (step === 2) {
      if (!formData.fullName.trim() || !formData.dob || !formData.mobile.trim() || !formData.email.trim() || !formData.city.trim()) {
        setFormError('Please complete all required fields.');
        return false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setFormError('Please enter a valid email address.');
        return false;
      }

      if (formData.mobile.replace(/\D/g, '').length < 10) {
        setFormError('Please enter a valid 10-digit mobile number.');
        return false;
      }

      return true;
    }

    if (step === 3) {
      if (!formData.competitionId) {
        setFormError('Please select a competition.');
        return false;
      }
      return true;
    }

    if (step === 4) {
      if (!formData.emergencyContactName.trim() || !formData.emergencyPhone.trim()) {
        setFormError('Please provide emergency contact details.');
        return false;
      }

      if (formData.emergencyPhone.replace(/\D/g, '').length < 10) {
        setFormError('Please enter a valid 10-digit emergency contact number.');
        return false;
      }

      return true;
    }

    if (step === 5) {
      if (!formData.declarationAccepted) {
        setFormError('Please accept the declaration before submitting.');
        return false;
      }
      return true;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 150, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setFormError('');
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 150, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setIsSubmitting(true);
    setSubmissionProgress('Scrutinizing Category Age & Venue Availability...');

    setTimeout(() => {
      setSubmissionProgress('Generating Official National Registration ID...');
    }, 600);

    setTimeout(() => {
      setSubmissionProgress('Encrypting Local Records & Finalizing Acknowledgement...');
    }, 1100);

    setTimeout(() => {
      // Assemble record
      const record = {
        ...formData,
        competitionName: selectedCompDetails ? selectedCompDetails.name : 'Championship Event',
        venue: selectedCompDetails ? selectedCompDetails.venue : 'Main Stadium',
        eventDate: selectedCompDetails ? selectedCompDetails.date : '2026-12-12',
        eventTime: selectedCompDetails ? selectedCompDetails.time : '09:00 AM IST',
        fee: selectedCompDetails ? selectedCompDetails.fee : 100,
        ageRequirement: selectedCompDetails ? selectedCompDetails.ageRequirement : ''
      };

      const saved = saveNewRegistration(record);
      setIsSubmitting(false);

      if (saved) {
        navigate('/registration-success');
      } else {
        setFormError('Failed to process registration. Please check browser storage settings.');
      }
    }, 1600);
  };

  const stepsHeader = [
    { num: 1, label: 'Category' },
    { num: 2, label: 'Participant Info' },
    { num: 3, label: 'Competition' },
    { num: 4, label: 'Emergency' },
    { num: 5, label: 'Declaration' },
  ];

  return (
    <div className="py-10 bg-portal-gray-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Top Banner */}
        <div className="mb-6 flex items-center justify-between text-xs text-slate-500">
          <Link to="/" className="text-portal-navy hover:underline font-semibold flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Championship Home
          </Link>
          <span className="font-mono bg-white px-2.5 py-1 rounded border border-slate-200">
            Form Ref: NATSC/REG-2026/V1
          </span>
        </div>

        {/* Card Enclosure */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-portal-card overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-portal-navy text-white p-6 sm:p-8 border-b border-portal-navy-dark">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-portal-saffron block mb-1">
                  OFFICIAL CANDIDATE REGISTRATION
                </span>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  Championship Entry Portal 2026
                </h1>
                <p className="text-xs text-slate-300 mt-1">
                  Step {currentStep} of 5: {stepsHeader[currentStep - 1].label}
                </p>
              </div>

              <div className="bg-white/10 px-4 py-2 rounded-xl text-center border border-white/10 shrink-0">
                <span className="text-[10px] text-slate-300 uppercase block font-semibold">Entry Status</span>
                <span className="text-xs font-mono font-bold text-portal-saffron">Govt Subsidized</span>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="mt-8 pt-6 border-t border-slate-700/80">
              <div className="grid grid-cols-5 gap-2">
                {stepsHeader.map((s) => {
                  const isCurrent = currentStep === s.num;
                  const isDone = currentStep > s.num;

                  return (
                    <div key={s.num} className="text-center">
                      <div className={`h-2 rounded-full mb-2 transition-all ${
                        isDone ? 'bg-portal-green' : isCurrent ? 'bg-portal-saffron' : 'bg-slate-700'
                      }`}></div>
                      <span className={`text-[11px] font-bold block truncate ${
                        isCurrent ? 'text-portal-saffron' : isDone ? 'text-portal-green-light' : 'text-slate-400'
                      }`}>
                        {s.num}. {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="p-6 sm:p-10">
            {/* Global Error Banner */}
            {formError && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs sm:text-sm text-rose-800 flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span className="font-semibold">{formError}</span>
              </div>
            )}

            {/* STEP 1: CATEGORY SELECTION */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-heading font-bold text-portal-navy mb-1">
                    Step 1: Select Participant Category
                  </h2>
                  <p className="text-xs text-slate-500">
                    Choose the designated age division as specified by championship competition rules.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: 'Kids',
                      title: 'KIDS',
                      age: 'Below 13 years (Ages 5–12)',
                      desc: 'Creative & junior sporting events. Parental/school consent required.'
                    },
                    {
                      id: 'Middle Age',
                      title: 'MIDDLE AGE',
                      age: '35–59 years',
                      desc: 'Veterans walking, badminton doubles, chess, and cultural performances.'
                    },
                    {
                      id: 'Under 35',
                      title: 'UNDER 35',
                      age: '18–34 years',
                      desc: 'High-intensity track athletics, cricket, football, volleyball & coding sprint.'
                    }
                  ].map((cat) => {
                    const isSelected = formData.category.toLowerCase() === cat.id.toLowerCase();
                    return (
                      <div
                        key={cat.id}
                        onClick={() => setFormData({ ...formData, category: cat.id })}
                        className={`p-5 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'border-portal-navy bg-portal-blue-soft/50 ring-2 ring-portal-navy/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-base font-bold text-portal-navy">{cat.title}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'border-portal-navy bg-portal-navy text-white' : 'border-slate-300'
                            }`}>
                              {isSelected && <CheckCircle2 className="w-4 h-4" />}
                            </div>
                          </div>
                          <div className="text-xs font-mono font-bold text-portal-saffron mb-2">
                            {cat.age}
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {cat.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: PARTICIPANT INFORMATION */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-heading font-bold text-portal-navy mb-1">
                    Step 2: Participant Information
                  </h2>
                  <p className="text-xs text-slate-500">
                    Provide accurate official biodata as appearing on institutional or government identity documents.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Full Name of Participant *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Aarav Sharma / Dr. Meenakshi Raman"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* DOB */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other / Non-Binary</option>
                    </select>
                  </div>

                  {/* Mobile */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Mobile Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      maxLength={10}
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. participant@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* Address */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Residential / Institutional Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Street, locality, or campus accommodation"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      City / District *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. New Delhi / Chennai / Pune"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      State / Union Territory *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    >
                      {['Delhi', 'Tamil Nadu', 'Maharashtra', 'Karnataka', 'Uttar Pradesh', 'West Bengal', 'Gujarat', 'Punjab', 'Kerala', 'Telangana', 'Rajasthan', 'Haryana', 'Madhya Pradesh', 'Other'].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: COMPETITION SELECTION */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-heading font-bold text-portal-navy mb-1">
                    Step 3: Select Competition Event
                  </h2>
                  <p className="text-xs text-slate-500">
                    Displaying competitions available for the selected <strong className="text-portal-navy">{formData.category}</strong> category.
                  </p>
                </div>

                <div className="space-y-3">
                  {availableCompetitions.map((comp) => {
                    const isSelected = formData.competitionId === comp.id;
                    return (
                      <div
                        key={comp.id}
                        onClick={() => setFormData({ ...formData, competitionId: comp.id })}
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                          isSelected
                            ? 'border-portal-saffron bg-orange-50/40 ring-1 ring-portal-saffron/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full border mt-0.5 flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-portal-saffron bg-portal-saffron text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                                {comp.type} • {comp.mode}
                              </span>
                              <span className="text-xs text-slate-500 font-mono">
                                Date: {comp.date}
                              </span>
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-portal-navy">
                              {comp.name}
                            </h3>
                            <p className="text-xs text-slate-500 mt-0.5">
                              Venue: {comp.venue} • {comp.ageRequirement}
                            </p>
                          </div>
                        </div>

                        <div className="text-right shrink-0 sm:pl-4">
                          <span className="text-[11px] text-slate-400 block font-medium">Official Entry Fee</span>
                          <span className="text-base font-mono font-bold text-portal-green">
                            ₹{comp.fee}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: EMERGENCY CONTACT */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-heading font-bold text-portal-navy mb-1">
                    Step 4: Emergency Contact Information
                  </h2>
                  <p className="text-xs text-slate-500">
                    Mandatory for stadium safety protocols and prompt medical communications.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Emergency Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="emergencyContactName"
                      value={formData.emergencyContactName}
                      onChange={handleChange}
                      placeholder="e.g. Parent / Guardian / Coach / Next of Kin"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Relationship with Participant *
                    </label>
                    <select
                      name="emergencyRelationship"
                      value={formData.emergencyRelationship}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    >
                      <option value="Parent">Parent / Legal Guardian</option>
                      <option value="Spouse">Spouse</option>
                      <option value="Coach">Coach / Athletic Director</option>
                      <option value="Sibling">Sibling / Family Member</option>
                      <option value="Friend">Friend / Colleague</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Emergency Phone Number (10 digits) *
                    </label>
                    <input
                      type="tel"
                      name="emergencyPhone"
                      maxLength={10}
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543211"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-portal-navy"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: DECLARATION & SUMMARY */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-heading font-bold text-portal-navy mb-1">
                    Step 5: Review & Official Declaration
                  </h2>
                  <p className="text-xs text-slate-500">
                    Verify all candidate entries prior to generating your National Registration ID.
                  </p>
                </div>

                {/* Review Card */}
                <div className="bg-portal-gray-light p-5 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-3">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Participant Name:</span>
                    <strong className="text-portal-navy">{formData.fullName}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Category:</span>
                    <span className="font-bold text-portal-navy">{formData.category}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Selected Event:</span>
                    <strong className="text-slate-900">{selectedCompDetails?.name}</strong>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Venue & Date:</span>
                    <span className="text-slate-700">{selectedCompDetails?.venue} ({selectedCompDetails?.date})</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Mobile / Email:</span>
                    <span className="text-slate-700">{formData.mobile} • {formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Emergency Contact:</span>
                    <span className="text-slate-700">{formData.emergencyContactName} ({formData.emergencyRelationship} - {formData.emergencyPhone})</span>
                  </div>
                </div>

                {/* Government Subsidized Notice */}
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Championship Incentive Grant: 100% Fee Subsidy</span>
                    <p className="text-blue-800 mt-0.5">
                      Under the 2026 National Talent Incentive Initiative, all entry fees (₹{selectedCompDetails?.fee || 100}) are fully covered by the Central Organizing Committee. Zero net payable at registration.
                    </p>
                  </div>
                </div>

                {/* Mandatory Declaration Checkbox */}
                <div className="p-4 rounded-xl bg-orange-50/60 border border-portal-saffron/30">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="declarationAccepted"
                      checked={formData.declarationAccepted}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-slate-300 text-portal-navy focus:ring-portal-navy shrink-0 mt-0.5"
                    />
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                      <strong>I confirm</strong> that the information provided is correct and I agree to the competition rules and regulations of the National Annual Talent &amp; Sports Championship 2026.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* ARTIFICIAL LOADING STATE MODAL / OVERLAY */}
            {isSubmitting && (
              <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-4 shadow-2xl border border-slate-200">
                  <div className="w-16 h-16 border-4 border-portal-navy border-t-portal-saffron rounded-full animate-spin mx-auto"></div>
                  <h3 className="text-lg font-heading font-bold text-portal-navy">
                    Processing Registration
                  </h3>
                  <p className="text-xs font-mono text-slate-600 bg-slate-100 p-2.5 rounded-lg">
                    {submissionProgress}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Generating official National Registration Dossier &amp; digital barcode...
                  </p>
                </div>
              </div>
            )}

            {/* Navigation / Control Buttons */}
            <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-lg bg-portal-navy hover:bg-portal-navy-light text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-lg bg-portal-saffron hover:bg-portal-saffron-dark text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform active:scale-95 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Submit Registration</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
