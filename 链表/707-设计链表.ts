class ListNode {
  public val:number;
  public next:ListNode | null;
  constructor(val?:number, next?:ListNode | null){
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
  } 
}


class MyLinkedList {
  // 记录链表长度
  private size:number;
  // 头结点
  private head:ListNode | null;
  // 尾节点
  private tail:ListNode | null;

  constructor() {
      this.size = 0
      this.head = null
      this.tail = null
  }

  // 获取链表中第index个节点
  get(index: number): number {
      // 先判断索引
      if(index < 0 || index >= this.size){
          return -1
      }

      let curNode = this.getNode(index)
      return curNode.val
  }
  // 插入头节点
  addAtHead(val: number): void {
      // 1. 创建节点
      let node:ListNode = new ListNode(val, this.head)
      this.head = node
      if(!this.tail){
          this.tail = node
      }
      this.size++
  }
  // 插入尾节点
  addAtTail(val: number): void {
      //1.创建节点
      let node:ListNode = new ListNode(val, this.head)
      // 2.判断原先是否有尾节点
      if(this.tail){
          this.tail.next = node
      }else{
          // 还没有尾节点，说明一个节点也没有
          this.head = node
      }
      //3.把当前节点作为尾节点
      this.tail = node

      //4. 数量+1
      this.size++
  }

  // 在第index节点之后，添加节点
  addAtIndex(index: number, val: number): void {
      //1.判断当前index的长度
      //如果index等于链表长度，那就是插入到该链表的末尾
      // 如果index 大于链表长度，则不会插入

      if(index === this.size){
          this.addAtTail(val)
          return 
      }

      if(index > this.size) return
      
      //该情况下都是在头部插入
      if(index <=0 ){
          this.addAtHead(val)
          return
      }

      // 接下来是正常情况
      let curNode = this.getNode(index - 1 ) // 获取当前节点
      let node:ListNode = new ListNode(val,curNode.next) // 创建节点
      curNode.next = node
      
      this.size++
      

  }

  //删除第index个节点
  deleteAtIndex(index: number): void {
      // 先判断index是否有效
      if(index < 0 || index >= this.size) return 

      // 处理头节点
      if(index === 0 ){
          this.head = this.head.next

          // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
          if(index === this.size - 1){
              this.tail = null
          }
          
          this.size--
          return
      }

      //index有效
      let curNode = this.getNode(index - 1)
      curNode.next = curNode.next.next

      // 处理尾节点
      if(index === this.size - 1){
          this.tail = curNode
      }

      this.size--

  }

  // 获取指定node节点
  getNode(index:number):ListNode {
      // 创建虚拟头结点
      let curNode:ListNode = new ListNode(0, this.head);
      for(let i = 0; i <= index; i++){
          curNode = curNode.next
      }
      return curNode

  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/