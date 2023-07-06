/* 
给定单个链表的头 head ，使用 插入排序 对链表进行排序，并返回 排序后链表的头 。

插入排序 算法的步骤:

插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
重复直到所有输入数据插入完为止。
下面是插入排序算法的一个图形示例。部分排序的列表(黑色)最初只包含列表中的第一个元素。每次迭代时，从输入数据中删除一个元素(红色)，并就地插入已排序的列表中。

对链表进行插入排序。

*/


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
function insertionSortList(head: ListNode | null): ListNode | null {
  // 构造一个哑节点，指向head节点，用来更好的插入
  // current节点：用来指向当前插入的节点
  // tail节点： 用来指向当前已经排序的末尾节点
  // pre节点：用来指前面那个节点
  if (head === null) return null

  // 哑巴节点
  const dumyNode = new ListNode(-1)

  dumyNode.next = head
  let tail: ListNode|null = head
  let current: ListNode|null = head.next


  while (current !== null) {
    if (tail!.val <= current.val) {
      // 如果插入的节点刚好形成有序的，那么就直接再上一个节点插入
      //更改tail的节点
      tail = tail!.next
    } else {
      let pre: ListNode|null = dumyNode
      // 从第一个开始逐步遍历，寻找合适的插入点
      while (pre!.next!.val <= current.val) {
        pre = pre!.next
      }
      tail!.next = current.next
      current.next = pre!.next
      pre!.next = current

    }
    current = tail!.next
  }
  return dumyNode.next
};