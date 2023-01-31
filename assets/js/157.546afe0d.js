(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{480:function(t,a,s){"use strict";s.r(a);var n=s(7),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("Level",{attrs:{type:2}}),t._v(" "),a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" 问题描述")]),t._v(" "),a("p",[a("strong",[t._v("最大树")]),t._v(" 定义：一棵树，并满足：其中每个节点的值都大于其子树中的任何其他值。")]),t._v(" "),a("p",[t._v("给你最大树的根节点 "),a("code",[t._v("root")]),t._v(" 和一个整数 "),a("code",[t._v("val")]),t._v(" 。")]),t._v(" "),a("p",[t._v("就像 "),a("a",{attrs:{href:"https://leetcode.cn/problems/maximum-binary-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("之前的问题"),a("OutboundLink")],1),t._v(" 那样，给定的树是利用 "),a("code",[t._v("Construct(a)")]),t._v(" 例程从列表 "),a("code",[t._v("a(root = Construct(a))")]),t._v("递归地构建的：")]),t._v(" "),a("ul",[a("li",[t._v("如果 "),a("code",[t._v("a")]),t._v(" 为空，返回 "),a("code",[t._v("null")]),t._v(" 。")]),t._v(" "),a("li",[t._v("否则，令 "),a("code",[t._v("a[i]")]),t._v(" 作为 "),a("code",[t._v("a")]),t._v(" 的最大元素。创建一个值为 "),a("code",[t._v("a[i]")]),t._v(" 的根节点 "),a("code",[t._v("root")]),t._v(" 。")]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" 的左子树将被构建为 "),a("code",[t._v("Construct([a[0], a[1], ..., a[i - 1]])")]),t._v(" 。")]),t._v(" "),a("li",[a("code",[t._v("root")]),t._v(" 的右子树将被构建为 "),a("code",[t._v("Construct([a[i + 1], a[i + 2], ..., a[a.length - 1]])")]),t._v(" 。")]),t._v(" "),a("li",[t._v("返回 "),a("code",[t._v("root")]),t._v(" 。")])]),t._v(" "),a("p",[t._v("请注意，题目没有直接给出 "),a("code",[t._v("a")]),t._v(" ，只是给出一个根节点 "),a("code",[t._v("root = Construct(a)")]),t._v(" 。")]),t._v(" "),a("p",[t._v("假设 "),a("code",[t._v("b")]),t._v(" 是 "),a("code",[t._v("a")]),t._v(" 的副本，并在末尾附加值 "),a("code",[t._v("val")]),t._v("。题目数据保证 "),a("code",[t._v("b")]),t._v(" 中的值互不相同。")]),t._v(" "),a("p",[t._v("返回 "),a("code",[t._v("Construct(b)")]),t._v(" 。")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-1.png",alt:"示例1",width:"220"}}),t._v(" "),a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-2.png",alt:"示例1",width:"277"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [4,1,3,null,null,2], val = 5\n输出：[5,4,null,1,3,null,null,2]\n解释：a = [1,4,2,3], b = [1,4,2,3,5]\n")])])]),a("p",[t._v("示例 2：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-3.png",alt:"示例2",width:"220"}}),t._v(" "),a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-4.png",alt:"示例2",width:"270"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [5,2,4,null,1], val = 3\n输出：[5,2,4,null,1,null,3]\n解释：a = [2,1,5,4], b = [2,1,5,4,3]\n")])])]),a("p",[t._v("示例 3：")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-5.png",alt:"示例3",width:"220"}}),t._v(" "),a("img",{attrs:{src:"/img/algorithm/leetcode/0900-0999/998-6.png",alt:"示例3",width:"247"}})]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("输入：root = [5,2,3,null,1], val = 4\n输出：[5,2,4,null,1,3]\n解释：a = [2,1,5,3], b = [2,1,5,3,4]\n")])])]),a("p",[t._v("提示：")]),t._v(" "),a("ul",[a("li",[t._v("树中节点数目在范围 "),a("code",[t._v("[1, 100")]),t._v("]` 内")]),t._v(" "),a("li",[a("code",[t._v("1 <= Node.val <= 100")])]),t._v(" "),a("li",[t._v("树中的所有值 "),a("strong",[t._v("互不相同")])]),t._v(" "),a("li",[a("code",[t._v("1 <= val <= 100")])])]),t._v(" "),a("h2",{attrs:{id:"深度优先搜索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索"}},[t._v("#")]),t._v(" 深度优先搜索")]),t._v(" "),a("p",[t._v("因为是在数组末尾添加新的 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mi",[t._v("a")]),a("mi",[t._v("l")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v("，所以可以和根节点比较：")]),t._v(" "),a("ul",[a("li",[t._v("如果"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mi",[t._v("a")]),a("mi",[t._v("l")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v("的值比根节点的值大，那么说明 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mi",[t._v("a")]),a("mi",[t._v("l")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" 是新的根且原根节点是其左子树。")]),t._v(" "),a("li",[t._v("如果"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mi",[t._v("a")]),a("mi",[t._v("l")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v("的值比根节点的值小，那么说明 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("v")]),a("mi",[t._v("a")]),a("mi",[t._v("l")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("val")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6944em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")]),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")])])])]),t._v(" 需要递归添加在原根右节点中，因为递归过程中可能会改变右子树的根，所以递归结束后需要将递归返回的节点作为根节点的右节点。")]),t._v(" "),a("li",[t._v("最后如果递归到根为空，则创建一个新节点返回即可。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Definition for a binary tree node.\n * function TreeNode(val, left, right) {\n *     this.val = (val===undefined ? 0 : val)\n *     this.left = (left===undefined ? null : left)\n *     this.right = (right===undefined ? null : right)\n * }\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @param {TreeNode} root\n * @param {number} val\n * @return {TreeNode}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("insertIntoMaxTree")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TreeNode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertIntoMaxTree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("时间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("n")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(n)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("n")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" "),a("li",[t._v("空间复杂度："),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(1)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v(")")])])])])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);