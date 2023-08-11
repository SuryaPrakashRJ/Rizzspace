import Accordion from "../Component/Accordion/Accordion";
import HeroSection from "../Component/HeroSection/HeroSection";
import ContactUsForm from "../Component/ContactUsForm/ContactUsForm";
import WhatWeOffer from "../Component/WhatWeOffer/WhatWeOffer";
import Moral from "../Component/Moral/Moral";
import Project from "../Component/Project/Project";

const Body = () => {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <Moral />
      <Project />
      <Accordion />
      <ContactUsForm />
    </>
  );
};

export default Body;
