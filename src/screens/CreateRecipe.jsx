import React from "react";
import RecipeForm from "../RecipeForm";
import { api } from "../ApiConfig";

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      img: "",
      description: "",
      prep_time: 0,
      serving_size: 0,
      calories_count: 0,
      star_rating: 0,
      step: "",
      directions: [{ step: "" }],
      element: "",
      ingredients: [{ element: "" }],
      errorMsg: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      step,
      directions,
      element,
      ingredients
    } = this.state;

    const data = {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      step,
      directions,
      element,
      ingredients
    };

    console.log(data)
    api
      .post("/recipes", data)
      .then(response =>
        response.status === 201 ? this.props.history.push("/recipes") : null
      )
      .catch(() =>
        this.setState({ errorMsg: "There was an error posting the data" })
      );
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

//  handlestepchange not needed since we wont change name of intructions
//   handleStepChange = e => {
//       this.setState({ step: e.target.value })
//   }
  handleDirectionsStepChange = idx => e => {
      const newDirections = this.state.directions.map((direction, sidx) => {
          if(idx !== sidx) return direction;
          return { ...direction, step: e.target.value }
      });

      this.setState({ directions: newDirections })
  }

  handleAddDirection = () => {
      this.setState({
          directions: this.state.directions.concat([{ step: "" }])
      })
  }

  handleRemoveDirection = idx => () => {
      this.setState({
          directions: this.state.directions.filter((s, sidx) => idx !== sidx)
      });
  };
  


  render() {
    const {
      name,
      author,
      img,
      description,
      prep_time,
      serving_size,
      calories_count,
      star_rating,
      step,
      directions,
      element,
      ingredients
    } = this.state;
    return (
      <div className="recipe-form">
        <h3>Post your own recipe!</h3>
        <RecipeForm
          formData={{
            name,
            author,
            img,
            description,
            prep_time,
            serving_size,
            calories_count,
            star_rating,
            step,
            directions,
            element,
            ingredients
          }}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onDirectionsStepChange={this.handleDirectionsStepChange}
          onAddDirection={this.handleAddDirection}
          onRemoveDirection={this.handleRemoveDirection}
        />

        {this.state.errorMsg ? (
          <p className="error-text">{this.state.errorMsg}</p>
        ) : null}
      </div>
    );
  }
}

export default CreateRecipe;
