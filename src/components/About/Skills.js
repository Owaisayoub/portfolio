import javaScriptIcon from "../../images/javascriptIcon.svg";
import nodeJsIcon from "../../images/nodejsicon.svg";
import reactIcon from "../../images/reacticon.svg";
import mongodbIcon from "../../images/mongodbicon.svg";
import tailwindIcons from "../../images/tailwindcss.svg";
import javaIcon from "../../images/javaicon.svg";
import pythonIcon from "../../images/pythonicon.svg";
import sassIcon from "../../images/sassicon.svg";

const Skills = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10">
      {" "}
      <p className=" text-white h-[100%] sm:text-4xl text-3xl font-medium">
        Professional <span className="text-purple-600">Skill Set</span>
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="skill">
          <img src={javaScriptIcon} alt="javascript icon" />
        </div>
        <div className="skill">
          <img src={nodeJsIcon} alt="nodejs icon" />
        </div>
        <div className="skill">
          <img src={reactIcon} alt="reactjs icon" />
        </div>
        <div className="skill">
          <img src={mongodbIcon} alt="mongoDb icon" />
        </div>
        <div className="skill">
          <img src={tailwindIcons} alt="tailwind icon" />
        </div>
        <div className="skill">
          <img src={javaIcon} alt="javaicon" />
        </div>
        <div className="skill">
          <img src={pythonIcon} alt="python icon" />
        </div>
        <div className="skill">
          <img src={sassIcon} alt="sass icon" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
