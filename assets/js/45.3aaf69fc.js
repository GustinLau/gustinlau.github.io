(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{370:function(t,s,a){"use strict";a.r(s);var i=a(7),n=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Level",{attrs:{type:1}}),t._v(" "),s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("给定一个非负整数 "),s("code",[t._v("num")]),t._v("，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。")]),t._v(" "),s("p",[t._v("示例 1:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入: num = 38\n输出: 2\n解释: 各位相加的过程为：\n38 --\x3e 3 + 8 --\x3e 11\n11 --\x3e 1 + 1 --\x3e 2\n由于  2 是一位数，所以返回 2。\n")])])]),s("p",[t._v("示例 2:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入: num = 0\n输出: 0\n")])])]),s("p",[t._v("提示：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("0 <= num <= 2"),s("sup",[t._v("31")]),t._v(" - 1")])])]),t._v(" "),s("p",[t._v("进阶：你可以不使用循环或者递归，在 "),s("code",[t._v("O(1)")]),t._v(" 时间复杂度内解决这个问题吗？")]),t._v(" "),s("h2",{attrs:{id:"模拟"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模拟"}},[t._v("#")]),t._v(" 模拟")]),t._v(" "),s("p",[t._v("按题意模拟。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} num\n * @return {number}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addDigits")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ans "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addDigits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ans"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ans\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("l")]),s("mi",[t._v("o")]),s("mi",[t._v("g")]),s("mtext"),s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(log\\;num)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mord mathnormal"},[t._v("u")]),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])]),t._v(" "),s("h2",{attrs:{id:"数学"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数学"}},[t._v("#")]),t._v(" 数学")]),t._v(" "),s("p",[t._v("数学上，这道题是求给出的数的"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E6%95%B0%E6%A0%B9/4838735",target:"_blank",rel:"noopener noreferrer"}},[t._v("数根"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("对于某个 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 位的十进制整数 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mord mathnormal"},[t._v("u")]),s("span",{staticClass:"mord mathnormal"},[t._v("m")])])])]),t._v("，假设从最低位到最高位依次是 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("a")]),s("mn",[t._v("0")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("a")]),s("mn",[t._v("1")])],1),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mo",[t._v("…")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("msub",[s("mi",[t._v("a")]),s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1)],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a_0, a_1, \\dots, a_{n-1}")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6389em","vertical-align":"-0.2083em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("0")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[t._v("1")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"minner"},[t._v("…")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3011em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),s("span",{staticClass:"mbin mtight"},[t._v("−")]),s("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2083em"}},[s("span")])])])])])])])]),t._v("，那么这个数可以表示为：")]),t._v(" "),s("p",{staticClass:"katex-block"},[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mo",[t._v("=")]),s("munderover",[s("mo",[t._v("∑")]),s("mrow",[s("mi",[t._v("i")]),s("mo",[t._v("=")]),s("mn",[t._v("0")])],1),s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1)],1),s("msub",[s("mi",[t._v("a")]),s("mi",[t._v("i")])],1),s("mo",[t._v("×")]),s("mn",[t._v("1")]),s("msup",[s("mn",[t._v("0")]),s("mi",[t._v("i")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num  = \\sum_{i=0}^{n-1} a_i \\times 10^i\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mord mathnormal"},[t._v("u")]),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"3.0788em","vertical-align":"-1.2777em"}}),s("span",{staticClass:"mop op-limits"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.8011em"}},[s("span",{staticStyle:{top:"-1.8723em","margin-left":"0em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),s("span",{staticClass:"mrel mtight"},[t._v("=")]),s("span",{staticClass:"mord mtight"},[t._v("0")])])])]),s("span",{staticStyle:{top:"-3.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",[s("span",{staticClass:"mop op-symbol large-op"},[t._v("∑")])])]),s("span",{staticStyle:{top:"-4.3em","margin-left":"0em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),s("span",{staticClass:"mbin mtight"},[t._v("−")]),s("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.2777em"}},[s("span")])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("×")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8747em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8747em"}},[s("span",{staticStyle:{top:"-3.113em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])])])])])])]),t._v(" "),s("p",[t._v("显然 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")]),s("msup",[s("mn",[t._v("0")]),s("mi",[t._v("i")])],1),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")]),s("mo",[t._v("=")]),s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("10^i\\;\\text{mod}\\;9 = 1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8247em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.8247em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("，因此可得：")]),t._v(" "),s("p",{staticClass:"katex-block"},[s("span",{staticClass:"katex-display"},[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")]),s("mi",[t._v("u")]),s("mi",[t._v("m")]),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")]),s("mo",[t._v("=")]),s("munderover",[s("mo",[t._v("∑")]),s("mrow",[s("mi",[t._v("i")]),s("mo",[t._v("=")]),s("mn",[t._v("0")])],1),s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1)],1),s("msub",[s("mi",[t._v("a")]),s("mi",[t._v("i")])],1),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("num\\;\\text{mod}\\;9 = \\sum_{i=0}^{n-1} a_i\\;\\text{mod}\\;9\n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mord mathnormal"},[t._v("u")]),s("span",{staticClass:"mord mathnormal"},[t._v("m")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"3.0788em","vertical-align":"-1.2777em"}}),s("span",{staticClass:"mop op-limits"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.8011em"}},[s("span",{staticStyle:{top:"-1.8723em","margin-left":"0em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),s("span",{staticClass:"mrel mtight"},[t._v("=")]),s("span",{staticClass:"mord mtight"},[t._v("0")])])])]),s("span",{staticStyle:{top:"-3.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",[s("span",{staticClass:"mop op-symbol large-op"},[t._v("∑")])])]),s("span",{staticStyle:{top:"-4.3em","margin-left":"0em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"3.05em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),s("span",{staticClass:"mbin mtight"},[t._v("−")]),s("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"1.2777em"}},[s("span")])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])])])]),t._v(" "),s("p",[t._v("记 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",[t._v("=")]),s("msubsup",[s("mo",[t._v("∑")]),s("mrow",[s("mi",[t._v("i")]),s("mo",[t._v("=")]),s("mn",[t._v("0")])],1),s("mrow",[s("mi",[t._v("n")]),s("mo",[t._v("−")]),s("mn",[t._v("1")])],1)],1),s("msub",[s("mi",[t._v("a")]),s("mi",[t._v("i")])],1),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(x) = \\sum_{i=0}^{n-1} a_i\\;\\text{mod}\\;9")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1.2537em","vertical-align":"-0.2997em"}}),s("span",{staticClass:"mop"},[s("span",{staticClass:"mop op-symbol small-op",staticStyle:{position:"relative",top:"0em"}},[t._v("∑")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.954em"}},[s("span",{staticStyle:{top:"-2.4003em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),s("span",{staticClass:"mrel mtight"},[t._v("=")]),s("span",{staticClass:"mord mtight"},[t._v("0")])])])]),s("span",{staticStyle:{top:"-3.2029em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),s("span",{staticClass:"mbin mtight"},[t._v("−")]),s("span",{staticClass:"mord mtight"},[t._v("1")])])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.2997em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t vlist-t2"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.3117em"}},[s("span",{staticStyle:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("i")])])])]),s("span",{staticClass:"vlist-s"},[t._v("​")])]),s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[s("span")])])])])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])]),t._v("，那么 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",[t._v("=")]),s("mi",[t._v("x")]),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(x) = x\\;\\text{mod}\\;9")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])]),t._v("，那么 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("f")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("f")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("x")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mo",[t._v("=")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("x")]),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")]),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")]),s("mo",[t._v("≡")]),s("mi",[t._v("x")]),s("mtext"),s("mtext",[t._v("mod")]),s("mtext"),s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("f(f(x)) = (x\\;\\text{mod}\\;9)\\;\\text{mod}\\;9 \\equiv x\\;\\text{mod}\\;9")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10764em"}},[t._v("f")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mclose"},[t._v("))")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("=")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")]),s("span",{staticClass:"mclose"},[t._v(")")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[t._v("≡")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("x")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord text"},[s("span",{staticClass:"mord"},[t._v("mod")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])]),t._v("，但是数根的取值范围是 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("1")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mn",[t._v("9")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[1,9]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[t._v("9")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，对 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("9")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])]),t._v(" 取余的取值范围为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mn",[t._v("0")]),s("mo",{attrs:{separator:"true"}},[t._v(",")]),s("mn",[t._v("8")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[0,8]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord"},[t._v("0")]),s("span",{staticClass:"mpunct"},[t._v(",")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),s("span",{staticClass:"mord"},[t._v("8")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("，可以先将给定的数字减 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("，相当于原数整体向左偏移了 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("，然后再将得到的数字对 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("9")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("9")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("9")])])])]),t._v(" 取余，最后将得到的结果加 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number} num\n * @return {number}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("addDigits")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);