(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6c57"],{"99bc":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("表格宽度")]),t("Explain"),t("AutoWidth"),t("FixedWidth"),t("CalcWidth"),t("PercentWidth")],1)},r=[],d=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、表格宽度可以设置固定值。如："),t("code",[e._v('style="width:900px;"')]),t("br"),e._v(" 2、表格宽度可以设置动态值。如："),t("code",[e._v('style="width:calc(100vh - 210px)"')]),e._v(" 或者 "),t("code",[e._v('style="width:80%"')]),t("br")])])])}],i=t("2877"),c={},l=Object(i["a"])(c,d,o,!1,null,null,null),s=l.exports,b=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"表格自动宽度",fileName:"auto-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("如果不设置表格宽度，等同于"),t("code",[e._v('style="width:100%;"')])])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", width: 100 },\n                    { field: "date", key: "b", title: "Tel", width: 200 },\n                    { field: "hobby", key: "c", title: "Hobby", width: 300 },\n                    { field: "address", key: "d", title: "Address", width: 300 },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var y={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return m({render:e,staticRenderFns:n},t)}()}},g=y,f=Object(i["a"])(g,b,u,!1,null,null,null),v=f.exports,w=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"表格宽度固定",fileName:"fixed-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("表格的固定宽度，需要设置外层容器宽度。可以通过"),t("code",[e._v('style="width:900px"')]),e._v("方式设置。此处容器宽度为 900px")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table style="width:900px;" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", width: 100 },\n                    { field: "date", key: "b", title: "Tel", width: 200 },\n                    { field: "hobby", key: "c", title: "Hobby", width: 300 },\n                    { field: "address", key: "d", title: "Address", width: 300 },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},O=[];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){N(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"900px"},attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return C({render:e,staticRenderFns:n},t)}()}},A=k,_=Object(i["a"])(A,w,O,!1,null,null,null),D=_.exports,P=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"表格动态宽度（calc css 函数）",fileName:"calc-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、你可以使用 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"}},[e._v("calc css 函数")]),e._v(" 实现表格动态宽度"),t("br"),e._v("2、试试改变浏览器宽度查看效果")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table style="width:calc(55vw - 10px);" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", width: 100 },\n                    { field: "date", key: "b", title: "Tel", width: 200 },\n                    { field: "hobby", key: "c", title: "Hobby", width: 300 },\n                    { field: "address", key: "d", title: "Address", width: 300 },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},S=[];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){J(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function J(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"calc(55vw - 10px)"},attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return E({render:e,staticRenderFns:n},t)}()}},z=$,W=Object(i["a"])(z,P,S,!1,null,null,null),q=W.exports,B=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"表格动态宽度（百分比）",fileName:"percent-width.md"}}),t("demo-block",[t("div",[t("p",[e._v("1、你可以使用百分比实现表格动态宽度"),t("br"),e._v("2、试试改变浏览器宽度查看效果")])]),t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table style="width:80%" :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", width: 100 },\n                    { field: "date", key: "b", title: "Tel", width: 200 },\n                    { field: "hobby", key: "c", title: "Hobby", width: 300 },\n                    { field: "address", key: "d", title: "Address", width: 300 },\n                ],\n                tableData: [\n                    {\n                        name: "John",\n                        date: "1900-05-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shanghai",\n                    },\n                    {\n                        name: "Dickerson",\n                        date: "1910-06-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Beijing",\n                    },\n                    {\n                        name: "Larsen",\n                        date: "2000-07-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Chongqing",\n                    },\n                    {\n                        name: "Geneva",\n                        date: "2010-08-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Xiamen",\n                    },\n                    {\n                        name: "Jami",\n                        date: "2020-09-20",\n                        hobby: "coding and coding repeat",\n                        address: "No.1 Century Avenue, Shenzhen",\n                    },\n                ],\n            };\n        },\n    };\n<\/script>\n')])])])],2)],1)},G=[];function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function L(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("ve-table",{staticStyle:{width:"80%"},attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},n=[],t={data:function(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[{name:"John",date:"1900-05-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shanghai"},{name:"Dickerson",date:"1910-06-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Beijing"},{name:"Larsen",date:"2000-07-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Chongqing"},{name:"Geneva",date:"2010-08-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Xiamen"},{name:"Jami",date:"2020-09-20",hobby:"coding and coding repeat",address:"No.1 Century Avenue, Shenzhen"}]}}};return L({render:e,staticRenderFns:n},t)}()}},F=X,R=Object(i["a"])(F,B,G,!1,null,null,null),U=R.exports,I={name:"basic-main",components:{Explain:s,AutoWidth:v,FixedWidth:D,CalcWidth:q,PercentWidth:U}},K=I,M=Object(i["a"])(K,a,r,!1,null,null,null);n["default"]=M.exports}}]);
//# sourceMappingURL=chunk-2d0e6c57.3923205d.js.map