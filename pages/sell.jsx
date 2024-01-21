import Link from "next/link";
import Layout from "../components/layout/Layout";

function About() {
    return (
        <>
            <Layout parent="Home" sub="Pages" subChild="seller">
                <div className="container  pt-50">

                    <div className="row ">

                        <div className="col-xl-10 col-lg-12 m-auto">
                            <section className="row align-items-center mb-100">
                                <div className="col-lg-6">
                                    <img
                                        src="/assets/imgs/page/seller-1.png"
                                        alt=""
                                        className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <div className="pl-25">
                                        <h5 className="mb-35">Are you a Women Entrepreneur looking to promote and sell your products/services?</h5>
                                        <h4 className="mb-40">Then you have reached the right place!</h4>
                                        <p className="mb-25">
                                            Welcome to Sistas, an exclusive platform for Women Owned Businesses to showcase and
                                            sell your products and services online. You can create a store, add products, manage
                                            inventory, and accept online payments. It's the quickest way to take your business to the
                                            next level.
                                        </p>
                                        <p className="mb-50">
                                            Sistas is an effort to empower women, to own their lives, to be financially abundant and
                                            enjoy a lifestyle of freedom.
                                        </p>
                                        <Link href="#">
                                            <a className="btn btn-xs">
                                                Register Now <i className="fi-rs-arrow-small-right"></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                            <div className="col-lg-6">
                                <div className="pl-25">
                                    <h1 className="mb-25">
                                        Why join Sistas?
                                    </h1>
                                    <p className="mb-50">
                                        <h4>
                                            Sistas is created to make women financially abundant and independent. As a team of
                                            women we completely understand the need for a woman to balance her home and career.
                                        </h4>
                                        <br />
                                        <h6>
                                            So whether you are a woman entrepreneur/business owner looking at ways to increase your
                                            business revenue, or you are a full time working woman/mom and looking at starting
                                            something on your own for some extra income, or a home maker exploring options to make
                                            an income - Sistas is the answer for YOU!
                                        </h6>
                                        <br />
                                        By joining The Sistas, you integrate into a nurturing network of fellow women-owned
                                        enterprises. We provide the resources, expertise, and encouragement essential for the
                                        growth and success of your business. Get access to business training, masterclasses, tools
                                        and mentorship to flourish in your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <img src="https://theputchi.com/cdn/shop/files/Artboard_1_16ee6621-0246-4917-a2ad-6ad2f76a9b67.webp?v=1702557795&width=1780" alt="" />
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default About;
