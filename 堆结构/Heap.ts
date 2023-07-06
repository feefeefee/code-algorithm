import { cbtPrint } from "hy-algokit";
export default class Heap<T> {
  // 属性
   data: T[] = [];
  private length: number = 0;
  private isMax:boolean

  constructor(arr: T[] = [], isMax = true) {
    this.isMax = isMax
    if (!arr.length) return
    this.buildHeap(arr)
  }

  // 私有方法
  private swap(i: number, j: number) {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  //比较
  private compare(i: number, j: number) {
    if (this.isMax) {
      return this.data[i] >= this.data[j]
    } else {
      return this.data[i] <= this.data[j]
    }
  }

  // 方法
  insert(value: T) {
    // 1.将元素放到数组的尾部
    this.data.push(value);
    this, this.length++;

    // 2.维护最大堆的特性（最后位置的元素需要进行上滤操作）
    this.heapify_up()
  }
   private heapify_up() {
    let index = this.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      // 区分最大堆还是最小堆
      if (this.compare(parentIndex,index)) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  } 
  /* 提取操作 */
  extract(): T | undefined {
    // 1.判断元素的个数为0或者1的情况
    if (this.length === 0) return undefined
    if (this, this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    // 2.提起并且需要返回的最大值
    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--

    // 3.维护最大堆的特性

    this.heapIfy_down(0)

    return topValue;
  }

  private heapIfy_down(start:number) {
    let index = start
    
    while (2 * index + 1 < this.length) {
      let leftChildIndex = 2 * index + 1
      let rightChildIndex = leftChildIndex + 1
      let largerIndex = leftChildIndex
      if (rightChildIndex < this.length && this.compare(rightChildIndex,leftChildIndex)) {
        largerIndex = rightChildIndex
      }
      
      //4. 较大值和index位置进行比较
      if (this.compare(index,largerIndex)) {
        break
      }
  
      // 交换位置
      this.swap(index, largerIndex)
      index = largerIndex
    }

  }

  peek(): T | undefined {
    return this.data[0];
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.length === 0; 
  }
  /* 原地建堆 */
  buildHeap(arr: T[]) {
    // 1. 使用arr的值：数组/长度
    this.data = arr
    this.length = arr.length

    // 2.从第一个非叶子节点，开始进行下滤操作
    const start = Math.floor((this.length / 2) - 1)
    for (let i = start; i >= 0; i--){
      this.heapIfy_down(i)
    }
  }

  print() {
    cbtPrint(this.data)
  }
}

// const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7];
// const heap = new Heap<number>()
// // const heap = new Heap<number>([],false) //创建最小堆

// for (const item of arr) {
//   heap.insert(item)
  
// }
// console.log(heap.data)

// heap.insert(133)
// console.log(heap.data)

// console.log(heap.extract())
// console.log(heap.data)

// 原地建堆
// const arrV2 = [9, 11, 20, 56, 23, 45]
// const heapV2 = new Heap<number>(arrV2)
// const heapV2 = new Heap<number>(arrV2,false) // 创建最小堆
// console.log(arrV2)
// console.log(heapV2.extract())
// heap.print()