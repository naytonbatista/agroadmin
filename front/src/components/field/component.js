import React from 'react'
import './styles.css'
import InputMask from 'react-input-mask'

export default ({ type = 'text', className, placeholder, name, onChange, mask, options =[] }) => {

    const Custominput = () => {

        switch (type) {
            case 'select':
                return(<select  className={className}
                    name={name}
                    onChange={onChange}>
                    { options.map((op, i) =><option key={i} value={op.value}>{ op.descricao } </option> )}
                </select>)

            default:
                return (<InputMask
                    className={className}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    onChange={onChange}
                    mask={mask}  />)
        }
    }

    return (<Custominput />)
}