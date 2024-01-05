/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
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

function postorderTraversal(root: TreeNode | null): number[] {
       // 用递归算法 其实和前序遍历一样，无非只是 顺序换了一下
    // 后续遍历，采用了 左 -》 右 -》 中 的节点遍历方式

    const res:number[] = []

    const traverse = (node: TreeNode | null) => {
        if(!node) return null

        traverse(node.left)
        traverse(node.right)
        res.push(node.val)

    }
    traverse(root)
    
    return res
};
function postorderTraversal_v2(root: TreeNode | null): number[] {
  // 后续遍历的话  那 遍历顺序就应该是  左 =》 右 =》 中
  // 用栈去迭代遍历
  const res:number[] = []
  // 异常处理
  if(!root) return []

  // 栈
  const stack:TreeNode[]|null = []

  // 首先把根节点入栈
  stack.push(root)
  // 如果栈不为空 就一直循环
  while(stack.length){
      // 节点出栈，并且当作当前节点
      const cur = stack.pop()

      // 遍历的顺序是 左 =》 右 =》 中
      // 那直接可以把当前节点从数组开头塞进去

      res.unshift(cur.val)
      // 出栈顺序是  右 左
      // 所以入栈顺序 应该是  左 右

      // 如果有左孩子
      if(cur.left){
          stack.push(cur.left)
      }
      // 如果有右孩子
      if(cur.right){
          stack.push(cur.right)
      }
  }

  return res
  
};
// @lc code=end

