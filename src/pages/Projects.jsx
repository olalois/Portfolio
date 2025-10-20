import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PHOENIX LANDING PAGE",
    image: "src/assets/Phoenix-Landingpage.png",
    description: "A responsive landing page built with HTML, CSS and JavaScript",
    github: "https://github.com/olalois",
    live: "https://olalois.github.io/Phoenix-Landingpage/#spotlight",
  },
  {
    id: 2,
    title: "PROFILE CARD WITH FORM VALIDATION",
    image: "src/assets/profile-card.png",
    description: "A profile card component with integrated form validation.",
    github: "https://github.com/olalois",
    live: "",
  },
  {
    id: 3,
    title: "THE ALPINISTS'",
    image: "src/assets/AlpinistLandingPage.png",
    description: "A responsive landing page built with HTML and CSS",
    github: "https://github.com/olalois",
    live: "https://olalois.github.io/AlpinistLandingPage/",
  },
  {
    id: 4,
    title: "WORLD LIBERATION MINISTRY",
    image: "src/assets/WOLOM.png",
    description: "A responsive church website built with React JS and Tailwind CSS",
    github: "https://github.com/olalois",
    live: "https://world-liberation-ministries.vercel.app/about",
  },
  {
    id: 5,
    title: "MENU/RECIPE PAGE",
    image: "src/assets/Recipe-Page.png",
    description: "A responsive menu/recipe page built with HTML, CSS and JavaScript",
    github: "https://github.com/olalois",
    live: "https://olalois.github.io/Recipe-Page/",
  },
  {
    id: 6,
    title: "MAINTAINANCE PAGE",
    image: "src/assets/maintenance-page-complaintpage.png",
    description: "A responsive maintenance page built with HTML CSS and JavaScript.",
    github: "https://github.com/olalois",
    live: "https://olalois.github.io/project-on-maintenance-page/",
  },
  {
    id: 7,
    title: "CONTACT FORM PAGE",
    image: "src/assets/contact-form.png",
    description: "A responsive contact form page built with HTML and CSS.",
    github: "https://github.com/olalois",
    live: " https://olalois.github.io/Contact-form/",
  },
   {
    id: 8,
    title: "PRODUCT LIST WITH CART",
    image: "src/assets/Product-list-with-cart.png",
    description: "A product list page with cart functionality built using HTML, CSS, and JavaScript.",
    github: "https://github.com/olalois",
    live: "https://olalois.github.io/Product-list-with-cart/",
  },
  // {
  //   id: 9,
  //   title: "Canine Dataset Splitter",
  //   image: "src/assets/canine.jpg",
  //   description: "Python script to split image dataset into training, validation, and test sets.",
  //   github: "https://github.com/olalois",
  //   live: "#",
  // },
];

const Project = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = page * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold mb-6 text-gray-300">My Projects</h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className="bg-black rounded-lg shadow-lg shadow-gray-900 overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Info */}
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2 text-gray-400">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={20} className="text-gray-300 hover:text-white" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink size={20} className="text-gray-300 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className={`p-3 rounded-full ${
            page === 0
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-800"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <span className="text-gray-400 text-sm">
          Page {page + 1} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={page === totalPages - 1}
          className={`p-3 rounded-full ${
            page === totalPages - 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-800"
          }`}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Project;
