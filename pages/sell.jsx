import Link from 'next/link';
import Layout from '../components/layout/Layout';

function About () {
  return (
    <div>
      <Layout parent="Home" sub="Pages" subChild="seller">
        <div className="container  pt-50">

          <div className="row ">

            <div className="col-xl-10 col-lg-12 m-auto">
              <section className="row align-items-center mb-100">
                <div className="col-lg-6 flex justify-center">
                  <img
                    src="https://i.pinimg.com/originals/48/c8/b4/48c8b4eaac2a55362b524278a635943f.gif"
                    alt="" width={1250}
                    className="border-radius-10  mb-md-3 mb-lg-0 mb-sm-4"
                  />
                </div>
                <div className="col-lg-6">
                  <div className="pl-25">
                    <h2 className="mb-35 ">
                      Are you a Women Entrepreneur looking to promote and sell your products/services?
                    </h2>
                    <h4 className="mb-40">
                      Then you have reached the right place!
                    </h4>
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
                    <Link href="#" className="btn btn-xs">
                      Register Now <i className="fi-rs-arrow-small-right" />
                    </Link>
                  </div>
                </div>
              </section>
              <section className="row align-items-center mb-100">
                
                <div className="col-lg-6">
                  <div className="pl-25">
                    <h2 className="mb-35 ">Why join Sistas?</h2>
                    <h4 className="mb-40">Why join Sistas?</h4>
                    <p className="mb-25">
                      Sistas is created to make women financially abundant and independent. As a team of
                      women we completely understand the need for a woman to balance her home and career.
                      {' '}
                    </p>
                    <p className="mb-50">
                      So whether you are a woman entrepreneur/business owner looking at ways to increase your
                      business revenue, or you are a full time working woman/mom and looking at starting
                      something on your own for some extra income, or a home maker exploring options to make
                      an income - Sistas is the answer for YOU!{' '}
                    </p>
                    
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    src="/assets/imgs/page/contact-2.png"
                    alt=""
                    className="border-radius-15 mb-md-3 mb-lg-0 mb-sm-4"
                  />
                </div>

              </section>

            </div>
            <img
              src="https://theputchi.com/cdn/shop/files/Artboard_1_16ee6621-0246-4917-a2ad-6ad2f76a9b67.webp?v=1702557795&width=1780"
              alt=""
            />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default About;
