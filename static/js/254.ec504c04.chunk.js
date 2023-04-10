"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[254,794],{854:function(n,t,e){var r=e(2080),i=e(184);t.Z=function(){return(0,i.jsx)(r.g4,{wrapperStyle:{justifyContent:"center"},height:"150",width:"150",color:"#3879B3"})}},1794:function(n,t,e){e.r(t);var r=e(6871),i=e(9214),a=e(184);t.default=function(){var n,t=(null===(n=(0,r.TH)().state)||void 0===n?void 0:n.from)||"/";return(0,a.jsxs)(i.W2,{children:[(0,a.jsx)(i.H2,{children:"Page not found"}),(0,a.jsx)(i.wj,{state:{from:t},to:"/",children:"Back to home"})]})}},1254:function(n,t,e){e.r(t);var r=e(1413),i=e(5861),a=e(885),o=e(4687),c=e.n(o),s=e(2791),u=e(6871),d=e(854),p=e(1794),x=e(3550),f=e(9983),l=e(8820),m=e(3853),h=e(9214),g=e(184);t.default=function(){var n,t=(0,s.useState)({item:{},loading:!1,error:null}),e=(0,a.Z)(t,2),o=e[0],v=e[1],w=(0,u.UO)().id,b=(0,u.TH)(),Z=(null===(n=b.state)||void 0===n?void 0:n.from)||"/",j=(0,u.s0)();(0,s.useEffect)((function(){var n=function(){var n=(0,i.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v((function(n){return(0,r.Z)((0,r.Z)({},n),{},{loading:!0,error:null})})),n.prev=1,n.next=4,(0,x.YG)(w);case 4:t=n.sent,v((function(n){return(0,r.Z)((0,r.Z)({},n),{},{loading:!1,item:(0,r.Z)({},t)})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),v((function(t){return(0,r.Z)((0,r.Z)({},t),{},{loading:!1,error:n.t0})}));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[w]);var y=o.item,k=y.poster_path,_=y.title,z=y.genres,H=y.release_date,C=y.vote_average,L=y.overview,P="https://image.tmdb.org/t/p/w342/".concat(k),R=void 0!==H?H.slice(0,4):"",E=void 0!==z?z.map((function(n){return"".concat(n.name," ")})):null,S=[1,2,3,4,5,6,7,8,9,10],U=Math.floor(C||.1);return(0,g.jsxs)(h.W2,{children:[(0,g.jsxs)(h.zx,{onClick:function(){return j(Z)},children:[(0,g.jsx)(m.JHF,{size:20}),"Go back"]}),o.loading&&(0,g.jsx)(d.Z,{}),o.error&&(0,g.jsx)(p.default,{}),(0,g.jsxs)(h._L,{state:b,children:[z&&(0,g.jsx)(h.Ei,{src:P,alt:_}),(0,g.jsxs)(h.LZ,{children:[R&&(0,g.jsxs)(h.H2,{children:[_," (",R,")"]}),C&&(0,g.jsxs)("div",{children:[(0,g.jsx)(h.H3,{children:"User score:"}),(0,g.jsxs)(h.tS,{children:[S.map((function(n,t){return(0,g.jsx)(f.Pd.Provider,{value:{color:"".concat(t>=U?"#ccc":"orange")},children:(0,g.jsx)(l.pHD,{})},t)})),(0,g.jsxs)(h.jk,{children:[U," / ",S.length]})]})]}),L&&(0,g.jsx)(h.H3,{children:"Overview"}),L&&(0,g.jsx)(h.P,{children:L}),z&&(0,g.jsx)(h.H3,{children:"Genres"}),null!==E&&(0,g.jsx)(h.P,{children:E})]})]},w),(0,g.jsxs)(h.ZC,{children:[z&&(0,g.jsx)(h.P,{children:"Additional information:"}),(0,g.jsxs)(h.Ul,{children:[(0,g.jsx)(h.Li,{children:z&&(0,g.jsx)(h.wj,{onClick:function(){var n=document.getElementById("cast");n&&n.scrollIntoView({behavior:"smooth"})},id:"cast",state:{from:Z},to:"/movies/".concat(w,"/cast"),children:"Cast"})}),(0,g.jsx)(h.Li,{children:z&&(0,g.jsx)(h.wj,{onClick:function(){var n=document.getElementById("reviews");n&&n.scrollIntoView({behavior:"smooth"})},id:"reviews",state:{from:Z},to:"/movies/".concat(w,"/reviews"),children:"Reviews"})})]}),(0,g.jsx)(u.j3,{})]})]})}},9214:function(n,t,e){e.d(t,{Ei:function(){return y},H2:function(){return k},H3:function(){return _},LZ:function(){return j},Li:function(){return P},P:function(){return z},Ul:function(){return L},W2:function(){return b},ZC:function(){return C},_L:function(){return Z},jk:function(){return S},tS:function(){return E},wj:function(){return R},zx:function(){return H}});var r,i,a,o,c,s,u,d,p,x,f,l,m,h,g=e(168),v=e(501),w=e(9584),b=w.Z.div(r||(r=(0,g.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  /* @media screen and (max-width: 500px) {\n    margin: 30px auto;\n    width: 90%;\n    height: 90%;\n  }\n  @media screen and (max-width: 470px) {\n    padding: 30px 24px;\n  } */\n"]))),Z=w.Z.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n  }\n"]))),j=w.Z.div(a||(a=(0,g.Z)(["\n  padding: 20px;\n  @media screen and (min-width: 768px) {\n    padding: 0 20px;\n  }\n"]))),y=w.Z.img(o||(o=(0,g.Z)(["\n  /* height: 300px; */\n  width: 200px;\n  display: flex;\n  /* align-items: center; */\n  justify-content: center;\n  margin: 0 auto;\n  margin-bottom: 20px;\n  border-radius: 10px;\n  @media screen and (min-width: 375px) {\n    width: 300px;\n  }\n  @media screen and (min-width: 768px) {\n    height: 400px;\n  }\n"]))),k=w.Z.h2(c||(c=(0,g.Z)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  margin: 0;\n  margin-bottom: 10px;\n  @media screen and (min-width: 467px) {\n    font-size: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),_=w.Z.h3(s||(s=(0,g.Z)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  margin: 0;\n  margin-bottom: 10px;\n  @media screen and (min-width: 467px) {\n    font-size: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),z=w.Z.p(u||(u=(0,g.Z)(["\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  margin: 0;\n  margin-bottom: 10px;\n  @media screen and (min-width: 467px) {\n    font-size: 30px;\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),H=w.Z.button(d||(d=(0,g.Z)(["\n  margin-bottom: 20px;\n  background-image: linear-gradient(\n    to right,\n    #065faf,\n    #246bb0,\n    #3a76b0,\n    #4e81b0,\n    #628baf\n  );\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  width: 150px;\n  border: none;\n  font-family: 'Roboto', sans-serif;\n  font-size: 18px;\n  border-radius: 50px;\n  padding: 10px 20px;\n  margin-top: 20px;\n  margin-left: 20px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    2px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &: hover {\n    transform: scale(1.02);\n  }\n"]))),C=w.Z.div(p||(p=(0,g.Z)(["\n  padding: 20px;\n  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2),\n    2px 2px 2px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px 2px rgba(0, 0, 0, 0.12);\n"]))),L=w.Z.ul(x||(x=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  list-style: none;\n  margin-bottom: 0;\n  padding: 0;\n"]))),P=w.Z.li(f||(f=(0,g.Z)(["\n  margin: 0;\n  margin-right: 20px;\n  padding: 0;\n"]))),R=(0,w.Z)(v.OL)(l||(l=(0,g.Z)(["\n  text-decoration: none;\n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  &.active {\n    color: #065faf;\n  }\n"]))),E=w.Z.div(m||(m=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),S=w.Z.div(h||(h=(0,g.Z)(["\n  margin-left: 10px;\n  font-weight: 500;\n  margin-bottom: 2px;\n"])))},3550:function(n,t,e){e.d(t,{Hx:function(){return f},Kd:function(){return x},SU:function(){return d},YG:function(){return p},wR:function(){return l}});var r=e(5861),i=e(4687),a=e.n(i),o=e(4569),c=e.n(o),s="a8a59e66b66adbb574444d8f25b60183",u="https://api.themoviedb.org/3",d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/trending/movie/day?api_key=").concat(s,"&page=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("".concat(u,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,i=r.data,n.abrupt("return",i);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=254.ec504c04.chunk.js.map