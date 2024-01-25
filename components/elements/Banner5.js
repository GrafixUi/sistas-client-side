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
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/0c7c1b07050e6ea2a0901861b48b6264-1658846941284/side%20hustle.jpeg" alt="" />
                    <div className="banner-text">

                        <Link href="#"><a className="btn btn-xs mt-200">
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
                    <img className=" " src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/687d698a96f4eef875648319685ffeed-1687027332007/1685561103924-12profitableecommercebusinessideasyoucanstarttoday.jpg" alt="" height={300} />
                    <div className="banner-text">

                        <Link href="#"><a className="btn btn-xs mt-200">
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
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_430,dpr_1.0/v1/attachments/generic_asset/asset/5907f56b0e099c84efe5f480840f43a2-1593446948907/home%20based%20online%20business-fiverr.jpg" alt="" />
                    <div className="banner-text">

                        <Link href="#"><a className="btn btn-xs mt-200">
                            Shop Now <i className="fi-rs-arrow-small-right"></i>
                        </a></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner5;
