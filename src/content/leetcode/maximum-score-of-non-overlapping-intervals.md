---
title: "3414. Maximum Score of Non-overlapping Intervals"
number: 3414
topic: "DP"
problemUrl: "https://leetcode.com/problems/maximum-score-of-non-overlapping-intervals/"
difficulty: "Hard"
---

前置：

题意：最多可以选择4个不overlap的组合，求使得sum最大的组合，返回字典序最小的组合的index

思路：

1. 根据上题，从后往前推，在位置i，用bisect可知道下一个不overlap的位置nxt，且该nxt位置的最大值已经确定，使用dp，当前dp\[i\]=max(dp\[nxt\]+w, dp\[i+1\])，对应选不选当前位置
1. 由于题中要求最多能选4个，需要多一维记录；dp\[i\]\[j\]=max(dp\[nxt\]\[j-1\]+w, dp\[i+1\]\[j\])
1. 由于需要返回字典序最小的index，而在dp过程中，我们并没有记录index，所以dp除了需要记录最大sum，还要多一个arr记录path，可以是一个tuple；即对于新的潜在的combination，要先对比sum，如果有相同情况对比字典序
1. 最后返回dp\[0\]\[4\]\[1\]，在index=0，overlap4次，tuple中的path arr
