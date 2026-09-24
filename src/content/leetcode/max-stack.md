---
title: "716. Max Stack"
number: 716
topic: "Heap"
problemUrl: "https://leetcode.com/problems/max-stack/"
difficulty: "Hard"
---

我本来的想法是一个stack 一个单调递增栈max\_stk，然后都存tuple(val,index)，stack里存val在max\_stk的idx，max\_stk存stack的，这样pop和popmax的时候标记一个inf之类的，跳过就好了（因为看Insert Delete GetRandom O(1)这题是把index存起来做的）

这样做有一些问题：  
一个是本质上单调栈就行不通，用单调栈会缺信息，比如加入10,5，max\_stk只存10，popmax之后还需要有5的  
另一个是处理标记inf的时候，直接删掉是会影响index

看了题解一共有两个方法，都是给每个数一个unique\_id，有点像数据库自增主键（？）

1. 用两个sortedlist（双向链表+TreeMap的实现），stack存(id, x), max\_stk存(x，id)，但这样所有方法的复杂度都是logn，gemini说pop也是logn是因为python是用分块数组或者平衡树实现这个数据结构的，但是题解说python有some special handles on the last element of SortedList
1. 还是一个stack，一个max\_stack，max\_stack用大堆来实现，还需要再加一个set用来记录两个pop过程中deleted的值的index，因为两个pop会互相影响stack和max\_stack里的值，所以除了push的所有方法在最前面都要判断栈顶或者堆顶的元素是不是之前已经被删掉了（也就是idx在不在set里）。时间复杂度的话push和两个pop都是logn，top和peek是1
