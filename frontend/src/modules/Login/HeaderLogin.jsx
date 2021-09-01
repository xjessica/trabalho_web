import React from 'react';
import './HeaderLogin.css'

import image from '../../assets/img/ufsc.png'

const HeaderLogin = () => {

    return (
        <header className="headerLogin">
            <img className="image" src={image}></img>
            <h1>Controle Acadêmico</h1>
        </header>
    );
}

export default HeaderLogin;