import { Link } from "react-router-dom";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/github.svg";

const Footer = () => {
  return (
    <div className="w-full md:h-20 flex md:flex-row flex-col h-48 justify-around bg-black">
      <div className="md:w-[50%] w-full h-20 flex md:flex-row flex-col items-center justify-around">
        <h2 className="font-semibold text-white text-lg ">
          Designed and Developed by OWAIS AYOUB
        </h2>
        <h3 className="font-medium text-white text-lg">Copy right &#169; OA</h3>
      </div>
      <div className="flex justify-around items-center w-1/2 ml-[30%] md:ml-0 md:w-[15%] ">
        <Link to="https://github.com/Owaisayoub" target="blank">
          <img className="" src={github} alt="twitter icon" />
        </Link>
        <Link to="https://twitter.com/owais_ayoub_9" target="blank">
          <img src={twitter} alt="twitter icon" />
        </Link>
        <Link to="https://www.instagram.com/owais_ayoub_11/" target="blank">
          <img src={instagram} alt="twitter icon" />
        </Link>
        <Link>
          <img
            to="https://www.linkedin.com/in/owais-ayoub-a7a869176/"
            target="blank"
            src={linkedin}
            alt="twitter icon"
          />
        </Link>
      </div>
    </div>
  );
};
export default Footer;
