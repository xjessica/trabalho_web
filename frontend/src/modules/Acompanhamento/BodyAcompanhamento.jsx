import React, { useState } from 'react';
import './BodyAcompanhamento.css'
import { Button, Icon } from 'bold-ui'

export default function BodyAcompanhamento(input) {

    const [subjects, setSubjects] = useState(input.props)

    const renderPeriodRow = (row) => {
        return (
            <th><label className="labelFase">{row}</label></th>
        )
    }

    const handleClick = (id, period) => {
        let newSubjects = Object.assign({}, subjects)
        for (let i = 0; i < newSubjects[period - 1].length; i++) {
            if (newSubjects[period - 1][i]._id === id) {
                newSubjects[period - 1][i].cursado = !newSubjects[period - 1][i].cursado
            }
        }
        // TODO: entender pq o setSubjects buga tudo
        // E também fazer com que o handle faça uma requisição pro back enviando e validando la pra persistir
        // setSubjects(newSubjects)
    }

    const buttonStyle = {
        cursado: `background-color: #1659BF; color: #FFFFFF`,
        naoCursado: `background-color: #B5B5B5; color: #FFFFFF;`,
        possivelCursar: `background-color: #368309; color: #FFFFFF;`
    }

    const renderSubjectsRow = (row) => {
        let valor = `${row._id}`
        let cursado = false
        if (row._id !== undefined) {
            if (row.cursado) {
                cursado = true
            }
            return (
                <td>
                    <div className="divButton">
                        <Button
                            size="large" skin="default"
                            style={row.cursado ? buttonStyle.cursado : row.podeCursar ? buttonStyle.possivelCursar : buttonStyle.naoCursado}
                            onClick={() => handleClick(row._id, row.period)}
                        >
                            {valor} {cursado ? <Icon icon='checkDefault'></Icon> : ""}
                        </Button>
                    </div>
                </td>
            )
        } else {
            return (<td></td>)
        }
    }

    const createTr = (allRows) => {
        let teste = []
        let contadorInterno = 0
        allRows.forEach((value) => {
            teste.push(<tr className={`row-${contadorInterno}`}>{value.map(renderSubjectsRow)}</tr>)
            contadorInterno++
        })
        return teste
    }



    let periodArray = []
    let quantMaximaPorSemestre = 0
    for (let i = 0; i < subjects.length; i++) {
        periodArray.push(`${i + 1} Fase`)
        if (subjects[i].length >= quantMaximaPorSemestre) {
            quantMaximaPorSemestre = subjects[i].length
        }
    }

    // organizando por linha:
    let allRows = []
    for (let i = 0; i < subjects.length; i++) {
        let row = []
        for (let j = 0; j < quantMaximaPorSemestre + 1; j++) {
            let atual = subjects[j][i];
            row.push({ ...atual })
        }
        allRows.push(row)
    }

    return (
        <div className="bodyAcompanhamento">
            <table className="tabelaAcompanhamento">
                <tr className="rowSubjects">
                    {periodArray.map(renderPeriodRow)}
                </tr>
                {createTr(allRows)}
            </table>
        </div>
    )
}
