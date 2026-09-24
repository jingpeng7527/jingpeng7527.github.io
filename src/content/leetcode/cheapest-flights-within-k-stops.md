---
title: "限制级Dijkstra - 787. Cheapest Flights Within K Stops"
number: 787
topic: "Graph"
problemUrl: "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
difficulty: "Medium"
---

- 思路

    - ❌：如果只限制步数，但仍然按之前的逻辑更新dis，可能会在更新中间点时因为先更新了更小的值，在后面因为不满足步数放弃时，错过满足条件但稍大的点

        - 比如：

            - 路径 A: `src -> B -> dst` ，总价 100，中转 1 次。
            - 路径 B: `src -> X -> Y -> B -> dst` ，总价 50，中转 3 次。

            因为优先选最小，dis\[B\]已经被更新为更小的值，当中转次数要求\<3时，不会再次更新dis\[B\]到满足条件但稍大的值

    - 仍然<strong>Dijkstra：</strong>dis\[i\] 记录的是：到达节点 i 时的【最小步数】

        - 剪枝条件由只考虑更小的距离变成考虑步数（因为我们是用heap从小到大排距离的，如果后到达的步数比之前记录的还多，距离还远，就可以直接丢弃）

    - bellman: 刚好更新k轮，⚠️每轮更新都是独立的，所以在开始前要有一个临时变量维持上一轮的数据
