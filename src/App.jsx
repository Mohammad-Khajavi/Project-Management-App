import { useState } from "react";
import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
import mockData from "./mockData.json";

export default function App() {
  const [projectsStates, setProjectsStates] = useState({
    selectedProjectId: 1,
    projects: mockData.projects,
    tasks: mockData.tasks,
  });

  function handleAddTask(text) {
    const taskId = Math.random();
    setProjectsStates((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

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

  function handleDeleteProject() {
    setProjectsStates((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = projectsStates.projects.find(
    (project) => project.id === projectsStates.selectedProjectId
  );

  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsStates.tasks.filter(
        (task) => task.projectId === projectsStates.selectedProjectId
      )}
    />
  );

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
          selectedProjectId={projectsStates.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}
