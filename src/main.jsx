import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Component/Error/Error";
import App from "./Component/AppLayout";
import Body from "./pages/Body";
import TermCondition from "./Component/TermAndCondition/TermCondition";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage"

let browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/service",
        element: <ServicePage/>,
      },
      {
        path:"/about",
        element: <AboutPage/>
      },
      {
        path: "/terms-and-condition",
        element: <TermCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browerRouter} />
  </React.StrictMode>
);
