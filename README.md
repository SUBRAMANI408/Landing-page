# National Annual Talent & Sports Championship (NATSC 2026)
### Official Frontend Event Management & Registration Portal

> **Academic Project Notice:**
> This project is a **frontend-only academic demonstration** developed for a college project showcase. It does **not** use a backend or database, no APIs, and no real financial or authentication systems. All registrations and event fixtures are managed through local static/mock data and `localStorage`.

---

## 🏆 Project Overview
**National Annual Talent & Sports Championship (NATSC 2026)** is an all-India annual competition portal inspired by the visual architecture, accessibility, typography, and authoritative styling seen on official Indian national event, educational, and sports portals.

The event unites competitors across three standardized age divisions:
1. **KIDS** (Below 13 years / Ages 5–12)
2. **MIDDLE AGE** (35–59 years)
3. **UNDER 35** (18–34 years)

---

## ✨ Key Features

- **Official National Portal Visual Language:**
  - Designed in Deep Navy (`#0B2545`), Saffron accent (`#FF671F`), subtle Green accent (`#046A38`), clean white cards, and national tricolor accent banners.
  - Custom original SVG emblems, torches, ribbons, and vector schematic arena map.
  - Bilingual UI demonstration toggle (**English | தமிழ்**).

- **Announcement Strip & Sticky Navigation:**
  - Real-time top announcement bar with bulletin modal inspection.
  - Sticky header with responsive navigation and mobile drawer menu.

- **Dynamic Hero & Live Event Countdown:**
  - Live React state countdown timer counting down to Championship Day (Dec 12, 2026).
  - Floating event status badges and original sports/trophy vector composition.

- **Participant Category Explorer:**
  - Dedicated cards for Kids, Middle Age, and Under 35 with instant filter routing.

- **Real-Time Competition Explorer & Search:**
  - Instant client-side search by keyword, venue, or discipline.
  - Multi-criteria filter pills by **Category** (All, Kids, Middle Age, Under 35), **Type** (Sports, Cultural, Technical, Creative, Fitness), and **Mode** (Individual, Team).
  - Modal and full-page detailed specifications for every competition (rules, scoring system, prizes, document requirements, and deadlines).

- **5-Step Frontend Registration Wizard:**
  1. *Category Selection* (Kids, Middle Age, Under 35)
  2. *Participant Details* (Full Name, DOB, Gender, Mobile, Email, City, State)
  3. *Dynamic Competition Selection* (auto-filtered by category)
  4. *Emergency Contact Information*
  5. *Official Declaration & Review*
  - Comprehensive frontend validations (email format, 10-digit mobile, declaration checks).
  - Simulated verification and ID generation spinner.
  - Automatic unique National Registration ID generation (e.g., `NATSC26-KID-10452`, `NATSC26-U35-82914`).

- **Official Printable Acknowledgement Slip:**
  - Generates a verified digital registration slip with barcode/QR simulation, candidate dossier, venue reporting time, and print-friendly CSS stylesheet (`@media print`).

- **Participant Self-Service / Dossier Lookup:**
  - Search and reprint candidate slips by Registration ID, Name, or Mobile number.

- **Master Fixtures & Granular Schedule:**
  - Filterable timetable by Day (Dec 12–15), Category, and Discipline.

- **Venues & Schematic Vector Map:**
  - Interactive schematic map of 5 venues (Main Stadium, Indoor Arena, Tech Centre, Tagore Auditorium, Sardar Patel Pavilion) without external Google Maps APIs.

- **Podium Awards & Special Citations:**
  - Gold, Silver, Bronze podium awards and discretionary excellence citations with simulated cash grants.

- **Rules Accordion & FAQ:**
  - 6 chapters of governance regulations.
  - 10 interactive FAQ items.

- **Working Secretariat Contact Desk:**
  - Contact form with client-side validation and immediate success confirmation.

---

## 🛠️ Technology Stack

- **Framework:** React 19 (Functional Components & Hooks)
- **Tooling & Bundler:** Vite 8
- **Routing:** React Router v7 (`react-router-dom`)
- **Styling:** Tailwind CSS 3.4 with custom typography and Indian government-inspired theme tokens
- **Vector Icons:** `lucide-react`
- **State & Storage:** React Context (`LanguageContext`), `localStorage`, and React Component States

---

## 📁 Folder Structure

