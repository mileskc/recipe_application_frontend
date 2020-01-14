import React from 'react'
import './Button.css'
export const Button = ({ onClick, className, title }) => {
    return (
        <button
            onClick={onClick}
            className={`${className}`}>
            {title}
        </button>
    )
}