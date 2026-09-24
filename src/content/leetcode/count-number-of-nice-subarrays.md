---
title: "至多k-至多k-1/deque滑窗 - 1248. Count Number of Nice Subarrays"
number: 1248
topic: "Sliding Window"
problemUrl: "https://leetcode.com/problems/count-number-of-nice-subarrays/"
difficulty: "Medium"
---

题意：返回有k个奇数的子数组的个数

思路：

1. 参考560，ans=至多有k个的个数-至多有k-1个的个数，注意点是算至多的这个helper method记录ans的个数是每次添加当前窗口的长度，因为相当于对当前新加入的i，每一个包括i的子数组都算

1. 用deque记录当前窗口奇数的index

    1. 当`len(idx) > k` 时，要放弃掉最左边的奇数，用last记录它的位置，popleft之后到下一步
    1. 这时 `len(idx) == k` ，以 `i` 为右边界、恰好含 k 个奇数的子数组数量 = 左边界的可选个数，也就是上一个被放弃掉的last和当前deque最前面的奇数的位置的差，把它们加入ans
    1. 对于第一次到达k的时候，还没有last，可以将last初始化为-1

1. 优化deque空间法-滑窗：

    不用deque记录index，仍然记录窗口内奇数个数，在到达k时，缩窗，用l指针一个一个数左边能移动仍且满足条件=k的个数-initial\_gap；再之后如果是碰到偶数，每一个都可以利用这个initial\_gap，直到下次窗口再次满足=k，再次缩窗，重新去数initial\_gap

    ```python
    class Solution:
        def numberOfSubarrays(self, nums: List[int], k: int) -> int:
            subarrays = 0
            initial_gap = 0
            qsize = 0
            start = 0
            for end in range(len(nums)):
                # If current element is odd, increment qsize by 1.
                if nums[end] % 2 == 1:
                    qsize += 1
                if qsize == k:
                    initial_gap = 0
                    # Calculate the number of even elements in the beginning of
                    # subarray.
                    while qsize == k:
                        qsize -= nums[start] % 2
                        initial_gap += 1
                        start += 1
                subarrays += initial_gap
            return subarrays
    ```
