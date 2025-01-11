/**
 * 旋转数组k步
 * 思路：把末尾的元素挨个儿pop, 然后unshift到数组前面
 * 使用pop 和 unshift 时间复杂度O(n^2), 空间复杂度O(1)
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);

  for (let i = 0; i < step; i++) {
    const num = arr.pop();
    if (num) {
      arr.unshift(num); //unshift的操作的时间复杂度是O(n)
    }
  }
  return arr;
}

/**
 * 旋转数组k步
 * 思路：把数组拆分，最后concat拼接到一起
 * 使用concat 和 slice 时间复杂度O(1), 空间复杂度O(n)
 * @param arr arr
 * @param k k
 * @returns arr
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = Math.abs(k % length);

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const result = part1.concat(part2);
  return result;
}