import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, AlertCircle, FileText, UserCheck, HeartPulse } from 'lucide-react';

export const EligibilitySection = () => {
  const eligibilityCriteria = [
    {
      category: 'KIDS',
      ageSpan: 'Below 13 years (Ages 5 to 12)',
      idProof: 'School Bonafide Certificate, Birth Certificate, or Aadhaar Card',
      registrationType: 'Parent / Legal Guardian / Authorized School Sports Coordinator',
      medicalReq: 'Parental Fitness Declaration confirming child has no undisclosed medical condition.',
      eventSpecifics: 'Standard track spiked shoes capped at 6mm; drawing materials brought by participant; chess sets provided.'
    },
    {
      category: 'MIDDLE AGE',
      ageSpan: '35 to 59 years',
      idProof: 'Government Photo ID (Aadhaar Card, Voter ID, Passport, or Driving License)',
      registrationType: 'Direct Individual or Corporate / Club Representative',
      medicalReq: 'Self-Medical Fitness Declaration mandatory for 5K Walking Challenge & endurance events.',
      eventSpecifics: 'Non-marking court shoes mandatory for badminton; live acoustic accompaniment permitted for vocal solo.'
    },
    {
      category: 'UNDER 35',
      ageSpan: '18 to 34 years',
      idProof: 'College / University Photo ID, or Government Photo ID (Aadhaar / Voter / Passport)',
      registrationType: 'Individual or Collegiate Varsity Team Captain / Institution Endorsement',
      medicalReq: 'Cardiovascular Fitness Self-Declaration for track sprints, cricket, and 7v7 football.',
      eventSpecifics: 'Code sprint requires own laptop or lab terminal; shin guards mandatory for football; white balls for cricket.'
    }
  ];

  const standardDocuments = [
    {
      title: 'Government-Issued Photo ID',
      desc: 'Aadhaar Card, Voter ID Card, Driving License, or Indian Passport verifying legal identity.'
    },
    {
      title: 'Age Proof Certificate',
      desc: 'Municipal Birth Certificate or 10th standard board certificate verifying date of birth.'
    },
    {
      title: 'Recent Color Photographs',
      desc: 'Two recent passport-sized color photographs for physical accreditation badge issuance.'
    },
    {
      title: 'Parent / Guardian Consent',
      desc: 'Mandatory counter-signed undertaking form for all participants in the Kids Category (< 13 years).'
    },
    {
      title: 'Medical Fitness Self-Declaration',
      desc: 'Standard signed statement affirming physical fitness for track athletics and competitive sports.'
    },
    {
      title: 'Institutional Endorsement Letter',
      desc: 'Required if representing a school, college varsity team, or registered regional club.'
    }
  ];

  return (
    <section id="eligibility" className="py-16 sm:py-20 bg-portal-gray-light border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-portal-navy text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-portal-saffron" />
            <span>Tournament Standards & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portal-navy tracking-tight">
            Eligibility & Verification Framework
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Standardized criteria governing entry eligibility, identity verification, and required physical documents for all participating categories.
          </p>
        </div>

        {/* Master Eligibility Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-portal-card overflow-hidden mb-16">
          <div className="p-6 bg-portal-navy text-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-portal-navy-dark">
            <div>
              <h3 className="text-lg font-heading font-bold text-white">
                Official Category Eligibility Matrix
              </h3>
              <p className="text-xs text-slate-300">
                Benchmarks validated during physical scrutiny before chest number allocation.
              </p>
            </div>
            <span className="text-[11px] font-mono bg-white/10 px-3 py-1 rounded text-portal-saffron font-bold">
              Regulation Ref: NATSC/ELG/2026
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[11px] tracking-wider border-b border-slate-200">
                <tr>
                  <th scope="col" className="py-4 px-6">Category Division</th>
                  <th scope="col" className="py-4 px-6">Age Requirement</th>
                  <th scope="col" className="py-4 px-6">Mandatory Identity Proof</th>
                  <th scope="col" className="py-4 px-6">Registration Mode</th>
                  <th scope="col" className="py-4 px-6">Medical Declaration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {eligibilityCriteria.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-portal-navy whitespace-nowrap">
                      <span className="inline-block px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-800">
                      {item.ageSpan}
                    </td>
                    <td className="py-4 px-6 text-slate-600 max-w-xs">
                      {item.idProof}
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      {item.registrationType}
                    </td>
                    <td className="py-4 px-6 text-slate-600 max-w-xs">
                      {item.medicalReq}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DOCUMENTS REQUIRED SECTION */}
        <div>
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-portal-navy mb-2">
              Documents Required
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Please ensure clear physical originals and one self-attested photocopied set are produced during reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {standardDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs hover:border-portal-navy/40 transition-colors flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-portal-navy/10 text-portal-navy flex items-center justify-center shrink-0 mt-0.5">
                  <FileText className="w-5 h-5 text-portal-navy" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-portal-navy mb-1">
                    {doc.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {doc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Prominent Disclaimer Callout */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center gap-3 text-center text-xs sm:text-sm text-amber-900 font-semibold">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
            <span>
              Document requirements may vary by competition. Check specific competition rules in the Competition Explorer.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
