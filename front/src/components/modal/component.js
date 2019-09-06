import React from 'react'
import './styles.css'

export default ({opened = false, title, save, content,  close = () => {} }) => {

    return (
        opened &&
        <div>
            <div id="modal">
                <div id="modal-content">
                    <div id="modal-title">
                        <h1 className="padding">{title}</h1>
                        <hr></hr>
                    </div>
                    <div id="modal-container">
                        {content}
                    </div>
                    <div id="modal-footer">
                        <hr></hr>
                        <div className="padding button-container">
                            <button onClick={ () => save() } className="btn btn-success btn-sm">Salvar</button>
                            <button onClick={close} className="btn btn-danger btn-sm">Fechar</button>

                        </div>
                    </div>

                </div>
            </div>
            <div id="modal-back"></div>

        </div>
    )
}