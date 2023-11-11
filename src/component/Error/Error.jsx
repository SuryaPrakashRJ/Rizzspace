import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const data = useRouteError();
  console.log(data);

  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <div className="bg-white py-6 sm:py-8 lg:py-12 rounded-xl">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="flex flex-col items-center">
              <a
                href="/"
                className="mb-8 inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                aria-label="logo">
                RizzSpace
              </a>

              <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
                {data.status}
              </p>
              <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
                {data.data}
              </h1>

              <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
                {data.statusText}
              </p>

              <Link
                to="/"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                Go home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
