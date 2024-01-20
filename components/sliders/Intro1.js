import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

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
                    <section className="row align-items-center mb-50" style={{
                        background: "#e2641d",
                    }}>
                        <div className="col-lg-6">
                            <div className="slider-content">
                                <h5 className="display-2 mb-40" style={{ color: "white", }}>
                                    Welcome | A COMMUNITY OF <br />
                                    WOMEN-OWNED BRANDS
                                </h5>

                                <form className="form-subcriber d-flex">
                                    <input
                                        type="email"
                                        placeholder="Your emaill address"
                                    />
                                    <button className="btn" type="submit" style={{ background: "rgb(119, 118, 118)" }}>
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://sistas.in/assets/images/banner/banner-group.png"
                                alt=""
                                className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4 ml-200"
                            />
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className="row align-items-center mb-50" style={{
                        background: "#e2641d"
                    }}>
                        <div className="col-lg-6">
                            <div className="slider-content">
                                <h5 className="display-2 mb-40" style={{ color: "white", }}>
                                    Welcome | A COMMUNITY OF <br />
                                    WOMEN-OWNED BRANDS
                                </h5>
                                <form className="form-subcriber d-flex">
                                    <input
                                        type="email"
                                        placeholder="Your emaill address"
                                    />
                                    <button className="btn" type="submit" style={{ background: "rgb(119, 118, 118)" }}>
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
                </SwiperSlide>
            </Swiper>

            <div className="slider-arrow hero-slider-1-arrow">
                <span className="slider-btn slider-prev slick-arrow custom_prev_i3">
                    <i className="fi-rs-angle-left"></i>
                </span>
                <span className="slider-btn slider-next slick-arrow custom_next_i3">
                    <i className="fi-rs-angle-right"></i>
                </span>
            </div>
        </>
    );
};

export default Intro4;
