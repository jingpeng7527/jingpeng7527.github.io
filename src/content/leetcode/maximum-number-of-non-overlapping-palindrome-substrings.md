---
title: "2472. Maximum Number of Non-overlapping Palindrome Substrings"
number: 2472
topic: "Greedy"
problemUrl: "https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/"
difficulty: "Hard"
---

题意：给一个str，返回substring长度大于k，且是回文的最多个数

思路：

⚠️：因为又要满足长度大于k，又想要返回最多的个数，那么只要有长度为k或k+1的回文substring就可以+1；即在当前位置i，如果能形成k/k+1的回文，就比在i+1形成更有机会；

⚠️：得判断k和k+1；比如k=3，在i的时候组不成3的substring，但有可能在i+1的时候组成4；在i组不成4的时候，i+1可能有5⇒也就是3
