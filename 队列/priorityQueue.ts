/* 
优先级队列实现
*/
import Heap from "../堆结构/Heap"

class PriorityNode<T> {
  priority: number
  value: T
  constructor(value: T, priority: number) {
    this.value = value
    this.priority = priority
  }
  valueOf() {
    return this.priority
  }
}

class PriorityQueue<T>{
  private heap: Heap<PriorityNode<T>> = new Heap() 
  
  enqueue(value: T, priority: number) {
    const newNode = new PriorityNode(value, priority)
    this.heap.insert(newNode)
  }

  dequeue(): T | undefined{
    return this.heap.extract()?.value
  }

  peek(): T | undefined {
    return this.heap.peek()?.value
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }
}

const pQueue = new PriorityQueue<string>()

pQueue.enqueue('李寻欢',90)
pQueue.enqueue('叶开',77)
pQueue.enqueue('傅红雪',33)


while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
  
}