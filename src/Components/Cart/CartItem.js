import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../Redux/cartSlice';

function CartItem({cartItem}) {
   
    const dispatch = useDispatch();

    return (
        <div className="cardInCart">
           <img src={`./${cartItem.img}.jpg`} alt="item" className="itemImgCart"/>
           <p>{cartItem.name}</p>
           <p>$ {cartItem.price}</p>
           <span>X</span>
           <p>{cartItem.quantity} item(s)</p>
           <h3>$ {cartItem.price*cartItem.quantity}</h3>
           <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
                <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="delete" width="25px"/> 
           </span>
        
        </div>
    )
}

export default CartItem;