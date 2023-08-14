import "./Project.css";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

let TrainerData = [
  {
    id: 1,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/800px-Talampaya_1.jpg",
    trainerName: "Project Name",
    trainDescription: "Project Des",
    webSiteLink: "https://www.facebook.com/",
  },
  {
    id: 2,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/800px-Talampaya_1.jpg",
    trainerName: "Project Name",
    trainDescription: "Project Des",
    webSiteLink: "https://www.facebook.com/",
  },
  {
    id: 3,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/800px-Talampaya_1.jpg",
    trainerName: "Project Name",
    trainDescription: "Project Des",
    webSiteLink: "https://www.facebook.com/",
  },
  {
    id: 4,
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/800px-Talampaya_1.jpg",
    trainerName: "Project Name",
    trainDescription: "Project Des",
    webSiteLink: "https://www.facebook.com/",
  },
];

const Project = () => {
  return (
    <>
      <section className="py-10">
        <div className="2xl:container mx-auto">
        <div className="grid grid-cols-1 w-[90%] mx-auto pb-14">
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="Heading py-2">OUR WORK</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 w-[90%] mx-auto min-h-[820px]">
            {TrainerData.map((e, index) => {
              return (
                <>
                  <div key={index} className="card my-5 rounded-[4px]">
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
                        <BsFillArrowUpRightCircleFill
                          style={{ fontSize: "21px" }}
                          className="hover:fill-[var(--primary-color)]"
                        />
                      </span>
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

export default Project;
