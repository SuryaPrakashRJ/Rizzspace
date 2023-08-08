import axios from "axios";
import "./Footer.css";
import { useState } from "react";
import { toast } from "react-toastify";
const Footer = () => {
  const [newsMail, setNewsMail] = useState("");
  const [loading, setLoading] = useState(false);

  function handleNewsMail(e) {
    setNewsMail(e.target.value);
  }
  const handleNewsSub = async (e) => {
    e.preventDefault();
    setLoading(true);
    const telebot = await axios.post(
      `https://api.telegram.org/bot${
        import.meta.env.VITE_TELEGRAM_BOTID
      }/sendMessage`,
      {
        chat_id: import.meta.env.VITE_TELEGRAM_CHATID,
        text: `New Newsletter Signup\nEmail: ${newsMail}`,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "cache-control": "no-cache",
        },
      }
    );

    console.log(telebot.status);
    if (telebot.status === 200) {
      toast.success(
        "Thank you for signing up for the beta. We will get back to you soon.",
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
      toast.error("Something went wrong. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    setLoading(false);
  };

  return (
    <>
      <footer className="bg-[#262626] text-white">
        <div className="mx-[70px] sm:mx-[100px]">
          <div className="w-full max-w-screen-xl py-6 lg:py-8">
            <div className="flex flex-col space-y-4 md:flex-row md:justify-between">
              <div className="flex font-['Alegreya_Sans'] text-[22px] md:items-center md:w-3/6">
                <p>
                  Join our newsletter to keep up <br /> to date with us!
                </p>
              </div>
              <div className="md:w-3/6">
                <form className="rounded-sm">
                  <label
                    htmlFor="website-admin"
                    className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <div className="flex flex-col md:flex-row">
                    <input
                      type="text"
                      id="website-admin"
                      className="rounded-[4px] rounded-t-[4px] md:rounded-r-none md:rounded-l-[4px] text-black block flex-1 w-full text-xs md:text-sm p-2"
                      placeholder="Your Email"
                      onChange={handleNewsMail}
                    />
                    <button
                      onClick={(e) => handleNewsSub(e)}
                      className={` rounded-[4px] py-2 mt-2 md:mt-0 md:w-[140px] inline-flex items-center px-2 md:px-3 text-xs md:text-sm justify-center text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-[4px] md:rounded-l-none md:rounded-r-[4px] ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {loading ? <span>Sending...</span> : <span>Submit</span>}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="md:flex md:justify-between font-['Alegreya_Sans']">
              <div className="mb-4 md:mb-0 flex flex-col text-center md:text-left space-y-3">
                <a
                  href="https://rizzspace.com/"
                  className="flex items-center justify-center md:justify-start"
                >
                  <img
                    src="/logo.svg"
                    className="h-10 w-10 md:h-14 md:w-14 mr-2"
                    alt="Gomonetize Logo"
                  />
                </a>
                <span className="text-xl md:text-2xl whitespace-nowrap font-['Puritan']">
                  Rizzspace
                </span>
                <div className="w-full h-auto md:w-[80%] md:max-w-[407px]">
                  <p className="text-xs md:text-base font-['Alegreya_Sans']">
                    we sculpt innovative dreams into triumphant digital
                    realities, crafting your legacy of excellence.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 space-x-7">
                <div>
                  <ul className=" font-medium space-y-5">
                    <li>
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Help & Support
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className=" font-medium space-y-5">
                    <li>
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="mt-4 text-center sm:flex sm:items-center sm:justify-between">
              <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                © 2023{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Vaers
                </a>
                . All Rights Reserved.
              </span>
              <div className="flex justify-between  flex-row mt-3 space-y-3  items-end sm:mt-0 sm:space-x-5">
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" />
                  </svg>
                  <span className="sr-only">GitHub account</span>
                </a>
              </div>

              <div className="mt-7 sm:mt-3 text-gray-500 flex flex-col space-y-2 sm:flex-row sm:items-end sm:space-x-6">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
                <a href="#" className="hover:underline">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
