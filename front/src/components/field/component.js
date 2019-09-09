import React from 'react'
import './styles.css'
import InputMask from 'react-input-mask'
import { SModal } from '../../components'

export default ({ type = 'text',
    className,
    placeholder,
    name,
    onChange,
    mask,
    options = [],
    modalOpen,
    setModalOpen,
    component,
    setCustomValue,
    value,
    setValue }) => {

    const CustomComponent = component;

    const Custominput = () => {

        switch (type) {
            case 'object':
                return (
                    <div className="input-group">
                        <input className={`${className} input-object`}
                            name={name}
                            autoComplete="off"
                            onClick={() => setModalOpen(name)}
                            readOnly
                            value={value && value.field == name && value.description || ''}
                        />
                        <span className="input-group-btn">
                            <button onClick={() => setCustomValue(name, null)} className="btn btn-default" type="button"> <i className="fa fa-lg fa-ban"></i> </button>
                        </span>
                        {
                            modalOpen == name &&
                            <SModal opened={true} title="Selecionar Pessoa" >
                                <CustomComponent fieldname={name} dbClick={setCustomValue} />
                            </SModal>
                        }
                    </div>)
            case 'select':
                return (<select className={className}
                    name={name}
                    onChange={onChange}>
                    {options.map((op, i) => <option key={i} value={op.value}>{op.descricao} </option>)}
                </select>)

            default:
                return (<InputMask
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    onChange={onChange}
                    mask={mask} />)
        }
    }

    return (<Custominput />)
}