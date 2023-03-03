import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Catalog/Home';
import Cart from './Components/Cart/Cart';
import { useSelector } from "react-redux";
import { getCartItems } from './Redux/cartSlice';
import Likes from './Components/Likes/Likes';
import { getLikesItems } from './Redux/likesSlice';


function App() {
  const cartItems = useSelector(getCartItems);
  const likesItems = useSelector(getLikesItems);
  return (
    <div className='wrapperMain'>
<Router>
    <nav>
      <Link to ="/" className='link'><img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/512/external-flower-tropical-wanicon-two-tone-wanicon.png" alt="logo" className='logoPic'/><i>Flowers&Presents</i></Link>
      <Link to ="/likes" className='link'><img src="https://img.icons8.com/plasticine/512/like.png" alt="heart" className='logoPic'/><span className='lengthCart'>{likesItems.length}</span></Link>
      <Link to ="/cart" className='link'><img src="https://img.icons8.com/external-wanicon-two-tone-wanicon/512/external-cart-supermarket-wanicon-two-tone-wanicon.png" alt="cart"  className='logoPic'/><span className='lengthCart'>{cartItems.length}</span></Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/likes" element={<Likes/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  </Router>
  </div>

  );
}

export default App;
