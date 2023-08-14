import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <section className="py-20 mt-16 custom-radial-gradient h-screen">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <div className="py-10 flex flex-col justify-center items-center space-y-24 2xl:space-y-36">
              <div>
              <h1 className="text-center text-orange-500 text-[90px] font-bold leading-[120px] HeroSection">
                IMAGINATION MEETS
              </h1>
              <h2 className="text-center text-orange-500 text-[90px] font-bold leading-[120px] HeroSection">
                IMPLEMENTATION
              </h2>
              </div>
              
              <button className="w-[236px] h-[82px] bg-[#303030] rounded flex justify-center items-center">
                <p className="w-[168px] h-[42px] text-orange-500 text-2xl tracking-wide text-center HeroSection font-['DM_Sans']">
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
