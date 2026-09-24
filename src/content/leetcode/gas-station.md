---
title: "134. Gas Station"
number: 134
topic: "Greedy"
problemUrl: "https://leetcode.com/problems/gas-station/"
difficulty: "Medium"
---

思路：

- 因为如果要跑满一圈，不管起点选哪里，总消耗永远是 `sum(cost)`，总收入永远是 `sum(gas)`，满足有起点的条件是：sum(gas) ≥ sum(cost)
- 如果有起点，则可以贪心地找：

    - 从s走到k油箱空了，说明 s 到 k 之间攒的油不够补 k 的亏空，也就是说油箱里的油一直是≥0的，直到到了k。那如果把s和 k 之间的任何站作为起点，对每一站来说他们的油量会由一个≥0的数变成0，更不可能撑到k，所以它们也都不行，那就说明起点在k之后。
    - 所以记录沿路的油箱里的油，如果到i小于0了，就从新开始
