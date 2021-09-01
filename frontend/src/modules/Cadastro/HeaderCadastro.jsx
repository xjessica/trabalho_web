import React from 'react';
import './HeaderCadastro.css'

import image from '../../assets/img/ufsc.png'

const HeaderCadastro = () => {

    return (
        <header className="headerCadastro">
            <img className="image" src={image}></img>
            <h1>Dados cadastrais</h1>
        </header>
    );
}

export default HeaderCadastro;

