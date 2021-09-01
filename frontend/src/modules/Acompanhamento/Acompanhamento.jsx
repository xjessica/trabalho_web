import React from 'react';
import './Acompanhamento.css'

import HeaderAcompanhamento from './HeaderAcompanhamento'
import BodyAcompanhamento from './BodyAcompanhamento'
import Footer from '../Footer/Footer'



// exemplo de objeto que irá vir do backend para cada curso (CCO e Sistemas)
const teste = [
    [
        {
            _id: "MTM3101",
            period: 1,
            name: "Cálculo 1",
            requires: [],
            cursado: true,
            podeCursar: true
        },
        {
            _id: "INE5403",
            period: 1,
            name: "Fundamentos de Matemática Discreta para Computação",
            requires: [],
            cursado: true,
            podeCursar: true
        },
        {
            _id: "INE5402",
            period: 1,
            name: "Programação Orientada a Objetos 1",
            requires: [],
            cursado: false,
            podeCursar: true
        },
        {
            _id: "EEL5105",
            period: 1,
            name: "Circuitos e Técnicas Digitais",
            requires: [],
            cursado: false,
            podeCursar: true
        },
        {
            _id: "INE5401",
            period: 1,
            name: "Introdução à Computação",
            requires: [],
            cursado: false,
            podeCursar: true
        }
    ],
    [
        {
            _id: "INE5405",
            period: 2,
            name: "Probabilidade e Estatística",
            requires: ["MTM3101"],
            cursado: false,
            podeCursar: true
        },
        {
            _id: "MTM3102",
            period: 2,
            name: "Cálculo 2",
            requires: ["MTM3101"],
            cursado: false,
            podeCursar: true
        },
        {
            _id: "MTM5512",
            period: 2,
            name: "Geometria Analítica",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5404",
            period: 2,
            name: "Programação Orientada a Objetos 2",
            requires: ["INE5402"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5406",
            period: 2,
            name: "Sistemas Digitais",
            requires: ["EEL5105"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5407",
            period: 2,
            name: "Ciência, Tecnologia e Sociedade",
            requires: [],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5409",
            period: 3,
            name: "Cálculo Numérico para Computação",
            requires: ["TM3102", "MTM5512"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "MTM5245",
            period: 3,
            name: "Álgebra Linear",
            requires: ["MTM5512"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5408",
            period: 3,
            name: "Estrutura de Dados",
            requires: ["INE5404"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5410",
            period: 3,
            name: "Programação Concorrente",
            requires: ["INE5404"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5411",
            period: 3,
            name: "Organização de Computadores",
            requires: ["INE5406"],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5415",
            period: 4,
            name: "Teoria da Computação",
            requires: ["INE5403", "INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5413",
            period: 4,
            name: "Grafos",
            requires: ["INE5403", "INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5416",
            period: 4,
            name: "Paradigmas de Programação",
            requires: ["INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5417",
            period: 4,
            name: "Engenharia de Software 1",
            requires: ["INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5414",
            period: 4,
            name: "Redes de Computadores 1",
            requires: ["INE5404"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5412",
            period: 4,
            name: "Sistemas Operacionais 1",
            requires: ["INE5410", "INE5411"],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5420",
            period: 5,
            name: "Computação Gráfica",
            requires: ["MTM3102", "MTM5245", "INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5421",
            period: 5,
            name: "Linguagens Formais",
            requires: ["INE5415"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5419",
            period: 5,
            name: "Engenharia de Software 2",
            requires: ["INE5417"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5423",
            period: 5,
            name: "Banco de Dados 1",
            requires: ["INE5408"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5422",
            period: 5,
            name: "Redes de Computadores 2",
            requires: ["INE5414"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5418",
            period: 5,
            name: "Computação Distribuída",
            requires: ["INE5414", "INE5412"],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5425",
            period: 6,
            name: "Modelagem e Simulação",
            requires: ["INE5405"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5426",
            period: 6,
            name: "Construção de Compiladores",
            requires: ["INE5421"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5430",
            period: 6,
            name: "Inteligência Artificial",
            requires: ["INE5405", "INE5413", "INE5416"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5427",
            period: 6,
            name: "Planejamento e Gestão de Projetos",
            requires: ["INE5417"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5453",
            period: 6,
            name: "Introdução TCC",
            requires: ["INE5417"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5424",
            period: 6,
            name: "Sistemas Operacionais 2",
            requires: ["INE5412"],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5433",
            period: 7,
            name: "TCC 1",
            requires: ["INE5427", "INE5453"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5432",
            period: 7,
            name: "Banco de Dados 2",
            requires: ["INE5423"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5429",
            period: 7,
            name: "Segurança em Computação",
            requires: ["INE5403", "INE5414"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5431",
            period: 7,
            name: "Sistemas Multimídia",
            requires: ["INE5414"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_INE1",
            period: 7,
            name: "Optativa INE 1",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_INE2",
            period: 7,
            name: "Optativa INE 2",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "INE5428",
            period: 7,
            name: "Informática e Sociedade",
            requires: ["INE5407"],
            cursado: false,
            podeCursar: false
        },
    ],
    [
        {
            _id: "INE5434",
            period: 8,
            name: "TCC 2",
            requires: ["INE5433"],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_INE3",
            period: 8,
            name: "Optativa INE 3",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_INE4",
            period: 8,
            name: "Optativa INE 4",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_GERAL1",
            period: 8,
            name: "Optativa ou Extracurricular 1",
            requires: [],
            cursado: false,
            podeCursar: false
        },
        {
            _id: "OP_GERAL2",
            period: 8,
            name: "Optativa ou Extracurricular 2",
            requires: [],
            cursado: false,
            podeCursar: false
        }
    ]
]

export default function Acompanhamento() {


    return (
        <div className="acompanhamento">
            <HeaderAcompanhamento />
            <BodyAcompanhamento props={teste} />
            <Footer />
        </div>
    )
}