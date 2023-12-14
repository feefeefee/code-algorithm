class MyCircularQueue {
  // 第一个元素所在位置
  private front
  // rear 是enQueue可存分的位置
  //[front,rear)
  private rear
  // 循环队列最多可以存放的元素个数 
  private capacity
  // 循环队列的存储空间
  private elements = []

  constructor(k: number) {
    this.front = 0;
    this.rear = 0;
    this.capacity = k + 1
    this.elements = new Array(k + 1)

  }

  enQueue(value: number): boolean {
    // 如果已经满了，无法入队
    if (this.isFull()) {
      return false
    }
    // 把元素放到rear位置
    this.elements[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }

  deQueue(): boolean {
    // 如果为空，无法出队
    if (this.isEmpty()) {
      return false
    }
    // 出队之后，front要向前移
    this.front = (this.front + 1) % this.capacity
    return true
  }

  Front(): number {
    // 如果能取出第一个元素
    if (this.isEmpty()) {
      return -1
    }
    return this.elements[this.front]

  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    // 如果我们使用的是前开后闭原则
    // [front,rear)
    // 所以在取最后一个元素时，应该是
    // (rear - 1 + capacity) % capacity
    return this.elements[(this.rear - 1 + this.capacity) % this.capacity]

  }

  isEmpty(): boolean {
    // 判断队列是否为空
    return this.front === this.rear
  }

  isFull(): boolean {
    // rear 与front 之间至少有一个空格
    // 当rear指向这个最后的一个空格时
    //队列就已经放满了
    return ((this.rear + 1) % this.capacity) === this.front
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/