import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from '../../Redux/cartSlice';
import CartItem from "./CartItem";


function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPice = useSelector(getTotalPrice);

    return (
        <div className="contCartItem">
           <h2><b>Your order:</b></h2>
           <div>
           {cartItems.map( (cartItem, index) => 
     
           <CartItem cartItem={cartItem} key={index}/>
           )}
           </div>
           <h2>Total Sum: $ {totalPice}</h2>
        </div>
    )
}

export default Cart;