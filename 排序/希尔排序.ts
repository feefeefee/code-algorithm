import { testSort } from "hy-algokit"

function shellSort(arr: number[]): number[] {
  const n = arr.length

  // 选择不同的增量（步长/间隔）
  let gap = Math.floor(n / 2)

  // 1.第一层循环不断改变步长的过程
  while (gap > 0) {
    // 获取到不同的gap,使用gap进行插入排序
    // 2.第二层殉：找到不同的数列集合进行插入排序的操作
    for (let i = gap; i < n; i++) {
      let j = i
      const num = arr[i]

      // 3.第三层循环：while循环，对数列进行插入排序的过程
      // 使用num向前去找到一个比num小的值
      while (j > gap - 1 && num < arr[j - gap]) {
        arr[j] = arr[j - gap]
        j = j - gap
      }
      arr[j] = num
    }
    gap = Math.floor(gap / 2)


  }

  return arr
}

testSort(shellSort)