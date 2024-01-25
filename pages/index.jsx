import CategoryTab from "../components/ecommerce/categoryTab";
import FeatchDeals from "../components/ecommerce/fetchDeals";
import FeatchTab from "../components/ecommerce/fetchTab";
import FetchTabSlider from "../components/ecommerce/fetchTabSlider";
import Bottom from "../components/elements/Bottom";
import QuickView from "../components/ecommerce/QuickView";
import Banner5 from "../components/elements/Banner5";
import Deals1 from "../components/elements/Deals1";
import IntroPopup from "../components/elements/IntroPopup";
import Layout from "../components/layout/Layout";
import CategorySlider from "../components/sliders/Category";
import Intro1 from "../components/sliders/Intro1";
import Link from "next/link";
import Steps from "../components/elements/steps"

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
        <section className="mb-25 mt-50  " style={{display:"flex",justifyContent:"center"}}>
          <img src="https://theputchi.com/cdn/shop/files/Tunics_699_Offer_banner_-_WEB.webp?v=1705552922&width=2000" alt="" />
        </section>
        <section className="popular-categories section-padding px-5">
          <div className="container wow animate__fadeIn animate__animated">
            <div className="section-title">
              <div className="title">
                <h3>Latest Arrivals</h3>
              </div>
            </div>
            <div className="px-12 carausel-10-columns-cover position-relative">
              <div className="carausel-10-columns" id="carausel-10-columns">
                <CategoryTab />
              </div>
            </div>
          </div>
        </section>

        <section className="banners mb-25 mt-50">
        <div className="">
              <Steps />
            </div>
        </section>

        
        <section className="popular-categories section-padding">
          <div className="container wow animate__fadeIn animate__animated">
            <div className="section-title">
              <div className="title">
                <h3>Our Services</h3>
              </div>
            </div>
            <CategorySlider />
          </div>
        </section>


        <section className="banners mb-25 mt-50">
          <div className="container">
            <div className="row">
              <Banner5 />
            </div>
          </div>
        </section>
        <section className="mb-25 mt-50" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://theputchi.com/cdn/shop/files/Compression_socks_-_pack_of_2_-_399_-_WEB_2.webp?v=1705656870&width=2000" alt="" />
        </section>

        <section className="newsletter mb-15  wow animate__animated animate__fadeIn">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="position-relative newsletter-inner">
                  <div className="newsletter-content">
                    <h2 className="mb-20" style={{ color: "white" }}>
                      Suddenly it's all so doable.
                    </h2>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your emaill address" />
                      <button className="btn" type="submit" style={{ backgroundColor: "black" }}>
                        Subscribe
                      </button>
                    </form>
                  </div>

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
                    <img src="/assets/imgs/theme/icons/icon-1.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Best prices & offers</h3>
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
                    <img src="/assets/imgs/theme/icons/icon-2.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Free delivery</h3>
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
                    <img src="/assets/imgs/theme/icons/icon-3.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Great daily deal</h3>
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
                    <img src="/assets/imgs/theme/icons/icon-4.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Wide assortment</h3>
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
                    <img src="/assets/imgs/theme/icons/icon-5.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Easy returns</h3>
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
                    <img src="/assets/imgs/theme/icons/icon-6.svg" alt="" />
                  </div>
                  <div className="banner-text">
                    <h3 className="icon-box-title">Safe delivery</h3>
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
