import { dataItems } from "../../Data/dataItems";
import { useDispatch } from "react-redux";
import { removeItemFromLike } from '../../Redux/likesSlice';

function LikesItems({likeItem}) {
    const products = dataItems.find(item => item.id === likeItem.productId);

    const dispatch = useDispatch();
    return (
        <div className="cardInCart">
           <img src={`./${products.img}.jpg`} alt="item" className="itemImgCart"/>
           <p>{products.name}</p>
           <p>$ {products.price}</p>
           <span onClick={() => {dispatch(removeItemFromLike({likeItemId: likeItem.id}))}}>
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="delete" width="25px"/> 
        </span>
        </div>
    )
}

export default LikesItems;