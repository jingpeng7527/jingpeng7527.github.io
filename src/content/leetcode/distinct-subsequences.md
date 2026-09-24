---
title: "DP - 115. Distinct Subsequences"
number: 115
topic: "DP"
problemUrl: "https://leetcode.com/problems/distinct-subsequences/"
difficulty: "Hard"
---

思路：

dp定义为 s 的前 i 个能匹配 t 的前 j 个的个数

1. 如果i，j指向的字符不相等，只能不选i，dp\[i\]\[j\] = dp\[i-1\]\[j\]
1. 如果i，j指向的字符相等，可以选i或者不选i,

    dp\[i\]\[j\] =  dp\[i-1\]\[j-1\]+ dp\[i-1\]\[j\]

⚠️初始化是最难想的，如果t为空，对于任何一位 i ，都有dp=1，因为可以通过不选来得到结果
