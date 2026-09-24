---
title: "拓扑/剥皮BFS - 310. Minimum Height Trees"
number: 310
topic: "BFS"
problemUrl: "https://leetcode.com/problems/minimum-height-trees/"
difficulty: "Medium"
---

题目：无向图，有一堆树点，可以由他们为root构成树，求组成最矮的树的树点

思路：

- 暴力bfs/dfs tc为N^2，会超时
- 重点⚠️：

    - 这样的点最多只会有两个

        - 如果剩三个，它们之间至少有 2 条边，有一个点的入度会是2，不应该被剩着
        - 更直观地：链状树，奇数长度 → 中心 1 个；链状树，偶数长度 → 中心 2 个

    - 从叶子节点开始拓扑，一层一层剥掉，直到remaining小于等于2
