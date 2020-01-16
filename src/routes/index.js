import React from 'react'
import { Route, Switch } from "react-router-dom";
import Landing from '../screens/Landing'
import Recipes from '../screens/Recipes'
import CreateRecipe from '../screens/CreateRecipe'
import EditRecipe from '../screens/EditRecipe'
import Recipe from '../screens/Recipe'

export const Routes = (props) => {
    return (
        <Switch>
            {/* landing page */}
            <Route exact path='/' component={Landing} />

            {/* all recipes page */}
            <Route exact path='/recipes' component={Recipes} />

            {/* post recipe page */}
            <Route exact path='/recipes/create' component={CreateRecipe} />

            {/* edit recipe page */}
            <Route exact path='/recipes/edit/:recipe_id' component={EditRecipe} />

            {/* show single recipe page */}
            <Route exact path='/recipes/:recipe_id' component={Recipe} />

        </Switch>
    )
}
