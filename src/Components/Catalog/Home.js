import { dataItems } from "../../Data/dataItems";
import AllCategories from "../Filter/AllCategories";
import ShopItem from "./ShopItem";
import { useSelector } from "react-redux";
import { getSelectedCategory } from '../../Redux/productSlice';



function Home() {
    const selectedCategory = useSelector(getSelectedCategory); 
 
    return (
        <div>
            <AllCategories/>
             <div className="contAllItems">
            {dataItems
            .filter(item => {
                if(selectedCategory === "All") return true;
                return selectedCategory === item.category;
            })
            .map((item,index) => <ShopItem item={item} key={index}/>)}
        </div>
        </div>
    )
}

export default Home;