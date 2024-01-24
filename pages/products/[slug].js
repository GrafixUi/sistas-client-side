import React from "react";
import ProductDetails from "../../components/ecommerce/ProductDetails";
import Layout from '../../components/layout/Layout';
import { server } from "../../config/index";
import { findProductIndex } from "../../util/util";

const ProductId = ({ product }) => {
    // Check if product is null or undefined
    if (!product) {
        // You can handle this case in a way that makes sense for your application
        // For example, you could display an error message or redirect to a 404 page.
        return (
            <>
                <Layout parent="Home" sub="Shop" subChild="Product Details">
                    <div className="container">
                        <p>Product not found</p>
                    </div>
                </Layout>
            </>
        );
    }

    return (
        <>
            <Layout parent="Home" sub="Shop" subChild={product.title}>
                <div className="container">
                    <ProductDetails product={product} />
                </div>
            </Layout>
        </>
    );
};

ProductId.getInitialProps = async (context) => {
    try {
        const request = await fetch(`${server}/static/product.json`);
        const data = await request.json();

        const index = findProductIndex(data, context.query.slug);

        return { product: data[index] };
    } catch (error) {
        console.error("Error fetching product data:", error);
        return { product: null };
    }
};


export default ProductId;
