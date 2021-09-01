import React from 'react';
import './Acompanhamento.css'

import HeaderAcompanhamento from './HeaderAcompanhamento'
import BodyAcompanhamentoCCO from './BodyAcompanhamentoCCO'
import BodyAcompanhamentoSistemas from './BodyAcompanhamentoSistemas'
import Footer from '../Footer/Footer'

const initialState = {
    isCCO: true
}

export default class Acompanhamento extends React.Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="acompanhamento">
                <HeaderAcompanhamento />
                {/* Vamos fazer genérico pra construir os cards de acordo com oq vier do banco no futuro */}
                {this.state.isCCO && <BodyAcompanhamentoCCO />}
                {!this.state.isCCO && <BodyAcompanhamentoSistemas />}
                <Footer />
            </div>
        )
    }
}