import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../auth/authActions'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <span>Orçamento</span>
            <span>Empresas</span>
            <span>Clientes</span>
        </div>
    )
}

export default Navbar;