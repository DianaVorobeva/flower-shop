import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart,updateQuantity, getCartItems } from '../../Redux/cartSlice';
import { getLikesItems, addItemToLike, removeItemFromLike } from '../../Redux/likesSlice';


function ShopItem({item}) {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    const likesArray = useSelector(getLikesItems);
    const itemInList = likesArray.some(like => like.id === item.id);

    const handleClickLike =  () => {
        itemInList===true 
        ? (dispatch(removeItemFromLike(item.id)))
        : (dispatch(addItemToLike(item)))
    }

    const cartArray = useSelector(getCartItems);
    const itemInCart = cartArray.some(element => element.id === item.id);

    const handleClickCart = () => {
        itemInCart === true
        ? (dispatch(updateQuantity({item, quantity})))
        : (dispatch(addItemToCart({item, quantity})))
    }



    return (
        <div className="items">
           <img src={`./${item.img}.jpg`} alt="item" className="itemPic"/>
           <div className="align">
           <h3>{item.name}</h3>
           <h2>$ {item.price}</h2>
           <img 
           onClick={handleClickLike} 
           src="https://img.icons8.com/plasticine/512/like.png" 
           alt="heart" 
           className={!itemInList ? "heartBlack" : "heartPink"}/>
           </div>
           <div className="orderBox">
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={handleClickCart} className="btnAdd">Add to Cart</button>
           </div>
        </div>
    )
}

export default ShopItem;