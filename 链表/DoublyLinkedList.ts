import LinkedList from "./MTLinkedListV2";
import { DoublyNode } from './LinkedNode';

class DoublyLinkedList<T> extends LinkedList<T>{
  protected head: DoublyNode<T> | null = null;
  // 新增属性:总是指向链表尾部
  protected tail: DoublyNode<T> | null = null;

  append(value: T): void {
    const newNode = new DoublyNode(value)
    
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++
  }

  // 新的方法
  prepend(value: T): void{
    const newNode = new DoublyNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    
    this.length++
  }

  postTraverse() {
    const values: T[] = []
    let current = this.tail
    while (current) {
      values.push(current.value)
      current = current.prev
    }

    console.log(values.join('->'))
    
  }

  //根据索引插入元素
  insert(value: T, position: number):boolean {
    if (position < 0 && position > this.length) return false
    

    if (position === 0) {
      this.append(value)
    } else if (position === this.length) {
      this.prepend(value)
    } else {
      const newNode = new DoublyNode(value)
      const current = this.getNode(position) as DoublyNode<T>

      current.prev!.next = newNode
      newNode.next = current
      newNode.prev = current.prev
      current.prev = newNode

      this.length++
    }
    return true
  }

  // 根据索引删除元素
  removeAt(position: number): T | null {
    if (position < 0 && position > this.length) return null

    let current = this.head
    
    if (position === 0) {
      if (this.length === 1) {
        this.head = null
      this.tail = null
      } else {
        this.head = this.head!.next
        this.head!.prev = null
      }
      
     
    } else if (position === this.length) {
      current = this.tail 
      this.tail = this.tail!.prev
      this.tail!.next = null
    } else {
      current = this.getNode(position) as DoublyNode<T>
      current.next!.prev = current.prev
      current.prev!.next = current.next

      this.length--
    }
    return current?.value??null
  }
}

console.log('---------------append/prepend----------------')
const linkedList = new DoublyLinkedList<string>()

linkedList.append('无情')
linkedList.append('铁手')
linkedList.append('追命')
linkedList.append('冷血')

linkedList.prepend('诸葛小花')
linkedList.prepend('元十三限')

linkedList.traverse()
linkedList.postTraverse()

console.log('---------------insert----------------')
linkedList.insert('王小石',0)
linkedList.insert('苏梦枕',7)
linkedList.insert('关七', 3)
linkedList.traverse()
linkedList.postTraverse()

console.log('---------------remove----------------')
linkedList.removeAt(0)
linkedList.traverse()
linkedList.postTraverse()