import './Grid.css';

function Grid({ projects })
{
    return <div className="grid">
        <div className="showcase-grid">
            {projects?.map((element) => {
            return (
                <div key={"project" + element.projectNumber} className='card'>
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