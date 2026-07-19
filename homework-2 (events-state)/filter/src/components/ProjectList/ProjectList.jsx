import "./ProjectList.css";
function ProjectList({ projects }) {
    return (
        <div className="images">
            {projects.map((project, index) => (
                <figure key={index} className="image">
                    <img src={project.img} alt={project.category} />
                </figure>
            ))}
        </div>
    )
}

export default ProjectList;