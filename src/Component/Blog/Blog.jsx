import { BlogData } from "../../Api/Data";
import {Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="py-10 mt-16">
        <div className="2xl:container mx-auto">
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 ">
            {BlogData.map((e) => {
              return (
                <>
                <div className="flex justify-center items-center py-10 px-2">
                <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md " key={e.id}>
                    <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-contain">
                      <img src={e.imgLink} alt={e.title} className="bg-cover h-[100%]"/>
                    </div>
                    <div className="p-6">
                      <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                      {e.title}
                      </h5>
                      <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {e.content}
                      </p>
                    </div>
                    <div className="p-6 pt-0">
                      <Link to={e.blogLink
                      }>
                      <button
                        data-ripple-light="true"
                        type="button"
                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Read More
                      </button></Link>
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

export default Blog;
