---
title: "拓扑DP - 1857. Largest Color Value in a Directed Graph"
number: 1857
topic: "Graph"
problemUrl: "https://leetcode.com/problems/largest-color-value-in-a-directed-graph/"
difficulty: "Hard"
---

题意：每个点都是一个lower letter， <strong>Color Value</strong> 定义为路经上同样letter的个数，返回最大的color value，即返回图里路经里有最多一样color的数量

思路：

- 拓扑：为了尽量使答案大，以同一个叶子点为结尾的路径，总是越长越好；所以可以把入度为0的点作为起始点；
- DP：dp\[node\]\[color\]以node为结尾的路径，一路上color的总数量的最大值  
    更新时刻为：

    - 到达该节点cur时，应该更新dp\[cur\]\[cur\_color\]+=1，并更新全局答案
    - 对于cur的领居，因为cur的数据有更新，所以也要随之更新；
