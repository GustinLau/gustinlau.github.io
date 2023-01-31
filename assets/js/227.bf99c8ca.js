(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{550:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Level",{attrs:{type:3}}),t._v(" "),s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("给你 "),s("code",[t._v("nums")]),t._v(" ，它是一个大小为 "),s("code",[t._v("2 * n")]),t._v(" 的正整数数组。你必须对这个数组执行 "),s("code",[t._v("n")]),t._v(" 次操作。")]),t._v(" "),s("p",[t._v("在第 "),s("code",[t._v("i")]),t._v(" 次操作时（操作编号从 "),s("strong",[t._v("1")]),t._v(" 开始），你需要：")]),t._v(" "),s("ul",[s("li",[t._v("选择两个元素 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v(" 。")]),t._v(" "),s("li",[t._v("获得分数 "),s("code",[t._v("i * gcd(x, y)")]),t._v(" 。")]),t._v(" "),s("li",[t._v("将 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v(" 从 "),s("code",[t._v("nums")]),t._v(" 中删除。")])]),t._v(" "),s("p",[t._v("请你返回 "),s("code",[t._v("n")]),t._v(" 次操作后你能获得的分数和最大为多少。")]),t._v(" "),s("p",[t._v("函数 "),s("code",[t._v("gcd(x, y)")]),t._v(" 是 "),s("code",[t._v("x")]),t._v(" 和 "),s("code",[t._v("y")]),t._v(" 的最大公约数。")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：nums = [1,2]\n输出：1\n解释：最优操作是：\n(1 * gcd(1, 2)) = 1\n")])])]),s("p",[t._v("示例 2：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：nums = [3,4,6,8]\n输出：11\n解释：最优操作是：\n(1 * gcd(3, 6)) + (2 * gcd(4, 8)) = 3 + 8 = 11\n")])])]),s("p",[t._v("示例 3：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：nums = [1,2,3,4,5,6]\n输出：14\n解释：最优操作是：\n(1 * gcd(1, 5)) + (2 * gcd(2, 4)) + (3 * gcd(3, 6)) = 1 + 4 + 9 = 14\n")])])]),s("p",[t._v("提示：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("1 <= n <= 7")])]),t._v(" "),s("li",[s("code",[t._v("nums.length == 2 * n")])]),t._v(" "),s("li",[s("code",[t._v("1 <= nums[i] <= 10"),s("sup",[t._v("6")])])])]),t._v(" "),s("h2",{attrs:{id:"回溯-记忆化搜索-状态压缩"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回溯-记忆化搜索-状态压缩"}},[t._v("#")]),t._v(" 回溯 + 记忆化搜索 + 状态压缩")]),t._v(" "),s("p",[s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("n")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.4306em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("n")])])])]),t._v(" 最大为 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("7")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("7")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("7")])])])]),t._v("。意味着可以使用暴力搜索进行解决，先选择一个数，然后枚举另外一个数与其配对的情况，这里可以使用回溯解决，已选取的数字可以使用状态压缩技巧处理，用 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mi",[t._v("a")]),s("mi",[t._v("t")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("state")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6151em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])]),t._v(" 记录已选取数字的下标，若下标 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v(" 数字被选取，"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mi",[t._v("a")]),s("mi",[t._v("t")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("state")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6151em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])]),t._v(" 的第 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v(" 位置 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mn",[t._v("1")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("1")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),s("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("。对于每个相同的 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mi",[t._v("a")]),s("mi",[t._v("t")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("state")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6151em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])]),t._v("，它对应的结果必然是相同的，因此可以使用对 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mi",[t._v("a")]),s("mi",[t._v("t")]),s("mi",[t._v("e")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("state")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6151em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("e")])])])]),t._v(" 进行记忆化，减少重复的计算。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("maxScore")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("gcd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GCD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GCD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gcd")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("backtrack")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("memo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" memo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" nextState "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cnt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GCD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cnt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    memo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" max\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("backtrack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("n")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(2^n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])])])])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("msup",[s("mn",[t._v("2")]),s("mi",[t._v("n")])],1),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(2^n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[s("span",{staticClass:"mord"},[t._v("2")]),s("span",{staticClass:"msupsub"},[s("span",{staticClass:"vlist-t"},[s("span",{staticClass:"vlist-r"},[s("span",{staticClass:"vlist",staticStyle:{height:"0.6644em"}},[s("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),s("span",{staticClass:"sizing reset-size6 size3 mtight"},[s("span",{staticClass:"mord mathnormal mtight"},[t._v("n")])])])])])])])]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);