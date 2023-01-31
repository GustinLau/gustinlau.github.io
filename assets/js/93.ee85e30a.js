(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{418:function(t,a,s){"use strict";s.r(a);var n=s(7),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Level",{attrs:{type:3}}),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("在无限长的数轴（即 x 轴）上，我们根据给定的顺序放置对应的正方形方块。")]),t._v(" "),a("p",[t._v("第 "),a("code",[t._v("i")]),t._v(" 个掉落的方块（"),a("code",[t._v("positions[i] = (left, side_length)")]),t._v("）是正方形，其中 "),a("code",[t._v("left")]),t._v(" 表示该方块最左边的点位置("),a("code",[t._v("positions[i][0]")]),t._v(")，"),a("code",[t._v("side_length")]),t._v(" 表示该方块的边长("),a("code",[t._v("positions[i][1]")]),t._v(")。")]),t._v(" "),a("p",[t._v("每个方块的底部边缘平行于数轴（即 x 轴），并且从一个比目前所有的落地方块更高的高度掉落而下。在上一个方块结束掉落，并保持静止后，才开始掉落新方块。")]),t._v(" "),a("p",[t._v("方块的底边具有非常大的粘性，并将保持固定在它们所接触的任何长度表面上（无论是数轴还是其他方块）。邻接掉落的边不会过早地粘合在一起，"),a("strong",[t._v("因为只有底边才具有粘性")]),t._v("。")]),t._v(" "),a("p",[t._v("返回一个堆叠高度列表 "),a("code",[t._v("ans")]),t._v(" 。每一个堆叠高度 "),a("code",[t._v("ans[i]")]),t._v(" 表示在通过 "),a("code",[t._v("positions[0], positions[1], ..., positions[i]")]),t._v(" 表示的方块掉落结束后，目前所有已经落稳的方块堆叠的最高高度。")]),t._v(" "),a("p",[t._v("示例 1:")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0600-0699/699-1.png",alt:"示例 1",width:"500"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: [[1, 2], [2, 3], [6, 1]]\n输出: [2, 5, 5]\n解释:\n第一个方块 positions[0] = [1, 2] 掉落后，方块最大高度为 2。\n第二个方块 positions[1] = [2, 3] 掉落后，大的方块保持在较小的方块的顶部，不论它的重心在哪里，因为方块的底部边缘有非常大的粘性，所以方块最大高度为 5。\n第三个方块 positions[1] = [6, 1] 掉落后，方块的最大高度仍然是第一个和第二个方块堆叠成的高度 5。\n因此，我们返回结果[2, 5, 5]。\n")])])]),a("p",[t._v("示例 2:")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入: [[100, 100], [200, 100]]\n输出: [100, 100]\n解释: 相邻的方块不会过早地卡住，只有它们的底部边缘才能粘在表面上。\n")])])]),a("p",[t._v("提示:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= positions.length <= 1000")])]),t._v(" "),a("li",[a("code",[t._v("1 <= positions[i][0] <= 10"),a("sup",[t._v("8")])])]),t._v(" "),a("li",[a("code",[t._v("1 <= positions[i][1] <= 10"),a("sup",[t._v("6")])])])]),t._v(" "),a("h2",{attrs:{id:"暴力枚举"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暴力枚举"}},[t._v("#")]),t._v(" 暴力枚举")]),t._v(" "),a("p",[t._v("我们可以模拟整个过程，使用一个数组 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("c")]),a("mi",[t._v("k")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("blocks")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("b")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("oc")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 记录每一个方块的位置和它的堆叠高度，使用一个变量 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")]),a("mi",[t._v("H")]),a("mi",[t._v("e")]),a("mi",[t._v("i")]),a("mi",[t._v("g")]),a("mi",[t._v("h")]),a("mi",[t._v("t")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("maxHeight")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ma")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mord mathnormal"},[t._v("He")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathnormal"},[t._v("h")]),a("span",{staticClass:"mord mathnormal"},[t._v("t")])])])]),t._v(" 记录当前方块堆叠的最大高度。遍历每一个方块，然后遍历所有 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("c")]),a("mi",[t._v("k")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("blocks")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("b")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("oc")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中的记录，如果当前方块与 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("c")]),a("mi",[t._v("k")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("blocks")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("b")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("oc")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中的当前记录出现堆叠，则更新当前模块的堆叠高度，最终方块的位置信息与得到的高度记录到 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("c")]),a("mi",[t._v("k")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("blocks")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("b")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("oc")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 记录表中。如果当前方块的堆叠高度大于历史最大堆叠高度，则更新最大堆叠高度，把当前最大堆叠高度记录到 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mi",[t._v("n")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("ans")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("an")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[][]} positions\n * @return {number[]}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fallingSquares")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("positions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blocks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" maxHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" positions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" size\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    maxHeight "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("maxHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("n")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n^2)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0641em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8141em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("2")])])])])])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);