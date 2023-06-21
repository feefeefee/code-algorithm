import ListNode from './ListNode'

function reverseList(head: ListNode | null): ListNode | null {
  // head 本身为null 的情况
  if (head === null) return null
  // 只有head一个结点
  if (head.next === null) return head 
  

  // 数组模拟栈结构
  const stack: ListNode[] = []
  let current: ListNode | null = head
  while (current) {
    stack.push(current)
    current = current.next
  }

  console.log(stack)

  // 依次从栈中取除元素，放到一个新的链表中
  const newHead: ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while (stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }

  // 获取到最后一个结点时，需要将结点的next职位null
  newHeadCurrent.next = null

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