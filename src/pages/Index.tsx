import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import RoleSection from '@/components/RoleSection';
import AchievementShowcase from '@/components/AchievementShowcase';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RoleSection />
      <AchievementShowcase />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
