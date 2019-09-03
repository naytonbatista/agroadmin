import React from 'react'
import './styles.css'
export default ({ title, childs = [], add = () => {} }) => {
    return (
        <div className="top">
            <div>
                <span className="view-selected">{title}</span>
                {
                    childs.map((child,i)=> <small key={i} className="view-child">{child}</small>)
                }

            </div>

            <div>
                <button onClick={add} type="button" className="btn btn-primary btn-sm">Novo&nbsp;
                    <span className="fa fa-plus"></span>
                </button>
            </div>

        </div>)
}