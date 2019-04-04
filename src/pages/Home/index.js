import React, { Component } from 'react';

import './style.sass';

class Home extends Component {
    render() {
        return (
            <section id="home">
                <h1 className="name">André Tronca</h1>
                <h2 className="job-title">Frontend Developer</h2>
            </section>
        );
    }
}

export default Home;
