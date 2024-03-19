import "./Banner.scss";
import BannerImg from "../../../assets/IMG1.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Ipsum accusantium voluptatum,
                        et illo doloribus voluptas ad ipsa vero quae unde ea enim rerum sunt
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>

                    </div>
                    
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
