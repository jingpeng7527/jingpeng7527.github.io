---
title: "394. Decode String"
number: 394
topic: "Stack"
problemUrl: "https://leetcode.com/problems/decode-string/"
difficulty: "Medium"
---

复杂情况：`3[a2[c]]` 有嵌套

思路：倒着解决并拼接，栈里存（pre\_str，num）

1. 在遇到`]` 时，把cur\_str \* num，然后与pre\_str拼接  ⇒ pre\_str + cur\_str \* num
1. 遇到`[` 时，把（pre\_str，num）存进栈里，然后num和cur\_str清零
1. 如果是数字，num\*10+s\[i\]
1. 如果是字符，cur\_str+s\[i\]

时间复杂度：O(N \* 嵌套深度)
