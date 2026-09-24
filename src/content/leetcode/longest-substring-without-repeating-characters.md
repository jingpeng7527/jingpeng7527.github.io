---
title: "非定长 求最大 可不连续缩窗的滑窗-3. Longest Substring Without Repeating Characters"
number: 3
topic: "Sliding Window"
problemUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
difficulty: "Medium"
---

思路：

1. 经典滑窗：用map记录每个字符遇到的个数，先无条件往右扩窗，再用while左边缩窗，直到当前字符在窗口里唯一。易错点还是更新答案的位置，如果只在缩窗的时候更新，首先要在改left位置之前更新，且要给最后一个位置在while外面打个补丁；

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        l = 0
        ans = 1
        if len(s) == 0:
            return 0
        cnt = defaultdict(int)
        for i in range(len(s)):
            cnt[s[i]] += 1
            while cnt[s[i]] > 1:
                ans = max(ans, i - l)
                cnt[s[l]] -= 1
                l += 1
        if cnt[s[-1]] == 1:
            ans = max(ans, len(s) - l)
        return ans

```

所以更好的做法是在每一个right的位置都更新一次

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        l = 0
        ans = 1
        cnt = defaultdict(int)
        for i in range(len(s)):
            cnt[s[i]] += 1
            while cnt[s[i]] > 1:
                cnt[s[l]] -= 1
                l += 1
            ans = max(ans, i - l + 1)
        return ans
```

1. hashmap记上次位置滑窗：因为只允许出现一次，所以当再次出现某个字符，left可以直接跳到该字符上一个位置之后。  
    注意⚠️：这个方法在更新left位置时，要判断right字符上一个位置是否还在窗口内，所以要比较该位置和原来left的大小关系，如果旧位置小于left的话，就可以直接忽略这个情况

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        l = 0
        ans = 1
        cnt = {}
        for i in range(len(s)):
            if s[i] in cnt and cnt[s[i]] >= l:
                l = cnt[s[i]] + 1
            cnt[s[i]] = i
            ans = max(ans, i - l + 1)
        return ans
```
