import { useState } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";

const MainNavigation = () => {
  const [isHidden, setIsHidden] = useState(true);

  const [navHeight, setNavHeight] = useState("h-20");

  const hamburgerClickHanlder = () => {
    setIsHidden(!isHidden);
    if (isHidden) {
      setNavHeight("h-20");
    } else {
      setNavHeight("h-[100vh]");
    }
  };

  return (
    <nav
      className={` w-full md:h-20  flex md:relative transition-all ease-in-out duration-300 drop-shadow-lg    ${navHeight}`}
    >
      <div className=" absolute md:relative w-32 flex text-white h-20 items-center justify-center">
        <Link to="/" className="text-purple-500 text-4xl font-bold">
          OA
        </Link>
      </div>
      <div
        className={`w-full  md:h-20  md:mt-0 flex md:justify-end ${navHeight} sticky top-0 bg-red-500  items-center justify-center mt-20  h-[25rem]`}
      >
        <ul
          className={` md:w-[85%]  flex md:flex-row md:items-center md:justify-around h-[20rem] flex-col`}
        >
          <NavLinks onClick={hamburgerClickHanlder} />
        </ul>
      </div>
      <div
        onClick={hamburgerClickHanlder}
        className="absolute right-5 top-5 md:hidden"
      >
        <div className="h-1 w-5 bg-purple-500 mb-1"></div>
        <div className="h-1 w-5 bg-purple-500 mb-1"></div>
        <div className="h-1 w-5 bg-purple-500 mb-1"></div>
      </div>
    </nav>
  );
};

export default MainNavigation;
