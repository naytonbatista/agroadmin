import React from 'react'
import Navbar from './navbar'
import leaf from '../../assets/img/leaf.png'
import profilePicture from '../../assets/img/29.jpg'

export default props => (
    <header className='main-header'>
        <div className="coluna">
            <div className="item"><img src={leaf} width={36} /></div>
            <div className="item"><span className="sistema-nome">Agro Admin</span></div>
        </div>
        <div className="coluna">
            <div className="item">
                <img className="profile-pic" src={profilePicture} width={36} />
            </div>
            <div className="item flex-column profile-info">
                <span className="profile-name">Everton Alves Carleto</span>
                <span className="profile-function">Engenheiro Agrônomo</span>

            </div>
        </div>
    </header>
)