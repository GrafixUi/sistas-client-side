import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "./../components/ecommerce/QuickView";
import Banner5 from "./../components/elements/Banner5";
import Deals1 from "./../components/elements/Deals1";
import IntroPopup from "./../components/elements/IntroPopup";
import Layout from "./../components/layout/Layout";
import CategorySlider from "./../components/sliders/Category";
import Intro1 from "./../components/sliders/Intro1";
import Link from "next/link";

export default function Home() {
    return (
        <>

            <Layout noBreadcrumb="d-none">
                <section className="home-slider position-relative mb-30">
                    <div className="container">
                        <div className="home-slide-cover mt-40">
                            <Intro1 />
                        </div>
                    </div>
                </section>
                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        <div className="section-title">
                            <div className="title">
                                <h3>Our Product</h3>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategoryTab />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="worksection" style={{ backgroundColor: "black", }} >
                    <div className=" conatiner" style={{ color: "white" }}>
                        <div className="worksection-row">
                            <div className="col-md-6 offset-md-3">
                                <div className="sc-heading-area text-center sc-mb-80">
                                    <h5 className="sc-sub-title primary-color text-uppercase" style={{ color: "#fd820e" }}>how ti works!</h5>
                                    <h2 className="heading-title white-color mt-10" style={{ color: "white" }}>Get started in simple 03 steps</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-40">
                            <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                                    <div class="service_icon">
                                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <path d="M28.6573 15.0866C28.9791 15.4148 29.4187 15.6007 29.8787 15.6026C30.3321 15.5965 30.7648 15.4106 31.0828 15.0866L35.9505 10.2189C36.2707 9.89674 36.4507 9.46057 36.4507 9.00634C36.4507 8.55175 36.2707 8.11596 35.9505 7.79343L28.6573 0.500285C28.3348 0.18007 27.899 0 27.4444 0C26.9902 0 26.554 0.18007 26.2319 0.500285L21.3642 5.36798C21.0401 5.6859 20.8543 6.11861 20.8481 6.57205C20.8501 7.03203 21.0359 7.47165 21.3642 7.79343L28.6573 15.0866ZM27.5219 4.14671L32.3896 9.01441L29.9642 11.4398L25.0105 6.57176L27.5219 4.14671Z" fill="white"></path>
                                            <path d="M34.4026 33.01H13.1765L27.2637 18.9228C27.5858 18.598 27.7651 18.1588 27.7624 17.7015C27.7651 17.2442 27.5858 16.8049 27.2637 16.4801L19.9706 9.18696C19.6476 8.86137 19.208 8.67822 18.7492 8.67822C18.2903 8.67822 17.8507 8.86137 17.5278 9.18696L0.498782 26.216C0.177034 26.5404 -0.00266335 26.98 2.98422e-05 27.4374V34.7305C2.98422e-05 35.1866 0.18126 35.6243 0.503774 35.9469C0.826289 36.2694 1.264 36.4506 1.72013 36.4506H34.4021C35.0168 36.4506 35.5846 36.1227 35.8918 35.5905C36.199 35.0584 36.199 34.4026 35.8918 33.8704C35.5846 33.3383 35.0168 33.0104 34.4021 33.0104L34.4026 33.01ZM3.44075 33.01V28.1423L18.7497 12.8334L23.6174 17.7011L8.30845 33.01H3.44075Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <h5 className="title white-color mt-20" style={{ color: "white" }}>Sign Up</h5>
                                    <div class="description white-dark-color">Join our vibrant community of women entrepreneurs.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                                    <div class="service_icon">
                                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M35.8531 21.8434H35.4206V12.6103C35.4206 11.3362 34.3925 10.3023 33.1261 10.3018V2.69251C33.1261 1.31455 31.8457 0.798091 30.8311 1.06994L2.67413 9.78407C1.12378 10.2635 1 11.0728 1 12.6105V35.6915C1 36.9656 2.02807 38 3.29451 38H33.1257C34.3924 37.9997 35.4202 36.9659 35.4202 35.6915V28.7672H35.8527C36.4862 28.7672 37 28.2513 37 27.6132V22.9968C37 22.3602 36.4857 21.8428 35.8527 21.8428L35.8531 21.8434ZM30.2549 3.88071C30.6036 3.77517 30.8311 3.92143 30.8311 4.29566V10.3029L9.10853 10.3026L30.2549 3.88071ZM33.1262 34.538C33.1262 35.1763 32.6121 35.692 31.9789 35.692L4.44233 35.6917C3.80913 35.6917 3.29508 35.1761 3.29508 34.5377L3.29479 13.8352C3.29479 12.9153 3.44818 12.6104 4.48934 12.6104H31.9785C32.6117 12.6104 33.1257 13.1263 33.1257 13.7644V21.8428L27.3892 21.843C26.756 21.843 26.242 22.3601 26.242 22.997V27.6135C26.242 28.2515 26.7557 28.7674 27.3892 28.7674H33.126L33.1262 34.538ZM34.7059 26.4596H28.5367V24.1517H34.7059V26.4596Z" fill="white" stroke="white" stroke-width="1.5"></path>
                                        </svg>
                                    </div>
                                    <h5 className="title white-color mt-20" style={{ color: "white" }}>Explore Opportunities</h5>
                                    <div class="description white-dark-color">Discover products, services, and professionals tailored to your needs.</div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 sal-animate" data-sal="slide-up" data-sal-duration="800" data-sal-delay="100">
                                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                                    <div class="service_icon">
                                        
                                        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.6573 15.0866C28.9791 15.4148 29.4187 15.6007 29.8787 15.6026C30.3321 15.5965 30.7648 15.4106 31.0828 15.0866L35.9505 10.2189C36.2707 9.89674 36.4507 9.46057 36.4507 9.00634C36.4507 8.55175 36.2707 8.11596 35.9505 7.79343L28.6573 0.500285C28.3348 0.18007 27.899 0 27.4444 0C26.9902 0 26.554 0.18007 26.2319 0.500285L21.3642 5.36798C21.0401 5.6859 20.8543 6.11861 20.8481 6.57205C20.8501 7.03203 21.0359 7.47165 21.3642 7.79343L28.6573 15.0866ZM27.5219 4.14671L32.3896 9.01441L29.9642 11.4398L25.0105 6.57176L27.5219 4.14671Z" fill="white"></path>
                                            <path d="M34.4026 33.01H13.1765L27.2637 18.9228C27.5858 18.598 27.7651 18.1588 27.7624 17.7015C27.7651 17.2442 27.5858 16.8049 27.2637 16.4801L19.9706 9.18696C19.6476 8.86137 19.208 8.67822 18.7492 8.67822C18.2903 8.67822 17.8507 8.86137 17.5278 9.18696L0.498782 26.216C0.177034 26.5404 -0.00266335 26.98 2.98422e-05 27.4374V34.7305C2.98422e-05 35.1866 0.18126 35.6243 0.503774 35.9469C0.826289 36.2694 1.264 36.4506 1.72013 36.4506H34.4021C35.0168 36.4506 35.5846 36.1227 35.8918 35.5905C36.199 35.0584 36.199 34.4026 35.8918 33.8704C35.5846 33.3383 35.0168 33.0104 34.4021 33.0104L34.4026 33.01ZM3.44075 33.01V28.1423L18.7497 12.8334L23.6174 17.7011L8.30845 33.01H3.44075Z" fill="white"></path>
                                        </svg>
                                    </div>
                                    <h5 className="title white-color mt-20" style={{ color: "white" }}>Connect & Grow</h5>
                                    <div class="description white-dark-color">Network with like-minded entrepreneurs and watch your business thrive.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding pb-5">
                    <div className="container">
                        <FetchTabSlider />
                    </div>
                </section>



                <section className="popular-categories section-padding">
                    <div className="container wow animate__fadeIn animate__animated">
                        <div className="section-title">
                            <div className="title">
                                <h3>Our Services</h3>
                            </div>
                        </div>
                        <div className="carausel-10-columns-cover position-relative">
                            <div className="carausel-10-columns" id="carausel-10-columns">
                                <CategorySlider />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="banners mb-25 mt-50">
                    <div className="container">
                        <div className="row">
                            <Banner5 />
                        </div>
                    </div>
                </section>

                <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="position-relative newsletter-inner">
                                    <div className="newsletter-content">
                                        <h2 className="mb-20" style={{ color: "white" }}>
                                            Stay home & get your daily <br />
                                            needs from our shop
                                        </h2>
                                        <p className="mb-45" style={{ color: "white" }}>
                                            Start You'r Daily Shopping{" "}

                                        </p>
                                        <form className="form-subcriber d-flex">
                                            <input
                                                type="email"
                                                placeholder="Your emaill address"
                                            />
                                            <button className="btn" type="submit">
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                    {/* <img
                                        src="/assets/imgs/banner/banner-9.png"
                                        alt="newsletter"
                                    /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured  section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay="0"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-1.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Best prices & offers
                                        </h3>
                                        <p>Orders $50 or more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".1s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-2.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Free delivery
                                        </h3>
                                        <p>24/7 amazing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".2s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-3.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Great daily deal
                                        </h3>
                                        <p>When you sign up</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".3s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-4.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Wide assortment
                                        </h3>
                                        <p>Mega Discounts</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".4s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-5.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Easy returns
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
                                <div
                                    className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                                    data-wow-delay=".5s"
                                >
                                    <div className="banner-icon">
                                        <img
                                            src="/assets/imgs/theme/icons/icon-6.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="banner-text">
                                        <h3 className="icon-box-title">
                                            Safe delivery
                                        </h3>
                                        <p>Within 30 days</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <QuickView />
            </Layout>
        </>
    );
}
