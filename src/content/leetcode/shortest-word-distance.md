---
title: "一次遍历+双指针 - 243. Shortest Word Distance"
number: 243
topic: "Two Pointers"
problemUrl: "https://leetcode.com/problems/shortest-word-distance/"
difficulty: "Easy"
---

核心思想：每一步<strong>只做一次配对</strong>（最新的 a vs 最新的 b），就覆盖了所有"相邻的 a-b 对"。这是关键洞察：<strong>最短距离一定发生在某个"相邻"的 a-b 对之间</strong>，因为如果它们不相邻，中间还有别的 a 或 b，那个会更近。

```python
for i, w in enumerate(wordsDict):
    if w == word1:
        i1 = i              # 更新最近的 a
    elif w == word2:
        i2 = i              # 更新最近的 b
    if i1 != -1 and i2 != -1:
        ans = min(ans, abs(i1 - i2))   # 配对一次
```
