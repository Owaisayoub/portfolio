import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Header/MainNavigation";
import Footer from "../components/Layout/Footer";
const Root = () => {
  return (
    <>
      <MainNavigation />

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
