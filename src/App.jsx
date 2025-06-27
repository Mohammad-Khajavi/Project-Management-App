import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectSideBar from "./components/ProjectsSideBar.jsx";

export default function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectSideBar />
        <NoProjectSelected />
      </main>
    </>
  );
}
