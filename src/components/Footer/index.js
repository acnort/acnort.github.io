import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import './style.sass'

export default class Footer extends Component {
    state = {

    }

    render() {
        return (
            <footer>
                <div className="container">
                    <ul className="socials">
                        <li><Link to="https://google.com"><FaGithub /></Link></li>
                        <li><Link to="https://google.com"><FaLinkedinIn /></Link></li>
                    </ul>
                </div>
            </footer>
        )
    }
}