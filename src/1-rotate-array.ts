/**
 * 旋转数组k步(k is non-negative)
 * 思路：把末尾的元素挨个儿pop, 然后unshift到数组前面
 * 使用pop 和 unshift 时间复杂度O(n^2), 空间复杂度O(1)
 * @param arr input array
 * @param k number of steps
 * @returns arr original array
 */
export function rotate1(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = k % length;

  for (let i = 0; i < step; i++) {
    const num = arr.pop();
    if (num != undefined) {
      arr.unshift(num); //unshift的操作的时间复杂度是O(n)
    }
  }
  return arr;
}

/**
 * 思路：把数组拆分，最后concat拼接到一起
 * 使用concat 和 slice 时间复杂度O(1), 空间复杂度O(n)
 * @param arr input array
 * @param k number of steps
 * @returns arr new array
 */
export function rotate2(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length === 0) return arr;
  const step = k % length;

  const part1 = arr.slice(-step);
  const part2 = arr.slice(0, length - step);
  const result = part1.concat(part2);
  return result;
}

/**
 * 思路：把数组整个反转过来, 再反转前step项，最后反转(length - step)项
 * 时间复杂度 O(n), 空间复杂度 O(1)
 * @param arr input array
 * @param k number of steps
 * @returns arr original array
 */
export function rotate3(arr: number[], k: number): number[] {
  const length = arr.length;
  if (!k || length ===0 ) return arr;
  const step = k % length;

  const reverse = (nums: number[], start: number, end: number): void => {
    while(start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(arr, 0, length - 1);
  reverse(arr, 0, step - 1);
  reverse(arr, step, length - 1);

  return arr;
}