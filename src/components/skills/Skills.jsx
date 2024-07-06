import './Skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

function Skill({ skills })
{
    return <div>
        {skills?.map((element) => {
            return (
                <div>
                    {element.orientation > 0 ? 
                    <div className='skill'>
                        <div>
                            <h3 className=''>{element.skill}</h3>
                            <div>{element.text}</div>
                        </div>
                        <div className='right'>
                            <FontAwesomeIcon icon={faGamepad} />
                        </div>
                    </div> 
                    : 
                    <div className='skill'>
                        <div className='right'>
                            <FontAwesomeIcon icon={faGamepad} />
                        </div>
                        <div>
                            <h3 className=''>{element.skill}</h3>
                            <div>{element.text}</div>
                        </div>
                    </div>}
                    
                </div>
            )
        })}
    </div>
}

export default Skill;