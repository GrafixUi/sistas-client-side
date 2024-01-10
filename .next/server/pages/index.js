"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8866);
/* harmony import */ var _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9216);
/* harmony import */ var _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3181);
/* harmony import */ var _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5644);









const SingleProduct2 = ({ product: product1 , addToCart: addToCart1 , addToCompare: addToCompare1 , addToWishlist: addToWishlist1 , openQuickView: openQuickView1 ,  })=>{
    const handleCart = (product)=>{
        addToCart1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Product added to Cart !");
    };
    const handleCompare = (product)=>{
        addToCompare1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Added to Compare list !");
    };
    const handleWishlist = (product)=>{
        addToWishlist1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Added to Wishlist !");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-cart-wrap mb-30",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-img-action-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-img product-img-zoom",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products/[slug]",
                                as: `/products/${product1.slug}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "default-img",
                                            src: product1.images[0].img,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: "hover-img",
                                            src: product1.images[1].img,
                                            alt: ""
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-action-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "aria-label": "Quick view",
                                    className: "action-btn hover-up",
                                    "data-bs-toggle": "modal",
                                    // data-bs-target="#quickViewModal"
                                    onClick: (e)=>openQuickView1(product1)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-rs-eye"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "aria-label": "Add To Wishlist",
                                    className: "action-btn hover-up",
                                    onClick: (e)=>handleWishlist(product1)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-rs-heart"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    "aria-label": "Compare",
                                    className: "action-btn hover-up",
                                    onClick: (e)=>handleCompare(product1)
                                    ,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fi-rs-shuffle"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-badges product-badges-position product-badges-mrg",
                            children: [
                                product1.trending && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "hot",
                                    children: "Hot"
                                }),
                                product1.created && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "new",
                                    children: "New"
                                }),
                                product1.totalSell > 100 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "best",
                                    children: "Best Sell"
                                }),
                                product1.discount.isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sale",
                                    children: "Sale"
                                }),
                                product1.discount.percentage >= 5 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "hot",
                                    children: [
                                        product1.discount.percentage,
                                        "%"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-content-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-category",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: product1.brand
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/products/[slug]",
                                as: `/products/${product1.slug}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: product1.title
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "product-rate d-inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "product-rating",
                                style: {
                                    width: "90%"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "product-price mt-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "$",
                                        product1.price,
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "old-price",
                                    children: product1.oldPrice && `$ ${product1.oldPrice}`
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sold mt-15 mb-15",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "progress mb-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "progress-bar",
                                        role: "progressbar",
                                        style: {
                                            width: "50%"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-xs text-heading",
                                    children: " Sold: 90/120"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "btn w-100 hover-up",
                            onClick: (e)=>handleCart(product1)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                    className: "fi-rs-shopping-cart mr-5"
                                }),
                                " Add To Cart"
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const mapDispatchToProps = {
    addToCart: _redux_action_cart__WEBPACK_IMPORTED_MODULE_5__/* .addToCart */ .Xq,
    addToCompare: _redux_action_compareAction__WEBPACK_IMPORTED_MODULE_6__/* .addToCompare */ .a$,
    addToWishlist: _redux_action_wishlistAction__WEBPACK_IMPORTED_MODULE_7__/* .addToWishlist */ .Mp,
    openQuickView: _redux_action_quickViewAction__WEBPACK_IMPORTED_MODULE_8__/* .openQuickView */ .$
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(SingleProduct2));


/***/ }),

