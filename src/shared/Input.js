import React from 'react'
import './Input.css'

export const Input = ({ onChange, name, placeholder, required, value, className }) => (
    <div className='input'>
        <input
            className={className}
            value={value}
            name={name}
            required={required}
            onChange={e => onChange(e)}
        />
        <label htmlFor={name}>
            <span>{placeholder}</span>
        </label>
    </div>
)

export default Input