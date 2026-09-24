---
title: "双向单调栈 - 581. Shortest Unsorted Continuous Subarray"
number: 581
topic: "Stack"
problemUrl: "https://leetcode.com/problems/shortest-unsorted-continuous-subarray/"
difficulty: "Medium"
---

题意：给一个没有顺序的数组，找到连续的子数组，使得在对这个子数组排成非降序后，原数组也变成非降序，返回这样的最短子数组的长度

思路：

❌：贪心只找最左边比下一个大的和最右边比前一个小的是不够的

比如1，3，5，4，2 按上面的错误思路 l = r = 5的位置，实际应该是\[3…2\]全部排序才可以

✅：找两个边界，两个方向都需要做一次

\1. 单调栈：

从左往右，单调递增栈，如果有元素被pop出，证明前面有比i位置更大的数字，那么i的位置一定是不对的，需要往左，即是一个可能的右边界，r = max(r, i)；从右往左同理。

1. 双指针：

    从左往右，只需要记录在i之前遇到最大的值，如果i位置的数比这个小，那i就是一个可能的右边界，r= max(r,i)；从右往左同理
