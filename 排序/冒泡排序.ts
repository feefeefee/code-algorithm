import { swap, testSort } from "./utils";

function bubbleSort(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let hasSort = true;
    // 再-i 就是略过了 每次冒泡已经排序的数据
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        hasSort = false;
      }
    }
    if (hasSort) {
      // 说明原数组本身就是有序的
      break;
    }
  }
  return arr;
}

testSort(bubbleSort);
