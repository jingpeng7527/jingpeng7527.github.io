---
title: "preSum/滑窗 - 930. Binary Subarrays With Sum"
number: 930
topic: "PreSum"
problemUrl: "https://leetcode.com/problems/binary-subarrays-with-sum/"
difficulty: "Medium"
---

题意：

在只有0和1的数组里，找出和为goal的subarray的个数

解法：

1. presum

1. 和恰好为goal的subarray的个数 = 和至多为goal的个数- 和至多为（goal-1）的个数

    和至多为k的方法可以用滑窗来实现：

    ```python
    cur = 0
    ans = 0
    l = 0
    for i in range(len(nums)):
        cur += nums[i]
        while cur > k:
            cur -= nums[l]
            l += 1
        ans += i - l + 1 #对于新加的i位置来说，有i-l+1个subarray满足条件
    return ans
    ```

    更优解 - 一次遍历：

    ```python
    class Solution:
        def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
            ans = 0
            sum1 = sum2 = 0
            left1 = left2 = 0

            for i, x in enumerate(nums):
                sum1 += x
                while left1 <= i and sum1 >= goal:  # 避免 goal = 0 的情况下标越界
                    sum1 -= nums[left1]
                    left1 += 1
                ans += left1  # 先加上 >= goal 的子数组个数

                sum2 += x
                while sum2 > goal:
                    sum2 -= nums[left2]
                    left2 += 1
                ans -= left2  # 再减去 > goal 的，剩下的就是 = goal 的

            return ans
    ```

1. 纯滑窗：

    在缩窗的时候，如果左边遇到了零仍然接着缩并记录连着几个零，然后在后面把这些加进去

    ```python
    class Solution:
        def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
            left, zeros = 0, 0
            accumulator = 0
            arrays = 0

            for right in range(len(nums)):
                accumulator += nums[right]

                while left < right and (accumulator > goal or nums[left] == 0):
                    if nums[left] == 1:
                        zeros = 0
                    else:
                        zeros += 1
                
                    accumulator -= nums[left]
                    left += 1
            
                if accumulator == goal:
                    arrays += 1 + zeros

            return arrays
    ```
