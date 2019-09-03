import React from 'react'

export default ({ data = [], model = [] }) => {

    return (
        <div style={{ marginTop: '10px' }}>
            <table className="table">
                <thead>
                    <tr>
                        {model.map((col, i) => <th key={i} style={col.styles} scope="col">{col.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            {model.map((col,j )=> <td key={j} style={col.styles} scope="row" >{item[col.field]}</td>)}
                        </tr>)
                    )}

                </tbody>
            </table>
        </div>)
}