import LinkedList from "./MTLinkedListV2";
 
class LoopLinkedList<T> extends LinkedList<T>{
 // 重新实现的方法：append方法
 append(value: T) {
  super.append(value)
   
   // 拿到最后一个节点next指向第一个节点
   this.tail!.next = this.head
 }
  insert(value: T, position: number): boolean {
    const isSuccess = super.insert(value, position)
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head
    }

    return isSuccess
      
  }

  removeAt(position: number): T | null {
    const value = super.removeAt(position)

    if (value &&this.tail&& (position === this.length  || position === 0)) {
      this.tail!.next = this.head
    }
    return value
  }
}

const linkedList = new LoopLinkedList<string>()
linkedList.append('无情')
linkedList.append('铁手')
linkedList.append('追命')
linkedList.append('冷血')
linkedList.traverse();