---
title: "并查集 - 323. Number of Connected Components in an Undirected Graph"
number: 323
topic: "Graph"
problemUrl: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"
difficulty: "Medium"
---

### <strong>UnionFind</strong>

- 参数：

    - parent: List(int) 初始化为 `list(range(n)`
    - rank: List(int),
    - connected: int

- Union: 将两个node连接起来
- Find: 给定一个node，找到它的parent

- Path Compression 路径压缩 (`find`)

    - 目的：使树结构趋于<strong>扁平化，</strong>以 O(1) 的时间找到某一节点的根节点，即将根节点记作parent\[cur\]，而不是连接点

        - 即A→B→C→D，我们找A的根节点时，想直接获取D，而不再经过B C

    - 逻辑：

        - 默认每个点的parent都是自己
        - 如果不是，就往上追溯，直到root（root的parent肯定是root），把沿路点的parent都改成root

    - ⚠️注意：路径压缩是懒更新，所以在union中，必须用find找根节点，而不是parent数组。

        - 举例：

            union(1,2), union(2,3)  
            parent = \[0, 2, 3, 3\]

            1→2, 2→3，此时1的root还没有更新成3，直到后面调用find（1）才会进行路径压缩

- Union by Rank  按秩合并(`union`)

    - 目的：让树更平衡，防止树退化成链表，使得树的高度大致在 `logN` 这个数量级
    - 逻辑：

        - 对于每个点，rank都为1，即该树的高度
        - <strong>比较根节点</strong>：必须先 `find` 得到 `rootA` 和 `rootB`。
        - 在union时，比较两个点root的rank，把小树接到大树上去，这样大树的rank不变，小树的parent变成大树的root；
        - ⚠️注意：

            - 在两棵树高度一样的时候，需要更新被接树的高度+1
            - `union` 操作的是两个集合的<strong>根节点</strong>，而不是传入的原始节点。

- connected：连通分量个数

    - 初始状态：如果图中有 n 个节点，且没有任何边连接，那么 `count = n`
    - 合并过程：每成功执行一次 `union(x, y)`（即两个点原本不连通，现在连通了），`count` - 1

## [<strong>130. Surrounded Regions</strong>](https://leetcode.com/problems/surrounded-regions/)

这题用uf的思路是弄一个dummy node，把所有边上不需要修改的O都连起来，修改不和dummy连通的O
