import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './style.sass'

export default class Header extends Component {
    state = {

    }

    render(){
        return (
            <header>
                <div className="container">
                    <ul className="menu">
                        <li><NavLink to={`/`} exact={true} activeClassName="active">Home</NavLink></li>
                        <li><NavLink to={`/my-work`} activeClassName="active">My Work</NavLink></li>
                    </ul>
                </div>
            </header>
        )
    }
}