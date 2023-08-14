import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="py-10 md:py-20 mt-8 md:mt-16 custom-radial-gradient md:h-screen">
  <div className="2xl:container mx-auto">
    <div className="w-[90%] mx-auto">
      <div className="py-6 w-full md:py-10 flex flex-col justify-center items-center space-y-8 md:space-y-12 2xl:space-y-20">
        <div className="text-center text-orange-500 text-4xl md:text-[76px] lg:text-[90px] font-bold md:leading-[120px] HeroSection">
          <h1>
            IMAGINATION MEETS
          </h1>
          <h2>
            IMPLEMENTATION
          </h2>
        </div>
        <button className="w-[150px] md:w-[236px] h-[50px] md:h-[82px] bg-[#303030] rounded flex justify-center items-center">
          <p className="w-[140px] md:w-[168px] h-[32px] md:h-[42px] text-orange-500 text-lg md:text-xl tracking-wide text-center HeroSection font-['DM_Sans']">
            Let’s Connect
          </p>
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
