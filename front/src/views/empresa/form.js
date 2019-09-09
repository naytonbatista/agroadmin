import React from 'react'
import { Formik, Form } from 'formik'
import {Field} from '../../components'
import modelo from './modelform'

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
                                                    <Field className="form-control"
                                                        component={item.component}
                                                        placeholder={item.placeholder}
                                                        options={item.options}
                                                        type={item.type}
                                                        name={item.name}
                                                        onChange={(ev, value)=> setFieldValue(item.name, value || (ev && ev.target && ev.target.value) || null)}
                                                        mask={item.mask}
                                                   />
                                                </div>
                                            </div>   ))
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