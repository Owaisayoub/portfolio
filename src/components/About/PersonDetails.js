import aboutImg from "../../images/about.png";
import arrow from "../../images/arrow-right.svg";

const PersonDetails = () => {
  return (
    <div className="flex w-full  text-white h-full justify-center ">
      <div className=" w-[60%] flex flex-col justify-start items-center mt-[5rem]">
        <h1 className="text-white font-bold sm:text-3xl text-2xl">
          KNOW WHO <span className="text-purple-500">I AM</span>
        </h1>
        <p className="sm:text-2xl text-xl mt-10">
          Hi Everyone, I am{" "}
          <span className="text-purple-500 font-semibold text-xl">
            {" "}
            Owais Ayoub{" "}
          </span>
          from{" "}
          <span className="text-purple-500 font-semibold text-xl">
            {" "}
            Kashmir
          </span>
          . I am a final year student pursuing an B.E Computer Science and
          Engineering at Jyothy Insitute of Technology Bangalore.
        </p>
        <p className="sm:text-2xl text-xl mt-10 self-start">
          Apart from coding, some other activities that I love to do!
        </p>
        <div
          className=" self-start px-4 py-5
        "
        >
          <p className="activity">
            <img src={arrow} alt="arrow" className="inline-block mr-3 mb-1" />
            Cricket
          </p>
          <p className="activity">
            <img src={arrow} alt="arrow" className="inline-block mr-3 mb-1" />
            Fishing
          </p>
          <p className="activity">
            <img src={arrow} alt="arrow" className="inline-block mr-3 mb-1" />
            <span>Forex Scalping</span>
          </p>
        </div>
      </div>
      <div className="hidden  w-[25%] h-30rem] sm:flex justify-center items-center">
        <img src={aboutImg} alt="aboutImg" />
      </div>
    </div>
  );
};

export default PersonDetails;
