import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory, filterCategory } from '../../Redux/productSlice';

function Filter({category}) {

    const dispatch = useDispatch(); 
    const selectedCategory = useSelector(getSelectedCategory); 
    

    return (
        <div className={selectedCategory===category ? "selectedCategory " : "categoryCont"} >
            <img src={category.image} alt="category" className="catPic"/>
            <p onClick={()=> dispatch(filterCategory(category.name))}>{category.name}</p>
        </div>
    )
}

export default Filter;