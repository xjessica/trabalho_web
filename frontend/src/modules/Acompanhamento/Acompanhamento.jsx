import React from 'react';
import './Acompanhamento.css'

import HeaderAcompanhamento from './HeaderAcompanhamento'
import BodyAcompanhamentoCCO from './BodyAcompanhamentoCCO'
import BodyAcompanhamentoSistemas from './BodyAcompanhamentoSistemas'

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
                {this.state.isCCO && <BodyAcompanhamentoCCO />}
                {!this.state.isCCO && <BodyAcompanhamentoSistemas />}
            </div>
        )
    }
}