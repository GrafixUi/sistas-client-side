import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { fetchByCatagory } from "../../redux/action/product";
import { server } from "../../config/index";
import FeaturedSlider from "../sliders/Featured";
import NewArrivalTabSlider from "../sliders/NewArrivalTab";
import TrendingSlider from "../sliders/Trending";

function FeatchTabSlider() {
    const [active, setActive] = useState("1");
    const [featured, setFeatured] = useState([]);
    const [trending, setTrending] = useState([]);
    const [newArrival, setNewArrival] = useState([]);

    const featuredProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item) => item.featured);
        setFeatured(featuedItem);
        setActive("1");
    };

    const trendingProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item) => item.trending);
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async () => {
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function (a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };

    useEffect(() => {
        featuredProduct();
    }, []);

    var sectionStyle = {
        backgroundImage: "url(https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705104000&semt=ais)"
    };

    return (
        <>
            <div className="section-title wow animate__animated animate__fadeIn">
                <h3 className="">Best Product</h3>
            </div>

            <div className="row">
                <div className="col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn" >
                    <div className="banner-img style-2" style={sectionStyle}>
                        <div className="banner-text">
                            <h2 className="mb-100">Bring nature into your home</h2>

                            <Link href="/products">
                                <a className="btn btn-xs">
                                    Shop Now <i className="fi-rs-arrow-small-right"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12">
                    <div className="carausel-4-columns-cover card-product-small arrow-center position-relative">
                        <FeaturedSlider products={featured} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default FeatchTabSlider;
