import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
const logo = require('../images/receta_logo.png')

const Nav = () => {
    return (
        <nav> 
            {/* NavLinks will be needed inside the hamburger button */}
            {/* <NavLink exact to='/'>
                Enter Logo Here
            </NavLink>

            <NavLink exact to='/recipes'>
                all_recipes
            </NavLink>

            <NavLink exact to='/recipes/create'>
                post_recipe
            </NavLink> */}

            <GiHamburgerMenu size={50}/>
            <img src={logo} className='logo'/>

        </nav>

    )
}

export default Nav