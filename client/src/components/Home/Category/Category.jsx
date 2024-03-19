import "./Category.scss";
import {useNavigate} from "react-router-dom";

const Category = ({categories}) => {
    //navigate to category page
    const navigate = useNavigate();
    return (
    <div className="shop-by-category">
        <div className="categories">
            {/* creating a loop for categories */}
            {categories?.data?.map((item) => (
                // compulsory to give key 
                <div key={item.id} className="category" onClick={()=> navigate(`/category/${item.id}`)}>
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt='' />
                </div>
            ))}
            
            {/* all these div ae commented out cause after using strapi api we will
            use the api and extract the categories and than we will apply loop on only
            one div 
            <div className="category">
                <img src={cat1} alt='' />
            </div>
            <div className="category">
                <img src={cat1} alt='' />
            </div>
            <div className="category">
                <img src={cat1} alt='' />
            </div> */}
        </div>
    </div>);
};

export default Category;
