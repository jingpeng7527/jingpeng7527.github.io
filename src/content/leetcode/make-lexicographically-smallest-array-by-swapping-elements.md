---
title: "2948. Make Lexicographically Smallest Array by Swapping Elements"
number: 2948
topic: "Array"
problemUrl: "https://leetcode.com/problems/make-lexicographically-smallest-array-by-swapping-elements/"
difficulty: "Medium"
---

题意：可以交换差值绝对值小于limit的两个数，求换完后，能达到的<strong>Lexicographically</strong>序最小的数组

```text
输入：nums = [2,7,6,18,2,1], limit = 3
输出：[1,6,7,18,2,2]
```

思路：<strong>索引数组</strong>

1. 先按大小排序，得到该数组的索引数组 \[5,0,4,2,1,3\] → \[1,2,2,6,7,18\]
1. 判断相邻索引所在的数字的大小，如果绝对值超过limit，就分出另一个分组；这里每个组代表的是可以通过互换到达彼此位置的所有数字  \[5,0,4/2,1/3\]
1. 根据最开始的索引数组和小分组的长度，获得小分组里的数字（已排序）
1. 重新排小分组里index的顺序，使得一个分组里最小的数字对应最小的index
1. 按排好的index重新放置数字（0,4,5 → 1,2,2)
