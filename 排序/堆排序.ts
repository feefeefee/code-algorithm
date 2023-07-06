import { testSort,swap } from "hy-algokit"

function heapSort(arr: number[]): number[] {
  // 1. 获取数组的长度
  const n = arr.length

  // 2.对arr进行原地建堆
  // 2.1 从第一个非叶子节点开始进行下滤操作
  const start = Math.floor((n / 2) - 1)
  for (let i = start; i >= 0; i--){
    heapifyDown(arr,n,i)
  }

  // 3.对最大堆进行排序
  for (let i = n - 1; i > 0; i--){
    swap(arr, 0, i)
    heapifyDown(arr,i,0)
  }


   
  return arr
}
/**
 * 下滤操作函数
 * @param arr 在数组中进行下滤操作
 * @param number 下滤操作的范围
 * @param index 哪一个位置需要进行下滤操作
 */
function heapifyDown(arr: number[], n:number, index: number) {
  while (2 * index + 1 < n) {
    // 1.获取左右子节点的索引
    let leftChildIndex = 2 * index + 1
    let rightChildIndex = leftChildIndex + 1

    // 2.找出左右子节点较大的值
    let largerIndex = leftChildIndex
    if (rightChildIndex < n && arr[rightChildIndex] > arr[leftChildIndex]) {
      largerIndex = rightChildIndex
    }
    
    // 3.判断index位置的值比更大的子节点，直接break
    if (arr[index] >= arr[largerIndex]) {
      break
    }

    // 4.和更大位置进行交换操作
    swap(arr,index, largerIndex)
    index = largerIndex
  }
}

testSort(heapSort)