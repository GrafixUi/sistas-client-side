import Link from "next/link";
import BlogGrid from "../components/elements/BlogGrid";
import Layout from "../components/layout/Layout";
import BlogFilter from './../components/elements/BlogFilter';

function PageBlogGrid() {
    return (
        <>
            <Layout parent="Home" sub="Blog" subChild="Wide">
                <section className="mt-50 mb-50">
                    <div className="container custom">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="shop-product-fillter mb-50 pr-30">
                                    <BlogFilter/>
                                </div>
                                <div className="loop-grid pr-30">
                                    <div className="row">
                                        <BlogGrid show={16} wide={true}/>
                                    </div>
                                </div>
                                <div className="pagination-area mt-15 mb-sm-5 mb-lg-0">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item">
                                                <Link className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-left"></i>
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#">
                                                    1
                                                </Link>
                                            </li>
                                            <li className="page-item active">
                                                <Link className="page-link" href="#">
                                                    2
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#">
                                                    3
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link
                                                    className="page-link dot"
                                                    href="#"
                                                >
                                                    ...
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#">
                                                    6
                                                </Link>
                                            </li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#">
                                                    <i className="fi-rs-arrow-small-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}

export default PageBlogGrid;
