import React from 'react'
import { Input } from '../shared/Input'

const landingImage = require('../images/chopping.jpg')

const Landing = (props) => {
    const { history } = props
    return (
        <div>
            <img src={landingImage} className='landing-image'/>
            <Input
                className='search-bar'
                placeholder='find recipe'
            />
        </div>
    )
}

export default Landing