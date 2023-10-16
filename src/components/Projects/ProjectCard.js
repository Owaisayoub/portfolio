import { Link } from "react-router-dom";

import gitHubIcon from "../../images/github.svg";
import demoIcon from "../../images/demo.svg";
const ProjectCard = (props) => {
  return (
    <div className="h-full  w-full flex flex-col justify-center items-center bg-none border-2 border-purple-500 p-8 rounded-md shadow-md transition-all ease-linear duration-150 hover:shadow-purple-600 shadow-black hover:scale-105">
      <div className=" w-[80%] overflow-hidden rounded-md">
        <img className="border" src={props.image} alt="reactmeals img" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {props.children}
      </div>
      <div className="flex  self-start justify-between w-1/2 mt-5">
        <Link className="projectLinks" to="#">
          <img
            className="inline-block text-white"
            src={gitHubIcon}
            alt="githubIcon"
          />{" "}
          <span className="ml-2 mb-2">GitHub</span>
        </Link>
        <Link className="projectLinks" to="#">
          <img className="inline-block" src={demoIcon} alt="demoIcon" />{" "}
          <span className="ml-2 mb-2"> Demo</span>
        </Link>
      </div>
    </div>
  );
};
export default ProjectCard;
