import React, { Component } from "react";
import Avocato from '../data/avocado.json';
import salmon from '../data/Salmon.json';
import sweetPotato from '../data/Sweet Potato.json';
class AllFoods extends Component {
    state={
        Avocato,
        salmon,
        sweetPotato,
      }
    
  render() {
    return (
      <div className='noteCard'>
         <div><img clasName='bigAvo' src='/images/thought-catalog-EMX1eJ1BcgU-unsplash.jpg' /></div>
        <h3> {this.state.Avocato[0].Food_Name.toUpperCase()}</h3>
        <h4> Description: </h4>
        <p> {this.state.Avocato[0].Description} </p>
        <h4> Serving Size: </h4>
        <p> {this.state.Avocato[0].serving_size} </p>
        <h4> Calories: </h4>
        <p> {this.state.Avocato[0].calories} </p>
      </div>
    );
  }
}

export default AllFoods;