/***/ 8235:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1645);
/* harmony import */ var _elements_FeaturedTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5063);
/* harmony import */ var _elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6422);
/* harmony import */ var _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__]);
([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function CategoryTab() {
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1");
    const { 0: catAll , 1: setCatAll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: cat1 , 1: setCat1  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: cat2 , 1: setCat2  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: cat3 , 1: setCat3  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const catPAll = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const catAllItem = allProducts.filter((item)=>item.category
        );
        setCatAll(catAllItem);
        setActive("1");
    };
    const catP1 = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const cat1Item = allProducts.filter((item)=>item.category == "jeans"
        );
        setCat1(cat1Item);
        setActive("2");
    };
    const catP2 = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const cat2Item = allProducts.filter((item)=>item.category == "shoe"
        );
        setCat2(cat2Item);
        setActive("3");
    };
    const catP3 = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const cat3Item = allProducts.filter((item)=>item.category == "jacket"
        );
        setCat3(cat3Item);
        setActive("4");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        catPAll();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "tab-content wow fadeIn animated",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: active === "1" ? "tab-pane fade show active" : "tab-pane fade",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-grid-4 row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FeaturedTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            products: catAll
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: active === "2" ? "tab-pane fade show active" : "tab-pane fade",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-grid-4 row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_FeaturedTab__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            products: cat1
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: active === "3" ? "tab-pane fade show active" : "tab-pane fade",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-grid-4 row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            products: cat2
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: active === "4" ? "tab-pane fade show active" : "tab-pane fade",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-grid-4 row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            products: cat3
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9394:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_Deals1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6637);




function FeatchDeals() {
    const { 0: deals , 1: setDeals  } = useState([]);
    const dealsProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        // Discount
        const discountProduct = allProducts.filter((item)=>item.discount.isActive
        );
        setDeals(discountProduct);
    };
    useEffect(()=>{
        dealsProduct();
    }, []);
    // console.log(deals);
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("div", {
            className: "row",
            children: deals.slice(0, 4).map((product, i)=>/*#__PURE__*/ _jsx("div", {
                    className: "col-xl-3 col-lg-4 col-md-6",
                    children: /*#__PURE__*/ _jsx(Deals1, {
                        product: product
                    })
                }, i)
            )
        })
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FeatchDeals)));


/***/ }),

/***/ 3933:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_FeaturedTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5063);
/* harmony import */ var _elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6422);
/* harmony import */ var _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7713);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__]);
([_elements_NewArrivalTab__WEBPACK_IMPORTED_MODULE_3__, _elements_TrendingTab__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function FeatchTab() {
    const { 0: active , 1: setActive  } = useState("1");
    const { 0: featured , 1: setFeatured  } = useState([]);
    const { 0: trending , 1: setTrending  } = useState([]);
    const { 0: newArrival , 1: setNewArrival  } = useState([]);
    const featuredProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item)=>item.featured
        );
        setFeatured(featuedItem);
        setActive("1");
    };
    const trendingProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item)=>item.trending
        );
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async ()=>{
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function(a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };
    useEffect(()=>{
        featuredProduct();
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "section-title style-2 wow animate__animated animate__fadeIn",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        children: "Popular Products"
                    }),
                    /*#__PURE__*/ _jsxs("ul", {
                        className: "nav nav-tabs links",
                        id: "myTab",
                        role: "tablist",
                        children: [
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "1" ? "nav-link active" : "nav-link",
                                    onClick: featuredProduct,
                                    children: "Featured"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "2" ? "nav-link active" : "nav-link",
                                    onClick: trendingProduct,
                                    children: "Popular"
                                })
                            }),
                            /*#__PURE__*/ _jsx("li", {
                                className: "nav-item",
                                role: "presentation",
                                children: /*#__PURE__*/ _jsx("button", {
                                    className: active === "3" ? "nav-link active" : "nav-link",
                                    onClick: newArrivalProduct,
                                    children: "New added"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "tab-content wow fadeIn animated",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "1" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(FeaturedTab, {
                                products: featured
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "2" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(TrendingTab, {
                                products: trending
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: active === "3" ? "tab-pane fade show active" : "tab-pane fade",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "product-grid-4 row",
                            children: /*#__PURE__*/ _jsx(NewArrivalTab, {
                                products: newArrival
                            })
                        })
                    })
                ]
            })
        ]
    });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (FeatchTab)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1503:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1645);
