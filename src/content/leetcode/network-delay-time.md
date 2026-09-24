---
title: "Dijkstra - 743. Network Delay Time"
number: 743
topic: "Graph"
problemUrl: "https://leetcode.com/problems/network-delay-time/"
difficulty: "Medium"
---

- 思路：

    - dis数组：表示原点到每个点的距离，初始化为+∞
    - 使用heap，排序目前遍历到的点到原点的距离，取最小的，更新邻居点到原点的距离，放进heap，并和dis中已经记录的距离相比，如果更小，更新距离；在结束后，求max（dis），如果有+∞，证明有点到达不了，否则得到结果

- ⚠️ 注意：因为并没有删除heap中之前加进去的中间状态，在pop的时候，通过判断这个点的距离是否已经比此状态小，可以剪枝，快速将heap清空
