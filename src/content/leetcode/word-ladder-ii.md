---
title: "BFS+反向DFS+字符预处理 - 126. Word Ladder II"
number: 126
topic: "BFS"
problemUrl: "https://leetcode.com/problems/word-ladder-ii/"
difficulty: "Hard"
---

基于127的思路，需要思考：

1. 由于需要返回所有最短的路径，在遇到endWord时，不能直接返回，要把这一层所有的word都检查完；方法是设置一个flag，使得在结束endWord这一层时，while结束
1. 关于visited，如果这一层两个word指向下一层的同一个new\_word，之前是在遇到的第一次直接删除，但这次的话，因为要把所有路径都加进去，所以不能直接把new\_word删掉，而是用一个set存这一层所有走过的word，然后统一删掉
1. memory优化：在BFS中要反向存图，并在dfs的时候从endWord开始进行回溯，因为BFS的作用是建图，是从beginWord开始，连接所有在word\_set里的word；这样会存在很多冗余的到达不了endWord的边和点。反向dfs可以保证visit的每个word都可以通向endWord。
1. 时间优化：对字符做预处理，把每一位用\*代替之后，作为key，把具体的word加入作为value；这样在后面组成new\_word时，可以得到当前word的代替key，然后取对应的word，使得查询时间复杂度由O(N × L × 26) # N = len(wordList), L = len(beginWord) 变O(N × L）

    \*ot -\> \[hot, dot, lot\]
