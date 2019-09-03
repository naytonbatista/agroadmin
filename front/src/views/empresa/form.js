import React from 'react'
import { Formik, Form, Field } from 'formik'

const FormEmpresa = () => {

    return (

        <div>
            <Formik>
                <Form>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="form-group">
                                    <label>Razão Social</label>
                                    <Field className="form-control" placeholder="Razão social" type="text" name="razao_social" />
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label>CNPJ</label>
                                    <Field className="form-control" placeholder="CNPJ" type="text" name="nome_fantasia" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="form-group">
                                    <label>Inscrição Estadual</label>
                                    <Field className="form-control" placeholder="Inscrição Estadual" type="text" name="inscricao_estadual" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>

    )
}
export default FormEmpresa;