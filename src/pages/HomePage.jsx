import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { CountdownTimer } from '../components/CountdownTimer';
import { AboutSection } from '../components/AboutSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { CompetitionExplorer } from '../components/CompetitionExplorer';
import { HowItWorks } from '../components/HowItWorks';
import { ImportantDates } from '../components/ImportantDates';
import { ScheduleSection } from '../components/ScheduleSection';
import { VenuesSection } from '../components/VenuesSection';
import { PrizesSection } from '../components/PrizesSection';
import { AnnouncementsSection } from '../components/AnnouncementsSection';
import { EligibilitySection } from '../components/EligibilitySection';
import { RulesSection } from '../components/RulesSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { CompetitionModal } from '../components/CompetitionModal';

export const HomePage = ({ onOpenAnnouncement }) => {
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [explorerCategory, setExplorerCategory] = useState('All');

  const handleSelectCategoryFromCards = (categoryKey) => {
    setExplorerCategory(categoryKey);
    // Smooth scroll to competitions section
    const element = document.getElementById('competitions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      {/* 3. Hero */}
      <Hero />

      {/* 4. Event Countdown */}
      <CountdownTimer />

      {/* 5. About Event & 6. Event Statistics */}
      <AboutSection />

      {/* 7. Participant Categories */}
      <CategoriesSection onSelectCategory={handleSelectCategoryFromCards} />

      {/* 8. Competition Explorer */}
      <CompetitionExplorer
        key={explorerCategory}
        initialCategory={explorerCategory}
        onSelectCompetition={(comp) => setSelectedCompetition(comp)}
      />

      {/* 9. How Registration Works */}
      <HowItWorks />

      {/* 10. Important Dates */}
      <ImportantDates />

      {/* 11. Schedule Preview */}
      <ScheduleSection />

      {/* 12. Venues */}
      <VenuesSection />

      {/* 13. Prizes & Awards */}
      <PrizesSection />

      {/* 14. Latest Announcements */}
      <AnnouncementsSection onOpenAnnouncement={onOpenAnnouncement} />

      {/* 15. Eligibility & Document Requirements */}
      <EligibilitySection />

      {/* 15. Rules & Guidelines */}
      <RulesSection />

      {/* 16. FAQ */}
      <FaqSection />

      {/* 17. Contact */}
      <ContactSection />

      {/* Modal for viewing any competition */}
      {selectedCompetition && (
        <CompetitionModal
          competition={selectedCompetition}
          onClose={() => setSelectedCompetition(null)}
        />
      )}
    </main>
  );
};