/* harmony import */ var _sliders_Featured__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
/* harmony import */ var _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7964);
/* harmony import */ var _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(950);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__, _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__, _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__]);
([_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__, _sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__, _sliders_Trending__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// import { fetchByCatagory } from "../../redux/action/product";




function FeatchTabSlider() {
    const { 0: active , 1: setActive  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("1");
    const { 0: featured , 1: setFeatured  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: trending , 1: setTrending  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { 0: newArrival , 1: setNewArrival  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const featuredProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const featuedItem = allProducts.filter((item)=>item.featured
        );
        setFeatured(featuedItem);
        setActive("1");
    };
    const trendingProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const trendingItem = allProducts.filter((item)=>item.trending
        );
        setTrending(trendingItem);
        setActive("2");
    };
    const newArrivalProduct = async ()=>{
        const request = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_6__/* .server */ .f}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalItem = allProducts.sort(function(a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalItem);
        setActive("3");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        featuredProduct();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "section-title wow animate__animated animate__fadeIn",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "",
                    children: "Best Product"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3 d-none d-lg-flex wow animate__animated animate__fadeIn",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "banner-img style-2",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "banner-text",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "mb-100",
                                        children: "Bring nature into your home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/products",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "btn btn-xs",
                                            children: [
                                                "Shop Now ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fi-rs-arrow-small-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-9 col-md-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "tab-content wow fadeIn animated",
                            id: "myTabContent",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "1" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_Featured__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            products: featured
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "2" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_Trending__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            products: trending
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: active === "3" ? "tab-pane fade show active" : "tab-pane fade",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "carausel-4-columns-cover card-product-small arrow-center position-relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sliders_NewArrivalTab__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            products: newArrival
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeatchTabSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Banner5 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-4 col-md-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "banner-img wow animate__animated animate__fadeInUp",
                    "data-wow-delay": "0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "banner-text",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/products",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "btn btn-xs",
                                    children: [
                                        "Shop Now ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-rs-arrow-small-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-4 col-md-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "banner-img wow animate__animated animate__fadeInUp",
                    "data-wow-delay": ".2s",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "banner-text",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/products",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "btn btn-xs",
                                    children: [
                                        "Shop Now ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-rs-arrow-small-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-4 d-md-none d-lg-flex",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "banner-img mb-sm-0 wow animate__animated animate__fadeInUp",
                    "data-wow-delay": ".4s",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "https://www.4cpl.tech/ast/uploads/2023/06/Web-Development.jpg",
                            alt: ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "banner-text",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/products",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "btn btn-xs",
                                    children: [
                                        "Shop Now ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fi-rs-arrow-small-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner5);


/***/ }),

/***/ 5598:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sliders_BestSeller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8735);
/* harmony import */ var _sliders_Trending2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8402);
/* harmony import */ var _sliders_NewArrival2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8506);
/* harmony import */ var _sliders_TopRated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sliders_NewArrival2__WEBPACK_IMPORTED_MODULE_5__, _sliders_TopRated__WEBPACK_IMPORTED_MODULE_6__]);
([_sliders_NewArrival2__WEBPACK_IMPORTED_MODULE_5__, _sliders_TopRated__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Bottom = ()=>{
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx("section", {
            className: "section-padding mb-30",
            children: /*#__PURE__*/ _jsx("div", {
                className: "container",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 wow animate__animated animate__fadeInUp",
                            "data-wow-delay": "0",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "section-title style-1 mb-30 animated animated",
                                    children: "Top Selling"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "product-list-small animated animated",
                                    children: /*#__PURE__*/ _jsx(BestSellerSlider, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 mb-md-0 wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".1s",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "section-title style-1 mb-30 animated animated",
                                    children: "Trending Products"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "product-list-small animated animated",
                                    children: /*#__PURE__*/ _jsx(TrendingSlider2, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-lg-block wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".2s",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "section-title style-1 mb-30 animated animated",
                                    children: "Recently added"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "product-list-small animated animated",
                                    children: /*#__PURE__*/ _jsx(NewArrival2, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            className: "col-xl-3 col-lg-4 col-md-6 mb-sm-5 mb-md-0 d-none d-xl-block wow animate__animated animate__fadeInUp",
                            "data-wow-delay": ".3s",
                            children: [
                                /*#__PURE__*/ _jsx("h4", {
                                    className: "section-title style-1 mb-30 animated animated",
                                    children: "Top Rated"
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    className: "product-list-small animated animated",
                                    children: /*#__PURE__*/ _jsx(TopRatedSlider, {})
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Bottom)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6637:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_action_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8866);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4945);







const Deals1 = ({ product: product1 , addToCart: addToCart1  })=>{
    const handleCart = (product)=>{
        addToCart1(product);
        (0,react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast)("Product added to Cart !");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product-cart-wrap style-2 wow animate__animated animate__fadeInUp",
            "data-wow-delay": "0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "product-img-action-wrap",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "product-img",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/products",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: product1.discount.banner,
                                    alt: ""
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "product-content-wrap",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "deals-countdown-wrap",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Timer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                endDateTime: "2022-11-27 00:00:00"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "deals-content",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/products/[slug]",
                                        as: `/products/${product1.slug}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: product1.title
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-rate-cover",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "product-rate d-inline-block",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "product-rating",
                                                style: {
                                                    width: "90%"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "font-small ml-5 text-muted",
                                            children: " (4.0)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: "font-small text-muted",
                                        children: [
                                            "By",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                href: "/vendor/1",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: "NestFood"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "product-card-bottom",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "product-price",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "$",
                                                        product1.price
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "old-price",
                                                    children: product1.oldPrice && `$ ${product1.oldPrice}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "add-cart",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                className: "add",
                                                onClick: (e)=>handleCart(product1)
                                                ,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fi-rs-shopping-cart mr-5"
                                                    }),
                                                    "Add",
                                                    " "
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const mapDispatchToProps = {
    addToCart: _redux_action_cart__WEBPACK_IMPORTED_MODULE_6__/* .addToCart */ .Xq
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(null, mapDispatchToProps)(Deals1));


/***/ }),

/***/ 5063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1601);


const FeaturedTab = ({ products  })=>{
    const showItem = 10;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: products.slice(0, showItem).map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    product: product
                })
            }, i)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedTab);


/***/ }),

/***/ 4669:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4945);




const IntroPopup = ()=>{
    const { 0: openClass , 1: setOpenClass  } = useState(0);
    const handleRemove = ()=>{
        setOpenClass(!openClass);
    };
    const fixDate = new Date();
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: openClass ? "modal fade custom-modal d-none" : "modal fade custom-modal  show d-block",
                children: /*#__PURE__*/ _jsx("div", {
                    className: "modal-dialog",
                    children: /*#__PURE__*/ _jsxs("div", {
                        className: "modal-content",
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                type: "button",
                                className: "btn-close",
                                onClick: handleRemove
                            }),
                            /*#__PURE__*/ _jsx("div", {
                                className: "modal-body",
                                children: /*#__PURE__*/ _jsxs("div", {
                                    className: "deal",
                                    style: {
                                        backgroundImage: "url('assets/imgs/banner/popup-1.png')"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "deal-top",
                                            children: [
                                                /*#__PURE__*/ _jsx("h2", {
                                                    className: "text-brand",
                                                    children: "Deal of the Day"
                                                }),
                                                /*#__PURE__*/ _jsx("h5", {
                                                    children: "Limited quantities."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "deal-content detail-info",
                                            children: [
                                                /*#__PURE__*/ _jsx("h6", {
                                                    className: "product-title",
                                                    children: /*#__PURE__*/ _jsx(Link, {
                                                        href: "/shop-product-right",
                                                        children: /*#__PURE__*/ _jsx("a", {
                                                            className: "text-heading",
                                                            children: "Organic fruit for your family's health"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "clearfix product-price-cover",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "product-price primary-color float-left",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "current-price text-brand",
                                                                children: "$38"
                                                            }),
                                                            /*#__PURE__*/ _jsxs("span", {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "save-price font-md color3 ml-15",
                                                                        children: "26% Off"
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        className: "old-price font-md ml-15",
                                                                        children: "$52"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs("div", {
                                            className: "deal-bottom",
                                            children: [
                                                /*#__PURE__*/ _jsx("p", {
                                                    className: "mb-20",
                                                    children: "Hurry Up! Offer End In:"
                                                }),
                                                /*#__PURE__*/ _jsx(Timer, {
                                                    endDateTime: fixDate.setDate(fixDate.getDate() + 2)
                                                }),
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "product-detail-rating",
                                                    children: /*#__PURE__*/ _jsxs("div", {
                                                        className: "product-rate-cover text-end",
                                                        children: [
                                                            /*#__PURE__*/ _jsx("div", {
                                                                className: "product-rate d-inline-block",
                                                                children: /*#__PURE__*/ _jsx("div", {
                                                                    className: "product-rating",
                                                                    style: {
                                                                        "width": "90%"
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ _jsx("span", {
                                                                className: "font-small ml-5 text-muted",
                                                                children: " (32 rates)"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsx(Link, {
                                                    href: "/shop-grid-right",
                                                    children: /*#__PURE__*/ _jsxs("a", {
                                                        className: "btn hover-up",
                                                        children: [
                                                            "Shop Now",
                                                            " ",
                                                            /*#__PURE__*/ _jsx("i", {
                                                                className: "fi-rs-arrow-right"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: openClass ? "modal-backdrop fade d-none" : "modal-backdrop fade show"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (IntroPopup)));


/***/ }),

/***/ 6422:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var _ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1601);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__]);
swiper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const NewArrivalTab = ({ products  })=>{
    const showItem = 10;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: products.slice(0, showItem).map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    product: product
                })
            }, i)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewArrivalTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInAHour = 60 * msInMinute;
const msInADay = 24 * msInAHour;
const getPartsofTimeDuration = (duration)=>{
    const days = Math.floor(duration / msInADay);
    const hours = Math.floor(duration % msInADay / msInAHour);
    const minutes = Math.floor(duration % msInAHour / msInMinute);
    const seconds = Math.floor(duration % msInMinute / msInSecond);
    return {
        days,
        hours,
        minutes,
        seconds
    };
};
const Timer = (endDateTime)=>{
    const { 0: time , 1: setTime  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date().toLocaleTimeString());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            const date = new Date();
            setTime(date.toLocaleTimeString());
        }, 1000);
        return ()=>{
            clearTimeout(timeout);
        };
    }, [
        time
    ]);
    const now = Date.now(); // Number of milliseconds from begining of time
    const future = new Date(endDateTime.endDateTime); // The day we leave for Japan
    const timeDif = future.getTime() - now;
    const timeParts = getPartsofTimeDuration(timeDif);
    // const countDownTime = `${timeParts.days} Days ${timeParts.hours} Hours and ${timeParts.minutes} minutes and ${timeParts.seconds} seconds`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "deals-countdown pl-5",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "countdown-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-amount hover-up",
                            children: timeParts.days
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-period",
                            children: " days "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "countdown-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-amount hover-up",
                            children: timeParts.hours
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-period",
                            children: " hours "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "countdown-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-amount hover-up",
                            children: timeParts.minutes
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-period",
                            children: " mins "
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    className: "countdown-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-amount hover-up",
                            children: timeParts.seconds
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "countdown-period",
                            children: " sec "
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);


/***/ }),

/***/ 7713:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var _ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1601);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__]);
swiper__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const TrendingTab = ({ products  })=>{
    const showItem = 10;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: products.slice(0, showItem).map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col-lg-1-5 col-md-4 col-12 col-sm-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    product: product
                })
            }, i)
        )
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingTab);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4728:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7330);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
]);
const data = [
    {
        id: 1,
        title: "Cake & Milk",
        slug: "jeans",
        img: "cat-13.png",
        bg: "bg-9"
    },
    {
        id: 2,
        title: "Oganic Kiwi",
        slug: "shoe",
        img: "cat-12.png",
        bg: "bg-10"
    },
    {
        id: 3,
        title: "Peach",
        slug: "jacket",
        img: "cat-11.png",
        bg: "bg-11"
    },
    {
        id: 4,
        title: "Red Apple",
        img: "cat-9.png",
        bg: "bg-12"
    },
    {
        id: 5,
        title: "Snack",
        img: "cat-3.png",
        bg: "bg-13"
    },
    {
        id: 6,
        title: "Vegetables",
        img: "cat-1.png",
        bg: "bg-14"
    },
    {
        id: 7,
        title: "Strawberry",
        img: "cat-2.png",
        bg: "bg-15"
    },
    {
        id: 8,
        title: "Black plum",
        img: "cat-4.png",
        bg: "bg-12"
    },
    {
        id: 9,
        title: "Custard apple",
        img: "cat-5.png",
        bg: "bg-10"
    },
    {
        id: 10,
        title: "Coffe & Tea",
        img: "cat-14.png",
        bg: "bg-12"
    },
    {
        id: 11,
        title: "Headphone",
        img: "cat-15.png",
        bg: "bg-11"
    }
];
const CategorySlider = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const selectCategory = (e, category)=>{
        e.preventDefault();
        // removeSearchTerm();
        (0,_redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__/* .updateProductCategory */ .pP)(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category //
            }
        });
        console.log("Click");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                autoplay: true,
                navigation: {
                    prevEl: ".custom_prev_ct1",
                    nextEl: ".custom_next_ct1"
                },
                className: "custom-class",
                breakpoints: {
                    480: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 5
                    },
                    1024: {
                        slidesPerView: 8
                    },
                    1200: {
                        slidesPerView: 10
                    }
                },
                children: data.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `card-2 ${item.bg} wow animate__animated animate__fadeInUp`,
                            onClick: (e)=>selectCategory(e, item.slug)
                            ,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    className: " img-hover-scale overflow-hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: `assets/imgs/shop/${item.img}`,
                                            alt: ""
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "26 items"
                                })
                            ]
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow",
                id: "carausel-10-columns-arrows",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_ct1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(null, {
    updateProductCategory: _redux_action_productFiltersAction__WEBPACK_IMPORTED_MODULE_5__/* .updateProductCategory */ .pP
})(CategorySlider));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 745:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const FeaturedSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                spaceBetween: 24,
                grid: {
                    rows: 2
                },
                navigation: {
                    prevEl: ".custom_prev_f",
                    nextEl: ".custom_next_f"
                },
                className: "custom-class",
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                },
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_f",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_f",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturedSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination
]);
const Intro1 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: true,
                navigation: {
                    prevEl: ".custom_prev_i1",
                    nextEl: ".custom_next_i1"
                },
                className: "hero-slider-1 style-4 dot-style-1 dot-style-1-position-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "single-hero-slider single-animation-wrap",
                            style: {
                                backgroundImage: "url(assets/imgs/slider/slider-1.png)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "slider-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "display-2 mb-40",
                                        style: {
                                            color: "white"
                                        },
                                        children: "New Arrivals"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-65",
                                        style: {
                                            color: "white"
                                        },
                                        children: "Shop the latest clothing, shoes, and handbags from top"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "form-subcriber d-flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Your emaill address"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn",
                                                type: "submit",
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "single-hero-slider single-animation-wrap",
                            style: {
                                backgroundImage: "url(assets/imgs/slider/slider-1.png)"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "slider-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "display-2 mb-40",
                                        style: {
                                            color: "white"
                                        },
                                        children: "New Arrivals"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "mb-65",
                                        style: {
                                            color: "white"
                                        },
                                        children: "Shop the latest clothing, shoes, and handbags from top"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        className: "form-subcriber d-flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "email",
                                                placeholder: "Your emaill address"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "btn",
                                                type: "submit",
                                                children: "Subscribe"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow hero-slider-1-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_i1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-angle-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_i1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-angle-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro1);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8506:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__]);
swiper__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
const NewArrival2 = ()=>{
    const { 0: newArrival , 1: setNewArrival  } = useState([]);
    useEffect(()=>{
        fetchProducts();
    }, []);
    const fetchProducts = async ()=>{
        // With Category
        const request = await fetch(`${server}/static/product.json`);
        const allProducts = await request.json();
        const newArrivalProducts = allProducts.sort(function(a, b) {
            return a.created > b.created ? -1 : 1;
        });
        setNewArrival(newArrivalProducts);
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: newArrival.slice(0, 3).map((product, i)=>/*#__PURE__*/ _jsxs("article", {
                className: "row align-items-center hover-up",
                children: [
                    /*#__PURE__*/ _jsx("figure", {
                        className: "col-md-4 mb-0",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/products/[slug]",
                            as: `/products/${product.slug}`,
                            children: /*#__PURE__*/ _jsx("a", {
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: product.images[0].img,
                                    alt: ""
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-8 mb-0",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/products/[slug]",
                                    as: `/products/${product.slug}`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: product.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-rate-cover",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "product-rate d-inline-block",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "product-rating",
                                            style: {
                                                width: "90%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "font-small ml-5 text-muted",
                                        children: " (4.0)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-price",
                                children: [
                                    /*#__PURE__*/ _jsxs("span", {
                                        children: [
                                            "$",
                                            product.price,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "old-price",
                                        children: product.oldPrice && `$ ${product.oldPrice}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i)
        )
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NewArrival2)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7964:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const NewArrivalTabSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 4,
                spaceBetween: 20,
                grid: {
                    rows: 2
                },
                loop: false,
                navigation: {
                    prevEl: ".custom_prev_n",
                    nextEl: ".custom_next_n"
                },
                className: "custom-class",
                breakpoints: {
                    480: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: 4
                    }
                },
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_n",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_n",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewArrivalTabSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6211:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__]);
swiper__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
]);
const TopRatedSlider = ()=>{
    const { 0: discount , 1: setDiscount  } = useState([]);
    // console.log(discount);
    useEffect(()=>{
        fetchProducts();
    }, []);
    const fetchProducts = async ()=>{
        // With Category
        const allProducts = await fetchByCatagory("/static/product.json");
        // Discount
        const discountProduct = allProducts.filter((item)=>item.discount.isActive
        );
        setDiscount(discountProduct);
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: discount.slice(0, 3).map((product, i)=>/*#__PURE__*/ _jsxs("article", {
                className: "row align-items-center hover-up",
                children: [
                    /*#__PURE__*/ _jsx("figure", {
                        className: "col-md-4 mb-0",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/products/[slug]",
                            as: `/products/${product.slug}`,
                            children: /*#__PURE__*/ _jsx("a", {
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: product.images[0].img,
                                    alt: ""
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-8 mb-0",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/products/[slug]",
                                    as: `/products/${product.slug}`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: product.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-rate-cover",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "product-rate d-inline-block",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "product-rating",
                                            style: {
                                                "width": "90%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "font-small ml-5 text-muted",
                                        children: " (4.0)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-price",
                                children: [
                                    /*#__PURE__*/ _jsxs("span", {
                                        children: [
                                            "$",
                                            product.price,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "old-price",
                                        children: product.oldPrice && `$ ${product.oldPrice}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i)
        )
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TopRatedSlider)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 950:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3454);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
([swiper__WEBPACK_IMPORTED_MODULE_1__, swiper_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_1__.Navigation
]);
const TrendingSlider = ({ products  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                slidesPerView: 4,
                spaceBetween: 30,
                navigation: {
                    prevEl: ".custom_prev_t",
                    nextEl: ".custom_next_t"
                },
                className: "custom-class",
                children: products.map((product, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ecommerce_SingleProduct2__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        })
                    }, i)
                )
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "slider-arrow slider-arrow-2 carausel-4-columns-arrow",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-prev slick-arrow custom_prev_t",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-left"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "slider-btn slider-next slick-arrow custom_next_t",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                            className: "fi-rs-arrow-small-right"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrendingSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8402:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const TrendingSlider = ()=>{
    const { 0: trending , 1: setTrending  } = useState([]);
    useEffect(()=>{
        fetchProducts();
    }, []);
    const fetchProducts = async ()=>{
        // With Category
        const allProducts = await fetchByCatagory("/static/product.json");
        const trendingItem = allProducts.filter((item)=>item.trending
        );
        setTrending(trendingItem);
    };
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: trending.slice(0, 3).map((product, i)=>/*#__PURE__*/ _jsxs("article", {
                className: "row align-items-center hover-up",
                children: [
                    /*#__PURE__*/ _jsx("figure", {
                        className: "col-md-4 mb-0",
                        children: /*#__PURE__*/ _jsx(Link, {
                            href: "/products/[slug]",
                            as: `/products/${product.slug}`,
                            children: /*#__PURE__*/ _jsx("a", {
                                children: /*#__PURE__*/ _jsx("img", {
                                    src: product.images[0].img,
                                    alt: ""
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "col-md-8 mb-0",
                        children: [
                            /*#__PURE__*/ _jsx("h6", {
                                children: /*#__PURE__*/ _jsx(Link, {
                                    href: "/products/[slug]",
                                    as: `/products/${product.slug}`,
                                    children: /*#__PURE__*/ _jsx("a", {
                                        children: product.title
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-rate-cover",
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: "product-rate d-inline-block",
                                        children: /*#__PURE__*/ _jsx("div", {
                                            className: "product-rating",
                                            style: {
                                                "width": "90%"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "font-small ml-5 text-muted",
                                        children: " (4.0)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: "product-price",
                                children: [
                                    /*#__PURE__*/ _jsxs("span", {
                                        children: [
                                            "$",
                                            product.price,
                                            " "
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        className: "old-price",
                                        children: product.oldPrice && `$ ${product.oldPrice}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }, i)
        )
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (TrendingSlider)));


/***/ }),

/***/ 1645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ server)
/* harmony export */ });
const dev = "production" !== "production";
const server = dev ? "http://localhost:3000" : "";


/***/ }),

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8235);
/* harmony import */ var _components_ecommerce_fetchDeals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9394);
/* harmony import */ var _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3933);
/* harmony import */ var _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1503);
/* harmony import */ var _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5598);
/* harmony import */ var _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5303);
/* harmony import */ var _components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8698);
/* harmony import */ var _components_elements_Deals1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6637);
/* harmony import */ var _components_elements_IntroPopup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4669);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9583);
/* harmony import */ var _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4728);
/* harmony import */ var _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9449);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__, _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__, _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__, _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__, _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__, _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__, _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__]);
([_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__, _components_ecommerce_fetchTab__WEBPACK_IMPORTED_MODULE_3__, _components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__, _components_elements_Bottom__WEBPACK_IMPORTED_MODULE_5__, _components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__, _components_sliders_Category__WEBPACK_IMPORTED_MODULE_11__, _components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            noBreadcrumb: "d-none",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "home-slider position-relative mb-30",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "home-slide-cover mt-30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sliders_Intro1__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "banners mb-25",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: " mb-20",
                                children: "Our Services"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_elements_Banner5__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "product-tabs section-padding position-relative",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-12",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_categoryTab__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: "section-padding pb-5",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_fetchTabSlider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ecommerce_QuickView__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 3069:
/***/ ((module) => {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ 1187:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,330,583,866,640,303,735], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();