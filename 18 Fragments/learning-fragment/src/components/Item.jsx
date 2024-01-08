
function Item(props){

    function handleBuyButtonClick(event){
       console.log(event);
       console.log("Buy Button clicked")
    }
    return (

        <li  class="list-group-item kg-item">
            <span className="kg-span">{props.foodItem}</span>
            <button className="button btn btn-info" onClick={(event) => handleBuyButtonClick(event)}>Buy</button>
      </li>
    )

}

export default Item;