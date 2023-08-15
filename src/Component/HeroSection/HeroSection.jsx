import "./HeroSection.css";
import { HashLink as Link } from "react-router-hash-link";
const HeroSection = () => {
  return (
    <>
      <section className=" pt-10 md:pt-20 mt-8 md:mt-16 custom-radial-gradient md:h-screen">
  <div className="2xl:container mx-auto">
    <div className="w-[90%] mx-auto">
      <div className=" pt-20 w-full md:py-10 flex flex-col justify-center items-center space-y-6 md:space-y-8 2xl:space-y-12">
        <div className="text-center text-orange-500  text-[35px] md:text-[76px] lg:text-[120px] font-bold md:leading-[120px] HeroSection font-['poppins']">
          <h1>
            Imagination Meets
          </h1>
          <h1 className="md:h-36">
            Implementation
          </h1>
        </div>
        <Link to='#contact_form' smooth >
        <button className="w-[150px] md:w-[236px] h-[50px] md:h-[82px] bg-[#303030] rounded flex justify-center items-center">
          <p className="w-[140px] md:w-[168px] h-[32px] md:h-[42px] text-orange-500 text-lg md:text-xl tracking-wide text-center HeroSection font-['Inter'] flex justify-center items-center">
            Let’s Connect
          </p>
        </button>
        </Link>
     
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
