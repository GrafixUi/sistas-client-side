import React from "react";
import Link from "next/link"
const Banner5 = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <img src="https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg" alt="" />
                    <div className="banner-text">
                        
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
                    <img src="https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg" alt="" />
                    <div className="banner-text">
                        
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
                    <img src="https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg" alt="" />
                    <div className="banner-text">
                        
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
