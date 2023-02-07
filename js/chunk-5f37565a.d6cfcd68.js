(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f37565a"],{"52e0":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.columnWidthResizeOption.data,columns:e.db.columnWidthResizeOption.columns}})],1)},i=[],l=n("3ef3"),c=n("7eb4"),r={components:{tpl:l["a"]},props:{anchor:{type:String,default:"Column Resize Option"},desc:{type:String,default:"columnWidthResizeOption"}},data:function(){return{db:c["a"]}}},a=r,d=n("2877"),u=Object(d["a"])(a,o,i,!1,null,null,null);t["a"]=u.exports},b433:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Column Resize")]),n("Explain"),n("Basic"),n("DisableResizing"),n("API",{attrs:{title:"API",anchor:"API"}})],1)},i=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、Column width resize is useful when large text exists"),n("br"),e._v(" 2、Configure the column width resize through "),n("code",[e._v("columnWidthResizeOption")]),n("br"),e._v(" 3、It is recommended to set "),n("code",[e._v("scroll-width=0")]),e._v(". When the total column width is greater than the container width, a horizontal scroll bar will appear"),n("br"),e._v(" 4、Set the default width of the column through "),n("code",[e._v("column.width")]),e._v(". If the total width of all columns is less than the container width, the column width will be adaptive")])])])}],r=n("2877"),a={},d=Object(r["a"])(a,l,c,!1,null,null,null),u=d.exports,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Column Resizing",fileName:"basic.md"}}),n("p",[e._v("You can hover the mouse between two columns and Resizing.If the column width is not set, the default is 50px")]),n("demo-block",[n("div",[n("p",[e._v("1、Set the min width of resize column through "),n("code",[e._v("columnMinWidth")]),n("br"),e._v("2、Get the callback method of resize column changes through "),n("code",[e._v("sizeChange({ column, differWidth, columnWidth })")])])]),n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <div v-show="columnResizeInfo.column" style="margin:10px 0;line-height:2">\n            <div>column:{{columnResizeInfo.column}}</div>\n            <div>differWidth:{{columnResizeInfo.differWidth}}</div>\n            <div>columnWidth:{{columnResizeInfo.columnWidth}}</div>\n        </div>\n        <ve-table\n            style="width:100%"\n            :scroll-width="0"\n            :columns="columns"\n            :table-data="tableData"\n            :border-around="true"\n            :border-x="true"\n            :border-y="true"\n            :column-width-resize-option="columnWidthResizeOption"\n        />\n    </div>\n</template>\n\n<script>\n    import Mock from "mockjs";\n    export default {\n        data() {\n            return {\n                columnWidthResizeOption: {\n                    // default false\n                    enable: true,\n                    // column resize min width\n                    minWidth: 30,\n                    // column size change\n                    sizeChange: ({ column, differWidth, columnWidth }) => {\n                        this.columnResizeInfo.column = column;\n                        this.columnResizeInfo.differWidth = differWidth;\n                        this.columnResizeInfo.columnWidth = columnWidth;\n                    },\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "index",\n                        title: "#",\n                        width: 50,\n                        align: "center",\n                        fixed: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                    },\n                    { field: "col1", key: "col1", title: "Col1", width: 220 },\n                    { field: "col2", key: "col2", title: "Col2", width: 220 },\n                    { field: "col3", key: "col3", title: "Col3", width: 220 },\n                    { field: "col4", key: "col4", title: "Col4", width: 220 },\n                    { field: "col5", key: "col5", title: "Col5", width: 220 },\n                    {\n                        field: "col6",\n                        key: "col6",\n                        title: "Col6",\n                        width: 220,\n                    },\n                    { field: "col7", key: "col7", title: "Col7" },\n                    { field: "col8", key: "col8", title: "Col8" },\n                ],\n                columnResizeInfo: {\n                    column: "",\n                    differWidth: "",\n                    columnWidth: "",\n                    tableWidth: "",\n                },\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 5; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A${i + 1}`,\n                        col2: Mock.Random.sentence(3, 12),\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},m=[],f=n("96eb"),h=n.n(f);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t=w(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=g(e,"string");return"symbol"===b(t)?t:String(t)}function g(e,t){if("object"!==b(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var z={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.columnResizeInfo.column,expression:"columnResizeInfo.column"}],staticStyle:{margin:"10px 0","line-height":"2"}},[n("div",[e._v("column:"+e._s(e.columnResizeInfo.column))]),e._v(" "),n("div",[e._v("differWidth:"+e._s(e.columnResizeInfo.differWidth))]),e._v(" "),n("div",[e._v("columnWidth:"+e._s(e.columnResizeInfo.columnWidth))])]),e._v(" "),n("ve-table",{staticStyle:{width:"100%"},attrs:{"scroll-width":0,columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":e.columnWidthResizeOption}})],1)]],2)},t=[],n={data:function(){var e=this;return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:function(t){var n=t.column,o=t.differWidth,i=t.columnWidth;e.columnResizeInfo.column=n,e.columnResizeInfo.differWidth=o,e.columnResizeInfo.columnWidth=i}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n}},{field:"col1",key:"col1",title:"Col1",width:220},{field:"col2",key:"col2",title:"Col2",width:220},{field:"col3",key:"col3",title:"Col3",width:220},{field:"col4",key:"col4",title:"Col4",width:220},{field:"col5",key:"col5",title:"Col5",width:220},{field:"col6",key:"col6",title:"Col6",width:220},{field:"col7",key:"col7",title:"Col7"},{field:"col8",key:"col8",title:"Col8"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<5;t++)e.push({rowKey:t,col1:"A".concat(t+1),col2:h.a.Random.sentence(3,12),col3:"C".concat(t+1),col4:"D".concat(t+1),col5:"E".concat(t+1),col6:"F".concat(t+1),col7:"G".concat(t+1),col8:"H".concat(t+1)});this.tableData=e}},created:function(){this.initTableData()}};return y({render:e,staticRenderFns:t},n)}()}},C=z,O=Object(r["a"])(C,s,m,!1,null,null,null),W=O.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Disable Column Resizing",fileName:"disable-resizing.md"}}),e._m(0),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <ve-table\n        style="width:100%"\n        :scroll-width="0"\n        :columns="columns"\n        :table-data="tableData"\n        :border-around="true"\n        :border-x="true"\n        :border-y="true"\n        :column-width-resize-option="columnWidthResizeOption"\n    />\n</template>\n\n<script>\n    import Mock from "mockjs";\n    export default {\n        data() {\n            return {\n                columnWidthResizeOption: {\n                    // default false\n                    enable: true,\n                    // column resize min width\n                    minWidth: 30,\n                    // column size change\n                    sizeChange: ({ column, differWidth, columnWidth }) => {\n                        //\n                    },\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "index",\n                        title: "#",\n                        width: 50,\n                        align: "center",\n                        fixed: "left",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                        disableResizing: true,\n                    },\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "Col1",\n                        width: 220,\n                        disableResizing: true,\n                    },\n                    {\n                        field: "col2",\n                        key: "col2",\n                        title: "Col2",\n                        width: 220,\n                        disableResizing: true,\n                    },\n                    { field: "col3", key: "col3", title: "Col3", width: 220 },\n                    { field: "col4", key: "col4", title: "Col4", width: 220 },\n                    { field: "col5", key: "col5", title: "Col5", width: 220 },\n                    {\n                        field: "col6",\n                        key: "col6",\n                        title: "Col6",\n                        width: 220,\n                    },\n                    { field: "col7", key: "col7", title: "Col7" },\n                    { field: "col8", key: "col8", title: "Col8" },\n                ],\n                columnResizeInfo: {\n                    column: "",\n                    differWidth: "",\n                    columnWidth: "",\n                    tableWidth: "",\n                },\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 5; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A${i + 1}`,\n                        col2: Mock.Random.sentence(3, 12),\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Col1, Col2, and Col3 resizing is disabled through "),n("code",[e._v("disableResizing")])])}];function _(e){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t=I(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){var t=S(e,"string");return"symbol"===_(t)?t:String(t)}function S(e,t){if("object"!==_(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==_(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var P={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("ve-table",{staticStyle:{width:"100%"},attrs:{"scroll-width":0,columns:e.columns,"table-data":e.tableData,"border-around":!0,"border-x":!0,"border-y":!0,"column-width-resize-option":e.columnWidthResizeOption}})]],2)},t=[],n={data:function(){return{columnWidthResizeOption:{enable:!0,minWidth:30,sizeChange:function(e){e.column,e.differWidth,e.columnWidth}},columns:[{field:"index",key:"index",title:"#",width:50,align:"center",fixed:"left",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n},disableResizing:!0},{field:"col1",key:"col1",title:"Col1",width:220,disableResizing:!0},{field:"col2",key:"col2",title:"Col2",width:220,disableResizing:!0},{field:"col3",key:"col3",title:"Col3",width:220},{field:"col4",key:"col4",title:"Col4",width:220},{field:"col5",key:"col5",title:"Col5",width:220},{field:"col6",key:"col6",title:"Col6",width:220},{field:"col7",key:"col7",title:"Col7"},{field:"col8",key:"col8",title:"Col8"}],columnResizeInfo:{column:"",differWidth:"",columnWidth:"",tableWidth:""},tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<5;t++)e.push({rowKey:t,col1:"A".concat(t+1),col2:h.a.Random.sentence(3,12),col3:"C".concat(t+1),col4:"D".concat(t+1),col5:"E".concat(t+1),col6:"F".concat(t+1),col7:"G".concat(t+1),col8:"H".concat(t+1)});this.tableData=e}},created:function(){this.initTableData()}};return j({render:e,staticRenderFns:t},n)}()}},$=P,E=Object(r["a"])($,R,k,!1,null,null,null),T=E.exports,A=n("52e0"),B={name:"basic-main",components:{Explain:u,Basic:W,DisableResizing:T,API:A["a"]}},F=B,G=Object(r["a"])(F,o,i,!1,null,null,null);t["default"]=G.exports}}]);
//# sourceMappingURL=chunk-5f37565a.d6cfcd68.js.map