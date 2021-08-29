import React from 'react'


export default function BodyAcompanhamentoCCO() {


    return (
        <table className="tabelaAcompanhamento">
            <tr className="rowSubjects">
                {periodArray.map(renderPeriodRow)}
            </tr>
            {createTr(allRows)}
        </table>
    )

}