import ProjectListItem from "./ProjectListItem";

function ProjectList({ projects }) {
  //console.log(projects);

  const projectListItem = projects.map((project) => {
    //console.log(project);
    return <ProjectListItem key={project.id} project={project} />;
  });

  return <ul className="cards">{projectListItem}</ul>;
}

export default ProjectList;
