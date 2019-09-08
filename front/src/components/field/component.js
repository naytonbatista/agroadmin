import React from 'react'
import './styles.css'
import InputMask from 'react-input-mask'
import { SModal } from '../../components'

export default ({ type = 'text', className, placeholder, name, onChange, mask, options = [], modalOpen, setModalOpen }) => {

    const Custominput = () => {
        
        switch (type) {
            case 'object':
                return (
                    <div>
                        <input className={`${className} input-object`}
                            name={name}
                            autoComplete="off"
                            onChange={onChange}
                            onClick={() => setModalOpen(name)}

                        />
                        {modalOpen == name && <SModal opened={true} title="Lista de pessoas" > Olá</SModal>}
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