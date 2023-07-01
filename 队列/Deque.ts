
import ArrayQueue from './MTQueue';
/* 
双端队列的实现
*/
class ArrayDeque<T> extends ArrayQueue<T>{
  addFront(value: T) {
    this.data.unshift(value)
  }
  removeBack(): T | undefined{
    return this.data.pop()
  }

}

const deque = new ArrayDeque<string>()

deque.enqueue('叶开')
deque.enqueue('李寻欢')
deque.enqueue('傅红雪')
deque.addFront('无花')
deque.addFront('陆小凤')

while (!deque.isEmpty()) {
  console.log(deque.removeBack())
  
}