import { useState } from "react";

const ProjectListItem = ({ id, about, image, link, name, phase }) => {
  const [clapCounts, setClapCounts] = useState(0);
  const handleClap = () => {
    setClapCounts((currentClapCount) => {
      return (currentClapCount + 1);
    });
  };
  //console.log(clapCounts);

  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button onClick={handleClap} className="claps">
          👏{0}
        </button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
