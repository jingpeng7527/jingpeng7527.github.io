---
title: "单调栈 - 1944. Number of Visible People in a Queue"
number: 1944
topic: "Stack"
problemUrl: "https://leetcode.com/problems/number-of-visible-people-in-a-queue/"
difficulty: "Hard"
---

题意描述：

对于i来说，i 能看到 j，当且仅当 i 和 j 之间所有人的高度都严格小于 min(heights\[i\], heights\[j\])。  
<strong>换句话说，中间不能有任何人比 i 或 j 任何一个高。</strong>  
求每个人一共能看到几个人？

```text
Input: heights = [10,6,8,5,11,9]
Output: [3,1,2,1,1,0]
Explanation:
Person 0 can see person 1, 2, and 4.
Person 1 can see person 2.
Person 2 can see person 3 and 4.
Person 3 can see person 4.
Person 4 can see person 5.
Person 5 can see no one since nobody is to the right of them.
```

⚠️：对于10来说，他看不到5，但可以看到11

思路：

1. 维护一个单调递减栈，从右往左遍历数组压入栈中，如果栈顶元素小于当前值，证明pop出这个人可以被当前人看到，记录pop出的个数，如果栈内还有元素，那么是当前人最后可以看到的一个，还可以再加一；

    1. 这种方法为什么可以：拿8举例，到8的时候，栈内有11，5，他可以pop5，看到11；为什么pop5没有影响？这个5对于后面所有的人来说，都看不到，因为有8挡住了，所以对于单调递减栈来说，因为有更大的数字进来被pop出去的数，不再被需要
    1. 从左到右为什么更复杂：从左往右扫，你知道的是"谁被 `i` 挡住了"，因为当前pop出来的值，都是被 i 挡住的，但你<strong>不知道</strong>被pop出来的这些人之前看到了几个人。只能是每次累加：对于i，如果不pop出人，只有栈顶的人可以看到它，给栈顶的ans+1，如果一直pop，i是这些pop出的人最后一个能看到的人，最后给pop出每个人的ans+1
