---
title: "1477. Find Two Non-overlapping Sub-arrays Each With Target Sum"
number: 1477
topic: "DP"
problemUrl: "https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/"
difficulty: "Medium"
---

题意：寻找和为target的subarray，返回其中两个长度的最小值

思路：

1. 滑动窗口找sum=target的subarr
1. ⚠️题目要求subarr不可以overlap，所以要有一个dp/best数组，代表在i位置之前一个满足条件的subarr的长度，如果在i位置出现了sum=target的subarr，就可以取前面的那个的长度加起来，与全局结果比较
1. ⚠️：要更新在i位置的best数组，默认是inf，best\[i\] = min(best\[i\], best\[i - 1\])
