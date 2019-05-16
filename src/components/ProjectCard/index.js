import React, { Component } from 'react'

import './style.sass'

export default class ProjectCard extends Component {
    render() {
        const { project, index, currentSlide } = this.props
        return (
            <div key={project.id} className="project" data-active={index === currentSlide}>
                <div className="project-wrapper" style={{ backgroundImage: `url(${project.image})` }}>
                    <div className="project-text">
                        <div className="project-title">{project.title}</div>
                        <div className="project-tags">
                            <div className="tag">React</div>
                            <div className="tag">Redux</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}