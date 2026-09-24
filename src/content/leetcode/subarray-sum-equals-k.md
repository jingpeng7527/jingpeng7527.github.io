---
title: "preSum - 560. Subarray Sum Equals K"
number: 560
topic: "PreSum"
problemUrl: "https://leetcode.com/problems/subarray-sum-equals-k/"
difficulty: "Medium"
---

求nums子数组和为k的个数，因为nums里可能有负数，不能滑窗

前置知识： <em>nums</em>\[<em>i</em>\] 到 <em>nums</em>\[<em>j</em>−1\] 的元素和等于 <em>k  =》 s</em>\[<em>j</em>\]−<em>s</em>\[<em>i</em>\]=k

算完前缀和，可以N^2的双层循环找 在i前 有多少和i的差 为k的j

更优的是用map边算前缀和边记录个数，边算

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        cnt = defaultdict(int)
        ans = s = 0
        for x in nums:
            cnt[s] += 1
            s += x
            ans += cnt[s - k]
        return ans
```
