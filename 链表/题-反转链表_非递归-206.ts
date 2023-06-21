import ListNode from './ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // 判断head为null或者只要一个节点，那么直接返回即可
 if (head === null||head.next === null) return head 
  
  //反转链表结构
  let newHead: ListNode | null = null

  while (head) {
    const current: ListNode | null = head.next
    head.next = newHead
    newHead = head
    head = current
  }

  return newHead
}

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)


const newHead = reverseList(node1)

let current = newHead


while (current) {
  console.log(current.val)
  current= current.next
  
}

export {}