import ArrayQueue from "./MTQueue";

function hotPotato(names: string[], num: number) {
  // 创建队列结构
  const queue = new ArrayQueue<string>();

  // 将所有的name入队
  for (const name of names) {
    queue.enqueue(name);
  }

  // 淘汰的规则
  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const name = queue.dequeue();
      if (name) {
        queue.enqueue(name);
      }
    }

    queue.dequeue();
  }
  return queue.dequeue();
}

const leftName = hotPotato(["铁手", "无情", "冷血", "追命", "诸葛小花"], 3);

console.log(leftName);
