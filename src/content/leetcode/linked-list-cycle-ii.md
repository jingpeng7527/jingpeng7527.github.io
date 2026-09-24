---
title: "142. Linked List Cycle II"
number: 142
topic: "Linked List"
problemUrl: "https://leetcode.com/problems/linked-list-cycle-ii/"
difficulty: "Medium"
---

![](/leetcode/631dcb52207aae1d.png)

![](/leetcode/6c1cd1617a02efe9.png)

思路：快慢指针如果可以相遇，则有环；相遇时，分别走了k步和2k步，2k - k = n \* 圈长；head到环起点的距离A = k - m，k = n \* 圈长，那么A =  n \* 圈长 - m；让一个指针在相遇点一步一步走，一个从头走，当他们再相遇的时候，刚好在环起点。因为k是圈长的整数倍，所以多出来的就是在绕圈。

类似思路：

<strong>141. Linked List Cycle I： 快慢指针是否相遇</strong>
