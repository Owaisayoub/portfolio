import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ResumePage from "./pages/Resume";
import ProjectsPage from "./pages/Projects";
import BlogsPage from "./pages/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "blogs",
        element: <BlogsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
