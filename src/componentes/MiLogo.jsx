import React from "react";
import logo from '../img/logo.png';
import '../css/MiLogo.css';

const MiLogo = () => (
    <div className='freecodecamp-logo-contenedor'>
        <img src={logo}
            className='freecodecamp-logo'
            alt='Logo de freecodecamp' />
    </div>
);

export default MiLogo;