import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import RoomTypesSection from '@/components/home/RoomTypesSection';
import WhatWeOfferSection from '@/components/home/WhatWeOfferSection';
import PurposeSection from '@/components/home/PurposeSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SecondHeroSection from '@/components/home/secondHerosection';
import ExperienceSection from '@/components/home/ExperienceSection';
import Service from '@/components/home/Service';
import Videosection from '@/components/Videosection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <Videosection/>
      {/* <SecondHeroSection/> */}
      <RoomTypesSection />
      <ProjectsSection />
      <ExperienceSection/>
      <Service/>
      <WhatWeOfferSection />
      {/* <PurposeSection /> */}
    </Layout>
  );
};

export default Index;
