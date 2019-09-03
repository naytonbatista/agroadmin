import React from 'react'
import { HashRouter } from 'react-router-dom'

import Header from '../common/template/header'
import Navbar from '../common/template/navbar'
import Modal from '../../src/components/modal'


import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'
import Routes from './routes'
import './style.css'

export default props => (
    <HashRouter>
        <div id="content">
            <Header />
            <Navbar />
            <Routes />
            <Messages />
            <Modal />

        </div>
    </HashRouter>
)