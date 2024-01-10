(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{9820:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop-compare",function(){return t(8950)}])},6375:function(n,e,t){"use strict";var r=t(5893),s=t(1664),c=t.n(s),a=t(2664),i=t(782),o={addToCart:t(8866).Xq};e.Z=(0,a.$j)(null,o)((function(n){var e=n.data,t=n.features,s=n.deleteFromCompare,a=n.addToCart;return(0,r.jsx)("table",{className:"table text-center",children:(0,r.jsx)("tbody",{children:t.map((function(n){return(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"text-muted font-md fw-600",style:{textTransform:"capitalize"},children:n}),e.map((function(e){return"preview"==n?(0,r.jsx)("td",{className:"row_img",children:(0,r.jsx)("img",{src:e.images[0].img})}):"name"==n?(0,r.jsx)("td",{className:"product_name",children:(0,r.jsx)("h5",{children:(0,r.jsx)("a",{href:"#",children:e.title})})}):"price"==n?(0,r.jsx)("td",{className:"product_price",children:(0,r.jsxs)("span",{className:"price",children:["$",e.price]})}):"rating"==n?(0,r.jsx)("td",{children:(0,r.jsx)("div",{className:"rating_wrap",children:e.review>=0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"product-rate d-inline-block",children:(0,r.jsx)("div",{className:"product-rating",style:{width:"".concat(e.ratingScore,"%")}})}),(0,r.jsxs)("span",{className:"rating_num",children:["(",e.review,")"]})]})})}):"description"==n?(0,r.jsx)("td",{className:"row_text font-xs",children:(0,r.jsx)("p",{children:e.desc})}):"stock"==n?(0,r.jsx)("td",{className:"row_stock",children:e.stock>=0?(0,r.jsx)("span",{children:"In Stock"}):(0,r.jsx)("span",{className:"text-danger font-weight-bold",children:"Out of stock"})}):"weight"==n?(0,r.jsxs)("td",{className:"row_weight",children:[e.weight," gram"]}):"dimensions"==n?(0,r.jsx)("td",{className:"row_dimensions",children:"N/A"}):"buy"==n?(0,r.jsx)("td",{className:"row_btn",children:e.stock>=0?(0,r.jsxs)("button",{className:"btn btn-sm",onClick:function(n){return function(n){a(n),(0,i.Am)("Product added to Cart !")}(e)},children:[(0,r.jsx)("i",{className:"fi-rs-shopping-bag mr-5"}),"Add to cart"]}):(0,r.jsx)(c(),{href:"/contact",children:(0,r.jsxs)("button",{className:"btn btn-sm btn-secondary",children:[(0,r.jsx)("i",{className:"fi-rs-headset mr-5"}),"Contact Us"]})})}):" "==n?(0,r.jsx)("td",{className:"row_remove",children:(0,r.jsxs)("a",{onClick:function(){return s(e.id)},children:[(0,r.jsx)("i",{className:"fi-rs-trash mr-5"}),(0,r.jsx)("span",{children:"Remove"})]})}):null}))]})}))})})}))},8950:function(n,e,t){"use strict";t.r(e);var r=t(5893),s=(t(7294),t(2664)),c=t(6375),a=t(9583),i=t(9216),o={clearCompare:i._Z,deleteFromCompare:i.Ht};e.default=(0,s.$j)((function(n){return{compare:n.compare}}),o)((function(n){var e=n.compare,t=n.clearCompare,s=n.deleteFromCompare;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(a.Z,{parent:"Home",sub:"Shop",subChild:"Compare",children:(0,r.jsx)("section",{className:"mt-50 mb-50",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-xl-10 col-lg-12 m-auto",children:[(0,r.jsx)("h1",{className:"heading-2 mb-10",children:"Products Compare"}),(0,r.jsxs)("h6",{className:"text-body mb-40",children:["There are ",(0,r.jsx)("span",{className:"text-brand",children:"3"}),"products to compare"]}),(0,r.jsx)("div",{className:"table-responsive",children:e.items.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{data:e.items,features:["preview","name","price","rating","description","color","stock","weight","dimensions","buy"," "],deleteFromCompare:s}),(0,r.jsx)("div",{className:"text-right",children:(0,r.jsx)("span",{className:"clear-btn",onClick:t,children:"Clear All"})})]}):(0,r.jsx)("h4",{children:"No Products"})})]})})})})})})}))},8866:function(n,e,t){"use strict";t.d(e,{EI:function(){return c},Ee:function(){return l},LA:function(){return o},LL:function(){return d},Qd:function(){return a},Xq:function(){return s},a3:function(){return i}});var r=t(6330),s=function(n){return function(e){e({type:r.G2,payload:{product:n}})}},c=function(n){return function(e){e({type:r.Yw,payload:{productId:n}})}},a=function(n){return function(e){e({type:r.RC,payload:{productId:n}})}},i=function(n){return function(e){e({type:r.eL,payload:{productId:n}})}},o=function(){return function(n){n({type:r.tN})}},d=function(){return function(n){n({type:r.qX})}},l=function(){return function(n){n({type:r.wy})}}},9216:function(n,e,t){"use strict";t.d(e,{Ht:function(){return a},_Z:function(){return i},a$:function(){return c},iH:function(){return s}});var r=t(6330),s=function(n){return function(n){n({type:r.zg})}},c=function(n){return function(e){e({type:r.Zd,payload:{product:n}})}},a=function(n){return function(e){e({type:r.Oh,payload:{productId:n}})}},i=function(){return function(n){n({type:r.Jx})}}}},function(n){n.O(0,[814,583,774,888,179],(function(){return e=9820,n(n.s=e);var e}));var e=n.O();_N_E=e}]);