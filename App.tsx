import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ActivitySelector from './components/ActivitySelector';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SelectedDrawer from './components/SelectedDrawer';
import AmbientBackground from './components/AmbientBackground';

export interface Activity {
  id: string;
  title: string;
  emoji: string;
  description: string;
  category: string;
  intensity: 'gentle' | 'moderate' | 'adventurous';
  color: string;
}

function App() {
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleActivity = (activity: Activity) => {
    setSelectedActivities(prev => {
      const exists = prev.find(a => a.id === activity.id);
      if (exists) return prev.filter(a => a.id !== activity.id);
      return [...prev, activity];
    });
  };

  const removeActivity = (id: string) => {
    setSelectedActivities(prev => prev.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden relative">
      <AmbientBackground scrollY={scrollY} />
      <Navbar
        selectedCount={selectedActivities.length}
        onOpenDrawer={() => setDrawerOpen(true)}
      />
      <Hero />
      <SocialProof />
      <ActivitySelector
        selectedActivities={selectedActivities}
        onToggle={toggleActivity}
      />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA
        selectedCount={selectedActivities.length}
        onOpenDrawer={() => setDrawerOpen(true)}
      />
      <Footer />
      <SelectedDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activities={selectedActivities}
        onRemove={removeActivity}
      />
    </div>
  );
}

export default App;
