import homePageImg from "../../images/homepageimg.svg";

const HomePageImg = () => {
  return (
    <div className="w-full md:w-1/2 h-80 flex justify-center items-center md:block ">
      <div className="w-80  md:w-full ">
        <img className="w-full" src={homePageImg} alt="homepageimg" />
      </div>
    </div>
  );
};

export default HomePageImg;
