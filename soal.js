/*
1. Maximum diff
Use any language as you desire to do this task. Give me a clear instruction on how to run your code.
Given an array A of integers larger than 0, find the maximum difference between any element where A[i] < A[j] and i < j.
Example: For, A = [4, 2, 1, 5], the answer is 4
*/
const maximumDiff = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] && i + 1 !== arr.length) {
      if (arr[i + 1] > count) {
        count = arr[i + 1] - arr[i];
      }
    }
  }
  return count;
};
let arr = [4, 2, 1, 5];
console.log(maximumDiff(arr));

/*
2. Merge 2 sorted arrays
Use any language as you desire to do this task. Give me a clear instruction on how to run your code.
Given 2 arrays of sorted numbers, merge them efficiently, expected O(n). Do not use built-in functions.
Example:
A = [1, 7, 13, 15]
B = [1, 4, 5, 9, 20]
Result = [1, 1, 4, 5, 7, 9, 13, 15, 20]
*/

const mergeArray = (a, b) => {
  let joinArray = a;
  for (let i = 0; i < b.length; i++) {
    joinArray[joinArray.length] = b[i];
  }
  for (let i = 1; i < joinArray.length; i++) {
    let awal = joinArray[i],
      idx = i - 1;
    while (idx >= 0 && joinArray[idx] > awal) {
      joinArray[idx + 1] = joinArray[idx];
      idx--;
    }
    joinArray[idx + 1] = awal;
  }
  return joinArray;
};

let A = [1, 7, 13, 15],
  B = [1, 4, 5, 9, 20];
// console.log(mergeArray(A, B));
// output :  [1, 1, 4, 5, 7, 9, 13, 15, 20]

/*
3. Print tree
Use any language as you desire to do this task. Give me a clear instruction on how to run your code.
Given graph edges in this format:
A -> B
A -> C
C -> D
A -> E

Write a program that reads input string / file with format like above and print all possible paths from root to all leaf nodes:
A -> B
A -> C -> D
A -> E
*/

/*
4. Transaction balance
Given a table called 'transactions' like this
+----+--------+
| id | amount |
+----+--------+
|  1 |      5 |
|  2 |      2 |
|  3 |      8 |
|  4 |     62 |
|  5 |     34 |
+----+--------+

Write the query to get this result

+----+--------+-------+
| id | amount | total |
+----+--------+-------+
|  1 |      5 |     5 |
|  2 |      2 |     7 |
|  3 |      8 |    15 |
|  4 |     62 |    77 |
|  5 |     34 |   111 |
+----+--------+-------+

Do this task using MySQL
*/
/*
Answer :
SELECT a.id,
       a.amount,(
        SELECT SUM(b.amount) FROM transactions b
        WHERE b.id <= a.id
		) total
FROM transactions  a  
ORDER BY a.id
*/
