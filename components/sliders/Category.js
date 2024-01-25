import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import { server } from "../../config/index";
import Featured2 from "../sliders/Featured2";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProducts = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item) => item.featured);
        setFeatured(featuedItem);
        setActive("1");
    };



    useEffect(() => {
        featuredProducts();
    }, []);



    return (
        <>
            <div className="carausel-10-columns-cover position-relative">
                <div className="carausel-10-columns" id="carausel-10-columns">
                    <div className="cards-new">
                        <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                            <div style={{ marginBottom: "10px", height: "50px" }}><h2>Website Development</h2></div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                        </div>
                        {/* card 2 */}
                        <div className="card-new" style={{ backgroundColor: "#ff7640" }}>
                            <div style={{ marginBottom: "10px", height: "50px" }}><h2>Logo Design</h2></div>
                            <img style={{ bottom: "1" }} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png" alt="" />
                        </div>

                        {/* card 3 */}
                        <div className="card-new" style={{ backgroundColor: "#003912" }}>
                            <div style={{ marginBottom: "10px", height: "50px" }}><h2>Seo</h2></div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png" alt="" />
                        </div>
                        {/* card 4 */}
                        <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                            <div style={{ marginBottom: "10px", height: "50px" }}><h2>Social media Design</h2></div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                        </div>
                        {/* card 5 */}
                        <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                            <div style={{ marginBottom: "10px", height: "50px" }}><h2>Social media Design</h2></div>
                            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
