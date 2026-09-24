---
title: "变通滑窗 - 1658. Minimum Operations to Reduce X to Zero"
number: 1658
topic: "Sliding Window"
problemUrl: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/"
difficulty: "Medium"
---

题意：给一个x，一个nums，可以选nums最左边或者最右边的数从x里减去，求使得x=0的最小操作数

解法：

1. ⚠️：递归或者记忆化，状态是2^n，1e10 量级；题目要求1e5
1. 变通一下：求和为sum(nums)-x的subarray的最长长度，可用滑窗；如果当前窗口和比target小，一直往右扩窗；如果等于就是一个可能解；如果大，pop左边；
