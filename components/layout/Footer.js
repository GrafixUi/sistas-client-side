import React from "react";
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="main">
                
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="logo  mb-30">
                                        <Link href="/"><a className="mb-15">
                                            <h1>Sistas</h1>
                                        </a>
                                        </Link>
                                        <p className="font-lg text-heading">
                                            Our company is dedicated to creating unique and
                                            comfortable clothing for men and women.
                                        </p>
                                    </div>
                                    <ul className="contact-infor">
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-location.svg"
                                                alt=""
                                            />
                                            <strong>Address: </strong>{" "}
                                            <span>
                                                5171 W Campbell Ave undefined
                                                Kent, Utah 53127 United States
                                            </span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-contact.svg"
                                                alt=""
                                            />
                                            <strong>Call Us:</strong>
                                            <span>(+91) - 540-025-124553</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-email-2.svg"
                                                alt=""
                                            />
                                            <strong>Email:</strong>
                                            <span>sale@sistas.com</span>
                                        </li>
                                        <li>
                                            <img
                                                src="/assets/imgs/theme/icons/icon-clock.svg"
                                                alt=""
                                            />
                                            <strong>Hours:</strong>
                                            <span>
                                                10:00 - 18:00, Mon - Sat
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".1s"
                            >
                                <h4 className="widget-title">Company</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/about">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact US</a>
                                    </li>
                                    <li>
                                        <a href="/blog">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policy</a>
                                    </li>

                                </ul>
                            </div>
                            {/* <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">Account</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="#">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">My Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="#">Track My Order</a>
                                    </li>
                                    <li>
                                        <a href="#">Help Ticket</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping Details</a>
                                    </li>
                                    <li>
                                        <a href="#">Compare products</a>
                                    </li>
                                </ul>
                            </div> */}
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".3s"
                            >
                                <h4 className="widget-title ">INFORMATION</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivery info</a>
                                    </li>
                                    <li>
                                        <a href="#">Refund Policy</a>
                                    </li>
                                    <li>
                                        <a href="#">Size Guid</a>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h4 className="widget-title ">ORDER</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/account">My Account</a>
                                    </li>
                                    <li>
                                        <a href="/cart">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="/wishlist">Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="checkout">Checkout</a>
                                    </li>
                                </ul>
                            </div>
                            {/* <div
                                className="footer-link-widget widget-install-app col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".5s"
                            >
                                <h4 className="widget-title ">Install App</h4>
                                <p className="">From App Store or Google Play</p>
                                <div className="download-app ">
                                    <a
                                        href="#"
                                        className="hover-up mb-sm-2 mb-lg-0"
                                    >
                                        <img
                                            className="active"
                                            src="/assets/imgs/theme/app-store.jpg"
                                            alt=""
                                        />
                                    </a>
                                    <a href="#" className="hover-up mb-sm-2">
                                        <img
                                            src="/assets/imgs/theme/google-play.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <p className="mb-20 ">Secured Payment Gateways</p>
                                <img
                                    className=""
                                    src="/assets/imgs/theme/payment-method.png"
                                    alt=""
                                />
                            </div> */}
                        </div>
                    </div>
                </section>
                <div
                    className="container pb-30  wow animate__animated animate__fadeInUp"
                    data-wow-delay="0"
                >
                    <div className="row align-items-center">
                        <div className="col-12 mb-30">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <p className="font-sm mb-0">
                            © 2023 - Sistaas
                            </p>
                        </div>
                        <div className="col-xl-4 col-lg-6 text-center d-none d-xl-block">
                            {/* <div className="hotline d-lg-inline-flex mr-30">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 6666<span>Working 8:00 - 22:00</span>
                                </p>
                            </div>
                            <div className="hotline d-lg-inline-flex">
                                <img
                                    src="/assets/imgs/theme/icons/phone-call.svg"
                                    alt="hotline"
                                />
                                <p>
                                    1900 - 8888<span>24/7 Support Center</span>
                                </p>
                            </div> */}
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 text-end d-none d-md-block">
                            <div className="mobile-social-icon">
                                <h6>Follow Us</h6>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-facebook-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-twitter-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-instagram-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-pinterest-white.svg"
                                        alt=""
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="/assets/imgs/theme/icons/icon-youtube-white.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <p className="font-sm">
                                Up to 15% discount on your first subscribe
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
