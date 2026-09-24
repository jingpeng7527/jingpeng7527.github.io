---
title: "3635. Earliest Finish Time for Land and Water Rides II"
number: 3635
topic: "Greedy"
problemUrl: "https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/"
difficulty: "Medium"
---

题意：有水陆两个ride，都有startTime和duration，想要两种ride都来一遍，但是要有先后顺序，选出能最早结束的组合的结束时间

思路：选出陆ride中最早结束的，然后算出所有在这之后开始的水ride，得到最早的结束时间；相反再来一次，得出最优

code：写的比较简洁版

```python
class Solution:
    def earliestFinishTime(self, startL, durL, startW, durW):
        minL = minW = res = float('inf')
        n, m = len(startL), len(startW)

        for i in range(n):
            minL = min(minL, startL[i] + durL[i])

        for i in range(m):
            minW = min(minW, startW[i] + durW[i])
            res  = min(res,  max(minL, startW[i]) + durW[i])

        for i in range(n):
            res = min(res, max(minW, startL[i]) + durL[i])

        return res
```
