(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{558:function(s,t,a){"use strict";a.r(t);var n=a(7),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("Level",{attrs:{type:2}}),s._v(" "),t("h2",{attrs:{id:"问题描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" 问题描述")]),s._v(" "),t("p",[s._v("给你一个数组 "),t("code",[s._v("nums")]),s._v("，数组中只包含非负整数。定义 "),t("code",[s._v("rev(x)")]),s._v(" 的值为将整数 "),t("code",[s._v("x")]),s._v(" 各个数字位反转得到的结果。比方说 "),t("code",[s._v("rev(123) = 321")]),s._v("，"),t("code",[s._v("rev(120) = 21")]),s._v("。我们称满足下面条件的下标对 "),t("code",[s._v("(i, j)")]),s._v(" 是 "),t("strong",[s._v("好的")]),s._v(" ：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("0 <= i < j < nums.length")])]),s._v(" "),t("li",[t("code",[s._v("nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])")])])]),s._v(" "),t("p",[s._v("请你返回好下标对的数目。由于结果可能会很大，请将结果对 "),t("code",[s._v("10"),t("sup",[s._v("9")]),s._v(" + 7")]),s._v(" "),t("strong",[s._v("取余")]),s._v(" 后返回。")]),s._v(" "),t("p",[s._v("示例 1：")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：nums = [42,11,1,97]\n输出：2\n解释：两个坐标对为：\n- (0,3)：42 + rev(97) = 42 + 79 = 121, 97 + rev(42) = 97 + 24 = 121 。\n- (1,2)：11 + rev(1) = 11 + 1 = 12, 1 + rev(11) = 1 + 11 = 12 。\n")])])]),t("p",[s._v("示例 2：")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("输入：nums = [13,10,35,24,76]\n输出：4\n")])])]),t("p",[s._v("提示：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("1 <= nums.length <= 10"),t("sup",[s._v("5")])])]),s._v(" "),t("li",[t("code",[s._v("0 <= nums[i] <= 10"),t("sup",[s._v("9")])])])]),s._v(" "),t("h2",{attrs:{id:"哈希表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#哈希表"}},[s._v("#")]),s._v(" 哈希表")]),s._v(" "),t("p",[s._v("对于 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("+")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("v")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("j")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mo",[s._v("=")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("j")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("+")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("v")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("re")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("])")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("==")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("re")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("])")])])])]),s._v(" 可以转换为 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("v")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")]),t("mo",[s._v("=")]),t("mo",[s._v("=")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("j")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("+")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("v")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("j")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums[i] - rev(nums[i]) == nums[j] + rev(nums[j])")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("re")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("])")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),t("span",{staticClass:"mrel"},[s._v("==")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("+")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("re")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[s._v("j")]),t("span",{staticClass:"mclose"},[s._v("])")])])])]),s._v("，因此，可以遍历数组，计算 "),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",[s._v("−")]),t("mi",[s._v("r")]),t("mi",[s._v("e")]),t("mi",[s._v("v")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mi",[s._v("u")]),t("mi",[s._v("m")]),t("mi",[s._v("s")]),t("mo",{attrs:{stretchy:"false"}},[s._v("[")]),t("mi",[s._v("i")]),t("mo",{attrs:{stretchy:"false"}},[s._v("]")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("nums[i] - rev(nums[i])")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("]")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("−")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal"},[s._v("re")]),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[s._v("v")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mord mathnormal"},[s._v("u")]),t("span",{staticClass:"mord mathnormal"},[s._v("m")]),t("span",{staticClass:"mord mathnormal"},[s._v("s")]),t("span",{staticClass:"mopen"},[s._v("[")]),t("span",{staticClass:"mord mathnormal"},[s._v("i")]),t("span",{staticClass:"mclose"},[s._v("])")])])])]),s._v(" 的结果，统计相同结果的个数存到哈希表中，后续遇到相同的结果时，将已存在哈希表中的结果个数加到答案中即可。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n * @param {number[]} nums\n * @return {number}\n */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("countNicePairs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("nums")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MOD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("pow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" map "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("rev")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("num")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Number")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("toString")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reverse")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" ans "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" nums"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" num "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rev")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("num"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("has")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      ans "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ans "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" cnt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MOD")]),s._v("\n      map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("set")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cnt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" ans\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("时间复杂度："),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",[s._v("×")]),t("mi",[s._v("log")]),t("mo",[s._v("⁡")]),t("mi",[s._v("C")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n \\times \\log{C})")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),t("span",{staticClass:"mbin"},[s._v("×")]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mop"},[s._v("lo"),t("span",{staticStyle:{"margin-right":"0.01389em"}},[s._v("g")])]),t("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1667em"}}),t("span",{staticClass:"mord"},[t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.07153em"}},[s._v("C")])]),t("span",{staticClass:"mclose"},[s._v(")")])])])])]),s._v(" "),t("li",[s._v("空间复杂度："),t("span",{staticClass:"katex"},[t("span",{staticClass:"katex-mathml"},[t("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[t("semantics",[t("mrow",[t("mi",[s._v("O")]),t("mo",{attrs:{stretchy:"false"}},[s._v("(")]),t("mi",[s._v("n")]),t("mo",{attrs:{stretchy:"false"}},[s._v(")")])],1),t("annotation",{attrs:{encoding:"application/x-tex"}},[s._v("O(n)")])],1)],1)],1),t("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[t("span",{staticClass:"base"},[t("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),t("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[s._v("O")]),t("span",{staticClass:"mopen"},[s._v("(")]),t("span",{staticClass:"mord mathnormal"},[s._v("n")]),t("span",{staticClass:"mclose"},[s._v(")")])])])])])])],1)}),[],!1,null,null,null);t.default=r.exports}}]);