/**
 * 1399. Count Largest Group
 * Time Complexity: O(nlogn) digitalSum方法最多需要logn次操作, 主循环对1~n进行遍历
 * Space Complexity: O(1)  n最大为9999，digital sum为36，因此map size最大为36, 是常数
 * @param n
 */
export function countLargestGroup(n: number): number {
  const map = new Map<number, number>();

  for (let i = 1; i <= n; i++) {
    const sum = digitSum(i);
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  let max = 0;
  for (const count of map.values()) {
    max = Math.max(max, count);
  }

  let res = 0;
  for (const count of map.values()) {
    if (count === max) res++;
  }

  return res;
}

function digitSum(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
