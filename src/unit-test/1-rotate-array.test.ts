import { rotate1, rotate2 } from '../1-rotate-array';

describe('数组旋转', () => {
  it('功能测试 rotate1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    const res = rotate1(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4,])
  })
  it('功能测试 rotate2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4,])
  })
  it('数组为空', () => {
    const res = rotate2([], 3)
    expect(res).toEqual([])
  })
  it('k 是负值', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = -3

    const res = rotate2(arr, k)
    expect(res).toEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('k 是 0', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 0

    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
  it('k 不是数字', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    const k = 'abc'

    // @ts-ignore
    const res = rotate2(arr, k)
    expect(res).toEqual(arr)
  })
  it('性能测试', () => {
    const arr1 = []
    for (let i = 0; i < 10 * 10000; i++) {
      arr1.push(i)
    }
    console.time('rotate1')
    rotate1(arr1, 9 * 10000)
    console.timeEnd('rotate1')

    const arr2 = []
    for (let i = 0; i < 10 * 10000; i++) {
      arr2.push(i)
    }
    console.time('rotate2')
    rotate2(arr2, 9 * 10000)
    console.timeEnd('rotate2')
  })
})