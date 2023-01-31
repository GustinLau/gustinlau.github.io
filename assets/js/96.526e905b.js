(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{421:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Level",{attrs:{type:3}}),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[t._v("数对 "),a("code",[t._v("(a,b)")]),t._v(" 由整数 "),a("code",[t._v("a")]),t._v(" 和 "),a("code",[t._v("b")]),t._v(" 组成，其数对距离定义为 "),a("code",[t._v("a")]),t._v(" 和 "),a("code",[t._v("b")]),t._v(" 的绝对差值。")]),t._v(" "),a("p",[t._v("给你一个整数数组 "),a("code",[t._v("nums")]),t._v(" 和一个整数 "),a("code",[t._v("k")]),t._v(" ，数对由 "),a("code",[t._v("nums[i]")]),t._v(" 和 "),a("code",[t._v("nums[j]")]),t._v(" 组成且满足 "),a("code",[t._v("0 <= i < j < nums.length")]),t._v(" 。返回 "),a("strong",[t._v("所有数对距离中")]),t._v(" 第 "),a("code",[t._v("k")]),t._v(" 小的数对距离。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [1,3,1], k = 1\n输出：0\n解释：数对和对应的距离如下：\n(1,3) -> 2\n(1,1) -> 0\n(3,1) -> 2\n距离第 1 小的数对是 (1,1) ，距离为 0 。\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [1,1,1], k = 2\n输出：0\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：nums = [1,6,1], k = 3\n输出：5\n")])])]),a("p",[t._v("提示：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("n == nums.length")])]),t._v(" "),a("li",[a("code",[t._v("2 <= n <= 10"),a("sup",[t._v("4")])])]),t._v(" "),a("li",[a("code",[t._v("0 <= nums[i] <= 10"),a("sup",[t._v("6")])])]),t._v(" "),a("li",[a("code",[t._v("1 <= k <= n * (n - 1) / 2")])])]),t._v(" "),a("h2",{attrs:{id:"二分查找"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二分查找"}},[t._v("#")]),t._v(" 二分查找")]),t._v(" "),a("p",[t._v("首先对数组进行排序，排序后，这个第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 小的距离必然是在 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("n")]),a("mo",[t._v("−")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("−")]),a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("[0, num[n-1] - nums[0]]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mclose"},[t._v("]]")])])])]),t._v(" 区间范围内，然后在这个区间范围内枚举距离 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("d")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("d")])])])]),t._v("（范围太大，需要二分枚举），这样问题就转换为：对于距离 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("d")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("d")])])])]),t._v(" 什么时候是第 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("k")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("k")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])]),t._v(" 小的数对距离。")]),t._v(" "),a("p",[t._v("求 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("d")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("d")])])])]),t._v(" 是第几小的数对距离使用双指针，假设左指针为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("i")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v("，右指针为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("j")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v("，当左指针指向 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[i]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" ，右指针往右遍历，取到最大的 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("j")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(", 使得 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("j")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("−")]),a("mi",[t._v("n")]),a("mi",[t._v("u")]),a("mi",[t._v("m")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mi",[t._v("i")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")]),a("mo",[t._v("<")]),a("mo",[t._v("=")]),a("mi",[t._v("d")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("nums[j] - nums[i] <= d")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mord mathnormal"},[t._v("m")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mclose"},[t._v("]")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),a("span",{staticClass:"mrel"},[t._v("<=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("d")])])])]),t._v("，此时，构成的数对个数为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("j")]),a("mo",[t._v("−")]),a("mi",[t._v("i")]),a("mo",[t._v("−")]),a("mn",[t._v("1")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j - i - 1")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.7429em","vertical-align":"-0.0833em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("i")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("−")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6444em"}}),a("span",{staticClass:"mord"},[t._v("1")])])])]),t._v("，得到的累计结果即为当前 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("d")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("d")])])])]),t._v(" 所排的位置。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} nums\n * @param {number} k\n * @return {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("smallestDistancePair")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("check")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("t")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" l\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("×")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mtext"),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n \\times log\\,n )")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，排序为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("×")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mtext"),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n\\times log\\,n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，二分查找需要 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mtext"),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(log\\,n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，双指针需要 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("。")]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",[t._v("×")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("g")]),a("mtext"),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n \\times log\\,n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal"},[t._v("o")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v(", 排序所需空间复杂度。")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);