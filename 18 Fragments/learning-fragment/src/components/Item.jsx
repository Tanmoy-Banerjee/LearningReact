function Item(props){

    return (

        <li  class="list-group-item kg-item">
            <span className="kg-span">{props.foodItem}</span>
      </li>
    )

}

export default Item;