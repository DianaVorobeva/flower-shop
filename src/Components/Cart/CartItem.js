import { dataItems } from "../../Data/dataItems";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../Redux/cartSlice';

function CartItem({cartItem}) {
    const products = dataItems.find(item => item.id === cartItem.productId);
    
    const dispatch = useDispatch();

    return (
        <div className="cardInCart">
           <img src={`./${products.img}.jpg`} alt="item" className="itemImgCart"/>
           <p>{products.name}</p>
           <p>$ {products.price}</p>
           <span>X</span>
           <p>{cartItem.quantity} item(s)</p>
           <h3>$ {products.price*cartItem.quantity}</h3>
           <span onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="delete" width="25px"/> 
        </span>
        
        </div>
    )
}

export default CartItem;