// Imorts internes
import './styles.scss';

// Imports externes
import { FaTiktok, FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop= () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <div className='footer__container' onClick={scrollToTop}>
            <p><Link to='/notice'>Mentions légales</Link></p>
            <div className='footer__container--icons-div'>
                <FaTiktok size={'30px'} className='footer__container--icons-div--icon'/>
                <AiOutlineTwitter size={'30px'} className='footer__container--icons-div--icon'/>
                <FaFacebookF size={'30px'} className='footer__container--icons-div--icon'/>
            </div>
        </div>
    )
}

export default Footer ;