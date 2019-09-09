import React from 'react'
import { Top, Grid } from '../../components'

const model = [
    { field: 'id', title: 'Cód', styles: { width: '50px' } },
    { field: 'nome', title: 'Nome', styles: { width: '300px' } },
    { field: 'cpf', title: 'CPF', styles: { width: '200px' } }


];

const Pessoa = ({ list, setList, add, showTop, dbClick, fieldname }) => {

    return (
        <div id="container">
            {showTop && <Top add={add} title="Pessoas" childs={["Endereços", "Acionistas", "Contatos", "Bens"]} />}
            <Grid fieldname={fieldname} dbClick={dbClick} data={list} model={model} />
        </div>
    )
}
export default Pessoa;