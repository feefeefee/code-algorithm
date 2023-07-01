/* 
优先级队列实现方式二
*/
import Heap from "../堆结构/Heap"


class PriorityQueue<T>{
  private heap: Heap<T> = new Heap() 
  
  enqueue(value: T) {
    this.heap.insert(value)
  }

  dequeue(): T | undefined{
    return this.heap.extract()
  }

  peek(): T | undefined {
    return this.heap.peek()
  }

  isEmpty() {
    return this.heap.isEmpty()
  }

  size() {
    return this.heap.size()
  }
}

class Person {
  name: string
  score: number
  constructor(name: string, score: number) {
    this.name = name
    this.score = score
  }

  valueOf() {
    return this.score
  }
}

const pQueue = new PriorityQueue<Person>()

pQueue.enqueue(new Person('李寻欢',99))
pQueue.enqueue(new Person('叶开',88))
pQueue.enqueue(new Person('傅红雪',77))
pQueue.enqueue(new Person('阿飞', 98))

while (!pQueue.isEmpty()) {
  console.log(pQueue.dequeue())
  
}