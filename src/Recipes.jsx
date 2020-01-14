import React from "react";

class Recipes extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }
  componentDidMount() {
    this.getRecipes();
  }

  getRecipes() {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.error(error));
  }

  render() {
    return <h1>Hello Recipes! This is the Recipes page</h1>;
  }
}

export default Recipes;
