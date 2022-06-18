"use strict";(self.webpackChunke_commerce_mixel_app=self.webpackChunke_commerce_mixel_app||[]).push([[232],{3155:function(e,s,a){a.d(s,{Z:function(){return i}});a(2791);var r=a(3949),t=a(3504),n=a(2097),l=a(184);var i=function(e){var s=e.name,a=(e.brandName,e.slug),i=e.price,c=e.old_price,d=e.imageUrl,o=(0,n.N)(),u=o.t,m=o.lang;return(0,l.jsxs)(r.Z,{className:"product_card",bordered:!1,hoverable:!0,children:[(0,l.jsxs)("div",{className:"card_body",children:[(0,l.jsx)(t.rU,{className:"product_view_link",to:"/product/detail/".concat(a),children:(0,l.jsx)("figure",{children:(0,l.jsx)("img",{src:null!==d&&void 0!==d?d:"",alt:s,className:"product_card_img"})})}),(0,l.jsxs)("p",{className:"price title18_bold",children:[i," ",u("sum.".concat(m))]}),(0,l.jsxs)("del",{className:"old_price p14_regular",children:[c," ",u("sum.".concat(m))]}),(0,l.jsx)(t.rU,{className:"product_view_link",to:"/product/detail/".concat(a),children:(0,l.jsx)("h5",{className:"product_name",children:s})})]}),(0,l.jsx)("div",{className:"card_footer",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("button",{type:"button",children:(0,l.jsx)("img",{src:"/assets/icons/filled_cart.svg",alt:"cart"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{type:"button",children:(0,l.jsx)("img",{src:"/assets/icons/filled_heart.svg",alt:"heart"})})}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{type:"button",children:(0,l.jsx)("i",{className:"fa-solid fa-scale-balanced"})})})]})})]})}},3232:function(e,s,a){a.r(s),a.d(s,{default:function(){return W}});var r=a(2791),t=a(9439),n=a(2815),l=a(9862),i=a(3504),c=a(3949),d=a(5601),o=a(2093),u=a(184);var m=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],m=s[1],h=(0,r.useState)(!0),x=(0,t.Z)(h,2),j=(x[0],x[1]),p=(0,r.useCallback)((function(){j(!0),d.Z.fetchAll(o.X1).then((function(e){200===e.data.status&&(m(e.data.data),j(!1))}))}),[]);return(0,r.useEffect)((function(){p()}),[p]),(0,u.jsx)("div",{className:"BrandsCarusel_wrapper",children:(0,u.jsxs)("div",{className:"container brands_container",children:[(0,u.jsx)("div",{className:"BrandsCarousel_title_navigation",children:(0,u.jsx)("h2",{className:"title24_bold BrandsCarusel_title",children:"\u0411\u0440\u0435\u043d\u0434\u044b"})}),(0,u.jsx)("div",{className:"brand_slider_wrapper",children:(0,u.jsx)(n.tq,{breakpoints:{0:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:15},576:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:25},992:{slidesPerView:5,spaceBetween:30}},slidesPerView:5,spaceBetween:30,freeMode:!0,navigation:!0,grabCursor:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:[l.Rv,l.pt,l.W_],className:"mySwiper brandsSwiper",children:a.map((function(e){return(0,u.jsx)(n.o5,{children:(0,u.jsx)(c.Z,{bordered:!1,hoverable:!0,children:(0,u.jsx)(i.rU,{to:"#",className:"BrandsCarusel_img_wrapper",children:(0,u.jsx)("img",{src:e.imageUrl,alt:e.name})})})},e.id)}))})})]})})},h=a(1413),x=a(6106),j=a(914);var p=function(e){var s=e.title,a=e.toUrl;return(0,u.jsxs)("div",{className:"cards_title_top",children:[(0,u.jsx)("h4",{className:"title24_bold hot_deals_title",children:s}),(0,u.jsxs)(i.rU,{className:"show_more p18_regular",to:a,children:["\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0441\u0435 ",(0,u.jsx)("i",{className:"fa-solid fa-right-long"})]})]})},_=a(3155);var f=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],n=s[1],l=(0,r.useState)(!0),i=(0,t.Z)(l,2),c=(i[0],i[1]),m=(0,r.useCallback)((function(){d.Z.fetchWithParams(o.sv,{limit:8}).then((function(e){200===e.data.status&&(n(e.data.data),c(!1))}))}),[]);return(0,r.useEffect)((function(){m()}),[m]),(0,u.jsx)("div",{className:"good_cheaper",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(p,{title:"\u0422\u043e\u0432\u0430\u0440\u044b \u0434\u0435\u0448\u0435\u0432\u043b\u0435:",toUrl:"#"}),(0,u.jsx)(x.Z,{gutter:[30,30],children:a.map((function(e){return(0,u.jsx)(j.Z,{lg:6,md:8,sm:12,xs:24,children:(0,u.jsx)(_.Z,(0,h.Z)({},e))},e.id)}))})]})})};var v=function(e){var s=e.title,a=e.description,r=e.imageUrl,t=e.price,n=e.oldPrice,l=e.url;return(0,u.jsx)("div",{className:"center_banner_card",children:(0,u.jsxs)(x.Z,{gutter:[16,16],children:[(0,u.jsx)(j.Z,{lg:9,xs:24,children:(0,u.jsx)("div",{className:"left",children:(0,u.jsxs)("div",{className:"left_card",children:[(0,u.jsx)("h1",{className:"banner_title",children:s}),(0,u.jsx)("p",{className:"banner_desc",children:a})]})})}),(0,u.jsx)(j.Z,{lg:6,xs:24,children:(0,u.jsx)("div",{className:"center",children:(0,u.jsx)("img",{src:r,alt:s})})}),(0,u.jsx)(j.Z,{lg:9,xs:24,children:(0,u.jsxs)("div",{className:"right",children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("h1",{className:"price title42_extra_bold",children:[t," \u0421\u0443\u043c"]}),(0,u.jsxs)("del",{className:"old_price",children:[n," \u0421\u0443\u043c"]})]}),(0,u.jsx)(i.rU,{className:"banner_link",to:l,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"})]})})]})})};var g=function(){var e=(0,r.useState)(!0),s=(0,t.Z)(e,2),a=(s[0],s[1]),i=(0,r.useState)([]),c=(0,t.Z)(i,2),m=c[0],x=c[1],j=(0,r.useCallback)((function(){d.Z.fetchAll(o.JC).then((function(e){200===e.data.status&&(x(e.data.data),a(!1))}))}),[]);return(0,r.useEffect)((function(){j()}),[j]),(0,u.jsx)("div",{className:"home_center_banner",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"center_banner_wrapper",children:(0,u.jsx)(n.tq,{slidesPerView:1,grabCursor:!0,loop:!0,autoplay:{delay:2500,disableOnInteraction:!1},modules:[l.xW,l.W_,l.pt],children:m.map((function(e){return(0,u.jsx)(n.o5,{children:(0,u.jsx)(v,(0,h.Z)({},e))},e.id)}))})})})})},N=a(2097);var b=function(e){e.id;var s=e.name,a=e.slug,r=(e.brandName,e.price),t=e.old_price,n=e.imageUrl,l=(0,N.N)(),d=l.t,o=l.lang;return(0,u.jsxs)(c.Z,{className:"hot_deals_card",bordered:!1,hoverable:!0,children:[(0,u.jsxs)("div",{className:"card_body",children:[(0,u.jsx)(i.rU,{className:"product_view_link",to:"/product/detail/".concat(a),children:(0,u.jsx)("figure",{children:(0,u.jsx)("img",{src:null!==n&&void 0!==n?n:"",alt:"watch",className:"product_card_img"})})}),(0,u.jsxs)("p",{className:"price title18_bold",children:[(0,u.jsxs)("del",{className:"old_price p14_regular",children:[t," ",d("sum.".concat(o))]}),r," ",d("sum.".concat(o))]}),(0,u.jsx)(i.rU,{className:"product_view_link",to:"#",children:(0,u.jsxs)("h5",{className:"product_name",children:[s,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quo at dolore."]})})]}),(0,u.jsx)("div",{className:"card_footer",children:(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)("button",{type:"button",children:(0,u.jsx)("img",{src:"/assets/icons/filled_cart.svg",alt:"cart"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("button",{type:"button",children:(0,u.jsx)("img",{src:"/assets/icons/filled_heart.svg",alt:"heart"})})}),(0,u.jsx)("li",{children:(0,u.jsx)("button",{type:"button",children:(0,u.jsx)("i",{className:"fa-solid fa-scale-balanced"})})})]})})]})};var Z=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],n=s[1],l=(0,r.useState)(!0),i=(0,t.Z)(l,2),c=(i[0],i[1]),m=(0,r.useCallback)((function(){d.Z.fetchWithParams(o.pi,{limit:8}).then((function(e){200===e.data.status&&(n(e.data.data),c(!1))}))}),[]);return(0,r.useEffect)((function(){m()}),[m]),(0,u.jsx)("div",{className:"home_hot_deals",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(p,{title:"\u0413\u043e\u0440\u044f\u0449\u0438\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f",toUrl:"#"}),(0,u.jsx)(x.Z,{gutter:[30,30],children:a.map((function(e){return(0,u.jsx)(j.Z,{lg:6,md:8,sm:12,xs:24,children:(0,u.jsx)(b,(0,h.Z)({},e))},e.id)}))})]})})},w=a(5278),k=a(63),U=a(8894),C=k.Z.Panel,P=[{id:"1",name:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u044b, \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u044b",iconName:"phone",toUrl:"#",subcategories:[{id:"1",name:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b",toUrl:"#"},{id:"2",name:"\u041a\u043e\u043c\u043c\u0443\u0442\u0430\u0442\u043e\u0440\u044b",toUrl:"#"}]}];var y=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],c=s[1],m=(0,r.useState)(!1),h=(0,t.Z)(m,2),x=h[0],j=h[1],p=(0,r.useCallback)((function(){d.Z.fetchAll(o.sH).then((function(e){200===e.data.status&&c(e.data.data)})).catch((function(e){return console.log(e)}))}),[]);(0,r.useEffect)((function(){p()}),[p]);var _=function(e){return j(e)},f=(0,u.jsx)(i.rU,{onClick:function(){return _(!1)},className:"logo",to:"/",children:(0,u.jsx)("img",{className:"logo_img",src:"/assets/icons/Logo.svg",alt:"logo"})});return(0,u.jsx)("div",{className:"home_top_banner",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("div",{className:"banner_wrapper",children:(0,u.jsx)(n.tq,{slidesPerView:1,pagination:{clickable:!0},effect:"fade",navigation:!0,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},modules:[l.xW,l.tl,l.W_,l.pt],children:a.map((function(e){return(0,u.jsx)(n.o5,{children:(0,u.jsx)("a",{className:"banner__link",href:e.url,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("img",{className:"banner__link__img",src:e.imageUrl,alt:"home banner"})})},e.id)}))})}),(0,u.jsxs)("div",{className:"mobile_open_categories",children:[(0,u.jsx)("span",{onClick:function(){return _(!0)},children:(0,u.jsx)(w.Z,{})}),(0,u.jsx)(U.Z,{title:f,placement:"left",onClose:function(){return _(!1)},visible:x,className:"mobile_categories_drower",children:(0,u.jsx)(k.Z,{accordion:!0,ghost:!0,expandIconPosition:"end",children:P.map((function(e){return(0,u.jsx)(C,{header:(0,u.jsxs)(i.rU,{to:e.toUrl,onClick:function(){return _(!1)},children:[(0,u.jsx)("img",{src:"/assets/icons/".concat(e.iconName,".svg "),alt:"icon"})," ",e.name]}),children:e.subcategories.map((function(e){return(0,u.jsx)(i.rU,{to:e.toUrl,onClick:function(){return _(!1)},children:e.name},e.id)}))},e.id)}))})})]})]})})};var S=function(e){var s=e.title,a=e.imageUrl,r=e.slug;return(0,u.jsx)(c.Z,{hoverable:!0,bordered:!1,children:(0,u.jsxs)(i.rU,{to:"/category/".concat(r),className:"popular__slider__card",children:[(0,u.jsx)("h5",{className:"title20_bold popular_card_title",children:s}),(0,u.jsx)("img",{className:"popular__slider__card__img",src:a,alt:s})]})})};var B=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],i=s[1],c=(0,r.useState)(!0),m=(0,t.Z)(c,2),x=(m[0],m[1]),j=(0,r.useCallback)((function(){x(!0),d.Z.fetchAll(o.eH).then((function(e){i(e.data.data),x(!1)}))}),[]);return(0,r.useEffect)((function(){j()}),[j]),(0,u.jsx)("div",{className:"popular_categories_slider",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h4",{className:"title24_bold popular_slider_title",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),(0,u.jsx)("div",{className:"slider_wrapper",children:(0,u.jsx)(n.tq,{slidesPerView:4,spaceBetween:30,navigation:!0,loop:!0,lazy:!0,autoplay:{delay:3e3,disableOnInteraction:!1},modules:[l.pt,l.W_,l.oM],breakpoints:{0:{slidesPerView:1,spaceBetween:10},320:{slidesPerView:1,spaceBetween:15},576:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3,spaceBetween:25},992:{slidesPerView:4,spaceBetween:30}},className:"mySwiper",children:a.map((function(e){return(0,u.jsx)(n.o5,{children:(0,u.jsx)(S,(0,h.Z)({},e))},e.id)}))})})]})})};var V=function(){var e=(0,r.useState)([]),s=(0,t.Z)(e,2),a=s[0],n=s[1],l=(0,r.useState)(!0),i=(0,t.Z)(l,2),c=(i[0],i[1]),m=(0,r.useState)({}),f=(0,t.Z)(m,2),v=f[0],g=f[1],N=(0,r.useCallback)((function(){d.Z.fetchWithParams(o.Hu,{limit:8}).then((function(e){200===e.data.status&&(n(e.data.data),c(!1))}))}),[]),b=(0,r.useCallback)((function(){d.Z.fetchAll(o.We).then((function(e){200===e.data.status&&g(e.data.data)}))}),[]);(0,r.useEffect)((function(){N(),b()}),[N,b]);var Z=v.url,w=v.imageUrl;return(0,u.jsx)("div",{className:"recommended",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(p,{title:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c",toUrl:"#"}),(0,u.jsxs)(x.Z,{gutter:[30,30],children:[(0,u.jsx)(j.Z,{lg:6,md:0,sm:0,xs:0,children:(0,u.jsx)("div",{className:"left",children:(0,u.jsx)("a",{href:Z,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("img",{className:"recommended_img",src:w,alt:"recommended"})})})}),(0,u.jsx)(j.Z,{lg:18,md:24,children:(0,u.jsx)(x.Z,{gutter:[30,30],children:a.map((function(e){return(0,u.jsx)(j.Z,{lg:6,md:8,sm:12,xs:24,children:(0,u.jsx)(_.Z,(0,h.Z)({},e))},e.id)}))})})]})]})})};var W=function(){return(0,u.jsxs)("section",{className:"home",children:[(0,u.jsx)(y,{}),(0,u.jsx)(Z,{}),(0,u.jsx)(B,{}),(0,u.jsx)(g,{}),(0,u.jsx)(f,{}),(0,u.jsx)(V,{}),(0,u.jsx)(m,{})]})}}}]);
//# sourceMappingURL=232.9a400f87.chunk.js.map