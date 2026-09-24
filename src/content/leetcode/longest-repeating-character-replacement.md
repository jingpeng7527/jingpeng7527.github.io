---
title: "懒更新滑窗 - 424. Longest Repeating Character Replacement"
number: 424
topic: "Sliding Window"
problemUrl: "https://leetcode.com/problems/longest-repeating-character-replacement/"
difficulty: "Medium"
---

题意：最多可以替换k个字母，求修改过后使得子数组内所有字符都相等的数组的最长长度

思路：记录窗后内最多字符的个数，需要修改的次数是窗口长度-最多字符数，更新答案；如果需要修改的超过k个，instead of缩窗，平移窗口，根据规则更新

注意⚠️：

这里最不好理解的点就是为什么不缩窗，因为我们是想找最长窗口，之前某一个长度满足条件之后，我们就可以保持这个窗口长度，除非遇到满足条件的更长的窗口

还有为什么在窗口平移（移动左边界）时不需要更新 max\_cnt？  
当我们把左边界移出窗口时，窗口内某个字符的最大出现次数 max\_cnt <strong>只可能变小</strong>。如果我们去精确更新它，会让“需要替换的次数 = 窗口长度 − max\_cnt”变大，从而更容易触发“不合法”

```python
class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        cnt = [0] * 26
        max_cnt = 0
        ans = 0
        l = 0
        for i in range(len(s)):
            cnt[ord(s[i]) - ord("A")] += 1
            max_cnt = max(max_cnt, cnt[ord(s[i]) - ord("A")])
            if i - l + 1 - max_cnt > k:
                cnt[ord(s[l]) - ord("A")] -= 1
                l += 1
            ans = max(ans, i - l + 1)
        return ans
```

也就是说，窗口不断扩张，只有在不满足条件的时候，需要平移，累加到最后，一定是满足条件的最长窗口

（平移时移出了左边的字符，`count` 减了 1，但 `max_freq` 不会随之减小。这没关系——`max_freq` 偏高只会让条件"更难触发不合法"，即窗口会继续平移而不会扩张，直到真的遇到更高频的字符）

```python
class Solution:
    def characterReplacement(self, s, k):
        count = defaultdict(int)
        left = 0
        max_freq = 0

        for right in range(len(s)):
            count[s[right]] += 1
            max_freq = max(max_freq, count[s[right]])

            if (right - left + 1) - max_freq > k:  # 需要替换的超过 k
                count[s[left]] -= 1                 # 平移：移出左边字符
                left += 1                           # 不缩窗，窗口大小保持不变

        return right - left + 1   # 窗口最终大小就是答案
```
