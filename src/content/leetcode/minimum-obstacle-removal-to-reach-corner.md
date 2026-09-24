---
title: "0-1BFS - 2290. Minimum Obstacle Removal to Reach Corner"
number: 2290
topic: "BFS"
problemUrl: "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/"
difficulty: "Hard"
---

题意：起点左上角，终点右下角，0是空格，1是obstacle，求为了到达移开obstacle的最少个数

思路：带权最短路，边权只有 0 和 1

1. 用dijkstra：pq里每次取使用最少的；tc是nlogn
1. 更优的办法：使用普通queue，因为距离变化最多只有1，所以当遇到0时放前面，遇到1时放后面，可以自动达成有序的效果，tc变n
