class MTNode<T> {
  value: T;
  next: MTNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

/* 循环链表继承重构 */
export default class LinkedList<T> {
  protected head: MTNode<T> | null = null;
  protected length: number = 0;

  // 新增属性:总是指向链表尾部
  protected tail: MTNode<T> | null = null;

  size() {
    return this.length;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
  // 封装私有方法
  protected getNode(position: number): MTNode<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }
  // 判断是否是最后一个节点
  private isTail(node: MTNode<T>) {
    return this.tail === node;
    // 或者
    // return node.next === null || node.next === this.head
  }
  // 添加
  append(value: T) {
    const newNode = new MTNode(value);
    if (!this.head) {
      this.head = newNode;

      this.tail = newNode;
    } else {
      /*   let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode */

      this.tail!.next = newNode;
    }

    this.tail = newNode;

    this.length++;
  }

  // 遍历
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      if (this.isTail(current)) {
        // 已经遍历到最后一个节点
        // 防止循环链表 出现死循环
        current = null;
      } else {
        // 不是最后一个节点
        current = current.next;
      }
    }

    // 循环列表才需要
    if (this.head&& this.tail?.next === this.head) {
      values.push(this.head.value);
    }

    console.log(values.join("-->"));
  }
  // 插入
  insert(value: T, position: number): boolean {
    if (position < 0 || position > this.length) return false;

    const newNode = new MTNode(value);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getNode(position - 1);
      newNode.next = previous?.next ?? null;
      previous!.next = newNode;
      this.length++;

      if (position === this.length) {
        this.tail = newNode;
      }
    }

    return true;
  }

  // 删除
  removeAt(position: number): T | null {
    //1. 越界的判断
    if (position < 0 || position >= this.length) return null;

    // 2.判断是否是删除第一个节点
    let current = this.head;

    if (position == 0) {
      this.head = current?.next ?? null;

      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      const previous = this.getNode(position - 1);

      // 需要给current重新赋值
      current = previous!.next;

      // 找到需要的节点
      previous!.next = previous?.next?.next ?? null;

      if (position === this.length - 1) {
        this.tail = previous;
      }
    }
    this.length--;

    return current?.value ?? null;
  }
  // 获取方法
  get(position: number): T | null {
    if (position < 0 || position >= this.length) return null;

    return this.getNode(position)?.value ?? null;
  }
  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.length) return false;
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      
      if (this.isTail(current)) {
        current = null
      } else {
        current = current.next;
      }
     
      index++; 
    }
    return -1;
  }

  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  isEmpty() {
    return this.length === 0;
  }
}

const linkedList = new LinkedList<string>();
linkedList.append("无情");
linkedList.append("铁手");
linkedList.append("追命");
linkedList.append("冷血");

linkedList.insert("李寻欢", 0);
linkedList.traverse();
linkedList.insert("叶开", 2);
linkedList.traverse();

linkedList.removeAt(0);
linkedList.removeAt(0);
linkedList.traverse();

console.log(linkedList.removeAt(2));
linkedList.traverse();
console.log(linkedList.removeAt(3));
linkedList.traverse();

console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));

linkedList.update("傅红雪", 1);
linkedList.update("阿飞", 2);
linkedList.traverse();

console.log(linkedList.indexOf("傅红雪"));
console.log(linkedList.indexOf("阿飞"));
console.log(linkedList.indexOf("冷血"));
