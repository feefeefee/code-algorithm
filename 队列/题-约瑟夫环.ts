import ArrayQueue from "./MTQueue";

function lastRemaining(n: number, m: number) {
  // 创建队列结构
  const queue = new ArrayQueue<number>();

  // 将所有的数字入队
  for (let i = 0; i < n;i++) {
    queue.enqueue(i);
  }

  // 淘汰的规则
  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    queue.dequeue();
  }
  return queue.dequeue();
}



console.log(lastRemaining(5,3));
console.log(lastRemaining(10,17));
