import './Footer.css';

import linkedin from './../../images/linkedin.svg';
import github from './../../images/github.svg';
import mail from './../../images/mail.svg';

function Footer()
{
    return <div className='footer'>
        <div className='information'>
            Developed by <span className='name'> Jané Conradie </span> | 2024
            <div className='links'>
                <a href="https://www.linkedin.com/in/jan%C3%A9-conradie-46687b186/" target='_blank' rel='noreferrer'>
                    <img src={linkedin} alt="linkedin"/>
                </a>
                <a href="https://github.com/jane-conradie" target='_blank' rel='noreferrer'>
                    <img src={github} alt="github"/>
                </a>
                <a href="mailto:jconradie1998@gmail.com">
                    <img src={mail} alt="mail"/>
                </a>
            </div>
        </div>
    </div>
}

export default Footer;