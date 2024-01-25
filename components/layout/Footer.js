import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="main footer ">
        <section className="section-padding footer-mid">
          <div className="container  pt-15 pb-20">
            <div className="row">
              <div className="col">
                <div
                  className="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0  wow animate__animated animate__fadeInUp"
                  data-wow-delay="0"
                >
                  <div className="logo  mb-30">
                    <Link href="/">
                      <a className="mb-15">
                        <h1 style={{color:"white"}}>Sistas</h1>
                      </a>
                    </Link>
                    <p className="font-lg text-heading" style={{color:"white"}}>
                      Welcome to Sistas: Empowering Women Entrepreneurs
                    </p>
                  </div>
                  <ul className="contact-infor" style={{color:"white"}}>
                    <li>
                      <img
                        src="/assets/imgs/theme/icons/icon-email-2.svg"
                        alt=""
                      />
                      <strong>Email:</strong>
                      <span>sale@sistas.com</span>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div
                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                data-wow-delay=".1s" style={{color:"white"}}
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
              <div
                                className="footer-link-widget col  wow animate__animated animate__fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h4 className="widget-title ">Vendor</h4>
                                <ul className="footer-list  mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="/vendors">Vendors</a>
                                    </li>
                                    <li>
                                        <a href="/vendorslist">Vendorslist</a>
                                    </li>
                                    <li>
                                        <a href="/vendorguide">Vendorguide</a>
                                    </li>
                                    <li>
                                        <a href="/vendordashboard">Vendordash</a>
                                    </li>
                                </ul>
                            </div>
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
            <div className="col-12 mb-20">
              <div className="footer-bottom"></div>
            </div>
            <div className="">
              <p className="font-sm mb-0" style={{color:"white"}}>© 2024 - Sistaas</p>
            </div>
            
            
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
