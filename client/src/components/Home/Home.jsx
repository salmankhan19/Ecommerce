import { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from './Banner/Banner';
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
    //getting categories from context.js file
    const {categories,setCategories, products, setProducts} = useContext(Context);
    useEffect(() => {
        getProducts();
        getCategories();
    }, [] )

    //Getting products from Strapi app using api and populate is use for getting all the data 
    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*").then((res) => {
            console.log(res);
            //setting products with respond(res) getting from api and after this product state is  added into HTML below
            setProducts(res);
        });
    };

    //Getting categories from Strapi app using api and populate is use for getting all the data 
    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*").then((res) => {
            console.log(res);
            //setting categories with respond(res) getting from api and after this category state is  added into HTML below
            setCategories(res);
        });
    };
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    {/* adding category extracted from api above */}
                    <Category categories={categories}/>
                    {/* headingtext is a state use to alter headings of products grid */}
                    <Products products={products} headingText="Popular Products"/>

                </div>
            </div>
            
        </div>
    );
};
export default Home;
