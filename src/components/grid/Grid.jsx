import './Grid.css';

function Grid({ projects })
{
    console.log(projects);

    return <div className="grid">
        <div className="showcase-grid">
            {projects?.map((element) => {
            return (
                <div className={"project" + element.projectNumber}>
                    <img src={element.imageSource} />
                  {/* thumbnail
            below shows on hover
            project name
            description */}
                </div>
              );
            })}
          </div>
    </div>
}

export default Grid;