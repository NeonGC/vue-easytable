(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0901"],{6908:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Table Height")]),n("Explain"),n("AutoHeight"),n("FixedHeight"),n("CalcHeight")],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、The table height is determined by row data by default. You can also set the max height through the "),n("code",[e._v("max-height")]),e._v(" attribute"),n("br"),e._v(" 2、Table height can be set to a fixed value. like:"),n("code",[e._v(':max-height="500"')]),n("br"),e._v(" 3、Table height can be set to a dynamic value. like:"),n("code",[e._v('max-height="calc(100vh - 210px)"')]),e._v(" or "),n("code",[e._v('max-height="80%"')]),n("br")])])])}],c=n("2877"),o={},s=Object(c["a"])(o,i,l,!1,null,null,null),d=s.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Auto Table Height",fileName:"auto-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("When the table height is not set, the table height is auto height")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table :columns="columns" :table-data="tableData" />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    { field: "hobby", key: "c", title: "Hobby", align: "center" },\n                    { field: "address", key: "d", title: "Address", align: "left" },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 2; i++) {\n                    data.push({\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},u=[];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<2;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return m({render:e,staticRenderFns:t},n)}()}},y=p,g=Object(c["a"])(y,b,u,!1,null,null,null),v=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Fixed Table Height",fileName:"fixed-height.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        :max-height="300"\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", width: 100 },\n                    { field: "date", key: "b", title: "Tel", width: 200 },\n                    { field: "hobby", key: "c", title: "Hobby", width: 300 },\n                    { field: "address", key: "d", title: "Address", width: 300 },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 20; i++) {\n                    data.push({\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},D=[];function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":300,columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",width:100},{field:"date",key:"b",title:"Tel",width:200},{field:"hobby",key:"c",title:"Hobby",width:300},{field:"address",key:"d",title:"Address",width:300}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<20;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return w({render:e,staticRenderFns:t},n)}()}},x=k,P=Object(c["a"])(x,O,D,!1,null,null,null),T=P.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Dynamic Table Height(calc css function)",fileName:"calc-height.md"}}),n("demo-block",[n("div",[n("p",[e._v("1、You can use "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/calc()"}},[e._v("calc css function")]),e._v(" to achieve table dynamic height"),n("br"),e._v("2、Try changing the browser height to see the effect")])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        max-height="calc(100vh - 350px)"\n        fixed-header\n        :columns="columns"\n        :table-data="tableData"\n    />\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                columns: [\n                    { field: "name", key: "a", title: "Name", align: "center" },\n                    { field: "date", key: "b", title: "Date", align: "left" },\n                    {\n                        field: "hobby",\n                        key: "c",\n                        title: "Hobby",\n                        align: "center",\n                    },\n                    {\n                        field: "address",\n                        key: "d",\n                        title: "Address",\n                        align: "left",\n                    },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 20; i++) {\n                    data.push({\n                        name: i,\n                        date: i,\n                        hobby: i,\n                        address: i,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},H=[];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{attrs:{"max-height":"calc(100vh - 350px)","fixed-header":"",columns:e.columns,"table-data":e.tableData}})]],2)},t=[],n={data:function(){return{columns:[{field:"name",key:"a",title:"Name",align:"center"},{field:"date",key:"b",title:"Date",align:"left"},{field:"hobby",key:"c",title:"Hobby",align:"center"},{field:"address",key:"d",title:"Address",align:"left"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<20;t++)e.push({name:t,date:t,hobby:t,address:t});this.tableData=e}},created:function(){this.initTableData()}};return N({render:e,staticRenderFns:t},n)}()}},C=$,F=Object(c["a"])(C,E,H,!1,null,null,null),R=F.exports,J={name:"basic-main",components:{Explain:d,AutoHeight:v,FixedHeight:T,CalcHeight:R}},W=J,Y=Object(c["a"])(W,a,r,!1,null,null,null);t["default"]=Y.exports}}]);
//# sourceMappingURL=chunk-2d0d0901.fb286062.js.map