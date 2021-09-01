import React from 'react';
import './BodyAcompanhamentoCCO.css'

const initialState = {
    arvoreCCO: {
        1: {
            mtm3100: {
                nome: 'Pré-Cálculo',
                cursado: false
            },
            mtm3101: {
                nome: 'Cálculo 1',
                cursado: false
            },
            ine5403: {
                nome: 'Fundamentos de Matemática Discreta para Computação',
                cursado: false
            },
            ine5402: {
                nome: 'Programação Orientada a Objetos 1',
                cursado: false
            },
            eel5105: {
                nome: 'Circuitos e Técnicas Digitais',
                cursado: false
            },
            ine5401: {
                nome: 'Introdução a Computação',
                cursado: false
            }
        },
        2: {
            ine5405: {
                nome: 'Probabilidade e Estatística',
                cursado: false
            },
            mtm3102: {
                nome: 'Cálculo 2',
                cursado: false
            },
            mtm5512: {
                nome: 'Geometria Analítica',
                cursado: false
            },
            ine5404: {
                nome: 'Programação Orientada a Objetos 2',
                cursado: false
            },
            ine5406: {
                nome: 'Sistemas Digitais',
                cursado: false
            },
            ine5407: {
                nome: 'Ciência, Tecnologia e Sociedade',
                cursado: false
            }
        },
        3: {

        }
    }
}

export default class BodyAcompanhamentoCCO extends React.Component {
    render() {
        return (
            <div className="bodyAcompanhamento">
                <div className="fases">

                </div>
                <div className="cards">

                </div>
            </div>
        )
    }
}