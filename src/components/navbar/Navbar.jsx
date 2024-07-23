import './Navbar.css';

import portrait_smiling from "./../../images/portrait_smiling.png";
import linkedin from './../../images/linkedin.svg';
import github from './../../images/github.svg';
import mail from './../../images/mail.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Navbar()
{
    // hide until user has started scrolling TODO

    return <div className="navbar">
        <div className='edge left'>
            <div>
                <img src={portrait_smiling} alt="avatar" className="avatar"/>
            </div>
            {/* <div className="information">
                <div>
                    <a href="https://www.linkedin.com/in/jan%C3%A9-conradie-46687b186/" target='_blank' rel='noreferrer'>
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                </div>
                <div>
                    <a href="https://github.com/jane-conradie" target='_blank' rel='noreferrer'>
                        <img src={github} alt="github"/>
                    </a>
                </div>
                <div>
                    <a href="mailto:jconradie1998@gmail.com">
                        <img src={mail} alt="mail"/>
                    </a>
                </div>
            </div> */}
            </div>
        <div>
            Jané Conradie
        </div>
        <div className='edge right'>
            {/* <div className='information'>
                <div>
                    About
                </div>
                <div>
                    Resume
                </div>
            </div> */}
            <div>
                <FontAwesomeIcon icon={faBars} className='menu' />
            </div>
        </div>
    </div>
}

export default Navbar;