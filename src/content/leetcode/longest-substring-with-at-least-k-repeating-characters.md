---
title: "分治 - 395. Longest Substring with At Least K Repeating Characters"
number: 395
topic: "Divide and Conquer"
problemUrl: "https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/"
difficulty: "Medium"
---

题意：

求每个字符都必须出现k次以上的substring的最长长度

普通sliding window失效的原因：比如aabbcdc，对于新出现的char，如果直接缩窗会忽略一些可能性

解法：

1. brute force: 对于所有substring检查是否满足条件，返回最长
1. 分治：对于出现次数小于k的，结果只可能出现在以它为分界线的substring中，递归获得不断划分出的所有满足条件substring的长度，取最长

```python
def longestSubstring(self, s: str, k: int) -> int:
        if len(s) < k:
            return 0
        # 找一个出现次数不够 k 的字符
        for c in set(s):
            if s.count(c) < k:
                # 用 c 把字符串切开,每一段分别递归,取最大
                return max(self.longestSubstring(sub, k) for sub in s.split(c))
        # 走到这里说明每个字符都 >= k 次,整段都合法
        return len(s)
```

1. sliding window：强制规定窗口里恰好有 t 种不同的字符。

枚举窗口里char种类从1-26，并记录当前窗口种类总数和个数没超过k的种类数，如果窗口里char种类超过t就缩窗，缩完窗如果没超过k的种类数是0，就刚好是一个满足条件的substring，就是potential answer
