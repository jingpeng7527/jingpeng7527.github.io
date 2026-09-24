---
title: "最小堆 贪心-1353. Maximum Number of Events That Can Be Attended"
number: 1353
topic: "Interval"
problemUrl: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/"
difficulty: "Medium"
---

思路：

1. 贪心贪的是，枚举当前时间day，将今天开始的所有区间加入堆，移除那些无效会议（结束时间比day 小的区间），弹出结束最早的那个会议，更新答案。
1. 优化：不必枚举每一天，只在有会议开始或有会议可选时处理，否则这段时间就是没有意义。即，i\<n或者heap不为空。⚠️但如果heap不为空，要枚举每一天
