---
title: "剥皮BFS - 1245. Tree Diameter"
number: 1245
topic: "BFS"
problemUrl: "https://leetcode.com/problems/tree-diameter/"
difficulty: "Medium"
---

思路一：

根据上题的思路，中心root只会剩一个或两个：  
如果是两个的情况，如下图，答案为最长路径\*2+1；

a - b  
  /      \\  
x        y

如果是一个的情况，答案为最长路径\*2（因为如果a-x和a-y不相等的话，a就不是中心点了），会变成是两个中心点且两边相等

a   
  /    \\  
x      y

思路二：由任何一点出发，找到最远的点，再由这个最远的点出发，找到另一个最远的点，距离即是答案

思路三：树形dp

对答案来说，要不是当前点的前两条最长路的和，要不是它的子节点的答案；

维护一个全局变量，在每层dfs中都记录最长的路径，但只返回第一长的子路径
