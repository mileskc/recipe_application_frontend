import React from "react";
import { Button } from "../shared/Button";


class Recipes extends React.Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(jsonedRecipes => this.setState({ recipes: jsonedRecipes }))
      .catch(error => console.error(error));
  }

  showStars(num) {
      let image = '★';
      return image.repeat(num)

  }

  render() {
    return (
      <>
        {/* <Nav/> */}
        {this.state.recipes.map(recipe => {
          return (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.img} />
              <div className='stars-container'>
                <span className='stars'>{this.showStars(recipe.star_rating)}</span>
                
                
              
              </div>
              <p>{recipe.description.slice(0,100) + "..."}</p>
              <Button title="More" className="more-button" />

              <h3>Posted by: {recipe.author}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default Recipes;
