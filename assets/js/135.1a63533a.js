(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{458:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Level",{attrs:{type:2}}),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("珂珂喜欢吃香蕉。这里有 "),a("code",[t._v("n")]),t._v(" 堆香蕉，第 "),a("code",[t._v("i")]),t._v(" 堆中有 "),a("code",[t._v("piles[i]")]),t._v(" 根香蕉。警卫已经离开了，将在 "),a("code",[t._v("h")]),t._v(" 小时后回来。")]),t._v(" "),a("p",[t._v("珂珂可以决定她吃香蕉的速度 "),a("code",[t._v("k")]),t._v(" （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 "),a("code",[t._v("k")]),t._v(" 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。")]),t._v(" "),a("p",[t._v("珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。")]),t._v(" "),a("p",[t._v("返回她可以在 "),a("code",[t._v("h")]),t._v(" 小时内吃掉所有香蕉的最小速度 "),a("code",[t._v("k")]),t._v("（"),a("code",[t._v("k")]),t._v(" 为整数）。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：piles = [3,6,7,11], h = 8\n输出：4\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：piles = [30,11,23,4,20], h = 5\n输出：30\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：piles = [30,11,23,4,20], h = 6\n输出：23\n")])])]),a("p",[t._v("提示：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= piles.length <= 10"),a("sup",[t._v("4")])])]),t._v(" "),a("li",[a("code",[t._v("piles.length <= h <= 10"),a("sup",[t._v("9")])])]),t._v(" "),a("li",[a("code",[t._v("1 <= piles[i] <= 10"),a("sup",[t._v("9")])])])]),t._v(" "),a("h2",{attrs:{id:"二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[t._v("#")]),t._v(" 二分查找")]),t._v(" "),a("p",[t._v("根据提示信息可以知道，警卫离开的时间是大于香蕉堆的数量的，如果每小时能吃掉数量最多的香蕉堆的速度来吃香蕉的话，必然能将全部香蕉吃完，所以最小的速度必然在 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("1")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("p")]),a("mi",[t._v("i")]),a("mi",[t._v("l")]),a("mi",[t._v("e")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[1, max(piles)]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ma")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("p")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("es")]),a("span",{staticClass:"mclose"},[t._v(")]")])])])]),t._v(" 之中，使用二分查找，查找出能够吃完香蕉的最小速度即可。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} piles\n * @param {number} h\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("minEatingSpeed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("eat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("speed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" piles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cnt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cnt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" speed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" high"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" low"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      low "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      high "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" low\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mtext"),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mtext"),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n \\, log \\, m )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，其中 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 是数组 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",[t._v("piles")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\text{piles}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord"},[t._v("piles")])])])])]),t._v(" 的长度，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v(" 是数组 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mtext",[t._v("piles")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\text{piles}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord text"},[a("span",{staticClass:"mord"},[t._v("piles")])])])])]),t._v(" 中的最大值。")]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);