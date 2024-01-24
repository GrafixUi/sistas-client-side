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
                    <img src="https://as2.ftcdn.net/v2/jpg/03/64/77/41/1000_F_364774110_jT8aIxPfIT6QOMngnpm9qHDxfoJebfMB.jpg" alt="" />
                    
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div
                    className="banner-img wow animate__animated animate__fadeInUp"
                    data-wow-delay=".2s"
                >
                    <img className=" ml-40" src="https://i.pinimg.com/originals/76/6d/c1/766dc1665abbab147def72fe48c9795e.jpg" alt="" height={310} />
                </div>
            </div>
            <div className="col-lg-4 d-md-none d-lg-flex">
                <div
                    className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".4s"
                >
                      <img src="https://as2.ftcdn.net/v2/jpg/03/64/77/41/1000_F_364774110_jT8aIxPfIT6QOMngnpm9qHDxfoJebfMB.jpg" alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner5;
