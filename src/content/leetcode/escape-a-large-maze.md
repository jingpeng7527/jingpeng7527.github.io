---
title: "limited BFS - 1036. Escape a Large Maze"
number: 1036
topic: "BFS"
problemUrl: "https://leetcode.com/problems/escape-a-large-maze/"
difficulty: "Hard"
---

题意：给起点和终点，以及一个block\_list里有不能穿过的点的坐标，求能不能到

这题考查对时间复杂度的理解，最重要的是这两个范围

- `0 <= blocked.length <= 200`
- `0 <= xi, yi < 10^6`

思路：

普通dfs，最差情况是blocked为空，方向顺序没选好，有可能导致蛇形遍历整张图；普通bfs，有可能起点在中心，block为空，终点在最边上；这两种方法都是n^2，n= `10^6` ，这样n^2就超了10^8。

<strong>Limited BFS</strong>

因为blocked长度有限，反向思考，什么时候过不去呢：起点或者终点，被围起来了。那么blocked最多可以围起来多少个grid呢？当blocked被拉长成一条对角线时，可以围起来最多的grid，也就是说，当从某个点出发visited了超过这个个数的点，那么这个点就没有被围起来。

对起点和终点各做一次 BFS，BFS 在两种情况下返回 `True`：

1. 找到了另一个点（直接连通）
1. visited 数量超过 `max_size`（没有被围住，可以自由移动）

注意⚠️：  
\1. 要同时检验起点和终点是否被围起来了  
\2. 对角线上的点的个数最多为200，也就是等腰三角形的边长最多为200，那么最多围起来`blocked.length^2//2` 个grid  
3.注意这个visited什么时候放置：（详见基础 BFS visited 放置原则）
