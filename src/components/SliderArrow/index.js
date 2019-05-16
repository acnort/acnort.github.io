import React, { Component } from 'react'

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import './style.sass';

class SlickArrow extends Component {
    render() {
        const { onClick, className, to } = this.props

        return (
            <button type="button" onClick={onClick} className={`${className} slick-custom-arrow`} aria-label={to}>
                {to === 'prev' ? <FaChevronLeft /> : <FaChevronRight />}
            </button>
        )
    }
}

export default SlickArrow