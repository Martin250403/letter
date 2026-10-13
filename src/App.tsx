import FloatingHearts from './components/FloatingHearts';
import Navigation from './components/Navigation';
import ScrollControls from './components/ScrollControls';
import MusicToggle from './components/MusicToggle';
import OpeningSection from './components/OpeningSection';
import LetterSection from './components/LetterSection';
import MemoriesSection from './components/MemoriesSection';
import LoveNotesSection from './components/LoveNotesSection';
import SurpriseEnvelope from './components/SurpriseEnvelope';
import ReassuranceSection from './components/ReassuranceSection';
import FutureSection from './components/FutureSection';
import FinaleSection from './components/FinaleSection';

export default function App() {
  return (
    <>
      {/* Global decorative & UI elements */}
      <FloatingHearts />
      <Navigation />
      <ScrollControls />
      <MusicToggle />

      {/* Main content flow */}
      <main>
        <OpeningSection />

        <div className="section-divider" />

        <LetterSection />

        <div className="section-divider" />

        <MemoriesSection />

        <div className="section-divider" />

        <LoveNotesSection />

        <SurpriseEnvelope />

        <ReassuranceSection />

        <div className="section-divider" />

        <FutureSection />

        <div className="section-divider" />

        <FinaleSection />
      </main>
    </>
  );
}
