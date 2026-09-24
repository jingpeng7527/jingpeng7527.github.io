---
title: "反向DFS/并查集 - 803. Bricks Falling When Hit"
number: 803
topic: "Graph"
problemUrl: "https://leetcode.com/problems/bricks-falling-when-hit/"
difficulty: "Hard"
---

题意：

- 1代表砖，能和最上排砖连接起来的砖都是稳定的砖；给一个hits数组，表示第几次打掉砖的位置，如果因为这个砖被打掉而变成不稳定的砖<strong>（</strong><strong>即不再和最上排砖连接或不再和稳定的砖连接</strong><strong>）</strong>也会掉下来，返回每次被迫掉下来的砖的个数

    \|\_.\_\|    \|\_.\_  如果是第一种情况，没有砖会被迫掉落，如果是第二种，.右边的\_就会掉落

思路：

- 反向DFS：

    - 先将所有的hits的砖全部敲掉（-=1），然后标记所有的稳定砖（DFS）
    - 然后反向遍hits，一块一块往上补，如果说补上这块砖能使得它变成稳定砖，那么和它连接的所有1（悬空砖）都可以变成稳定砖，这些悬空砖就是因为这个砖打掉而被迫掉落的那些砖

    <details>
    <summary>thoughts:</summary>

    ```python
    # we start from cur and check its neighbors
    # if we can arrive at top or any stable bricks(tagged as 2 now)
    # all the 1 we counters are the bricks falls because of cur,
    # we return the number of 1s and paint them to 2
    ```

    </details>

    - ⚠️注意：

        - 将hits里的砖敲掉是-=1，再补回是+=1，这样可以知道原本是不是空，如果空直接返回0
        - 对于补齐过程：

            - 判断补上cur砖能不能变稳定只需要判断它的领居是不是稳定砖
            - 可以利用同一个标记DFS来标记并返回从1→2的砖的个数
