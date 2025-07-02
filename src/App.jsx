import { useState } from "react";
import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";
import { Match } from "storybook/internal/router";
import SelectedProject from "./components/SelectedProject.jsx";

export default function App() {
  const [projectsStates, setProjectsStates] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject() {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectDate) {
    const projectId = Math.random();
    setProjectsStates((prevState) => {
      const newProject = {
        ...projectDate,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  const selectedProject = projectsStates.projects.find(
    (project) => project.id === projectsStates.selectedProjectId
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsStates.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar
          onStartAddProject={handleStartAddProject}
          projects={projectsStates.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  );
}
