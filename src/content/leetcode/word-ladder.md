---
title: "BFS/双向BFS - 127. Word Ladder"
number: 127
topic: "BFS"
problemUrl: "https://leetcode.com/problems/word-ladder/"
difficulty: "Hard"
---

思路：

单向BFS：

从beginWord开始，加入queue。  
记录bfs的层数（即距离），每一层的queue里的单词，对每一位替换26个字母，组成new\_word  
如果new\_word等于endWord，证明当前路径就是最短的，直接返回level+1  
否则，如果new\_word在word\_set（word\_list的去重版）里就加入queue，继续bfs

⚠️注意：这个bfs需要记录visited，因为替换字母之后可能会有环，这里采用的方法是，直接把visited过的word从word\_set里直接删掉

时间复杂度：每个单词最多被处理一次 → N，单词的每一位 → L, 替换字母 → 26，字符串切片/hashset的discard → L

O(26 \* L² \* N)

- `L` = 单词长度
- `N` = wordList 大小

<strong>双向BFS</strong>

使用两个set来代表queue，从头和尾同时开始，哪个短遍历哪个，交换使得start\_set总是最短的

在同一层使用一个visited\_set，来装potential的下一个queue，这就是下一个start\_set

- 仍然用word\_set的discard来记录visited
