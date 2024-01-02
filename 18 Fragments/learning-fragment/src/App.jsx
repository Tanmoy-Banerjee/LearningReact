import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App(){

  //let foodItems = [];
   let foodItems = ["sabji","Green vegetables","Roti","Salad","Milk","Ghee"];
return(
//or you can add <></>  


<React.Fragment>

  <h1 className="food-heading">Healthy Food</h1>
   
   <ErrorMessage items={foodItems}></ErrorMessage>
   <FoodItems items = {foodItems}></FoodItems>
  


</React.Fragment>

);
}

export default App;