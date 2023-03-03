import { dataCategories } from '../../Data/dataCategories';
import Filter from './Filter';

function AllCategories() {
  
    return (
        <div className='cont'>
        {dataCategories.map((category,index) => <Filter category={category} key={index}/>)}
        </div>
    )
}

export default AllCategories;