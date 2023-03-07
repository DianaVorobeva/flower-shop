import { useDispatch } from "react-redux";
import { removeItemFromLike } from '../../Redux/likesSlice';

function LikesItems({likeItem}) {
    console.log(likeItem.id)
   

    const dispatch = useDispatch();
    return (
        <div className="cardInCart">
           <img src={`./${likeItem.img}.jpg`} alt="item" className="itemImgCart"/>
           <p>{likeItem.name}</p>
           <p>$ {likeItem.price}</p>
          <img onClick={() => {dispatch(removeItemFromLike(likeItem.id))}} src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/512/external-delete-basic-ui-elements-flatart-icons-outline-flatarticons.png" alt="delete" width="25px"/> 
        
        </div>
    )
}

export default LikesItems;