---
title: "拓扑排序 - 210. Course Schedule II"
number: 210
topic: "Graph"
problemUrl: "https://leetcode.com/problems/course-schedule-ii/"
difficulty: "Medium"
---

#### <strong>dfs：</strong>

- 同环检测dfs，只要在postorder位置，将当前node加入结果数组；因为dfs的运行顺序，最先结束for循环到达postorder位置的，是末端节点（自由节点）（即那些<strong>没有出度</strong>或<strong>出度指向的点都已处理完</strong>的“末端节点”（自由节点）），所以对于结果数组，最后要reverse才是拓扑排序的顺序

#### bfs:

- 同环检测bfs，只是把pop出的元素记录下来，while循环结束后，如果该数组长度是所有节点数，返回该数组，否则有环，返回空数组
