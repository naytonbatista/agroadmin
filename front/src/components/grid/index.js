import React from 'react'

export default ({ data = [], model = [], dbClick, fieldname }) => {

    return (
        <div style={{ marginTop: '10px' }}>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {model.map((col, i) => <th key={i} style={col.styles} scope="col">{col.title}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr onDoubleClick={() => dbClick(fieldname, item) } key={i}>
                            {model.map((col,j )=> <td key={j} style={col.styles} scope="row" >{item[col.field]}</td>)}
                        </tr>)
                    )}

                </tbody>
            </table>
        </div>)
}