import ProjectCard from "./ProjectCard";
import reactMeals from "../../images/reatMeals.png";
import frokify from "../../images/frokify.png";
import Bankist from "../../images/Bankist.png";
import getEvents from "../../images/getEvents.png";
import Natours from "../../images/Natours.png";
import Trillio from "../../images/Trillio.png";

const Projects = () => {
  return (
    <div className="w-full h-full text-white flex flex-col justify-center items-center mb-10 ">
      {" "}
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 ">
          My <span className="text-purple-500">Work</span>
        </h1>
        <h3 className="text-2xl">
          Here are few of the projects i have created so far
        </h3>
      </div>
      <div className="grid  md:grid-cols-2 grid-cols-1  lg:grid-cols-3 gap-16 mt-10 px-8 w-[90%] ">
        <ProjectCard image={reactMeals}>
          {" "}
          <h3 className="mt-4 text-lg font-medium">React Meals</h3>
          <p className="mt-4 text-sm leading-8">
            This React app utilizes Firebase for real-time data storage. It
            features a dynamic display of food items fetched from the database,
            a cart functionality for users to add selected items, and an order
            placement system. User details are stored in Firebase, providing a
            seamless and interactive food ordering experience.
          </p>
        </ProjectCard>
        <ProjectCard image={frokify}>
          <h3 className="mt-4 text-lg font-medium">Frokify</h3>
          <p className="mt-4 text-sm leading-8">
            This HTML/CSS app employs AJAX and a third-party API to dynamically
            fetch a wide range of recipes. Users have the ability to upload
            their own recipes, creating a collaborative platform for culinary
            enthusiasts to share and explore diverse dishes.
          </p>
        </ProjectCard>
        <ProjectCard image={Bankist}>
          <h3 className="mt-4 text-lg font-medium">Bankist</h3>
          <p className="mt-4 text-sm leading-8">
            This dynamic web app, built with HTML, Sass, and JavaScript, serves
            as a simulated bank system. It manages transactions, account
            balances, and other banking operations without a backend. The
            application stores and manipulates data using an array of objects,
            providing users with a local, frontend-based banking experience.
          </p>
        </ProjectCard>
        <ProjectCard image={getEvents}>
          <h3 className="mt-4 text-lg font-medium">Get Events</h3>
          <p className="mt-4 text-sm leading-8">
            This full-stack app, developed with React, Express, and Node.js,
            provides robust user authentication. Users can sign up, log in, and
            create new events. Authenticated users gain the ability to upload
            and manage both new and existing events, offering a comprehensive
            platform for event management with a secure user authentication
            system.
          </p>
        </ProjectCard>
        <ProjectCard image={Natours}>
          <h3 className="mt-4 text-lg font-medium">Natours</h3>
          <p className="mt-4 text-sm leading-8">
            This static website, crafted with HTML and Sass, serves as a
            visually appealing platform for booking tours. Its user-friendly
            design provides information about available tours, allowing visitors
            to easily navigate and make reservations for their desired travel
            experiences.
          </p>
        </ProjectCard>
        <ProjectCard image={Trillio}>
          <h3 className="mt-4 text-lg font-medium">Trillio</h3>
          <p className="mt-4 text-sm leading-8">
            This static website, designed with HTML and Sass, offers a seamless
            experience for booking hotels and purchasing real estate. Users can
            explore available options, access detailed information, and complete
            bookings or real estate transactions through an intuitive and
            visually appealing interface.
          </p>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
