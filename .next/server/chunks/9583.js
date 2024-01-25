"use strict";
exports.id = 9583;
exports.ids = [9583];
exports.modules = {

/***/ 9583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/layout/Breadcrumb.js


const Breadcrumb = ({ parent , sub , subChild , noBreadcrumb  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: `page-header breadcrumb-wrap ${noBreadcrumb}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "breadcrumb",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: parent
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        " ",
                        sub,
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        " ",
                        subChild
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const layout_Breadcrumb = (Breadcrumb);

;// CONCATENATED MODULE: ./components/layout/Footer.js



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
            className: "main footer ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    className: "section-padding footer-mid",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container pt-15 pb-20",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "widget-about font-md mb-md-3 mb-lg-3 mb-xl-0 wow animate__animated animate__fadeInUp",
                                        "data-wow-delay": "0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "logo mb-30",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: "mb-15",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                                style: {
                                                                    color: "white"
                                                                },
                                                                children: "Sistas"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "font-lg text-heading",
                                                        style: {
                                                            color: "white"
                                                        },
                                                        children: "Welcome to Sistas: Empowering Women Entrepreneurs"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "contact-infor",
                                                style: {
                                                    color: "white"
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: "/assets/imgs/theme/icons/icon-email-2.svg",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                            children: "Email:"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: "sale@sistas.com"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".1s",
                                    style: {
                                        color: "white"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title",
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/about",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/contact",
                                                        children: "Contact US"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/blog",
                                                        children: "Blog"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Privacy Policy"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".2s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "Vendor"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/vendors",
                                                        children: "Vendors"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/vendorslist",
                                                        children: "Vendorslist"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/vendorguide",
                                                        children: "Vendorguide"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/vendordashboard",
                                                        children: "Vendordash"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".3s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "INFORMATION"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "FAQ's"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Terms"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Delivery info"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Refund Policy"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Size Guid"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "footer-link-widget col wow animate__animated animate__fadeInUp",
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "widget-title ",
                                            children: "ORDER"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "footer-list mb-sm-5 mb-md-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/account",
                                                        children: "My Account"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/cart",
                                                        children: "View Cart"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/wishlist",
                                                        children: "Wishlist"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "checkout",
                                                        children: "Checkout"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container pb-30 wow animate__animated animate__fadeInUp",
                    "data-wow-delay": "0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row align-items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 mb-20",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-bottom"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "font-sm mb-0",
                                    style: {
                                        color: "white"
                                    },
                                    children: "\xa9 2024 - Sistaas"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Footer = (Footer);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./redux/action/productFiltersAction.js
var productFiltersAction = __webpack_require__(7330);
;// CONCATENATED MODULE: ./components/ecommerce/Filter/CategoryProduct2.js




const CategoryProduct2 = ({ updateProductCategory: updateProductCategory1  })=>{
    const router = (0,router_.useRouter)();
    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };
    const selectCategory = (e, category)=>{
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory1(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-1-1.jpg",
                                alt: ""
                            }),
                            "Legal"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-2-1.jpg",
                                alt: ""
                            }),
                            "Accounting and Tax"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-3-1.jpg",
                                alt: ""
                            }),
                            "Coach"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-1-1.jpg",
                                alt: ""
                            }),
                            "Therapist"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Filter_CategoryProduct2 = ((0,external_react_redux_.connect)(null, {
    updateProductCategory: productFiltersAction/* updateProductCategory */.pP
})(CategoryProduct2));

;// CONCATENATED MODULE: ./components/ecommerce/Filter/CategoryProduct3.js




const CategoryProduct3 = ({ updateProductCategory: updateProductCategory1  })=>{
    const router = (0,router_.useRouter)();
    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };
    const selectCategory = (e, category)=>{
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory1(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "end",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-1-1.jpg",
                                alt: ""
                            }),
                            "Pets"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-2-1.jpg",
                                alt: ""
                            }),
                            "Doctors"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-3-1.jpg",
                                alt: ""
                            }),
                            "Design"
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    onClick: (e)=>selectCategory(e, "jeans")
                    ,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/assets/imgs/shop/product-1-1.jpg",
                                alt: ""
                            }),
                            "Creatives"
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Filter_CategoryProduct3 = ((0,external_react_redux_.connect)(null, {
    updateProductCategory: productFiltersAction/* updateProductCategory */.pP
})(CategoryProduct3));

;// CONCATENATED MODULE: ./components/ecommerce/Search.js



const Search = ()=>{
    const { 0: searchTerm , 1: setSearchTerm  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const handleSearch = ()=>{
        console.log("click");
        router.push({
            pathname: "/products",
            query: {
                search: searchTerm
            }
        });
        setSearchTerm("");
    };
    const handleInput = (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                value: searchTerm,
                onKeyDown: handleInput,
                onChange: (e)=>setSearchTerm(e.target.value)
                ,
                type: "text",
                placeholder: "Search for Women Owned Products and Services"
            })
        })
    });
};
/* harmony default export */ const ecommerce_Search = (Search);

;// CONCATENATED MODULE: ./components/layout/Header.js







const Header = ({ totalCartItems , totalCompareItems , toggleClick , totalWishlistItems ,  })=>{
    const { 0: isToggled , 1: setToggled  } = (0,external_react_.useState)(false);
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        document.addEventListener("scroll", ()=>{
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });
    const handleToggle = ()=>setToggled(!isToggled)
    ;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: "header-area header-style-1 header-height-2 px-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-middle header-middle-ptb-1 d-none d-lg-block",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-wrap",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo logo-width-1 cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Sistas"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header-right",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "search-style-2",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(ecommerce_Search, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "header-action-right",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-action-2",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "header-action-icon-2 gap-5",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/sell",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "lable ml-0",
                                                                children: "Sell On Sistas"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/login",
                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                className: "btn btn-xs",
                                                                children: [
                                                                    "Sign In",
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                        className: "fi-rs-arrow-small-right"
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: scroll ? "header-bottom header-bottom-bg-color sticky-bar stick" : "header-bottom header-bottom-bg-color sticky-bar",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-wrap header-space-between position-relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "logo logo-width-1 d-block d-lg-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Sistas"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header-nav d-none d-lg-flex",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "main-categori-wrap d-none d-lg-block",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "categories-button-active",
                                                    onClick: handleToggle,
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fi-rs-apps"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "",
                                                            style: {
                                                                fontSize: "12px",
                                                                width: "70px"
                                                            },
                                                            children: "All Services"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fi-rs-angle-down"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: isToggled ? "categories-dropdown-wrap categories-dropdown-active-large font-heading open" : "categories-dropdown-wrap categories-dropdown-active-large font-heading",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "d-flex categori-dropdown-inner",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Filter_CategoryProduct2, {}),
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Filter_CategoryProduct3, {})
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "hot-deals",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/products",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Fashion"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    className: "",
                                                                    children: "Arts and Carft"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Beauty"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Home and Decor"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: "#",
                                                                children: "Baby Products"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            className: "position-static",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Party Supplies"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Books and Stationery"
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "#",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                    children: "Organic Food"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-action-icon-2 d-block d-lg-none",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "burger-icon burger-icon-white",
                                        onClick: toggleClick,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "burger-icon-top"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "burger-icon-mid"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "burger-icon-bottom"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "header-action-right d-block d-lg-none",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "header-action-2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "header-action-icon-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/shop-wishlist",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                alt: "Evara",
                                                                src: "/assets/imgs/theme/icons/icon-heart.svg"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "pro-count white",
                                                                children: totalWishlistItems
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "header-action-icon-2",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/shop-cart",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            className: "mini-cart-icon",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                    alt: "Evara",
                                                                    src: "/assets/imgs/theme/icons/icon-cart.svg"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "pro-count white",
                                                                    children: totalCartItems
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "cart-dropdown-wrap cart-dropdown-hm2",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "shopping-cart-img",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "#",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                            alt: "Evara",
                                                                                            src: "/assets/imgs/shop/thumbnail-3.jpg"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "shopping-cart-title",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                children: "Plain Striola Shirts"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                children: "1 \xd7 "
                                                                                            }),
                                                                                            "$800.00"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "shopping-cart-delete",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/#",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fi-rs-cross-small"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "shopping-cart-img",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "#",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                            alt: "Evara",
                                                                                            src: "/assets/imgs/shop/thumbnail-4.jpg"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                className: "shopping-cart-title",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                            href: "#",
                                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                                children: "Macbook Pro 2022"
                                                                                            })
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                                                                        children: [
                                                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                                children: "1 \xd7 "
                                                                                            }),
                                                                                            "$3500.00"
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "shopping-cart-delete",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                    href: "/#",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                            className: "fi-rs-cross-small"
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "shopping-cart-footer",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "shopping-cart-total",
                                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                            children: [
                                                                                "Total",
                                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                    children: "$383.00"
                                                                                })
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "shopping-cart-button",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/shop-cart",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: "View cart"
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                                href: "/shop-checkout",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                    children: "Checkout"
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
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
const mapStateToProps = (state)=>({
        totalCartItems: state.cart.length,
        totalCompareItems: state.compare.items.length,
        totalWishlistItems: state.wishlist.items.length
    })
;
/* harmony default export */ const layout_Header = ((0,external_react_redux_.connect)(mapStateToProps, null)(Header));

;// CONCATENATED MODULE: ./util/outsideClick.js

const useClickOutside = (handler)=>{
    let domNode = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return domNode;
};
/* harmony default export */ const outsideClick = (useClickOutside);

;// CONCATENATED MODULE: ./components/layout/MobileMenu.js




const MobileMenu = ({ isToggled , toggleClick  })=>{
    const { 0: isActive , 1: setIsActive  } = (0,external_react_.useState)({
        status: false,
        key: ""
    });
    const handleToggle = (key)=>{
        if (isActive.key === key) {
            setIsActive({
                status: false
            });
        } else {
            setIsActive({
                status: true,
                key
            });
        }
    };
    let domNode = outsideClick(()=>{
        setIsActive({
            status: false
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: isToggled ? "mobile-header-active mobile-header-wrapper-style sidebar-visible" : "mobile-header-active mobile-header-wrapper-style",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-header-wrapper-inner",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-header-top",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-header-logo",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            children: "Sistas"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-menu-close close-style-wrap close-style-position-inherit",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    className: "close-style search-close",
                                    onClick: toggleClick,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-top"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon-bottom"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mobile-header-content-area",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-search search-style-3 mobile-header-border",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                    action: "#",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            placeholder: "Search for items\u2026"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "submit",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "fi-rs-search"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-menu-wrap mobile-header-border",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "main-categori-wrap mobile-header-border",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "categori-button-active-2",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "fi-rs-apps"
                                                        }),
                                                        " Browse Categories"
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "categori-dropdown-wrap categori-dropdown-active-small",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-dress"
                                                                        }),
                                                                        "Women's Clothing"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-tshirt"
                                                                        }),
                                                                        "Men's Clothing"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                            children: [
                                                                " ",
                                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/shop-grid-right",
                                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                                className: "evara-font-smartphone"
                                                                            }),
                                                                            " ",
                                                                            "Cellphones"
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-desktop"
                                                                        }),
                                                                        "Computer & Office"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-cpu"
                                                                        }),
                                                                        "Consumer Electronics"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-home"
                                                                        }),
                                                                        "Home & Garden"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-high-heels"
                                                                        }),
                                                                        "Shoes"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-teddy-bear"
                                                                        }),
                                                                        "Mother & Kids"
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                href: "/shop-grid-right",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                                            className: "evara-font-kite"
                                                                        }),
                                                                        "Outdoor fun"
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "mobile-menu",
                                            ref: domNode,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 1 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(1)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/index",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Fashion"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 2 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(2)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/shop-grid-right",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Arts and Craft"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 3 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(3)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Beauty"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 4 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(4)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/blog-category-fullwidth",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Home and Decor"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 5 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(5)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Baby Product"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 6 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(5)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Party Supplies"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 6 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(5)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Books and Stationery"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: isActive.key == 6 ? "menu-item-has-children active" : "menu-item-has-children",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "menu-expand",
                                                            onClick: ()=>handleToggle(5)
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "#",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                children: "Organic Food"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const layout_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./components/layout/Layout.js







const Layout = ({ children , parent , sub , subChild , noBreadcrumb , headerStyle ,  })=>{
    const { 0: isToggled , 1: setToggled  } = (0,external_react_.useState)(false);
    const toggleClick = ()=>{
        setToggled(!isToggled);
        isToggled ? document.querySelector("body").classList.remove("mobile-menu-active") : document.querySelector("body").classList.add("mobile-menu-active");
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Sistas"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            isToggled && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "body-overlay-1",
                onClick: toggleClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {
                headerStyle: headerStyle,
                isToggled: isToggled,
                toggleClick: toggleClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_MobileMenu, {
                isToggled: isToggled,
                toggleClick: toggleClick
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Breadcrumb, {
                        parent: parent,
                        sub: sub,
                        subChild: subChild,
                        noBreadcrumb: noBreadcrumb
                    }),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ }),

/***/ 7330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lG": () => (/* binding */ updateProductFilters),
/* harmony export */   "m7": () => (/* binding */ updateProductRating),
/* harmony export */   "pP": () => (/* binding */ updateProductCategory)
/* harmony export */ });
/* harmony import */ var _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6330);

const updateProductFilters = (productFilters)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PRODUCT_FILTERS */ .Wi,
            payload: {
                productFilters
            }
        });
    }
;
const updateProductCategory = (category)=>(dispatch)=>{
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_PRODUCT_CATEGORY */ .$J,
            payload: {
                category
            }
        });
    }
;
const updateProductRating = (rating)=>(dispatch)=>{
        console.log(rating);
        dispatch({
            type: _constants_actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .UPDATE_RATING */ .Cr,
            payload: rating
        });
    }
;


/***/ })

};
;