// inverse data flow
// 1. behavior happens in a child component
// 2. changes need to occur outside of the scope of the child component

// how do we solve: inverse data. We lift our state up to the common component
// parent component(common component): we add the state, we make sure to mutate state here (the setter function should only be called here by defining a callback function that will be passed into the child component when needed)
// child component will receive props inside of those props will be 1. the state value, second argument is the callback function that was defined in the parent component to update the state

import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import projects from "./projects";

const App = () => {
  // const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(projects);

  // const handleClick = () => {
  //   fetch("http://localhost:4000/projects")
  //     .then((res) => res.json())
  //     .then((projects) => setProjects(projects));
  // };

  // const handleClick = (projects) => {
  //   setProjects(projects);
  // };

  //create a callback function: inside of this callback function we are going to update the state that belongs to App
  const onUpdateDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //console.log(isDarkMode);

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const onHandleSearch = (e) => setSearchQuery(e.target.value);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onUpdateDarkMode={onUpdateDarkMode} />
      <ProjectForm />
      <button>Load Projects</button>
      <ProjectList
        projects={projects}
        searchResults={searchResults}
        onHandleSearch={onHandleSearch}
      />
    </div>
  );
};

export default App;
