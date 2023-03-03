import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from '../../Redux/cartSlice';
import { addItemToLike } from '../../Redux/likesSlice';


function ShopItem({item}) {
    const [quantity, setQuantity] = useState(1);
    const [pinkHeart, setPinkHeart] = useState(false);

    const dispatch = useDispatch();

    const changeColorHeart = (item) => {
        item.wasLiked = !item.wasLiked;
        setPinkHeart(!item.wasLiked);
        
    }

    return (
        <div className="items">
           <img src={`./${item.img}.jpg`} alt="item" className="itemPic"/>
           <div className="align">
           <h3>{item.name}</h3>
           <h2>$ {item.price}</h2>
           <span onClick={() => {dispatch( addItemToLike({item}))}}>
           <img onClick={() => changeColorHeart(item)} src="https://img.icons8.com/plasticine/512/like.png" alt="heart" className={pinkHeart===false ? "heartBlack " : "heartPink"}/>
           </span>
           </div>
           <div className="orderBox">
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={() => {dispatch( addItemToCart({item, quantity}))}} className="btnAdd">Add to Cart</button>
           </div>
        </div>
    )
}

export default ShopItem;