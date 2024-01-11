
function Item({foodItem,bought, handleBuyButton}){

  
    return (

        <li  className={`list-group-item kg-item ${bought && "active"}`}>
            <span className="kg-span">{foodItem}</span>
            <button className="button btn btn-info" onClick={handleBuyButton}>Buy</button>
      </li>
    )

}

export default Item;