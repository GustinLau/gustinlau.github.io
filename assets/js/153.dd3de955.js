(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{476:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Level",{attrs:{type:3}}),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("给定一个由不同正整数的组成的非空数组 "),a("code",[t._v("nums")]),t._v(" ，考虑下面的图：")]),t._v(" "),a("ul",[a("li",[t._v("有 "),a("code",[t._v("nums.length")]),t._v(" 个节点，按从 "),a("code",[t._v("nums[0]")]),t._v(" 到 "),a("code",[t._v("nums[nums.length - 1]")]),t._v(" 标记；")]),t._v(" "),a("li",[t._v("只有当 "),a("code",[t._v("nums[i]")]),t._v(" 和 "),a("code",[t._v("nums[j]")]),t._v(" 共用一个大于 1 的公因数时，"),a("code",[t._v("nums[i]")]),t._v(" 和 "),a("code",[t._v("nums[j]")]),t._v(" 之间才有一条边。")])]),t._v(" "),a("p",[t._v("返回 "),a("em",[t._v("图中最大连通组件的大小")]),t._v(" 。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/952-1.png",alt:"示例1",width:"600"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [4,6,15,35]\n输出：4\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/952-2.png",alt:"示例2",width:"600"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [20,50,9,63]\n输出：2\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/952-3.png",alt:"示例3",width:"600"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [2,3,6,7,4,12,21,39]\n输出：8\n")])])]),a("p",[t._v("提示：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("1 <= nums.length <= 2 * 10"),a("sup",[t._v("4")])])]),t._v(" "),a("li",[a("code",[t._v("1 <= nums[i] <= 10"),a("sup",[t._v("5")])])]),t._v(" "),a("li",[a("code",[t._v("nums")]),t._v(" 中所有值都 不同")])]),t._v(" "),a("h2",{attrs:{id:"并查集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并查集"}},[t._v("#")]),t._v(" 并查集")]),t._v(" "),a("p",[t._v("设 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中最大值为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("max")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ma")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")])])])]),t._v("，对应每个不大于 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")]),a("mi",[t._v("a")]),a("mi",[t._v("x")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("max")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("ma")]),a("span",{staticClass:"mord mathnormal"},[t._v("x")])])])]),t._v(" 的数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v("， 对于范围 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("2")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msqrt",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1)],1),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[2, \\sqrt{num}]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0503em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("2")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord sqrt"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8003em"}},[a("span",{staticClass:"svg-align",staticStyle:{top:"-3em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord",staticStyle:{"padding-left":"0.833em"}},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])]),a("span",{staticStyle:{top:"-2.7603em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"hide-tail",staticStyle:{"min-width":"0.853em",height:"1.08em"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"}},[a("path",{attrs:{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}})])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2397em"}},[a("span")])])])]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 内的每个正整数 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("，如果 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v(" 是 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v(" 的因数，则 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v(" 和 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mstyle",{attrs:{displaystyle:"true",scriptlevel:"0"}},[a("mfrac",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")])],1),a("mi",[t._v("i")])],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\dfrac{num}{i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.7936em","vertical-align":"-0.686em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.1076em"}},[a("span",{staticStyle:{top:"-2.314em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("i")])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.677em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.686em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])]),t._v(" 都属于同一个组件。使用并查集实现组件的计算，最终遍历 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 找出最大的连通组件")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("largestComponentSize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" parent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("union")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parentX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" parentY "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parentX "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" parentY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      parent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("parentX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" parentY\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("union")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cnts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ans "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("cnts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("msqrt",[a("mi",[t._v("m")])],1),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n\\sqrt{m})")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.0503em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord sqrt"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8003em"}},[a("span",{staticClass:"svg-align",staticStyle:{top:"-3em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"mord",staticStyle:{"padding-left":"0.833em"}},[a("span",{staticClass:"mord mathnormal"},[t._v("m")])])]),a("span",{staticStyle:{top:"-2.7603em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"hide-tail",staticStyle:{"min-width":"0.853em",height:"1.08em"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"}},[a("path",{attrs:{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"}})])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2397em"}},[a("span")])])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，其中 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 的长度，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中最大值。")]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(m)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("m")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v(" 为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v(" 中最大值。")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);