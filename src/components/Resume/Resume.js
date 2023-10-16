import ResumeImg from "../../images/resume.jpg";
import downloadIcon from "../../images/download.svg";

const Resume = () => {
  return (
    <div className="flex justify-center items-center mb-10">
      <div className="w-[80%] mt-10 flex flex-col">
        <a
          href="../../images/owaisresumeb&w.pdf"
          download="owaisresume.pdf"
          className="flex justify-center items-center text-white text-lg hover:bg-blue-400 duration-150 bg-purple-500 w-80 h-10 rounded-md mt-12 mb-10 self-center "
        >
          <img src={downloadIcon} alt="download icon" />
          <span>Download Resume</span>
        </a>
        <img src={ResumeImg} alt="resume img" />
        <a
          href={"../../images/owaisresumeb&w.pdf"}
          download="owaisresume.pdf"
          className="flex justify-center items-center text-white text-lg hover:bg-blue-400 duration-150 bg-purple-500 w-80 h-10 rounded-md mt-12 self-center "
        >
          <img src={downloadIcon} alt="download icon" />
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Resume;
