import "./Category.scss";

import {useParams} from "react-router-dom";
import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";
const Category = () => {

    const {id} = useParams();
    //below code will filte the category using id
    const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);

    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
            {/* innerPage is a prompt to pass so that products page heading is not shown */}
            <Products innerPage={true} products={data} />
        </div>
    </div>;
};

export default Category;
