import "./WhatWeOffer.css"
import { OfferData } from "../../Api/Data";

const WhatWeOffer = () => {
  return (
    <>
      <section className="py-10" id="services">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1">
            <p className="Heading">What We Offer</p>
          </div>
          <div className="w-[90%] mx-auto grid md:grid-cols-3 gap-5">
            {
              OfferData.map((e) => {
                return (
                  <>
                    <div className="flex justify-center items-center">
                      <div className="card min-h-[400px] flex flex-col justify-center items-center py-10 space-y-5 px-2">
                        <div className="w-[114.19px] h-[100px] bg-zinc-700 rounded-full border border-black">{e.imgSrc}</div>
                        <div className="text-white text-[25px] lg:text-[34px] font-['poppins'] leading-10 text-center break-words min-h-fit ">{e.cardTitle}</div>
                        <div className="text-center text-zinc-400 text-[24px] font-normal break-words">{e.cardContent}</div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeOffer