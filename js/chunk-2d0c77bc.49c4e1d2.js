(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c77bc"],{"518b":function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Operation Column")]),n("Explain"),n("Base")],1)},o=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("div",{staticClass:"tip"},[n("p",[e._v("1、Set "),n("code",[e._v("operationColumn = true")]),e._v(" in columns as the operation column "),n("br"),e._v(" 2、操作列默认左固定 "),n("br"),e._v(" 3、The operation column supports row operations such as multiple row selection, whole row copying, whole row cutting, row position exchange (under development). This column function is similar to the operation column function of Excel"),n("br"),e._v(" 4、The cells in the operation column are not allowed to be selected, edited, or automatically filled")])])])}],r=n("2877"),a={},u=Object(r["a"])(a,i,c,!1,null,null,null),s=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content example-md-doc"},[n("anchor",{attrs:{"is-edit":"",label:"Basic usage",fileName:"base.md"}}),n("demo-block",[n("template",{slot:"source"},[n("element-demo0")],1),n("template",{slot:"highlight"},[n("pre",{pre:!0},[n("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :columns="columns"\n            :table-data="tableData"\n            borderY\n            :cell-autofill-option="cellAutofillOption"\n            :editOption="editOption"\n            rowKeyFieldName="rowKey"\n            :rowStyleOption="rowStyleOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                rowStyleOption: {\n                    clickHighlight: false,\n                    hoverHighlight: false,\n                },\n                cellAutofillOption: true,\n                editOption: {\n                    // cell value change\n                    cellValueChange: ({ row, column }) => {},\n                },\n                columns: [\n                    {\n                        field: "index",\n                        key: "index",\n                        operationColumn: true,\n                        title: "",\n                        width: 50,\n                        align: "center",\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return ++rowIndex;\n                        },\n                        edit: true,\n                    },\n                    { field: "col1", key: "col1", title: "Col1", edit: true },\n                    { field: "col2", key: "col2", title: "Col2" },\n                    { field: "col3", key: "col3", title: "Col3" },\n                    { field: "col4", key: "col4", title: "Col4" },\n                    { field: "col5", key: "col5", title: "Col5" },\n                    { field: "col6", key: "col6", title: "Col6" },\n                ],\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 8; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A${i + 1}`,\n                        col2: `B${i + 1}`,\n                        col3: `C${i + 1}`,\n                        col4: `D${i + 1}`,\n                        col5: `E${i + 1}`,\n                        col6: `F${i + 1}`,\n                        col7: `G${i + 1}`,\n                        col8: `H${i + 1}`,\n                    });\n                }\n                this.tableData = data;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},p=[];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("div",[n("ve-table",{attrs:{columns:e.columns,"table-data":e.tableData,borderY:"","cell-autofill-option":e.cellAutofillOption,editOption:e.editOption,rowKeyFieldName:"rowKey",rowStyleOption:e.rowStyleOption}})],1)]],2)},t=[],n={data:function(){return{rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},cellAutofillOption:!0,editOption:{cellValueChange:function(e){e.row,e.column}},columns:[{field:"index",key:"index",operationColumn:!0,title:"",width:50,align:"center",renderBodyCell:function(e,t){e.row,e.column;var n=e.rowIndex;return++n},edit:!0},{field:"col1",key:"col1",title:"Col1",edit:!0},{field:"col2",key:"col2",title:"Col2"},{field:"col3",key:"col3",title:"Col3"},{field:"col4",key:"col4",title:"Col4"},{field:"col5",key:"col5",title:"Col5"},{field:"col6",key:"col6",title:"Col6"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],t=0;t<8;t++)e.push({rowKey:t,col1:"A".concat(t+1),col2:"B".concat(t+1),col3:"C".concat(t+1),col4:"D".concat(t+1),col5:"E".concat(t+1),col6:"F".concat(t+1),col7:"G".concat(t+1),col8:"H".concat(t+1)});this.tableData=e}},created:function(){this.initTableData()}};return m({render:e,staticRenderFns:t},n)}()}},w=b,y=Object(r["a"])(w,d,p,!1,null,null,null),O=y.exports,v={name:"basic-main",components:{Explain:s,Base:O}},g=v,C=Object(r["a"])(g,l,o,!1,null,null,null);t["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d0c77bc.49c4e1d2.js.map