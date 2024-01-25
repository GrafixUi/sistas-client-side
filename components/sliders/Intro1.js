import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
SwiperCore.use([Navigation, Pagination, EffectFade]);

const Intro4 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        effect={"fade"}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom_prev_i3",
          nextEl: ".custom_next_i3",
        }}
        className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
      >
        <SwiperSlide>
          <section
            className="row mb-50"
            style={{
              background: "",
            }}
          >
            <div className="single-hero-slider single-animation-wrap">
              <div class="banner-circle-shape2 sal-animate" data-sal="slide-down" data-sal-duration="800" data-sal-delay="100"></div>
              <div className="slider-content">
                <h6 className="mb-40" style={{ color: "orange" }}>WELCOME TO SISTAS</h6>
                <h5 className="display-2 mb-30" style={{ color: "black" }}>
                  Welcome | A COMMUNITY OF
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 30,
                      strings: ["  WOMEN-OWNED BRANDS"]
                    }}
                  />
                </h5>
                <form className="form-subcriber d-flex" style={{background:"whitesmoke"}}>
                  <input type="email" placeholder="Your email address" className=""  /> 
                  <button
                    className="btn"
                    type="submit"
                    style={{ background: "rgb(119, 118, 118)" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className=" py-1">
              <img
                src="https://sistas.in/assets/images/banner/banner-group.png"
                alt=""
                className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 ml-md-2"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div class="banner_frame">
                <img class="frame_2" src="https://sistas.in/assets/images/icons/banner_frame2.png" alt="Frame"/>
            </div>
          </section>
        </SwiperSlide>
        {/* <SwiperSlide>
          <section
            className="row align-items-center mb-50"
            style={{
              background: "",
            }}
          >
            <div className="single-hero-slider single-animation-wrap">
              <div className="slider-content">
              <h6 className="mb-40">WELCOME TO SISTAS</h6>
                <h5 className="display-2 mb-30" style={{ color: "black" }}>
                  Welcome | A COMMUNITY OF <br />
                  WOMEN-OWNED BRANDS
                </h5>

                <form className="form-subcriber d-flex">
                  <input type="email" placeholder="Your email address" />
                  <button
                    className="btn"
                    type="submit"
                    style={{ background: "rgb(119, 118, 118)" }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img
                src="https://sistas.in/assets/images/banner/banner-group.png"
                alt=""
                className="hero-img border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 ml-200"
              />
            </div>
          </section>
        </SwiperSlide> */}
      </Swiper>

      {/* <div className="slider-arrow hero-slider-1-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_i3">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_i3">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div> */}
      <style jsx>{`
    .row {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        .row {
            flex-direction: row;
            align-items: center;
        }

        .single-hero-slider {
            flex: 1;
            margin-right: 450px; /* Adjust the margin as needed */
        }

        .py-1 {
            flex: 1;
        }
    }
`}</style>
    </>
  );
};

export default Intro4;
