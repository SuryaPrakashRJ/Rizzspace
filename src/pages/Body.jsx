import Accordion from "../component/Accordion/Accordion";
import HeroSection from "../component/HeroSection/HeroSection";
import ContactUsForm from "../component/ContactUsForm/ContactUsForm";
import WhatWeOffer from "../component/WhatWeOffer/WhatWeOffer";
import Moral from "../component/Moral/Moral";
import Project from "../component/Project/Project";

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
