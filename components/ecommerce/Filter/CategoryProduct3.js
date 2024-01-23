import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct3 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul className="end">
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/shop/product-1-1.jpg"
                            alt=""
                        />
                        Pets
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/shop/product-2-1.jpg"
                            alt=""
                        />
                        Doctors
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/shop/product-3-1.jpg"
                            alt=""
                        />
                        Design
                    </a>

                </li>
                <li onClick={(e) => selectCategory(e, "jeans")}>
                    <a>
                        <img
                            src="/assets/imgs/shop/product-1-1.jpg"
                            alt=""
                        />
                        Creatives
                    </a>

                </li>

            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct3);
