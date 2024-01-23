import Layout from "../components/layout/Layout";
import Link from "next/link"
function Custom404() {
    return (
        <>
            <Layout
                parent="Home"
                sub="Pages"
                subChild="404"

            >
                <main className="main page-404">
                    <div className="page-content pt-150 pb-150">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-10 col-md-12 m-auto text-center">
                                    <p className=" display-2 mb-20">
                                        404
                                    </p>
                                    <h1 className="display-2 mb-30">
                                        Ooops! Sorry we can’t find that page!
                                    </h1>
                                    <p className="font-lg text-grey-700 mb-30">
                                        The resource requested could not be found on this server.
                                        
                                    </p>
                                    
                                    <Link href="/"><a
                                        className="btn btn-default submit-auto-width font-xs hover-up mt-30"

                                    >
                                        <i className="fi-rs-home mr-5"></i> Back To
                                        Home Page
                                    </a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default Custom404;
