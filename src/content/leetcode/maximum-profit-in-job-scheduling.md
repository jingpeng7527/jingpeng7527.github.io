---
title: "interval: dp + binary / heap 1235. Maximum Profit in Job Scheduling"
number: 1235
topic: "Interval"
problemUrl: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/"
difficulty: "Hard"
---

有startTime，endTime，profit的events，返回通过参加加起来得到的最多的profit

思路：

1. dp+binary：

    按 `endTime` 排序，`dp[i]` = 考虑前 i 个 job 能获得的最大 profit。

    对每个 job i（1-indexed），两种选择：

    - <strong>不选</strong>：`dp[i] = dp[i-1]`
    - <strong>选</strong>：找到最后一个 `endTime ≤ startTime[i]` 的 job j，`dp[i] = dp[j] + profit[i]`

    对于找j，和LIS很像，用二分。从前i个job中找endTime≤startTime\[i-1\]的最后一个。

    ⚠️ 注意：

    \1. 因为要找<strong>最后一个</strong> end ≤ start 所以是bisect\_right，

    \2. 因为会有多个相等的时间，用tuple比较的时候，把当前的tuple的其他地方填成inf

1. heap：

    按开始时间排序，用heap维护(endTime, profit\_total)，对于每个job来说，把heap里所有在这之前结束的都pop出来，和pre比，得到更大的值，然后执行当前job，更新全局结果pre+profit，并把执行了当前job后更新的结束时间和pre+profit放进heap。

    ⚠️注意：对于两个有相同startTime或者需要相同pre的job，可能有一种错觉是所有可能性都在第一次pop出去了，第二个会产生更新错误；实际上，我们在更新pre的时候，是拿之前得到的pre和又有可能结束的job比，如果没有产生更好的值，pre的值仍然保留。

![](/leetcode/cb7ffea5e846cd58.png)
