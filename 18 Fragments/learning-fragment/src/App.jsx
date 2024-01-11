import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  //let foodItems = [];
  // let foodItems = [
  //   "sabji",
  //   "Green vegetables",
  //   "Roti",
  //   "Salad",
  //   "Milk",
  //   "Ghee",
  // ];

  // let textStateArr = useState("Food Item Entered By User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([]);

  // console.log(`Current value of textState:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event.target.value);
    // setTextState(event.target.value);
  };
  return (
    //or you can add <></>

    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>

        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          consequatur laudantium aperiam harum dicta animi reprehenderit officia
          repudiandae architecto adipisci provident eius, nulla voluptatibus
          commodi. Aliquid laborum eum tempore earum.
        </p>
      </Container>
    </>
  );
}

export default App;
