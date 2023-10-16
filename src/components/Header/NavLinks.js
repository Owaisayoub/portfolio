import { Link } from "react-router-dom";
const NavLinks = () => {
  return (
    <>
      <Link to="/" className="navLink">
        <svg
          className="inline-block  mb-3 lg:inline-block md:block md:-mb-2 ml-2 mr-0 lg:mb-1 lg:mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Home
      </Link>
      <Link to="/about" className="navLink">
        <svg
          className="inline-block  mb-3 lg:inline-block md:block md:-mb-2 ml-3 mr-0 lg:mb-1 lg:mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        About
      </Link>
      <Link to="/projects" className="navLink">
        <svg
          className="inline-block  mb-3 lg:inline-block md:block md:-mb-2 ml-4 lg:mb-1 lg:mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
        Projects
      </Link>
      <Link to="/resume" className="navLink">
        <svg
          className="inline-block  mb-3 md:block lg:inline-block md:-mb-2 ml-3 mr-0 lg:mb-1 lg:mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
        <span>Resume</span>
      </Link>
      <Link to="blogs" className="navLink">
        <svg
          className="inline-block md:block  mb-3 lg:inline-block  md:-mb-2 ml-2 w-8 mr-0 lg:mb-1 lg:mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
        </svg>
        Blogs
      </Link>
      <Link
        className="feather feather-github bg-purple-500 px-2 py-1 w-16 cursor-pointer rounded-md transition-all ease-in duration-150 hover:bg-purple-700 hover:scale-110 lg:mr-16 mt-3 ml-6 md:mt-0 md:ml-0 "
        to="https://github.com/Owaisayoub"
        target="blank"
      >
        <svg
          className="mt-1 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </Link>
    </>
  );
};

export default NavLinks;
