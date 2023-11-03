
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function removeElements(head: ListNode | null, val: number): ListNode | null {
  // 链表的删除节点，只需要把指针指向下下个节点就行了
  /**
   考虑到头节点的删除和其它节点不同，所以要对头节点进行特殊的处理，有2种方式可以进行删除
   1。 把头结点向后移动一位，这种方式删除，要对头结点进行特殊处理
   2. 增加一个虚拟头节点，这种方式不用对头节点进行处理
   */


  //这里先使用增加虚拟头结点的方式

  // 1.添加虚拟节点
  const data = new ListNode(0, head)
  let pre = data
  let cur = data.next

  // 如果当前节点存在
  while (cur) {
    if (cur.val === val) {
      pre.next = cur.next
    } else {
      pre = cur
    }
    cur = cur.next
  }

  return data.next


};
 //不增加虚拟节点，再原来链表上删除
function removeElementsV2(head: ListNode | null, val: number): ListNode | null {
  // 链表的删除节点，只需要把指针指向下下个节点就行了
  /**
   考虑到头节点的删除和其它节点不同，所以要对头节点进行特殊的处理，有2种方式可以进行删除
   1。 把头结点向后移动一位，这种方式删除，要对头结点进行特殊处理
   2. 增加一个虚拟头节点，这种方式不用对头节点进行处理
   */




 // 删除头部节点
 while(head !== null && head.val === val){
     head = head.next
 }

  // 只有一个节点，删除了头部节点，没有后续节点的情况
 if(head === null) return head

 let pre = head;
 let cur = head.next;

 //删除非头部节点
 while(cur){
     if(cur.val === val){
         pre.next = cur.next
     }else {
        pre = cur
     }
     cur = cur.next
 }

 return head





};