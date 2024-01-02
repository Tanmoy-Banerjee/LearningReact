import Item from "./Item";
function FoodItems(props) {

  return (
    <ul class="list-group">
      {props.items.map((item) => (
       <Item key = {item} foodItem ={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
