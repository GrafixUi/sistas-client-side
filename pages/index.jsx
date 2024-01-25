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
import Banner6 from "../components/elements/Banner6";

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
            <div className="px-12 carausel-10-columns-cover position-relative">
              <div className="carausel-10-columns" id="carausel-10-columns">
                <CategoryTab />
              </div>
            </div>
          </div>
        </section>

        <section className="worksection" style={{ backgroundColor: "black" }}>
          <div className=" conatiner" style={{ color: "white" }}>
            <div className="worksection-row">
              <div className="col-md-6 offset-md-3">
                <div className="sc-heading-area text-center sc-mb-80">
                  <h5
                    className="sc-sub-title primary-color text-uppercase"
                    style={{ color: "#fd820e" }}
                  >
                    how ti works!
                  </h5>
                  <h2
                    className="heading-title white-color mt-10"
                    style={{ color: "white" }}
                  >
                    Get started in simple 03 steps
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mt-40">
              <div
                className="col-lg-4 col-md-6 sal-animate"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                  <div class="service_icon">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.6573 15.0866C28.9791 15.4148 29.4187 15.6007 29.8787 15.6026C30.3321 15.5965 30.7648 15.4106 31.0828 15.0866L35.9505 10.2189C36.2707 9.89674 36.4507 9.46057 36.4507 9.00634C36.4507 8.55175 36.2707 8.11596 35.9505 7.79343L28.6573 0.500285C28.3348 0.18007 27.899 0 27.4444 0C26.9902 0 26.554 0.18007 26.2319 0.500285L21.3642 5.36798C21.0401 5.6859 20.8543 6.11861 20.8481 6.57205C20.8501 7.03203 21.0359 7.47165 21.3642 7.79343L28.6573 15.0866ZM27.5219 4.14671L32.3896 9.01441L29.9642 11.4398L25.0105 6.57176L27.5219 4.14671Z"
                        fill="white"
                      ></path>
                      <path
                        d="M34.4026 33.01H13.1765L27.2637 18.9228C27.5858 18.598 27.7651 18.1588 27.7624 17.7015C27.7651 17.2442 27.5858 16.8049 27.2637 16.4801L19.9706 9.18696C19.6476 8.86137 19.208 8.67822 18.7492 8.67822C18.2903 8.67822 17.8507 8.86137 17.5278 9.18696L0.498782 26.216C0.177034 26.5404 -0.00266335 26.98 2.98422e-05 27.4374V34.7305C2.98422e-05 35.1866 0.18126 35.6243 0.503774 35.9469C0.826289 36.2694 1.264 36.4506 1.72013 36.4506H34.4021C35.0168 36.4506 35.5846 36.1227 35.8918 35.5905C36.199 35.0584 36.199 34.4026 35.8918 33.8704C35.5846 33.3383 35.0168 33.0104 34.4021 33.0104L34.4026 33.01ZM3.44075 33.01V28.1423L18.7497 12.8334L23.6174 17.7011L8.30845 33.01H3.44075Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <h5
                    className="title white-color mt-20"
                    style={{ color: "white" }}
                  >
                    Sign Up
                  </h5>
                  <div class="description white-dark-color">
                    Join our vibrant community of women entrepreneurs.
                  </div>
                </div>
                <img
                  src="/assets/imgs/"
                  alt=""
                  className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                />
              </div>
              <div
                className="col-lg-4 col-md-6 sal-animate"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                  <div class="service_icon">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M35.8531 21.8434H35.4206V12.6103C35.4206 11.3362 34.3925 10.3023 33.1261 10.3018V2.69251C33.1261 1.31455 31.8457 0.798091 30.8311 1.06994L2.67413 9.78407C1.12378 10.2635 1 11.0728 1 12.6105V35.6915C1 36.9656 2.02807 38 3.29451 38H33.1257C34.3924 37.9997 35.4202 36.9659 35.4202 35.6915V28.7672H35.8527C36.4862 28.7672 37 28.2513 37 27.6132V22.9968C37 22.3602 36.4857 21.8428 35.8527 21.8428L35.8531 21.8434ZM30.2549 3.88071C30.6036 3.77517 30.8311 3.92143 30.8311 4.29566V10.3029L9.10853 10.3026L30.2549 3.88071ZM33.1262 34.538C33.1262 35.1763 32.6121 35.692 31.9789 35.692L4.44233 35.6917C3.80913 35.6917 3.29508 35.1761 3.29508 34.5377L3.29479 13.8352C3.29479 12.9153 3.44818 12.6104 4.48934 12.6104H31.9785C32.6117 12.6104 33.1257 13.1263 33.1257 13.7644V21.8428L27.3892 21.843C26.756 21.843 26.242 22.3601 26.242 22.997V27.6135C26.242 28.2515 26.7557 28.7674 27.3892 28.7674H33.126L33.1262 34.538ZM34.7059 26.4596H28.5367V24.1517H34.7059V26.4596Z"
                        fill="white"
                        stroke="white"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                  </div>
                  <h5
                    className="title white-color mt-20"
                    style={{ color: "white" }}
                  >
                    Explore Opportunities
                  </h5>
                  <div class="description white-dark-color">
                    Discover products, services, and professionals tailored to
                    your needs.
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 sal-animate"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="100"
              >
                <div className="sc-service-content-box service_frame text-center sc-md-mb-70">
                  <div class="service_icon">
                    <svg
                      width="37"
                      height="37"
                      viewBox="0 0 37 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3793 38C26.4191 38 33.7586 30.4998 33.7586 21.262C33.7586 12.0242 26.4191 4.52399 17.3793 4.52399C8.33951 4.52399 1 12.0242 1 21.262C1 30.4998 8.33951 38 17.3793 38ZM17.3793 36.2381C9.29123 36.2381 2.72414 29.5272 2.72414 21.262C2.72414 12.9968 9.29123 6.28589 17.3793 6.28589C25.4674 6.28589 32.0345 12.9968 32.0345 21.262C32.0345 29.5272 25.4674 36.2381 17.3793 36.2381ZM17.3793 34.7405C16.9517 34.7405 16.6034 34.3846 16.6034 33.9476C16.6034 33.5107 16.9517 33.1548 17.3793 33.1548C17.8069 33.1548 18.1552 33.5107 18.1552 33.9476C18.1552 34.3846 17.8069 34.7405 17.3793 34.7405ZM24.0207 4.9997C26.869 2.50315 30.574 1 34.6207 1C43.6605 1 51 8.50024 51 17.738C51 26.9758 43.6605 34.476 34.6207 34.476C32.8742 34.476 31.1898 34.196 29.6122 33.6725C30.0606 33.2128 30.4827 32.7263 30.8795 32.2174C32.0725 32.5434 33.328 32.7141 34.6211 32.7141C42.7092 32.7141 49.2763 26.0032 49.2763 17.738C49.2763 9.47281 42.7092 2.76191 34.6211 2.76191C31.2764 2.76191 28.1917 3.90875 25.7314 5.84683C25.1795 5.53339 24.6092 5.24944 24.0212 4.99931L24.0207 4.9997ZM20.7929 34.2804C20.3792 34.3948 19.9532 34.1431 19.8431 33.72C19.7326 33.2972 19.9774 32.8618 20.3915 32.7493C20.8052 32.6365 21.2312 32.8866 21.3413 33.3098C21.4518 33.7325 21.207 34.1679 20.7929 34.2804ZM14.367 32.7493C14.7807 32.8622 15.0255 33.2972 14.9154 33.72C14.805 34.1427 14.3793 34.3948 13.9656 34.2804C13.5519 34.1675 13.3071 33.7325 13.4172 33.3098C13.5276 32.887 13.9533 32.6369 14.367 32.7493ZM23.9741 32.9342C23.6035 33.1529 23.1274 33.0223 22.9138 32.6436C22.6998 32.2648 22.8276 31.7803 23.1982 31.5617C23.5688 31.3414 24.0449 31.472 24.2585 31.8507C24.4725 32.2294 24.3447 32.7159 23.9741 32.9342V32.9342ZM11.5603 31.5616C11.9309 31.7803 12.0587 32.2648 11.8447 32.6435C11.6307 33.0222 11.155 33.1528 10.7844 32.9342C10.4138 32.7155 10.286 32.2294 10.5 31.8506C10.714 31.4719 11.1897 31.3413 11.5603 31.5616V31.5616ZM18.0689 13.2752C17.8414 13.2559 17.612 13.2453 17.3792 13.2453C17.1464 13.2453 16.917 13.2559 16.6896 13.2752V11.7477C16.6896 11.2616 16.3032 10.8667 15.8275 10.8667C15.3518 10.8667 14.9654 11.2616 14.9654 11.7477V13.6331C11.8154 14.6745 9.53438 17.6976 9.53438 21.2619C9.53438 24.5265 11.4483 27.3369 14.1896 28.5879V30.7761C14.1896 31.2622 14.5759 31.6571 15.0516 31.6571C15.5273 31.6571 15.9137 31.2622 15.9137 30.7761V29.1393C16.3601 29.2258 16.8223 29.273 17.293 29.2785V30.7761C17.293 31.2622 17.6794 31.657 18.1551 31.657C18.6307 31.657 19.0171 31.2622 19.0171 30.7761V29.1039C20.3776 28.8078 21.6084 28.1506 22.6101 27.2347C22.9634 26.9106 22.9946 26.3537 22.6756 25.9908C22.3584 25.6298 21.8135 25.5979 21.4583 25.922C20.3758 26.9138 18.9464 27.5163 17.3789 27.5163C14.0015 27.5163 11.2582 24.713 11.2582 21.2616C11.2582 17.8102 14.0015 15.0069 17.3789 15.0069C18.946 15.0069 20.3754 15.6094 21.4583 16.6012C21.8136 16.9253 22.3585 16.8938 22.6756 16.5324C22.9946 16.1694 22.9634 15.6125 22.6101 15.2885C21.8031 14.5503 20.8464 13.9793 19.793 13.6324V11.747C19.793 11.2609 19.4066 10.8661 18.9309 10.8661C18.4553 10.8661 18.0689 11.2609 18.0689 11.747V13.2752ZM34.6206 31.2163C34.193 31.2163 33.8447 30.8604 33.8447 30.4234C33.8447 29.9865 34.193 29.6306 34.6206 29.6306C35.0482 29.6306 35.3965 29.9865 35.3965 30.4234C35.3965 30.8604 35.0482 31.2163 34.6206 31.2163ZM9.14965 29.6711C9.45292 29.981 9.45292 30.4832 9.14965 30.7915C8.84639 31.1014 8.35494 31.1014 8.0532 30.7915C7.74994 30.4832 7.74994 29.981 8.0532 29.6711C8.35493 29.3612 8.84638 29.3612 9.14965 29.6711ZM26.7043 30.7915C26.4026 31.1014 25.9111 31.1014 25.6079 30.7915C25.3046 30.4832 25.3046 29.981 25.6079 29.6711C25.9111 29.3611 26.4026 29.3612 26.7043 29.6711C27.0076 29.981 27.0076 30.4832 26.7043 30.7915ZM38.0334 30.7561C37.6197 30.8706 37.1937 30.6189 37.0836 30.1957C36.9731 29.7729 37.2179 29.3376 37.632 29.2251C38.0457 29.1122 38.4717 29.3623 38.5818 29.7855C38.6923 30.2083 38.4475 30.6437 38.0334 30.7561ZM41.2146 29.4099C40.844 29.6286 40.3679 29.498 40.1543 29.1193C39.9403 28.7406 40.0681 28.2561 40.4387 28.0374C40.8093 27.8172 41.2854 27.9477 41.499 28.3265C41.713 28.7052 41.5852 29.1917 41.2146 29.41V29.4099ZM28.8008 28.0004C28.5868 28.3791 28.1111 28.5097 27.7405 28.2911C27.3699 28.0724 27.2421 27.5863 27.4576 27.2075C27.6716 26.8288 28.1457 26.6982 28.5163 26.9169C28.8869 27.1356 29.0147 27.6217 28.8007 28.0004H28.8008ZM7.29931 27.2076C7.51483 27.5863 7.38706 28.0728 7.01644 28.2911C6.64583 28.5098 6.16976 28.3792 5.95615 28.0005C5.74217 27.6217 5.86994 27.1352 6.24055 26.9169C6.61116 26.6983 7.0853 26.8288 7.29927 27.2076H7.29931ZM43.9456 27.2673C43.6439 27.5772 43.1524 27.5772 42.8492 27.2673C42.5459 26.959 42.5459 26.4568 42.8492 26.1469C43.1524 25.837 43.6439 25.837 43.9456 26.1469C44.2489 26.4568 44.2489 26.959 43.9456 27.2673ZM30.118 24.7495C30.0076 25.1723 29.5819 25.4225 29.1682 25.31C28.7545 25.1971 28.5097 24.7621 28.6198 24.3394C28.7303 23.9166 29.1559 23.6665 29.5696 23.7789C29.9833 23.8918 30.23 24.3268 30.118 24.7495ZM6.13675 24.339C6.2472 24.7617 6.00243 25.1971 5.58833 25.3096C5.17462 25.4225 4.74859 25.1723 4.63852 24.7492C4.52653 24.3264 4.77284 23.891 5.18694 23.7785C5.60065 23.6657 6.02668 23.9158 6.13675 24.339ZM46.0422 24.4762C45.8282 24.8549 45.3525 24.9855 44.9819 24.7669C44.6112 24.5482 44.4835 24.0621 44.699 23.6833C44.913 23.3046 45.3871 23.174 45.7577 23.3927C46.1283 23.6114 46.2561 24.0975 46.0421 24.4762H46.0422ZM30.5683 21.2607C30.5683 21.6976 30.22 22.0536 29.7924 22.0536C29.3648 22.0536 29.0166 21.6976 29.0166 21.2607C29.0166 20.8238 29.3648 20.4679 29.7924 20.4679C30.22 20.4679 30.5683 20.8238 30.5683 21.2607ZM5.74069 21.2607C5.74069 21.6976 5.39239 22.0536 4.96483 22.0536C4.53726 22.0536 4.18897 21.6976 4.18897 21.2607C4.18897 20.8238 4.53726 20.4679 4.96483 20.4679C5.39239 20.4679 5.74069 20.8238 5.74069 21.2607ZM47.3594 21.2253C47.249 21.6481 46.8233 21.8982 46.4096 21.7857C45.9959 21.6729 45.7511 21.2379 45.8612 20.8151C45.9716 20.3924 46.3973 20.1422 46.811 20.2547C47.2247 20.3676 47.4714 20.8025 47.3594 21.2253ZM30.118 17.7719C30.23 18.1947 29.9837 18.63 29.5696 18.7425C29.1559 18.8554 28.7299 18.6053 28.6198 18.1821C28.5093 17.7593 28.7541 17.324 29.1682 17.2115C29.5819 17.0986 30.008 17.3487 30.118 17.7719ZM6.13675 18.1825C6.0263 18.6053 5.60065 18.8554 5.18694 18.7429C4.77322 18.63 4.52653 18.1951 4.63852 17.7723C4.74898 17.3495 5.17462 17.0994 5.58833 17.2119C6.00205 17.3247 6.24682 17.7597 6.13675 18.1825ZM47.8097 17.7369C47.8097 18.1738 47.4614 18.5298 47.0338 18.5298C46.6062 18.5298 46.2579 18.1738 46.2579 17.7369C46.2579 17.3 46.6062 16.944 47.0338 16.944C47.4614 16.944 47.8097 17.3 47.8097 17.7369ZM7.29931 15.3143C7.08533 15.6931 6.61119 15.8236 6.24059 15.605C5.86999 15.3863 5.74221 14.9002 5.95619 14.5215C6.17017 14.1427 6.64584 14.0122 7.01648 14.2308C7.38712 14.4495 7.51487 14.9356 7.29935 15.3143H7.29931ZM28.8008 14.5215C29.0148 14.9002 28.887 15.3867 28.5164 15.605C28.1458 15.8237 27.6716 15.6931 27.4577 15.3144C27.2421 14.9356 27.3699 14.4492 27.7405 14.2309C28.1111 14.0122 28.5872 14.1428 28.8008 14.5215H28.8008ZM47.3594 14.2486C47.4714 14.6713 47.2251 15.1067 46.811 15.2192C46.3973 15.332 45.9712 15.0819 45.8612 14.6587C45.7507 14.236 45.9955 13.8006 46.4096 13.6881C46.8233 13.5753 47.2493 13.8254 47.3594 14.2486ZM9.14857 12.8512C8.84531 13.1611 8.35385 13.1611 8.05212 12.8512C7.74886 12.5413 7.74886 12.0391 8.05212 11.7308C8.35384 11.4209 8.8453 11.4209 9.14857 11.7308C9.45183 12.0391 9.45183 12.5413 9.14857 12.8512ZM26.7033 11.7308C27.0065 12.0391 27.0065 12.5413 26.7033 12.8512C26.4015 13.1611 25.9101 13.1611 25.6068 12.8512C25.3035 12.5413 25.3035 12.0391 25.6068 11.7308C25.9101 11.4209 26.4015 11.4209 26.7033 11.7308ZM46.0412 10.9977C46.2552 11.3764 46.1274 11.8629 45.7568 12.0812C45.3862 12.2999 44.912 12.1693 44.6981 11.7906C44.4825 11.4118 44.6103 10.9254 44.9809 10.7071C45.3515 10.4884 45.8276 10.619 46.0412 10.9977H46.0412ZM11.5584 10.9607C11.1878 11.181 10.7117 11.0504 10.4981 10.6717C10.2841 10.2929 10.4119 9.80644 10.7825 9.58814C11.1531 9.36948 11.6292 9.50005 11.8428 9.87878C12.0568 10.2575 11.929 10.742 11.5584 10.9607V10.9607ZM23.9722 9.58816C24.3428 9.80682 24.4706 10.2929 24.2566 10.6717C24.0426 11.0504 23.567 11.181 23.1963 10.9607C22.8257 10.7421 22.6979 10.2575 22.9119 9.87883C23.1259 9.5001 23.6016 9.36953 23.9722 9.5882V9.58816ZM20.791 8.24197C21.2047 8.35484 21.4495 8.7898 21.3394 9.21258C21.229 9.63535 20.8034 9.88548 20.3896 9.773C19.9759 9.66013 19.7312 9.22516 19.8412 8.80239C19.9517 8.37961 20.3773 8.12752 20.791 8.24197ZM14.3651 9.773C13.9514 9.88587 13.5254 9.63575 13.4153 9.21258C13.3049 8.7898 13.5496 8.35445 13.9637 8.24197C14.3774 8.12752 14.8035 8.37922 14.9135 8.80239C15.024 9.22516 14.7792 9.66052 14.3651 9.773ZM43.9444 8.20653C44.2477 8.51486 44.2477 9.01708 43.9444 9.32699C43.6427 9.63689 43.1513 9.63689 42.848 9.32699C42.5447 9.01709 42.5447 8.51487 42.848 8.20653C43.1512 7.89662 43.6427 7.89662 43.9444 8.20653ZM17.3769 9.36747C16.9494 9.36747 16.6011 9.01154 16.6011 8.57461C16.6011 8.13768 16.9494 7.78176 17.3769 7.78176C17.8045 7.78176 18.1528 8.13768 18.1528 8.57461C18.1528 9.01154 17.8045 9.36747 17.3769 9.36747ZM41.2134 6.06396C41.584 6.28263 41.7118 6.76872 41.4978 7.14748C41.2838 7.52623 40.8081 7.65677 40.4375 7.43654C40.0669 7.21787 39.9391 6.73335 40.1531 6.35464C40.3671 5.97591 40.8428 5.84534 41.2134 6.064V6.06396ZM28.7996 7.43653C28.429 7.65677 27.9529 7.5262 27.7393 7.14747C27.5253 6.76874 27.6531 6.28225 28.0237 6.06395C28.3943 5.84529 28.8704 5.97586 29.084 6.35458C29.298 6.73331 29.1702 7.21783 28.7996 7.43649V7.43653ZM38.0322 4.71777C38.4459 4.83065 38.6907 5.26561 38.5806 5.68839C38.4702 6.11116 38.0445 6.36129 37.6308 6.24881C37.2171 6.13594 36.9723 5.70097 37.0824 5.2782C37.1929 4.85542 37.6185 4.60333 38.0322 4.71777ZM31.6063 6.24881C31.1926 6.36168 30.7666 6.11155 30.6565 5.68839C30.546 5.26561 30.7908 4.83025 31.2049 4.71777C31.6186 4.60333 32.0446 4.85503 32.1547 5.2782C32.2652 5.70097 32.0204 6.13633 31.6063 6.24881ZM34.6185 5.84374C34.191 5.84374 33.8427 5.48781 33.8427 5.05088C33.8427 4.61395 34.191 4.25803 34.6185 4.25803C35.0461 4.25803 35.3944 4.61395 35.3944 5.05088C35.3944 5.48781 35.0461 5.84374 34.6185 5.84374Z" fill="white" stroke="white"></path>
                    </svg>
                  </div>
                  <h5
                    className="title white-color mt-20"
                    style={{ color: "white" }}
                  >
                    Connect & Grow
                  </h5>
                  <div class="description white-dark-color">
                    Network with like-minded entrepreneurs and watch your
                    business thrive.
                  </div>
                </div>
              </div>
            </div>
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
                <div className="cards-new">
                  <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                    <div style={{ marginBottom: "10px", height: "50px" }}><h2>Website Development</h2></div>
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                  </div>
                  {/* card 2 */}
                  <div className="card-new" style={{ backgroundColor: "#ff7640" }}>
                    <div style={{ marginBottom: "10px", height: "50px" }}><h2>Logo Design</h2></div>
                    <img style={{ bottom: "1" }} src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156494/logo-design.png" alt="" />
                  </div>

                  {/* card 3 */}
                  <div className="card-new" style={{ backgroundColor: "#003912" }}>
                    <div style={{ marginBottom: "10px", height: "50px" }}><h2>Seo</h2></div>
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_255,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156488/seo.png" alt="" />
                  </div>
                  {/* card 4 */}
                  <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                    <div style={{ marginBottom: "10px", height: "50px" }}><h2>Social media Design</h2></div>
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                  </div>
                  {/* card 5 */}
                  <div className="card-new" style={{ backgroundColor: "#00732e" }}>
                    <div style={{ marginBottom: "10px", height: "50px" }}><h2>Social media Design</h2></div>
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/798403f5b92b1b5af997acc704a3d21c-1702465156477/website-development.png" alt="" />
                  </div>

                </div>

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
