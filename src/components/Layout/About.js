import personImg from "../../images/personImg.svg";

const About = () => {
  return (
    <div className="  w-full h-{30rem} flex md:flex-row flex-col  items-center text-white">
      <div className="md:w-[66%]  flex-col justify-start  w-full items-center">
        <h1 className="md:mt-20 mt-0 md:ml-36 md:text-4xl font-semibold w-full ml-6 text-3xl  ">
          LET ME INTRODUCE MYSELF
        </h1>
        <p className="mt-10 md:ml-20 ml-6 md:text-xl text-lg font-normal w-full ">
          I fell in love with programming and I have atleast learnt something, I
          think...
        </p>
        <p
          className="mt-10 md:ml-20 ml-6 md:text-xl text-lg self-start
         font-normal"
        >
          I am fluent in classic like{" "}
          <span className="font-bold"> JavaScript</span>
        </p>
        <p
          className="mt-10 md:ml-20 ml-6 md:text-xl text-lg self-start
         font-normal"
        >
          My fields of intrests are
          <span className=" font-bold"> Web Technologies and Products</span>
        </p>
        <p
          className="mt-10 md:ml-20 ml-6 md:text-xl text-lg self-start
         font-normal"
        >
          Whenever possible, I also apply passion for developoing Products with
          <span className="font-bold">Node.js</span> and
          <span className="font-bold">
            {" "}
            Modern Libarary and FrameWorks
          </span>{" "}
          like
          <span className="font-bold"> React.js and Next.js</span>
        </p>
      </div>
      <div className="w-[34%] flex justify-center items-center mt-10 md:mt-0">
        <img src={personImg} alt="personimg" />
      </div>
    </div>
  );
};

export default About;
