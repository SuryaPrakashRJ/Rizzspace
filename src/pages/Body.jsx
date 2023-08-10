import Accordion from "../Component/Accordion/Accordion";
import HeroSection from "../Component/HeroSection/HeroSection";
import ContactUsForm from "../Component/ContactUsForm/ContactUsForm";
import WhatWeOffer from "../Component/WhatWeOffer/WhatWeOffer";
import Moral from "../Component/Moral/Moral";

const Body = () => {
  return (
    <>
      <HeroSection />
      <WhatWeOffer />
      <ContactUsForm />
      <Moral/>
      <Accordion/>
    </>
  );
};

export default Body;
