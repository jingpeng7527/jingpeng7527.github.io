---
title: "双指针 - 244. Shortest Word Distance II"
number: 244
topic: "Two Pointers"
problemUrl: "https://leetcode.com/problems/shortest-word-distance-ii/"
difficulty: "Medium"
---

[https://leetcode.com/problems/shortest-word-distance-ii/description/?envType=problem-list-v2&amp;envId=design](https://leetcode.com/problems/shortest-word-distance-ii/description/?envType=problem-list-v2&envId=design)

因为wordlist不会改变，所以可以提前用dict存好，然后也是和一样的思路

因为idx存在dict里，所以每次移动较小的那个

```python
i, j = 0, 0
while i < len(l1) and j < len(l2):
    ans = min(ans, abs(l1[i] - l2[j]))
    if l1[i] < l2[j]:
        i += 1               # l1[i] 小，往后挪让它变大
    else:
        j += 1               # l2[j] 小，往后挪让它变大
```
