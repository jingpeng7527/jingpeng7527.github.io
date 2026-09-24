---
title: "76. Minimum Window Substring"
number: 76
topic: "Sliding Window"
problemUrl: "https://leetcode.com/problems/minimum-window-substring/"
difficulty: "Hard"
---

`s = "ADOBECODEBANC", t = "ABC"`

`s = "a", t = "aa"`

思路：使用滑动窗口，记录当前窗口中存在在t中的char的个数，并且记录个数超过目标的char的个数qualify；缩小窗口的条件是满足个数等于总数。进入缩小条件后，要先记录此时的结果（substring的开始点和长度，以便最后slicing），然后如果l指针属于目标char，且个数等于目标个数，相当于删去这个char就不会满足条件了，那么qualify-1，否则说明这个窗口下的char的个数是多余目标值的，我们可以接着缩小窗口。

- ⚠️我做错的地方：在进入缩小窗口时，直接进行缩小，错过第一次记录的时间；如果当前char不存在于t，可以直接忽略；在更新结果时，不需要slicing，存start和长度可以最后得到ans