```
landing page/
├── public/
│   └── favicon.svg              # Original Championship Torch SVG favicon
├── src/
│   ├── assets/                  # Static assets
│   ├── components/              # Modular UI components
│   │   ├── AnnouncementBar.jsx  # Top official news strip
│   │   ├── Header.jsx           # Sticky nav, emblem, language switch & drawer
│   │   ├── Hero.jsx             # Hero section with original artwork & badges
│   │   ├── CountdownTimer.jsx   # Live state countdown
│   │   ├── AboutSection.jsx     # Event pillars, who can participate & stats
│   │   ├── CategoriesSection.jsx# 3 large category cards (Kids, Mid-Age, U35)
│   │   ├── CompetitionExplorer.jsx # Instant search & filter engine
│   │   ├── CompetitionModal.jsx # Comprehensive competition details modal
│   │   ├── HowItWorks.jsx       # 4-step registration workflow
│   │   ├── ImportantDates.jsx   # Milestone roadmap timeline
│   │   ├── ScheduleSection.jsx  # Filterable timetable by day/type
│   │   ├── VenuesSection.jsx    # Interactive schematic vector map & venues
│   │   ├── PrizesSection.jsx    # Gold/Silver/Bronze podium & citations
│   │   ├── AnnouncementsSection.jsx # Official gazette bulletin cards & modal
│   │   ├── EligibilitySection.jsx   # Matrix table & document requirements
│   │   ├── RulesSection.jsx     # 6-chapter accordion rules
│   │   ├── FaqSection.jsx       # 10-question FAQ accordion
│   │   ├── ContactSection.jsx   # Helpdesk details & working form
│   │   └── Footer.jsx           # Comprehensive portal footer & disclaimer
│   ├── context/
│   │   └── LanguageContext.jsx  # English / Tamil bilingual state provider
│   ├── data/                    # Centralized mock data
│   │   ├── categories.js        # 3 participant divisions
│   │   ├── competitions.js      # 18 rich competition fixtures
│   │   ├── schedule.js          # Master roadmap & day-by-day fixtures
│   │   ├── venues.js            # 5 stadium facilities
│   │   ├── announcements.js     # Committee bulletins
│   │   ├── prizes.js            # Awards & cash grants
│   │   ├── rules.js             # Regulatory code
│   │   └── faqs.js              # Frequently asked questions
│   ├── pages/                   # Route views
│   │   ├── HomePage.jsx         # Exact 18-section landing flow
│   │   ├── AboutPage.jsx        # Dedicated About route
│   │   ├── CompetitionsPage.jsx # Dedicated Competitions route
│   │   ├── CompetitionDetailPage.jsx # Individual competition route (/competitions/:id)
│   │   ├── SchedulePage.jsx     # Dedicated Schedule route
│   │   ├── EligibilityPage.jsx  # Dedicated Eligibility route
│   │   ├── VenuesPage.jsx       # Dedicated Venues route
│   │   ├── PrizesPage.jsx       # Dedicated Prizes route
│   │   ├── RulesPage.jsx        # Dedicated Rules route
│   │   ├── FaqPage.jsx          # Dedicated FAQ route
│   │   ├── RegisterPage.jsx     # 5-step registration wizard
│   │   ├── RegistrationSuccessPage.jsx # Printable acknowledgement slip
│   │   └── MyRegistrationPage.jsx # Candidate registration lookup & reprint
│   ├── utils/
│   │   ├── storage.js           # LocalStorage helpers & ID generator
│   │   └── translations.js      # English & Tamil dictionaries
│   ├── App.jsx                  # Master App routing & modal state
│   ├── index.css                # Tailwind directives, print CSS & portal styles
│   └── main.jsx                 # Vite application mount
├── index.html                   # HTML template with portal fonts & metadata
├── tailwind.config.js           # Portal color palette & theme extensions
├── vite.config.js               # Vite configuration with React plugin
└── package.json                 # Project configuration & dependencies
```

---

## 🚀 How to Install & Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
In the project root directory, run:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production / Static Deployment
```bash
npm run build
```
The static site build will be generated in the `dist/` directory, ready to deploy to any static hosting provider (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

---

## 💾 How Mock Data & Frontend Registration Works

### 1. Static Event Data
All competitions, venues, categories, schedules, announcements, prizes, and FAQs are centralized under `src/data/`. They can be extended or modified directly in JavaScript files without touching component logic.

### 2. Temporary Registration Data
When a visitor registers through `/register`:
1. Inputs are validated in the frontend.
2. An artificial simulated verification sequence plays to reflect national portal scrutiny.
3. A standardized registration ID is generated using category prefixes:
   - Kids: `NATSC26-KID-XXXXX`
   - Middle Age: `NATSC26-MID-XXXXX`
   - Under 35: `NATSC26-U35-XXXXX`
4. The registration record is saved to browser `localStorage` under `natsc_2026_registrations`.
5. The candidate is redirected to `/registration-success`, which renders a printable **Official Acknowledgement Slip** with simulated barcode/QR stamp.
6. The participant or evaluator can revisit `/my-registrations` at any time to lookup and reprint stored registrations.

---

## ⚠️ Academic Demonstration Limitations

- **No Backend:** This is strictly a frontend client-side project. Data persistence is limited to the current browser's `localStorage`.
- **Demonstration Payment:** Fee payments are simulated. No real payment gateways or cards are processed.
- **Fictional Event Identity:** "National Annual Talent & Sports Championship" is an original fictional entity created for college project demonstration.
