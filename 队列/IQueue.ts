interface IQueue<T> {
  // 入队方法
  enqueue(element: T): void;
  //出队方法
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export default IQueue;
