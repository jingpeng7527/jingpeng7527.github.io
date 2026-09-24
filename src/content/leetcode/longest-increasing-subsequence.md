---
title: "300. Longest Increasing Subsequence"
number: 300
topic: "Binary Search"
problemUrl: "https://leetcode.com/problems/longest-increasing-subsequence/"
difficulty: "Medium"
---

思路：

通过一个数组存当前increase的item，然后对后续原数组里的数，在这个数组里找可以插进去的位置（大于等于这个数的位置），如果要插在结尾，就表明这是一个可以增加的更increase的数；如果要插在中间，因为对LIS的个数没有影响，用这个数贪心替换这个位置，为后续有可能出现的更长subq做准备
