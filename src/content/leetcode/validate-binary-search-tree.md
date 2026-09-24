---
title: "98. Validate Binary Search Tree"
number: 98
topic: "Tree"
problemUrl: "https://leetcode.com/problems/validate-binary-search-tree/"
difficulty: "Medium"
---

⚠️注意：对于BST，不是每个subTree都是BST就满足定义了。比如下面的树，12应该在10的右子树

```python
10
/  \
5    15
/ \
2   12
```

- 思路：

    - dfs，有两个left，right记录该node的left或者right的范围；意思是，对于root，\[-∞，+∞\]，对于其他node，node.left, \[left, node.val\], node.right, \[node.val, right\]
    - bst性质：inorder有顺序，用一个全局变量记录prev node的值，默认是-∞；先dfs left node；inorder位置比较，当前点比prev小，直接返回false，如果大于，将prev记录为当前node.val，返回dfs right node结果
