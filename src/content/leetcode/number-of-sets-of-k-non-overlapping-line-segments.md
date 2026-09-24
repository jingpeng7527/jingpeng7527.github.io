---
title: "1621. Number of Sets of K Non-Overlapping Line Segments"
number: 1621
topic: "DP"
problemUrl: "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments/"
difficulty: "Medium"
---

题意：n个点，即有长度为n-1的线，求可以划分成k个不overlap线段的个数

思路：

1. 排列组合：

    1. 对于k个线段来说，每一条长度至少为1，那么有k个长度是确定为线段的，就有n-1-k的长度是不确定如何使用的
    1. 对于k个线段来说，每条都有延长的可能，就有k个可能；每一条中间都有可能有空隙，可为0，那么加上左右，一共有k+1个空隙
    1. 那么就是说，我们有n-1-k个长度，有k+k+1的可能 ⇒ n-1-k个东西，放2k+1个盒子
    1. 2k+1个盒子，有2k个间隔，和n-1-k个东西组合
    1. C(2k)/(2k+n-k-1)=C(2k/n+k-1)

1. dp：

    `dp[i][j][s]`：处理完前 i 个单位，已经用了 j 条线段，第 i 个单位的状态 s（0 空着，1 属于线段）

    ```text
    dp[i][j][0] = dp[i-1][j][0] + dp[i-1][j][1]      # leave unit i empty
    dp[i][j][1] = dp[i-1][j-1][0] + dp[i-1][j-1][1]  # start a new segment
                + dp[i-1][j][1]                      # extend the previous segment
    ```

    初始化 `dp[0][0][0] = 1`，答案 `dp[n-1][k][0] + dp[n-1][k][1]`
