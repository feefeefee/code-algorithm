import { testSort, swap } from "hy-algokit";

function selectionSort(arr: number[]): number[]{
  const n = arr.length
  
  // 外层循环作用：经过多少轮找最小值
  for (let i = 0; i < n - 1; i++){
    let minIndex = i
    // 内层循环作用：每次找到最小值
    for (let j = i + 1; j < n; j++){
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    // 只有不相等，才需要进行交换
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  
  }

  
  return arr
}

testSort(selectionSort)