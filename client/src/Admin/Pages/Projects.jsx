import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import LogoPrimary from "../../Assets/logo-primary.png";
import { UserDocs } from "../../Context/UserDocsContext";

const Projects = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeProjects, setActiveProjects] = useState([]);
  const [inactiveProjects, setInactiveProjects] = useState([]);

  const { projects } = UserDocs();
  const navigate = useNavigate();

  const HandleProjectClick = (id) => {
    navigate(`/admin/project/${id}`);
  };

  useEffect(() => {
    if (projects.length > 0) {
      setActiveProjects(projects.filter((project) => project.active === true));
      setInactiveProjects(
        projects.filter((project) => project.active === false)
      );
    } else {
      console.log("Brak projektów do filtrowania");
      return <Navigate to="/admin" />;
    }
  }, [projects]);

  const InactiveProjects = () => {
    return (
      <>
        {inactiveProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => HandleProjectClick(project.id)}
            className="input__project"
          >
            <img
              src={project.photoURL}
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className="input__project-text">
              <div className="input__project-name">{project.name}</div>
              <div className="input__project-id">{project.id}</div>
            </div>
          </button>
        ))}
      </>
    );
  };

  if (projects.length === 0) {
    return <Navigate to="/admin" />;
  }

  const ActiveProjects = () => {
    return (
      <>
        {activeProjects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => HandleProjectClick(project.id)}
            className="input__project"
          >
            <img
              src={project.photoURL}
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div className="input__project-text">
              <div className="input__project-name">{project.name}</div>
              <div className="input__project-id">{project.id}</div>
            </div>
          </button>
        ))}
      </>
    );
  };

  return (
    <section className="auth" id="auth">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div
        className="form form__box"
        data-aos="fade-up"
        data-aos-easing="ease-out-back"
        data-aos-delay="100"
      >
        <div className="form__top">
          <div className="form__logo">
            <img src={LogoPrimary} alt="sitezy" width="55px" />
          </div>
          <div className="form__top-text">
            <div className="form__top-title">Your Projects</div>
            <div className="form__top-subtitle">
              Chose one project you want to see dashboard!
            </div>
          </div>
        </div>
        <div className="form__input-box">
          <div className="form__plans__time">
            Active
            <label className="switch">
              <input
                type="checkbox"
                onChange={() => {
                  setIsActive(!isActive);
                }}
              />
              <span className="slider"></span>
            </label>
            Inactive
          </div>

          <div className="projects__list-container">
            <div className="projects__list scrollable-div">
              {isActive ? <InactiveProjects /> : <ActiveProjects />}
            </div>
          </div>
        </div>

        <Link to="/admin/setup/project" className="btn-dark">
          Create Project
        </Link>
      </div>
    </section>
  );
};

export default Projects;
