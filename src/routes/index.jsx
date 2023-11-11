import { lazy, Suspense } from "react";
import AppLayout from "../layout/AppLayout";

const LazyBody = lazy(() => import("../pages/Body"));
const LazyTermCondition = lazy(() => import("../component/TermAndCondition/TermCondition"));
const LazyPrivacyPolicy = lazy(() => import("../component/PrivacyPolicy/PrivacyPolicy"));
const LazyServicePage = lazy(() => import("../pages/ServicePage"));
const LazyBlogPage = lazy(() => import("../pages/BlogPage"));
const LazyAboutPage = lazy(() => import("../pages/AboutPage"));
const LazyError = lazy(() => import("../component/Error/Error"));

const routes = [
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={"Loading Body..."}>
            <LazyBody />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={"Loading BlogPage..."}>
            <LazyBlogPage />
          </Suspense>
        ),
      },
      {
        path: "/service",
        element: (
          <Suspense fallback={"Loading ServicePage..."}>
            <LazyServicePage />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading AboutPage..."}>
            <LazyAboutPage />
          </Suspense>
        ),
      },
      {
        path: "/terms-and-condition",
        element: (
          <Suspense fallback={"Loading TermCondition..."}>
            <LazyTermCondition />
          </Suspense>
        ),
      },
      {
        path: "/privacy-policy",
        element: (
          <Suspense fallback={"Loading PrivacyPolicy..."}>
            <LazyPrivacyPolicy />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={"Loading Error..."}>
        <LazyError />
      </Suspense>
    ),
  }
];

export default [...routes];
