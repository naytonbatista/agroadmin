import React from 'react'
import { Formik, Form, Field } from 'formik'
import InputMask from 'react-input-mask'

const modelo = [{
    linha: [
        {  descricao: 'Razão Social', placeholder: 'Razão Social', type: "text", name: 'razao_social', width: '7' },
        { mask:'99.999.999/9999-99', descricao: 'CNPJ', placeholder: 'CNPJ', type: "text", name: 'cnpj', width: '3' }
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
        { descricao: 'Sede', placeholder: 'Sede', type: "text", name: 'sede', width: '5' },

    ]
}

];

const FormEmpresa = ({ initialValues, handleSubmit, setFieldValue }) => {
    
    return (

        <div>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form>
                    
                    <div className="container">
                        {
                            modelo.map((linhas, i) => (
                                <div key={i} className="row">
                                    {
                                        linhas.linha.map((item, j) => (
                                            <div key={j} className={`col-sm-${item.width}`}>
                                                <div className="form-group">
                                                    <label>{item.descricao}</label>
                                                    <InputMask className="form-control"
                                                        placeholder={item.placeholder}
                                                        type={item.type}
                                                        name={item.name}
                                                        onChange={text => setFieldValue(item.name, text)}
                                                        mask={item.mask}
                                                        
                                                    />
                                                </div>
                                            </div>))
                                    }
                                </div>))
                        }

                    </div>
                </Form>
            </Formik>
        </div>
    )
}
export default FormEmpresa;