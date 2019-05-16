import React, { Component } from 'react'
import { ProjectCard, SliderArrow } from './../../components'

import TopBarProgress from "react-topbar-progress-indicator"
import Slider from "react-slick";

import projects from './_list'

import './style.sass';

TopBarProgress.config({
    barColors: {
        "0": "#fff",
        "1.0": "#fff",
    },
    shadowBlur: 5,
})

class MyWork extends Component {
    state = {
        currentSlide: 0
    }

    componentWillMount() {
        this.setState({ pageLoading: true })
    }

    componentDidMount() {
        this.setState({ pageLoading: false })
    }

    beforeChange = (currentSlide, nextSlide) => {
        this.setState({ currentSlide: nextSlide });
    }

    render() {
        const { pageLoading, currentSlide } = this.state

        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 200,
            draggable: true,
            fade: false,
            focusOnSelect: true,
            prevArrow: <SliderArrow to="prev" />,
            nextArrow: <SliderArrow to="next" />,
        };

        return (
            <>
                {pageLoading &&
                    <TopBarProgress />
                }
                {!pageLoading &&
                    <section id="my-work">
                        <div className="container">
                            {projects &&
                                <div className="projects-list">
                                    <Slider
                                        {...settings}
                                        beforeChange={(currentSlide, nextSlide) => this.beforeChange(currentSlide, nextSlide)}
                                    >
                                        {projects.map((project, index) => (
                                            <ProjectCard key={project.id} project={project} index={index} currentSlide={currentSlide} />
                                        ))}
                                    </Slider>
                                </div>
                            }
                        </div>
                    </section>
                }
            </>
        );
    }
}

export default MyWork;
