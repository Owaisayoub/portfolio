import windowsIcon from "../../images/window.svg";
import postmanIcon from "../../images/postmanicon.svg";
import vscodeIcon from "../../images/vscodeicon.svg";
import gitIcon from "../../images/giticon.svg";

const Tools = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
      {" "}
      <p className=" text-white h-[100%] sm:text-4xl text-3xl font-medium">
        <span className="text-purple-600">Tools</span> I Know
      </p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-10">
        <div className="skill">
          <img src={windowsIcon} alt="windows icon" />
        </div>
        <div className="skill">
          <img src={postmanIcon} alt="postman icon" />
        </div>
        <div className="skill">
          <img src={vscodeIcon} alt="vscode icon" />
        </div>
        <div className="skill">
          <img src={gitIcon} alt="git icon" />
        </div>
      </div>
    </div>
  );
};

export default Tools;
