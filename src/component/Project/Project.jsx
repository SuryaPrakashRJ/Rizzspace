import "./Project.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ProjectData } from "../../api/Data";

const Project = () => {
  return (
    <div id='our_works'>
      <section className="md:py-10">
        <div className="2xl:container mx-auto">
        <div className="md:grid md:grid-cols-1 w-[90%] mx-auto">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="Heading ">Our Works</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 w-[90%] mx-auto">
            {ProjectData.map((e, index) => {
              return (
                <>
                  <div key={index} className="card rounded-[4px]">
                    <img className="img-img" src={e.imgSrc} alt="GymImg" />
                    <div className="img-overlay">
                      <span>
                        <h3 className="img-overlay-name text-center">
                          {e.trainerName}
                        </h3>
                      </span>
                      <span>
                        <h5 className="img-overlay-tilte text-center">
                          {e.trainDescription}
                        </h5>
                      </span>
                      <span className="flex justify-center items-center gap-5 py-4">
                        <a href={e.webSiteLink} target="_blank" rel="noreferrer">
                        <BsFillArrowUpRightCircleFill
                          style={{ fontSize: "21px" }}
                          className="hover:fill-[var(--primary-color)]"
                        />

                        </a>
                       
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
