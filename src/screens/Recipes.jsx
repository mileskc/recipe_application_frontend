import React from "react";
// import Nav from "./Nav";

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

  render() {
    return (
      <>
        {/* <Nav/> */}
        {this.state.recipes.map(recipe => {
          return (
            <div key={recipe.id}>
              <h3>{recipe.author}</h3>
            </div>
          );
        })}
      </>
    );
  }
}

export default Recipes;
