import Item from "./Item";
import { useState } from "react";
function FoodItems(props) {

  let [activeItems, SetActiveItems] = useState([]);

  let onBuyButton = (item, event) => {

    let newItems = [...activeItems, item];
    SetActiveItems(newItems);
  };
  return (
    <ul class="list-group">
      {props.items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought = {activeItems.includes(item)}
          handleBuyButton={ (event) => onBuyButton(item, event)}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
