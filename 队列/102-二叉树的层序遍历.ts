/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  const ret = []

  // 如果根结点不存在就返回
  if(!root){
      return ret
  }

//  创建一个数组 模拟队列
  const q = []
  // root 存在，推入队列
  q.push(root)
  // 开始循环队列操作，直到队列为空
  while(q.length !== 0){
      // 取出当前队列这元素个数
      const qSize = q.length
      // 将当前层的结果 保存到队列中
      ret.push([])
      for(let i = 0; i  < qSize; i++){
          // 出队
          const node = q.shift()
          ret[ret.length - 1].push(node.val)
          // 如果左节点存在，就把左节点放到队列中
          if(node.left){
              q.push(node.left)
          }
          // 同理如果右节点存在，就把有节点放到队列中
          if(node.right){
              q.push(node.right)
          }
      }
  }

  return ret
};