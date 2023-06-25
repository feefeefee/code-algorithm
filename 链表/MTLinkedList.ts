class MTNode<T> {
  value: T
  next: MTNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

class LinkedList<T>{
  head: MTNode<T> | null = null
  private size: number = 0
  
  get length() {
    return this.size
  }
  // 封装私有方法
  private getNode(position: number): MTNode<T> | null {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current
  }
  // 添加
  append(value: T) {
    const newNode = new MTNode(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }

      current.next = newNode
    }
    this.size++
  }

  // 遍历
  traverse() {
    const values:T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('-->'))
    
  }
  // 插入
  insert(value: T, position: number):boolean {
    if( position < 0 || position > this.size) return false
    
    const newNode = new MTNode(value)

    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      const previous = this.getNode(position - 1)  
      newNode.next = previous?.next?? null
      previous!.next = newNode
      this.size++
    }

    return true
 
  }

  // 删除
  removeAt(position: number): T | null {
    //1. 越界的判断
    if (position < 0 || position >= this.size) return null
    
    // 2.判断是否是删除第一个节点
    let current = this.head

    if (position == 0) {
        this.head = current?.next ?? null
    } else {
      const previous = this.getNode(position - 1)

      // 需要给current重新赋值
      current = previous!.next
      
      // 找到需要的节点
      previous!.next = previous?.next?.next ?? null
      
    }
    this.size--

    return current?.value ?? null
  }
  // 获取方法
  get(position: number): T | null{
    if (position < 0 || position >= this.size) return null
    
    return this.getNode(position)?.value ?? null

  }
  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false 
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  }
  indexOf(value: T): number{
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  remove(value: T):T|null {
    const index = this.indexOf(value)
    return this.removeAt(index)
  }

  isEmpty() {
    return this.size === 0
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('无情')
linkedList.append('铁手')
linkedList.append('追命')
linkedList.append('冷血')

linkedList.insert('李寻欢', 0)
linkedList.traverse()
linkedList.insert('叶开', 2)
linkedList.traverse()

linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.traverse()

console.log(linkedList.removeAt(2))
linkedList.traverse()
console.log(linkedList.removeAt(3))
linkedList.traverse()

console.log(linkedList.get(0))
console.log(linkedList.get(1))
console.log(linkedList.get(2))

linkedList.update('傅红雪', 1)
linkedList.update('阿飞', 2)
linkedList.traverse()

console.log(linkedList.indexOf('傅红雪'))
console.log(linkedList.indexOf('阿飞'))
console.log(linkedList.indexOf('冷血'))