---
title: "必须DFS的DP - 329. Longest Increasing Path in a Matrix"
number: 329
topic: "DP"
problemUrl: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/"
difficulty: "Hard"
---

思路：对每一个点做dfs，（以每一个为起点，向四周dfs更新递增path），返回以这个点为起点的最长递增路径，并用memo

- ⚠️注意：为什么不能用dp数组向四周遍历并更新？

    - dp数组更新的条件是所有它依赖的 `dp[i][j]` 必须已经被算到了最终值，此题中，`dp[x][y]` 的依赖是"所有比 `matrix[x][y]` 小且相邻的格子"。这些格子在矩阵里<strong>位置完全不固定</strong>——可能在 `(x,y)` 的左上、右下、任何方向。<strong>矩阵的行列遍历顺序和数值大小没有任何关系。</strong>
