import React, { Component } from 'react'

import TopBarProgress from "react-topbar-progress-indicator"

import './style.sass';

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff",
  },
  shadowBlur: 5,
})

class Home extends Component {
    componentWillMount(){
        this.setState({pageLoading: true})
    }

    componentDidMount(){
        this.setState({pageLoading: false})
    }

    render() {
        const { pageLoading } = this.state

        return (
            <>
                { pageLoading &&
                    <TopBarProgress />
                }
                { !pageLoading &&
                    <section id="home">
                        <div className="container">
                            <h1 className="name">André <span>Tronca</span></h1>
                            <h2 className="job-title">Frontend Developer</h2>
                        </div>
                    </section>
                }
            </>
        );
    }
}

export default Home;
