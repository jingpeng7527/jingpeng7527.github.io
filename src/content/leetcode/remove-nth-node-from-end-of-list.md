---
title: "19. Remove Nth Node From End of List"
number: 19
topic: "Linked List"
problemUrl: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
difficulty: "Medium"
---

使用两个指针，让一个指针先走n步，那么它到终点还剩length-n步，正好是第二个指针从头到倒数第n个位置要走的步数。

- ⚠️：这题需要设置<strong>dummy node</strong>

    - <strong>信号一：头节点可能会被删除或替换</strong>

        - <strong>题目示例</strong>：<em>Remove Nth Node From End of List</em>, <em>Delete Node in a Linked List (by value)</em>, <em>Merge Two Sorted Lists</em>。
        - <strong>逻辑</strong>：如果被删的是第一个节点，没有 Dummy Node 的话，你的 `head` 指针就会失效。有了 Dummy，你永远可以通过 `dummy.next` 找回新的头节点。

    - <strong>信号二：需要统一处理逻辑</strong>

        - <strong>场景</strong>：在循环中，如果你发现对“第一个元素”的处理代码和“中间元素”不一样（比如中间元素有 `prev`，第一个没有），那就加个 Dummy。
        - <strong>例子</strong>：<em>Partition List</em>。你需要把小于 x 的连在一起，如果不初始化一个 `small_h`，你每次插入都要判断 `if (small == null)`。

    - <strong>信号三：返回结果是新生成的链表</strong>

        - <strong>场景</strong>：当你需要从无到有构建一个新链表时。
        - <strong>例子</strong>：<em>Add Two Numbers</em>, <em>Merge K Sorted Lists</em>。Dummy Node 充当了新链表的“锚点”，你只需要不断在后面 `append`，最后返回 `dummy.next`。
