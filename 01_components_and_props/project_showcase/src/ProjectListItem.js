function ProjectListItem({  project  }) {
  //console.log(project)
  const { name, image, about } = project
  //console.log(about)
  
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
      </figure>
      <article className="details">
        <h4>{name}</h4>
        <p>{about}</p>
      </article>
    </li>
  );
}

export default ProjectListItem;
