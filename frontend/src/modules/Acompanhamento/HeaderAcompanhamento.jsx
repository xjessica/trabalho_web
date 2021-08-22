import React from 'react';
import './HeaderAcompanhamento.css'
import imagePerfil from '../../assets/img/perfil.png'


const initialState = {
    name: 'Marcelo Contin',
    enrolment: '19150807',
    course: 'Ciências da Computação'
}

export default class HeaderAcompanhamento extends React.Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className="headerAcompanhamento">
                <img className="imagePerfil" src={imagePerfil}></img>
                <h1 className="namePerfil">{this.state.name}</h1>
                <h2 className="informationPerfil">{this.state.course} - {this.state.enrolment}</h2>
            </header>
        )
    }
}