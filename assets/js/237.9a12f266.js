(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{559:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("Level",{attrs:{type:2}}),t._v(" "),s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),s("p",[t._v("给你一个长度为 "),s("code",[t._v("n")]),t._v(" 的 "),s("strong",[t._v("3 跑道道路")]),t._v(" ，它总共包含 "),s("code",[t._v("n + 1")]),t._v(" 个 "),s("strong",[t._v("点")]),t._v(" ，编号为 "),s("code",[t._v("0")]),t._v(" 到 "),s("code",[t._v("n")]),t._v("。一只青蛙从 "),s("code",[t._v("0")]),t._v(" 号点第二条跑道 "),s("strong",[t._v("出发")]),t._v(" ，它想要跳到点 "),s("code",[t._v("n")]),t._v(" 处。然而道路上可能有一些障碍。")]),t._v(" "),s("p",[t._v("给你一个长度为 "),s("code",[t._v("n + 1")]),t._v(" 的数组 "),s("code",[t._v("obstacles")]),t._v("，其中 "),s("code",[t._v("obstacles[i]")]),t._v("（"),s("strong",[t._v("取值范围从 0 到 3")]),t._v("）表示在点 "),s("code",[t._v("i")]),t._v(" 处的 "),s("code",[t._v("obstacles[i]")]),t._v(" 跑道上有一个障碍。如果 "),s("code",[t._v("obstacles[i] == 0")]),t._v("，那么点 "),s("code",[t._v("i")]),t._v(" 处没有障碍。任何一个点的三条跑道中 "),s("strong",[t._v("最多有一个")]),t._v(" 障碍。")]),t._v(" "),s("ul",[s("li",[t._v("比方说，如果 "),s("code",[t._v("obstacles[2] == 1")]),t._v("，那么说明在点 2 处跑道 1 有障碍。")])]),t._v(" "),s("p",[t._v("这只青蛙从点 "),s("code",[t._v("i")]),t._v(" 跳到点 "),s("code",[t._v("i + 1")]),t._v(" 且跑道不变的前提是点 "),s("code",[t._v("i + 1")]),t._v(" 的同一跑道上没有障碍。为了躲避障碍，这只青蛙也可以在 "),s("strong",[t._v("同一个")]),t._v(" 点处 "),s("strong",[t._v("侧跳")]),t._v(" 到 "),s("strong",[t._v("另外一条")]),t._v(" 跑道（这两条跑道可以不相邻），但前提是跳过去的跑道该点处没有障碍。")]),t._v(" "),s("ul",[s("li",[t._v("比方说，这只青蛙可以从点 3 处的跑道 3 跳到点 3 处的跑道 1 。")])]),t._v(" "),s("p",[t._v("这只青蛙从点 0 处跑道 2 出发，并想到达点 "),s("code",[t._v("n")]),t._v(" 处的 "),s("strong",[t._v("任一跑道")]),t._v(" ，请你返回 "),s("strong",[t._v("最少侧跳次数")]),t._v(" 。")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：点 "),s("code",[t._v("0")]),t._v(" 处和点 "),s("code",[t._v("n")]),t._v(" 处的任一跑道都不会有障碍。")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/algorithm/leetcode/1800-1899/1824-1.png",alt:"示例1",width:"700"}})]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：obstacles = [0,1,2,3,0]\n输出：2\n解释：最优方案如上图箭头所示。总共有 2 次侧跳（红色箭头）。\n注意，这只青蛙只有当侧跳时才可以跳过障碍（如上图点 2 处所示）。\n")])])]),s("p",[t._v("示例 2：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/algorithm/leetcode/1800-1899/1824-2.png",alt:"示例2",width:"700"}})]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：obstacles = [0,1,1,3,3,0]\n输出：0\n解释：跑道 2 没有任何障碍，所以不需要任何侧跳。\n")])])]),s("p",[t._v("示例 3：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/algorithm/leetcode/1800-1899/1824-3.png",alt:"示例3",width:"700"}})]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("输入：obstacles = [0,2,1,0,3,0]\n输出：2\n解释：最优方案如上图所示。总共有 2 次侧跳。\n")])])]),s("p",[t._v("提示：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("obstacles.length == n + 1")])]),t._v(" "),s("li",[s("code",[t._v("1 <= n <= 5 * 10"),s("sup",[t._v("5")])])]),t._v(" "),s("li",[s("code",[t._v("0 <= obstacles[i] <= 3")])]),t._v(" "),s("li",[s("code",[t._v("obstacles[0] == obstacles[n] == 0")])])]),t._v(" "),s("h2",{attrs:{id:"动态规划"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态规划"}},[t._v("#")]),t._v(" 动态规划")]),t._v(" "),s("p",[t._v("假设 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 为到达第 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("i")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.6595em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("i")])])])]),t._v(" 个点，第 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v(" 条跑道的最少侧条次数，那么若该点没有障碍物，即 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("o")]),s("mi",[t._v("b")]),s("mi",[t._v("s")]),s("mi",[t._v("t")]),s("mi",[t._v("a")]),s("mi",[t._v("c")]),s("mi",[t._v("l")]),s("mi",[t._v("e")]),s("mi",[t._v("s")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{mathvariant:"normal"}},[t._v("≠")]),s("mi",[t._v("j")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("obstacles[i] - 1 \\neq j")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("o")]),s("span",{staticClass:"mord mathnormal"},[t._v("b")]),s("span",{staticClass:"mord mathnormal"},[t._v("s")]),s("span",{staticClass:"mord mathnormal"},[t._v("t")]),s("span",{staticClass:"mord mathnormal"},[t._v("a")]),s("span",{staticClass:"mord mathnormal"},[t._v("c")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),s("span",{staticClass:"mord mathnormal"},[t._v("es")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}}),s("span",{staticClass:"mrel"},[s("span",{staticClass:"mrel"},[s("span",{staticClass:"mord vbox"},[s("span",{staticClass:"thinbox"},[s("span",{staticClass:"rlap"},[s("span",{staticClass:"strut",staticStyle:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"inner"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mrel"},[t._v("")])])]),s("span",{staticClass:"fix"})])])])]),s("span",{staticClass:"mrel"},[t._v("=")])]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2778em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"0.854em","vertical-align":"-0.1944em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])])]),t._v("，该点就能到达，可以到达的方式有在 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",[t._v("−")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i - 1][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}}),s("span",{staticClass:"mbin"},[t._v("−")]),s("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222em"}})]),s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("\n不用侧跳直接过去，或者从其他跑道侧跳一次过去，只需取各种情况的最小值即可。由于 "),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("d")]),s("mi",[t._v("p")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("i")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")]),s("mo",{attrs:{stretchy:"false"}},[t._v("[")]),s("mi",[t._v("j")]),s("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("dp[i][j]")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal"},[t._v("d")]),s("span",{staticClass:"mord mathnormal"},[t._v("p")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal"},[t._v("i")]),s("span",{staticClass:"mclose"},[t._v("]")]),s("span",{staticClass:"mopen"},[t._v("[")]),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")]),s("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v(" 仅由上一个状态转移，因此可以使用滚动数组优化空间。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {number[]} obstacles\n * @return {number}\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("minSideJumps")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obstacles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obstacles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obstacles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n    dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n    dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obstacle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("时间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mi",[t._v("n")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord mathnormal"},[t._v("n")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),s("li",[t._v("空间复杂度："),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[s("semantics",[s("mrow",[s("mi",[t._v("O")]),s("mo",{attrs:{stretchy:"false"}},[t._v("(")]),s("mn",[t._v("1")]),s("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"base"},[s("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),s("span",{staticClass:"mopen"},[t._v("(")]),s("span",{staticClass:"mord"},[t._v("1")]),s("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);