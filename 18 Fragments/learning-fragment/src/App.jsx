import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  //let foodItems = [];
  let foodItems = [
    "sabji",
    "Green vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];
  return (
    //or you can add <></>

    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, consequatur laudantium aperiam harum dicta animi reprehenderit officia repudiandae architecto adipisci provident eius, nulla voluptatibus commodi. Aliquid laborum eum tempore earum.</p>
      </Container>
    </>
  );
}

export default App;
