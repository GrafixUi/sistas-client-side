import React from "react";
import Link from "next/link"
const Banner5 = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <h1></h1>
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" alt="" />
                    <div className="banner-text" style={{backgroundColor:"gray"}}>
                        <h4>
                            Everyday Fresh & <br />
                            Clean with Our
                            <br />
                            Products
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay=".2s"
                >
                    <img src="/assets/imgs/banner/banner-2.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            Make your Breakfast
                            <br />
                            Healthy and Easy
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 d-md-none d-lg-flex">
                <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                >
                    <img src="/assets/imgs/banner/banner-3.png" alt="" />
                    <div className="banner-text">
                        <h4>
                            The best Organic <br />
                            Products Online
                        </h4>
                        <Link href="/products"><a className="btn btn-xs">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner5;
