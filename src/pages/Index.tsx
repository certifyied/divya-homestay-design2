import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import RoomTypesSection from '@/components/home/RoomTypesSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import PurposeSection from '@/components/home/PurposeSection';
import ProjectsSection from '@/components/home/ProjectsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <RoomTypesSection />
      <WhatWeOfferSection />
      <PurposeSection />
      <ProjectsSection />
    </Layout>
  );
};

export default Index;
