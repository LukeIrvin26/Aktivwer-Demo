(this.webpackJsonpacktivwear=this.webpackJsonpacktivwear||[]).push([[0],{112:function(e,t,c){},123:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(41),o=c.n(i),s=(c(112),c(9)),a=c(7),l=c(58),j=c(22),d=c.n(j),u=c(36),b=c(67),h=c(68),x=c(74),p=c(73),f=c(69),O=c.n(f),m=c(3),g=r.a.createContext(),v=O.a.buildClient({domain:"aktivwearreact.myshopify.com",storefrontAccessToken:"8d3b209e1960d3b06c055236c21f2282"}),C=function(e){Object(x.a)(c,e);var t=Object(p.a)(c);function c(){var e;Object(b.a)(this,c);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={product:{},products:[],checkout:{},isCartOpen:!1,isMenuOpen:!1},e.createCheckout=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.checkout.create();case 2:c=t.sent,localStorage.setItem("checkout_id",c.id),e.setState({checkout:c});case 5:case"end":return t.stop()}}),t)}))),e.fetchCheckout=function(t){v.checkout.fetch(t).then((function(t){e.setState({checkout:t})}))},e.addItemToCheckout=function(){var t=Object(u.a)(d.a.mark((function t(c,n){var r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[{variantId:c,quantity:parseInt(n,10)}],t.next=3,v.checkout.addLineItems(e.state.checkout.id,r);case 3:i=t.sent,e.setState({checkout:i}),e.openCart();case 6:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}(),e.removeLineItem=function(){var t=Object(u.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.checkout.removeLineItems(e.state.checkout.id,c);case 2:n=t.sent,e.setState({checkout:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fetchAllProducts=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.product.fetchAll();case 2:c=t.sent,e.setState({products:c});case 4:case"end":return t.stop()}}),t)}))),e.fetchProductWithHandle=function(){var t=Object(u.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.product.fetchByHandle(c);case 2:n=t.sent,e.setState({product:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.closeCart=function(){e.setState({isCartOpen:!1})},e.openCart=function(){e.setState({isCartOpen:!0})},e.closeMenu=function(){e.setState({isMenuOpen:!1})},e.openMenu=function(){e.setState({isMenuOpen:!0})},e}return Object(h.a)(c,[{key:"componentDidMount",value:function(){localStorage.checkout_id?this.fetchCheckout(localStorage.checkout_id):this.createCheckout()}},{key:"render",value:function(){return console.log(this.state.checkout),Object(m.jsx)(g.Provider,{value:Object(l.a)(Object(l.a)({},this.state),{},{fetchAllProducts:this.fetchAllProducts,fetchProductWithHandle:this.fetchProductWithHandle,addItemToCheckout:this.addItemToCheckout,removeLineItem:this.removeLineItem,closeCart:this.closeCart,openCart:this.openCart,closeMenu:this.closeMenu,openMenu:this.openMenu}),children:this.props.children})}}]),c}(n.Component),k=(g.Consumer,C),w=c(66),y=c(63),I=c(64),A=c(65),S=c(71),M=function(){var e,t,c=Object(n.useContext)(g),r=c.isCartOpen,i=c.closeCart,o=c.checkout,s=c.removeLineItem;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(w.a,{isOpen:r,placement:"right",onClose:i,size:"sm",children:Object(m.jsx)(w.g,{children:Object(m.jsxs)(w.d,{backgroundColor:"#343633",color:"white",children:[Object(m.jsx)(w.c,{}),Object(m.jsx)(w.f,{children:"Your Cart"}),Object(m.jsx)(w.b,{children:(null===(e=o.lineItems)||void 0===e?void 0:e.length)?Object(m.jsx)(y.h,{columns:1,spacing:10,children:o.lineItems.map((function(e){return Object(m.jsxs)(y.e,{templateColumns:"repeat(4, 1fr)",gap:1,children:[Object(m.jsx)(y.b,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(m.jsx)(S.a,{cursor:"pointer",onClick:function(){return s(e.id)}})}),Object(m.jsx)(y.b,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(m.jsx)(I.a,{src:e.variant.image.src})}),Object(m.jsxs)(y.b,{display:"flex",alignItems:"center",justifyContent:"center",children:[Object(m.jsx)(y.i,{fontSize:"sm",fontWeight:"bold",children:e.title}),Object(m.jsx)(y.i,{fontSize:"sm",children:e.variant.title})]}),Object(m.jsx)(y.b,{children:Object(m.jsx)(y.i,{height:"100%",display:"flex",align:"center",justifyContent:"center",children:e.variant.price})})]},e.id)}))}):Object(m.jsx)(y.b,{h:"100%",w:"100%",children:Object(m.jsx)(y.i,{h:"100%",display:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",children:"Your cart is currently empty."})})}),(null===(t=o.lineItems)||void 0===t?void 0:t.length)?Object(m.jsx)(w.e,{children:Object(m.jsx)(A.a,{w:"100%",backgroundColor:"#5cc8ff",children:Object(m.jsx)(y.g,{href:o.webUrl,w:"100%",children:"Checkout"})})}):null]})})})})},F=function(){return Object(m.jsxs)(y.b,{backgroundColor:"#7D70BA",children:[Object(m.jsxs)(y.e,{templateColumns:["repeat(1, 1fr)","repeat(3, 1fr)"],color:"black",fontWeight:"bold",children:[Object(m.jsx)(I.a,{src:"/aktivwer-demo/logo192.png"}),Object(m.jsxs)(y.j,{p:"2rem",children:[Object(m.jsx)(s.b,{to:"/",children:"The Green Blast"}),Object(m.jsx)(s.b,{to:"/",children:"The Blue Berry"}),Object(m.jsx)(s.b,{to:"/",children:"The Yellow Mellow"})]}),Object(m.jsxs)(y.j,{p:"2rem",children:[Object(m.jsx)(s.b,{to:"/",children:"About Us"}),Object(m.jsx)(s.b,{to:"/",children:"Learn More"}),Object(m.jsx)(s.b,{to:"/",children:"Sustainability"})]})]}),Object(m.jsx)(y.b,{children:Object(m.jsx)(y.i,{textAlign:"center",color:"black",w:"100%",borderTop:"1px solid black",p:"1rem",children:"\xa9 Copyright Aktivwer"})})]})},L=c(5),P=c(57),D=function(){var e,t=Object(n.useContext)(g),c=t.openCart,r=t.openMenu,i=t.checkout;return Object(m.jsxs)(y.b,{borderBottom:"0.25pt white solid",backgroundColor:"#7D70BA",display:"flex",flexDir:"row",justifyContent:"space-between",p:"2rem",alignItems:"center",children:[Object(m.jsx)(L.a,{fill:"white",cursor:"pointer",as:P.a,w:30,h:30,onClick:function(){return r()}}),Object(m.jsx)(s.b,{to:"/",children:Object(m.jsx)(I.a,{src:"/aktivwer-demo/logo512.png",w:100,h:100})}),Object(m.jsxs)(y.b,{children:[Object(m.jsx)(L.a,{fill:"white",cursor:"pointer",as:P.b,w:30,h:30,onClick:function(){return c()}}),Object(m.jsx)(y.a,{backgroundColor:"#FF38BD",borderRadius:"50%",children:null===(e=i.lineItems)||void 0===e?void 0:e.length})]})]})},T=function(){var e=Object(n.useContext)(g),t=e.isMenuOpen,c=e.closeMenu;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(w.a,{isOpen:t,onClose:c,placement:"left",size:"sm",children:Object(m.jsx)(w.g,{children:Object(m.jsxs)(w.d,{backgroundColor:"#343633",color:"white",children:[Object(m.jsx)(w.c,{}),Object(m.jsx)(w.f,{children:"Menu"}),Object(m.jsx)(w.b,{children:Object(m.jsxs)(y.j,{p:"2rem",children:[Object(m.jsx)(s.b,{to:"/",children:"About Us"}),Object(m.jsx)(s.b,{to:"/",children:"Learn More"}),Object(m.jsx)(s.b,{to:"/",children:"Sustainability"})]})}),Object(m.jsx)(w.e,{textAlign:"center",children:Object(m.jsx)(y.i,{w:"100%",children:"\xa9 Aktivwer"})})]})})})})};var B=Object(a.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}));return function(){e()}})),null})),W=function(){return Object(m.jsxs)(y.b,{w:"100%",position:"relative",h:"70vh",backgroundColor:"#343633",children:[Object(m.jsx)(I.a,{className:"fade-in",src:"/aktivwer-demo/logo512.png",h:"70%",m:"auto",objectFit:"contain",objectPosition:["top","center"]}),Object(m.jsx)(y.i,{className:"tracking-in-expand-fwd",position:"absolute",bottom:"20%",w:"100%",textAlign:"center",color:"white",fontWeight:"bold",fontSize:"4rem",children:"Introducing Aktivwer"}),Object(m.jsx)(y.c,{children:Object(m.jsx)(A.a,{w:"10rem",_hover:{opacity:"70%"},position:"absolute",bottom:"10%",backgroundColor:"#5cc8ff",children:"Shop Now"})})]})},_=function(e){var t=e.button,c=e.reverse,n=e.image,r=e.heading,i=e.text,o=c?"row-reverse":"row";return Object(m.jsx)(y.b,{backgroundColor:"#DEC1FF",h:"40vh",py:"2",children:Object(m.jsxs)(y.d,{flexDir:["column",o],w:"100%",h:"100%",children:[Object(m.jsx)(I.a,{src:n,objectFit:"contain",w:["100%","50%"]}),Object(m.jsx)(y.b,{display:"inline-block",w:"0.5",backgroundColor:"gray.400",my:"6",h:"80%"}),Object(m.jsxs)(y.b,{display:"flex",w:["100%","50%"],flexDir:"column",justifyContent:"center",alignItems:"center",p:"2rem",children:[Object(m.jsx)(y.f,{pb:"2rem",children:r&&r}),Object(m.jsx)(y.i,{pb:"2rem",children:i&&i}),t?Object(m.jsx)(A.a,{w:"10rem",backgroundColor:"#5CC8FF",_hover:{opacity:"70%"},children:"Buy Now"}):null]})]})})},z=function(e){var t=e.heading,c=e.text;return Object(m.jsx)(y.b,{p:4,children:Object(m.jsxs)(y.c,{display:"flex",flexDir:"column",textAlign:"center",children:[Object(m.jsx)(y.f,{py:10,children:t}),c?Object(m.jsx)(y.i,{pb:10,children:c}):null]})})},H=function(){var e=Object(n.useContext)(g),t=e.fetchAllProducts,c=e.products;return Object(n.useEffect)((function(){t()}),[t]),c?Object(m.jsxs)(y.b,{children:[Object(m.jsx)(W,{}),Object(m.jsx)(z,{heading:"Lorem ipsum dolor sit amet, consectetur.",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit."}),Object(m.jsx)(_,{button:!0,image:"/aktivwer-demo/logo512.png",heading:"Heading",text:"I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."}),Object(m.jsx)(z,{heading:"Lorem ipsum"}),Object(m.jsx)(_,{reverse:!0,button:!0,image:"/aktivwer-demo/logo512.png",heading:"Second Heading",text:"I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."}),Object(m.jsx)(y.e,{templateColumns:["repeat(1fr)","repeat(3, 1fr)"],backgroundColor:"#93867F",children:c.map((function(e){return Object(m.jsxs)(s.b,{to:"/products/".concat(e.handle),children:[Object(m.jsx)(y.b,{_hover:{opacity:"80%"},textAlign:"center",position:"relative",py:"2",children:Object(m.jsx)(y.c,{children:Object(m.jsx)(I.a,{h:500,w:500,src:e.images[0].src,fit:"cover"})})}),Object(m.jsxs)(y.b,{textAlign:"center",children:[Object(m.jsx)(y.i,{fontSize:"20",fontWeight:"bold",children:e.title}),Object(m.jsxs)(y.i,{children:["$",e.variants[0].price]})]})]},e.id)}))})]}):Object(m.jsx)("div",{children:"Loading..."})},E=function(){var e=Object(a.f)().handle,t=Object(n.useContext)(g),c=t.fetchProductWithHandle,r=t.fetchAllProducts,i=t.addItemToCheckout,o=t.product,l=t.products;return Object(n.useEffect)((function(){c(e)}),[c,e]),Object(n.useEffect)((function(){r()}),[r]),o.title?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(y.b,{p:"2rem",backgroundColor:"#343633",color:"white",children:Object(m.jsxs)(y.e,{templateColumns:["repeat(1, 1fr)","repeat(2, 1fr)"],m:"auto",children:[Object(m.jsx)(y.d,{justifyContent:"center",alignItems:"center",children:Object(m.jsx)(I.a,{src:o.images[0].src})}),Object(m.jsxs)(y.b,{display:"flex",flexDir:"column",alignItems:"center",justifyContent:"center",px:"2rem",children:[Object(m.jsx)(y.f,{pb:"2rem",children:o.title}),Object(m.jsx)(y.i,{fontWeight:"bold",pb:"2rem",children:o.variants[0].price}),Object(m.jsx)(y.i,{pb:"2rem",children:o.description}),Object(m.jsx)(A.a,{backgroundColor:"#5cc8ff",onClick:function(){return i(o.variants[0].id,1)},_hover:{opacity:"70%"},w:"10rem",children:"Add To Cart"})]})]})}),Object(m.jsx)(z,{heading:"Lorem ipsum dolor sit amet, consectetur adipiscing"}),Object(m.jsx)(y.c,{fontWeight:"bold",pb:"2rem",children:"You might also like"}),Object(m.jsx)(y.e,{templateColumns:["repeat(1fr)","repeat(3, 1fr)"],id:"products",backgroundColor:"#93867f",children:l.map((function(e){return Object(m.jsxs)(s.b,{to:"/products/".concat(e.handle),children:[Object(m.jsx)(y.b,{_hover:{opacity:"80%"},textAlign:"center",position:"relative",py:"2",children:Object(m.jsx)(y.c,{children:Object(m.jsx)(I.a,{src:e.images[0].src,h:500,w:500,fit:"cover"})})}),Object(m.jsxs)(y.b,{textAlign:"center",children:[Object(m.jsx)(y.i,{fontSize:"20",fontWeight:"bold",children:e.title}),Object(m.jsxs)(y.i,{children:["$",e.variants[0].price]})]})]},e.id)}))})]}):Object(m.jsx)("div",{children:"Loading..."})};var Y=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(s.a,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(D,{}),Object(m.jsx)(T,{}),Object(m.jsx)(M,{}),Object(m.jsxs)(a.c,{children:[Object(m.jsx)(a.a,{path:"/products/:handle",children:Object(m.jsx)(E,{})}),Object(m.jsx)(a.a,{path:"/",children:Object(m.jsx)(H,{})})]}),Object(m.jsx)(F,{})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,127)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))},U=c(40),J=c(16),$=Object(J.b)({config:{initialColorMode:"light",useSystemColorMode:!1}});o.a.render(Object(m.jsxs)(r.a.StrictMode,{children:[Object(m.jsx)(U.b,{initialColorMode:$.config.initialColorMode}),Object(m.jsx)(J.a,{theme:$,children:Object(m.jsx)(k,{children:Object(m.jsx)(Y,{})})})]}),document.getElementById("root")),N()}},[[123,1,2]]]);
//# sourceMappingURL=main.5d10b862.chunk.js.map