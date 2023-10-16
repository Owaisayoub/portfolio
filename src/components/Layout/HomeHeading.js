const HomeHeading = () => {
  return (
    <div className="h-[10rem]  mt-5 flex justify-center md:w-1/2 md:h-80 md:items-end md:mt-20 ">
      <div>
        <div className="flex ">
          <h1 className="md:inline-block text-4xl md:font-semibold">
            {" "}
            Hi There
          </h1>
          <span className="wave text-4xl  md:mb-5">👋</span>
        </div>
        <h2 className="md:text-4xl font-bold mt-8">
          I'M <span className="text-purple-600"> OWAIS AYOUB</span>
        </h2>
        <h2 className="md:text-4xl md:font-semibold md:mt-20 text-purple-600">
          MERN Stack Developer
        </h2>
      </div>
    </div>
  );
};

export default HomeHeading;
