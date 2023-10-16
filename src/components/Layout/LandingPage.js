import About from "./About";
import Contact from "./Contact";
import HomeHeading from "./HomeHeading";
import HomePageImg from "./HomePageImg";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-[40rem] text-white flex md:flex-row flex-col">
        <HomeHeading />
        <HomePageImg />
      </div>
      <About />
      <Contact />
    </>
  );
};
export default LandingPage;
