import { TipoContratoImovel } from '../../lovs'

const modelo = [{
    linha: [
        { descricao: 'Razão Social', placeholder: 'Razão Social', type: "text", name: 'razao_social', width: '7' },
        { mask: '99.999.999/9999-99', descricao: 'CNPJ', placeholder: 'CNPJ', type: "text", name: 'cnpj', width: '3' }
    ]
},
{
    linha: [
        { descricao: 'Inscrição Estadual', placeholder: 'Inscrição Estadual', type: "number", name: 'inscricao_estadual', width: '3' },
        { descricao: 'Home Page', placeholder: 'Home Page', type: "text", name: 'homepage', width: '5' },
        { descricao: 'Qtde Empregados', placeholder: 'Qtde Empregados', type: "text", name: 'quantidade_empregados', width: '2' },
    ]
},
{
    linha: [
        { descricao: 'Sócio Administrador', placeholder: 'Sócio Admnistrador', type: "text", name: 'socio_administrador', width: '5' },
        { descricao: 'Sede', placeholder: 'Sede', type: "select", options: TipoContratoImovel, name: 'sede', width: '5' },

    ]
}

];


export default modelo;