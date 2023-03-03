import { useSelector } from "react-redux";
import { getLikesItems } from '../../Redux/likesSlice';
import LikesItems from "./LikesItems";

function Likes() {
    const likesItems = useSelector(getLikesItems);

    return (
        <div className="contCartItem">
           <h2><b>You liked this items:</b> ({likesItems.length})</h2>
           <div>
           {likesItems.map( (likeItem, index) => <LikesItems likeItem={likeItem} key={index}/>)}
           </div>
        </div>
    )
}

export default Likes;