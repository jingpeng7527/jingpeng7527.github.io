---
title: "DP - 276. Paint Fence"
number: 276
topic: "DP"
problemUrl: "https://leetcode.com/problems/paint-fence/"
difficulty: "Medium"
---

有n个栅栏需要涂色，有k个色可以选，要求相同的颜色不能连续涂m次，返回方案个数

变形：从长为k的set里选char，组成长度为n的字符串，要求相同的char不能重复m次，返回能组成不同字符串的个数

思路：

- dfs + memo：

    - 我的思路是三个状态，index，当前颜色，重复次数
    - 实际上，因为颜色和颜色之间没有区别，可以变成两个状态

        ```python
        @cache
        def dfs(idx, same):
            if idx == n:
                return 1
            res = (k - 1) * dfs(idx + 1, 1)   # 换颜色，k-1种选择
            if same < m:
                res += dfs(idx + 1, same + 1)  # 不换颜色
            return res

        return k * dfs(1, 1)  # 第一个位置k种选择
        ```

-
