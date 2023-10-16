import { Link } from "react-router-dom";
import twitter from "../../images/twitter.svg";
import linkedIn from "../../images/linkedin.svg";
import instagram from "../../images/instagram.svg";

const Contact = () => {
  return (
    <div className="h-80  w-full">
      <div className=" flex flex-col items-center justify-center text-white">
        <h1 className="mt-[5rem] text-5xl font-semibold">FIND ME ON</h1>
        <h3 className="mt-3 text-xl">Feel Free to Contact</h3>
        <div className=" w-[15rem] h-[4rem] flex justify-between items-center">
          <Link
            className="contactLink"
            to="https://github.com/Owaisayoub"
            target="blank"
          >
            <svg
              className="mt-2 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="white"
              stroke="purple"
              strokeWidth="3"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </Link>
          <Link
            className="contactLink text-center "
            to="https://twitter.com/owais_ayoub_9"
            target="blank"
          >
            <img className="mt-2 ml-2" src={twitter} alt="twitterIcont" />
          </Link>
          <Link
            className="contactLink"
            to="https://www.linkedin.com/in/owais-ayoub-a7a869176/"
            target="blank"
          >
            <img className="mt-2 ml-2" src={linkedIn} alt="linkedIcon" />
          </Link>
          <Link
            className="contactLink"
            to="https://www.instagram.com/owais_ayoub_11/"
            target="blank"
          >
            <img className="mt-2 ml-2" src={instagram} alt="instagramIcon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
