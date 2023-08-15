import "./WhatWeOffer.css";
import { OfferData } from "../../Api/Data";

const WhatWeOffer = () => {
  return (
    <>
      <section className="py-10" id="services">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <p className="Heading">What We Offer</p>
          </div>
          <div className="fullCards h-max md:w-[90%] mx-auto px-9 grid md:grid-cols-3 gap-14">
            {OfferData.map((e) => {
              return (
                <>
                  <div className="singleCards flex justify-center items-center ">
                    <div className="card min-h-[300px] w-auto flex flex-col justify-center items-center py-10 px-2 rounded-lg space-y-4">
                      <div className="w-[100px] h-[100px] bg-zinc-700 rounded-full border border-black ">
                        {e.imgSrc}
                      </div>
                      <div
                        className="space-y-4">
                        <div className="text-white text-[25px] lg:text-[34px] font-semibold font-[Inter] leading-10 text-center break-words min-h-fit ">
                          {e.cardTitle}
                        </div>
                        <div className="text-center text-zinc-400 text-[16px] font-normal font-[Inter] break-words">
                          {e.cardContent}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
