(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-558f2502"],{1930:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.contextmenuBodyOption.data,columns:e.db.contextmenuBodyOption.columns}})],1)},l=[],c=t("3ef3"),i=t("7eb4"),a={components:{tpl:c["a"]},props:{anchor:{type:String,default:"Body contextmenu option"},desc:{type:String,default:"contextmenuBodyOption"}},data:function(){return{db:i["a"]}}},s=a,r=t("2877"),d=Object(r["a"])(s,o,l,!1,null,null,null);n["a"]=d.exports},9724:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("tpl",{attrs:{desc:e.desc,anchor:e.anchor,"table-data":e.db.contextmenuHeaderOption.data,columns:e.db.contextmenuHeaderOption.columns}})],1)},l=[],c=t("3ef3"),i=t("7eb4"),a={components:{tpl:c["a"]},props:{anchor:{type:String,default:"Header contextmenu option"},desc:{type:String,default:"contextmenuHeaderOption"}},data:function(){return{db:i["a"]}}},s=a,r=t("2877"),d=Object(r["a"])(s,o,l,!1,null,null,null);n["a"]=d.exports},af79:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v("Contextmenu")]),t("Explain"),t("ContextmenuTypes"),t("Base"),t("Custom"),t("API1",{attrs:{anchor:"API contextmenuHeaderOption",desc:"contextmenuHeaderOption"}}),t("API2",{attrs:{anchor:"API contextmenuBodyOption",desc:"contextmenuBodyOption"}})],1)},l=[],c=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("div",{staticClass:"tip"},[t("p",[e._v("1、Some operations can be completed more conveniently through the right-click menu. For example, the cell editing function can easily insert or remove rows by right clicking"),t("br"),e._v(" 2、Of course, you can also customize the right-click menu")])])])}],a=t("2877"),s={},r=Object(a["a"])(s,c,i,!1,null,null,null),d=r.exports,u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"contextmenu classification",fileName:"contextmenu-types.md"}}),t("p",[e._v("You can choose and combine these contextmenu")]),t("p",[e._v("header contextmenus")]),e._m(0),t("p",[e._v("body contextmenus")]),e._m(1)],1)},y=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"example-table"},[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Feature")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("type")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Split line")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("SEPARATOR")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Cut")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("CUT")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Copy")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("COPY")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Empty column")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("EMPTY_COLUMN")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("left fixed column to")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("leftFixedColumnTo")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("right fixed column to")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("rightFixedColumnTo")])])])])])},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("table",{staticClass:"example-table"},[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Feature")]),t("th",{staticStyle:{"text-align":"left"}},[e._v("type")])])]),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Split line")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("SEPARATOR")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Cut")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("CUT")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Copy")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("COPY")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Insert row above")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("INSERT_ROW_ABOVE")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Insert row below")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("INSERT_ROW_BELOW")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Remove row")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("REMOVE_ROW")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Empty row")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("EMPTY_ROW")])])]),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("Empty cell")]),t("td",{staticStyle:{"text-align":"left"}},[t("code",[e._v("EMPTY_CELL")])])])])])}],p={},g=Object(a["a"])(p,u,y,!1,null,null,null),f=g.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Basic usage",fileName:"base.md"}}),t("p",[e._v("Right click the table area to view the effect")]),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :max-height="350"\n            :scroll-width="1600"\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            border-y\n            :virtual-scroll-option="virtualScrollOption"\n            :contextmenu-body-option="contextmenuBodyOption"\n            :contextmenu-header-option="contextmenuHeaderOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                // start row index\n                startRowIndex: 0,\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                    scrolling: this.scrolling,\n                },\n                // contextmenu header option\n                contextmenuHeaderOption: {\n                    /*\n                    before contextmenu show.\n                    In this function,You can change the `contextmenu` options\n                    */\n                    beforeShow: ({\n                        isWholeColSelection,\n                        selectionRangeKeys,\n                        selectionRangeIndexes,\n                    }) => {\n                        console.log("---contextmenu header beforeShow--");\n                        console.log("isWholeColSelection::", isWholeColSelection);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n                    // after menu click\n                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {\n                        console.log("---contextmenu header afterMenuClick--");\n                        console.log("type::", type);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "CUT",\n                        },\n                        {\n                            type: "COPY",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "EMPTY_COLUMN",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "LEFT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "CANCLE_LEFT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "RIGHT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "CANCEL_RIGHT_FIXED_COLUMN_TO",\n                        },\n                    ],\n                },\n\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    /*\n                    before contextmenu show.\n                    In this function,You can change the `contextmenu` options\n                    */\n                    beforeShow: ({\n                        isWholeRowSelection,\n                        selectionRangeKeys,\n                        selectionRangeIndexes,\n                    }) => {\n                        console.log("---contextmenu body beforeShow--");\n                        console.log("isWholeRowSelection::", isWholeRowSelection);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n                    // after menu click\n                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {\n                        console.log("---contextmenu body afterMenuClick--");\n                        console.log("type::", type);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "CUT",\n                        },\n                        {\n                            type: "COPY",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "INSERT_ROW_ABOVE",\n                        },\n                        {\n                            type: "INSERT_ROW_BELOW",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "REMOVE_ROW",\n                        },\n                        {\n                            type: "EMPTY_ROW",\n                        },\n                        {\n                            type: "EMPTY_CELL",\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                    hoverHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 15,\n                        align: "center",\n                        operationColumn: true,\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return rowIndex + this.startRowIndex + 1;\n                        },\n                    },\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "col1",\n                        fixed: "left",\n                        width: 50,\n                    },\n                    {\n                        field: "col2",\n                        key: "col2",\n                        title: "col2",\n                        width: 50,\n                    },\n                    {\n                        field: "col3",\n                        key: "col3",\n                        title: "col3",\n                        width: 50,\n                    },\n                    {\n                        field: "col4",\n                        key: "col4",\n                        title: "col4",\n                        width: 50,\n                    },\n                    {\n                        field: "col5",\n                        key: "col5",\n                        title: "col5",\n                        width: 50,\n                    },\n                    {\n                        title: "col6",\n                        field: "col6",\n                        key: "col6",\n                        width: 50,\n                    },\n                    {\n                        title: "col7",\n                        field: "col7",\n                        key: "col7",\n                        width: 50,\n                    },\n                    {\n                        field: "col8",\n                        key: "col8",\n                        title: "col8",\n                        width: 50,\n                    },\n                ],\n                // table data\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A` + i,\n                        col2: `B` + i,\n                        col3: `C` + i,\n                        col4: `D` + i,\n                        col5: `E` + i,\n                        col6: `F` + i,\n                        col7: `G` + i,\n                        col8: `H` + i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // virtual scrolling\n            scrolling({ startRowIndex }) {\n                this.startRowIndex = startRowIndex;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},h=[];function x(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?x(Object(t),!0).forEach((function(n){O(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"max-height":350,"scroll-width":1600,"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"border-y":"","virtual-scroll-option":e.virtualScrollOption,"contextmenu-body-option":e.contextmenuBodyOption,"contextmenu-header-option":e.contextmenuHeaderOption}})],1)]],2)},n=[],t={data:function(){var e=this;return{startRowIndex:0,virtualScrollOption:{enable:!0,scrolling:this.scrolling},contextmenuHeaderOption:{beforeShow:function(e){var n=e.isWholeColSelection,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu header beforeShow--"),console.log("isWholeColSelection::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:function(e){var n=e.type,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu header afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCLE_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:function(e){var n=e.isWholeRowSelection,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:function(e){var n=e.type,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"INSERT_ROW_ABOVE"},{type:"INSERT_ROW_BELOW"},{type:"SEPARATOR"},{type:"REMOVE_ROW"},{type:"EMPTY_ROW"},{type:"EMPTY_CELL"}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:15,align:"center",operationColumn:!0,renderBodyCell:function(n,t){n.row,n.column;var o=n.rowIndex;return o+e.startRowIndex+1}},{field:"col1",key:"col1",title:"col1",fixed:"left",width:50},{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50},{field:"col4",key:"col4",title:"col4",width:50},{field:"col5",key:"col5",title:"col5",width:50},{title:"col6",field:"col6",key:"col6",width:50},{title:"col7",field:"col7",key:"col7",width:50},{field:"col8",key:"col8",title:"col8",width:50}],tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<100;n++)e.push({rowKey:n,col1:"A"+n,col2:"B"+n,col3:"C"+n,col4:"D"+n,col5:"E"+n,col6:"F"+n,col7:"G"+n,col8:"H"+n});this.tableData=e},scrolling:function(e){var n=e.startRowIndex;this.startRowIndex=n}},created:function(){this.initTableData()}};return R({render:e,staticRenderFns:n},t)}()}},w=b,_=Object(a["a"])(w,m,h,!1,null,null,null),v=_.exports,S=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("section",{staticClass:"content example-md-doc"},[t("anchor",{attrs:{"is-edit":"",label:"Customize contextmenu",fileName:"custom.md"}}),t("demo-block",[t("template",{slot:"source"},[t("element-demo0")],1),t("template",{slot:"highlight"},[t("pre",{pre:!0},[t("code",{pre:!0,attrs:{class:"html"}},[e._v('<template>\n    <div>\n        <ve-table\n            :scroll-width="1600"\n            :max-height="350"\n            row-key-field-name="rowKey"\n            :fixed-header="true"\n            :columns="columns"\n            :table-data="tableData"\n            :row-style-option="rowStyleOption"\n            :virtual-scroll-option="virtualScrollOption"\n            border-y\n            :contextmenu-body-option="contextmenuBodyOption"\n            :contextmenu-header-option="contextmenuHeaderOption"\n        />\n    </div>\n</template>\n\n<script>\n    export default {\n        data() {\n            return {\n                virtualScrollOption: {\n                    // 是否开启\n                    enable: true,\n                    scrolling: this.scrolling,\n                },\n                // contextmenu header option\n                contextmenuHeaderOption: {\n                    /*\n                    before contextmenu show.\n                    In this function,You can change the `contextmenu` options\n                    */\n                    beforeShow: ({\n                        isWholeColSelection,\n                        selectionRangeKeys,\n                        selectionRangeIndexes,\n                    }) => {\n                        console.log("---contextmenu header beforeShow--");\n                        console.log("isWholeColSelection::", isWholeColSelection);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n                    // after menu click\n                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {\n                        console.log("---contextmenu header afterMenuClick--");\n                        console.log("type::", type);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "CUT",\n                        },\n                        {\n                            type: "COPY",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "EMPTY_COLUMN",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "LEFT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "CANCLE_LEFT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "RIGHT_FIXED_COLUMN_TO",\n                        },\n                        {\n                            type: "CANCEL_RIGHT_FIXED_COLUMN_TO",\n                        },\n                    ],\n                },\n                // contextmenu body option\n                contextmenuBodyOption: {\n                    /*\n                    before contextmenu show.\n                    In this function,You can change the `contextmenu` options\n                    */\n                    beforeShow: ({\n                        isWholeRowSelection,\n                        selectionRangeKeys,\n                        selectionRangeIndexes,\n                    }) => {\n                        console.log("---contextmenu body beforeShow--");\n                        console.log("isWholeRowSelection::", isWholeRowSelection);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n                    // after menu click\n                    afterMenuClick: ({ type, selectionRangeKeys, selectionRangeIndexes }) => {\n                        console.log("---contextmenu body afterMenuClick--");\n                        console.log("type::", type);\n                        console.log("selectionRangeKeys::", selectionRangeKeys);\n                        console.log("selectionRangeIndexes::", selectionRangeIndexes);\n                    },\n\n                    // contextmenus\n                    contextmenus: [\n                        {\n                            type: "CUT",\n                        },\n                        {\n                            type: "COPY",\n                        },\n                        {\n                            type: "SEPARATOR",\n                        },\n                        {\n                            type: "custom-empty-row",\n                            label: "empty row(custom)",\n                        },\n                        {\n                            type: "customType1",\n                            label: "custom menu",\n                            children: [\n                                {\n                                    label: "menu5-1",\n                                    type: "menu5-1-type",\n                                    children: [\n                                        {\n                                            label: "menu5-1-1",\n                                            type: "menu5-1-1-type",\n                                        },\n                                        {\n                                            label: "menu5-2-2",\n                                            type: "menu5-2-2-type",\n                                        },\n                                    ],\n                                },\n                                {\n                                    label: "menu5-2",\n                                    disabled: true,\n                                },\n                                {\n                                    type: "SEPARATOR",\n                                },\n                                {\n                                    label: "menu5-3",\n                                    type: "menu5-3-type",\n                                },\n                            ],\n                        },\n                    ],\n                },\n\n                rowStyleOption: {\n                    clickHighlight: false,\n                    hoverHighlight: false,\n                },\n                columns: [\n                    {\n                        field: "",\n                        key: "a",\n                        title: "",\n                        width: 20,\n                        align: "center",\n                        fixed: "left",\n                        operationColumn: true,\n                        renderBodyCell: ({ row, column, rowIndex }, h) => {\n                            return rowIndex + this.startRowIndex + 1;\n                        },\n                    },\n                    {\n                        field: "col1",\n                        key: "col1",\n                        title: "col1",\n                        width: 50,\n                        fixed: "left",\n                    },\n                    {\n                        title: "col2-col3",\n                        fixed: "left",\n                        children: [\n                            {\n                                field: "col2",\n                                key: "col2",\n                                title: "col2",\n                                width: 50,\n                            },\n                            {\n                                field: "col3",\n                                key: "col3",\n                                title: "col3",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col4",\n                        key: "col4",\n                        title: "col4",\n                        width: 130,\n                    },\n                    {\n                        field: "col5",\n                        key: "col5",\n                        title: "col5",\n                        width: 140,\n                    },\n                    {\n                        title: "col6",\n                        field: "col6",\n                        key: "col6",\n                        width: 140,\n                    },\n                    {\n                        title: "col7",\n                        fixed: "right",\n                        children: [\n                            {\n                                title: "col7-1",\n                                field: "col7",\n                                key: "col7",\n                                width: 50,\n                            },\n                        ],\n                    },\n                    {\n                        field: "col8",\n                        key: "col8",\n                        title: "col8",\n                        width: 50,\n                        fixed: "right",\n                    },\n                ],\n                // table data\n                tableData: [],\n            };\n        },\n        methods: {\n            initTableData() {\n                let data = [];\n                for (let i = 0; i < 100; i++) {\n                    data.push({\n                        rowKey: i,\n                        col1: `A` + i,\n                        col2: `B` + i,\n                        col3: `C` + i,\n                        col4: `D` + i,\n                        col5: `E` + i,\n                        col6: `F` + i,\n                        col7: `G` + i,\n                        col8: `H` + i,\n                    });\n                }\n                this.tableData = data;\n            },\n            // virtual scrolling\n            scrolling({ startRowIndex }) {\n                this.startRowIndex = startRowIndex;\n            },\n        },\n        created() {\n            this.initTableData();\n        },\n    };\n<\/script>\n')])])])],2)],1)},C=[];function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function I(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){T(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function T(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={name:"component-doc",components:{"element-demo0":function(){var e=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[[t("div",[t("ve-table",{attrs:{"scroll-width":1600,"max-height":350,"row-key-field-name":"rowKey","fixed-header":!0,columns:e.columns,"table-data":e.tableData,"row-style-option":e.rowStyleOption,"virtual-scroll-option":e.virtualScrollOption,"border-y":"","contextmenu-body-option":e.contextmenuBodyOption,"contextmenu-header-option":e.contextmenuHeaderOption}})],1)]],2)},n=[],t={data:function(){var e=this;return{virtualScrollOption:{enable:!0,scrolling:this.scrolling},contextmenuHeaderOption:{beforeShow:function(e){var n=e.isWholeColSelection,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu header beforeShow--"),console.log("isWholeColSelection::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:function(e){var n=e.type,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu header afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"EMPTY_COLUMN"},{type:"SEPARATOR"},{type:"LEFT_FIXED_COLUMN_TO"},{type:"CANCLE_LEFT_FIXED_COLUMN_TO"},{type:"RIGHT_FIXED_COLUMN_TO"},{type:"CANCEL_RIGHT_FIXED_COLUMN_TO"}]},contextmenuBodyOption:{beforeShow:function(e){var n=e.isWholeRowSelection,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body beforeShow--"),console.log("isWholeRowSelection::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},afterMenuClick:function(e){var n=e.type,t=e.selectionRangeKeys,o=e.selectionRangeIndexes;console.log("---contextmenu body afterMenuClick--"),console.log("type::",n),console.log("selectionRangeKeys::",t),console.log("selectionRangeIndexes::",o)},contextmenus:[{type:"CUT"},{type:"COPY"},{type:"SEPARATOR"},{type:"custom-empty-row",label:"empty row(custom)"},{type:"customType1",label:"custom menu",children:[{label:"menu5-1",type:"menu5-1-type",children:[{label:"menu5-1-1",type:"menu5-1-1-type"},{label:"menu5-2-2",type:"menu5-2-2-type"}]},{label:"menu5-2",disabled:!0},{type:"SEPARATOR"},{label:"menu5-3",type:"menu5-3-type"}]}]},rowStyleOption:{clickHighlight:!1,hoverHighlight:!1},columns:[{field:"",key:"a",title:"",width:20,align:"center",fixed:"left",operationColumn:!0,renderBodyCell:function(n,t){n.row,n.column;var o=n.rowIndex;return o+e.startRowIndex+1}},{field:"col1",key:"col1",title:"col1",width:50,fixed:"left"},{title:"col2-col3",fixed:"left",children:[{field:"col2",key:"col2",title:"col2",width:50},{field:"col3",key:"col3",title:"col3",width:50}]},{field:"col4",key:"col4",title:"col4",width:130},{field:"col5",key:"col5",title:"col5",width:140},{title:"col6",field:"col6",key:"col6",width:140},{title:"col7",fixed:"right",children:[{title:"col7-1",field:"col7",key:"col7",width:50}]},{field:"col8",key:"col8",title:"col8",width:50,fixed:"right"}],tableData:[]}},methods:{initTableData:function(){for(var e=[],n=0;n<100;n++)e.push({rowKey:n,col1:"A"+n,col2:"B"+n,col3:"C"+n,col4:"D"+n,col5:"E"+n,col6:"F"+n,col7:"G"+n,col8:"H"+n});this.tableData=e},scrolling:function(e){var n=e.startRowIndex;this.startRowIndex=n}},created:function(){this.initTableData()}};return I({render:e,staticRenderFns:n},t)}()}},P=k,A=Object(a["a"])(P,S,C,!1,null,null,null),M=A.exports,D=t("9724"),K=t("1930"),L={name:"basic-main",components:{Explain:d,ContextmenuTypes:f,Base:v,Custom:M,API1:D["a"],API2:K["a"]}},N=L,F=Object(a["a"])(N,o,l,!1,null,null,null);n["default"]=F.exports}}]);
//# sourceMappingURL=chunk-558f2502.13ccb6aa.js.map