import { testSort } from "hy-algokit";

function insertSort(arr: number[]): number[]{
  const n = arr.length
  
  for (let i = 1; i < n; i++){
    // 内层循环
    const newNum = arr[i]
    let j = i - 1
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j+1] = newNum
  }

  
  return arr
}

testSort(insertSort)