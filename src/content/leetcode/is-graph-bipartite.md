---
title: "二分图 - 785. Is Graph Bipartite?"
number: 785
topic: "Graph"
problemUrl: "https://leetcode.com/problems/is-graph-bipartite/"
difficulty: "Medium"
---

思路：

使用color数组记录染色状态 0-未访问；1-初始色；-1-相反色

- 注意⚠️：

    - 因为不一定全部连通，所以要把所有点都扫一遍
    - 在进队列的时候就要染色，不然无法track pop点的颜色，那么也就无法判断和之前染的是否矛盾
    - 对于dfs来说，因为是子方法，return不能直接return到结果，所以要一层一层判断

- bfs：从0开始，染成1，然后bfs扫：记录pop出点的颜色，如果nei没访问过，把nei染成相反色，再入队；如果访问过，但是和pop色一样，直接返回false
- dfs：从0开始，染成1，然后dfs递归；遍历cur的neis，如果访问过，但是和cur色一样，返回false；如果nei没访问过，把nei染成相反色，如果dfs（nei）是false，return false；相当于染色自顶向下，返回false是自底向上
