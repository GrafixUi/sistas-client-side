(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[486],{4005:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop-grid-left",function(){return r(1849)}])},7457:function(e,s,r){"use strict";var a=r(5893),i=r(1163),t=r(7294),c=r(2664),l=r(7330),n=r(3076),d=(r(939),{updateProductFilters:l.lG});s.Z=(0,c.$j)((function(e){return{products:e.products.items}}),d)((function(e){var s=e.updateProductFilters,r=(0,i.useRouter)().query.search,c=(0,t.useState)({value:{min:0,max:500}}),l=c[0],d=c[1];(0,t.useEffect)((function(){var e={price:l.value};s(e)}),[l,r]);var o=(0,t.useState)(1);o[0],o[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{range:!0,allowCross:!1,defaultValue:[0,100],min:0,max:500,onChange:function(e){return d({value:{min:e[0],max:e[1]}})}}),(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("span",{children:l.value.min}),(0,a.jsx)("span",{children:l.value.max})]})]})}))},6371:function(e,s,r){"use strict";var a=r(5893),i=r(1163),t=r(7294),c=r(2664),l={updateProductFilters:r(7330).lG};s.Z=(0,c.$j)(null,l)((function(e){var s=e.updateProductFilters,r=((0,i.useRouter)(),(0,t.useState)([])),c=r[0],l=r[1],n=(0,t.useState)(0),d=n[0],o=n[1];(0,t.useEffect)((function(){s({tags:c})}),[c]);return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{className:"tags-list",children:[{value:""},{value:"New Arrivals"},{value:"Ginger"},{value:"Plus Size"}].map((function(e,s){return(0,a.jsx)("li",{className:"hover-up",onClick:function(){return function(e,s){l(s),o(d==e?0:e)}(s,e.value)},children:(0,a.jsxs)("a",{className:d==s?"cat-item text-brand-2":"cat-item text-brand",children:[(0,a.jsx)("i",{className:"fi-rs-cross mr-10"}),0==s?"All":"".concat(e.value)]})},s)}))})})}))},6782:function(e,s,r){"use strict";var a=r(5893),i=(r(7294),r(1163)),t=r(1664),c=r.n(t),l=r(6371);s.Z=function(e){e.parent,e.sub,e.subChild,e.noBreadcrumb;var s=(0,i.useRouter)().query.cat;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"page-header mt-30 mb-50",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"archive-header",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsxs)("div",{className:"col-xl-3",children:[(0,a.jsx)("h1",{className:"mb-15 text-capitalize",children:s||"Get Your Fashion"}),(0,a.jsxs)("div",{className:"breadcrumb",children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsxs)("a",{rel:"nofollow",children:[(0,a.jsx)("i",{className:"fi-rs-home mr-5"}),"Home"]})}),(0,a.jsx)("span",{})," Shop ",(0,a.jsx)("span",{})," ",s]})]}),(0,a.jsx)("div",{className:"col-xl-9 text-end d-none d-xl-block",children:(0,a.jsx)(l.Z,{})})]})})})})})}},1849:function(e,s,r){"use strict";r.r(s);var a=r(5893),i=(r(1664),r(1163)),t=r(7294),c=r(2664),l=(r(3169),r(7457)),n=r(1578),d=r(2763),o=r(769),u=r(3828),m=r(8722),h=r(5303),x=r(1601),j=r(6782),v=r(9583),p={fetchProduct:r(8658).MX};s.default=(0,c.$j)((function(e){return{products:e.products,productFilters:e.productFilters}}),p)((function(e){var s=e.products,r=e.productFilters,c=e.fetchProduct,p=(0,i.useRouter)().query.search,N=(0,t.useState)([]),g=N[0],f=N[1],b=(0,t.useState)(12),w=b[0],y=b[1],Z=(0,t.useState)(Math.ceil(s.items.length/w)),F=Z[0],C=Z[1],P=(0,t.useState)(1),_=P[0],S=P[1];(0,t.useEffect)((function(){c(p,"/static/product.json",r),k()}),[r,w,F,s.items.length]);var k=function(){var e=new Array(Math.ceil(s.items.length/w)).fill().map((function(e,s){return s+1}));f(e),C(Math.ceil(s.items.length/w))},E=_*w-w,M=E+w,$=s.items.slice(E,M),G=4*Math.floor((_-1)/4),A=G+4,R=g.slice(G,A);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(v.Z,{noBreadcrumb:"d-none",children:[(0,a.jsx)(j.Z,{}),(0,a.jsx)("section",{className:"mt-50 mb-50",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row flex-row-reverse",children:[(0,a.jsxs)("div",{className:"col-lg-4-5",children:[(0,a.jsxs)("div",{className:"shop-product-fillter",children:[(0,a.jsx)("div",{className:"totall-product",children:(0,a.jsxs)("p",{children:["We found",(0,a.jsx)("strong",{className:"text-brand",children:s.items.length}),"items for you!"]})}),(0,a.jsxs)("div",{className:"sort-by-product-area",children:[(0,a.jsx)("div",{className:"sort-by-cover mr-10",children:(0,a.jsx)(n.Z,{selectChange:function(e){y(Number(e.target.value)),S(1),C(Math.ceil(s.items.length/Number(e.target.value)))},showLimit:12})}),(0,a.jsx)("div",{className:"sort-by-cover",children:(0,a.jsx)(o.Z,{})})]})]}),(0,a.jsxs)("div",{className:"row product-grid-3",children:[0===$.length&&(0,a.jsx)("h3",{children:"No Products Found "}),$.map((function(e,s){return(0,a.jsx)("div",{className:"col-lg-1-5 col-md-4 col-12 col-sm-6",children:(0,a.jsx)(x.Z,{product:e})},s)}))]}),(0,a.jsx)("div",{className:"pagination-area mt-15 mb-sm-5 mb-lg-0",children:(0,a.jsx)("nav",{"aria-label":"Page navigation example",children:(0,a.jsx)(m.Z,{getPaginationGroup:R,currentPage:_,pages:F,next:function(){S((function(e){return e+1}))},prev:function(){S((function(e){return e-1}))},handleActive:function(e){S(e)}})})})]}),(0,a.jsxs)("div",{className:"col-lg-1-5 primary-sidebar sticky-sidebar",children:[(0,a.jsxs)("div",{className:"sidebar-widget price_range range mb-30",children:[(0,a.jsxs)("div",{className:"widget-header position-relative mb-20 pb-10",children:[(0,a.jsx)("h5",{className:"widget-title mb-10",children:"Fill by price"}),(0,a.jsx)("div",{className:"bt-1 border-color-1"})]}),(0,a.jsx)("div",{className:"price-filter",children:(0,a.jsxs)("div",{className:"price-filter-inner",children:[(0,a.jsx)("br",{}),(0,a.jsx)(l.Z,{}),(0,a.jsx)("br",{})]})}),(0,a.jsx)("div",{className:"list-group",children:(0,a.jsxs)("div",{className:"list-group-item mb-10 mt-10",children:[(0,a.jsx)("label",{className:"fw-900",children:"Color"}),(0,a.jsx)(u.Z,{}),(0,a.jsx)("label",{className:"fw-900 mt-15",children:"Item Condition"}),(0,a.jsx)(d.Z,{})]})}),(0,a.jsx)("br",{})]}),(0,a.jsxs)("div",{className:"sidebar-widget product-sidebar mb-30 p-30 bg-grey border-radius-10",children:[(0,a.jsx)("h5",{className:"section-title style-1 mb-30",children:"New products"}),(0,a.jsx)("div",{className:"bt-1 border-color-1"}),(0,a.jsxs)("div",{className:"single-post clearfix",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-3.png",alt:"#"})}),(0,a.jsxs)("div",{className:"content pt-10",children:[(0,a.jsx)("h5",{children:(0,a.jsx)("a",{children:"Chen Cardigan"})}),(0,a.jsx)("p",{className:"price mb-0 mt-5",children:"$99.50"}),(0,a.jsx)("div",{className:"product-rate",children:(0,a.jsx)("div",{className:"product-rating",style:{width:"90%"}})})]})]}),(0,a.jsxs)("div",{className:"single-post clearfix",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-4.png",alt:"#"})}),(0,a.jsxs)("div",{className:"content pt-10",children:[(0,a.jsx)("h6",{children:(0,a.jsx)("a",{children:"Chen Sweater"})}),(0,a.jsx)("p",{className:"price mb-0 mt-5",children:"$89.50"}),(0,a.jsx)("div",{className:"product-rate",children:(0,a.jsx)("div",{className:"product-rating",style:{width:"80%"}})})]})]}),(0,a.jsxs)("div",{className:"single-post clearfix",children:[(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("img",{src:"/assets/imgs/shop/thumbnail-5.png",alt:"#"})}),(0,a.jsxs)("div",{className:"content pt-10",children:[(0,a.jsx)("h6",{children:(0,a.jsx)("a",{children:"Colorful Jacket"})}),(0,a.jsx)("p",{className:"price mb-0 mt-5",children:"$25"}),(0,a.jsx)("div",{className:"product-rate",children:(0,a.jsx)("div",{className:"product-rating",style:{width:"60%"}})})]})]})]})]})]})})}),(0,a.jsx)(h.Z,{})]})})}))}},function(e){e.O(0,[814,144,696,262,583,730,834,774,888,179],(function(){return s=4005,e(e.s=s);var s}));var s=e.O();_N_E=s}]);