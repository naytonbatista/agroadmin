import React from 'react'
import { Top, Grid } from '../../components'

const model = [
    { field: 'id', title: 'Cód', styles: { width: '50px' } },
    { field: 'razao_social', title: 'Razão Social', styles: { width: '400px' } }

];

const Empresa = ({ list, setList, add }) => {

    return (
        <div id="container">
            <Top add={add} title="Empresas" childs={["Endereços", "Acionistas", "Contatos", "Bens"]} />
            <Grid data={list} model={model} />
        </div>
    )
}
export default Empresa;