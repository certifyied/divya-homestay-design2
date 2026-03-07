import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import RoomTypesSection from '@/components/home/RoomTypesSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import PurposeSection from '@/components/home/PurposeSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SecondHeroSection from '@/components/home/secondHerosection';
import ExperienceSection from '@/components/home/ExperienceSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SecondHeroSection/>
      <RoomTypesSection />
      <ProjectsSection />
      <WhatWeOfferSection />
      <PurposeSection />
      <ExperienceSection/>
    </Layout>
  );
};

export default Index;
