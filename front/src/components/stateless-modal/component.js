import React from 'react'
import './styles.css'

export default ({opened = true, title, save, close = () => { }, children }) => {

    return (
        opened &&
        <div>
            
            <div id="sm-modal">
                <div id="sm-modal-content">
                    <div id="sm-modal-title">
                        <h1 className="padding">{title}</h1>
                        <hr></hr>
                    </div>
                    <div id="sm-modal-container">
                        {children}
                    </div>
                    <div id="sm-modal-footer">
                        <hr></hr>
                        <div className="padding button-container">
                            <button type="button" onClick={close} className="btn btn-danger btn-sm">Fechar</button>
                        </div>
                    </div>

                </div>
            </div>
            <div id="sm-modal-back"></div>

        </div>
    )
}