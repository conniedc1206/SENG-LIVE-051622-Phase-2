//Create an App component that:
//Returns the Header, ProjectForm and ProjectList components
//Provides the array of projects to ProjectList as props

import Header from "./Header"
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList";

import projects from "./projects";

//console.log(projects);

function App() {
  return <div className="App">
    <Header />
    <ProjectForm />
    <ProjectList projects={projects}/>
  </div>;
}

export default App;
