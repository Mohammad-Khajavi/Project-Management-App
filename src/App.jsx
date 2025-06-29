import { useState } from "react";
import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";

export default function App() {
  const [projectsStates, setProjectsStates] = useState({
    selectedProjectId: undefined,
    projectArray: [],
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
    setProjectsStates((prevState) => {
      const newProject = {
        ...projectDate,
        id: Math.random(),
      };
      return {
        ...prevState,
        projectArray: [...prevState.projectArray],
      };
    });
  }
  console.log(projectsStates);
  let content;

  if (projectsStates.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsStates.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}
