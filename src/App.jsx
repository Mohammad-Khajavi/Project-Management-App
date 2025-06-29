import { useState } from "react";
import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";
import { Match } from "storybook/internal/router";

export default function App() {
  const [projectsStates, setProjectsStates] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
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
  let content;

  if (projectsStates.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar
          onStartAddProject={handleStartAddProject}
          projects={projectsStates.projects}
        />
        {content}
      </main>
    </>
  );
}
