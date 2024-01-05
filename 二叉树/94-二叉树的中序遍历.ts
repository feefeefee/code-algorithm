/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

function inorderTraversal(root: TreeNode | null): number[] {
      // 中序遍历 采用递归遍历方式
    // 顺序为 左 =》 中 =》 右

    const res:number[] = []

    const traverse = (node:TreeNode | null) =>{
        if(!node) return null

        traverse(node.left)
        res.push(node.val)
        traverse(node.right)
    }

    traverse(root)
    return res  
};

function inorderTraversal_V2(root: TreeNode | null): number[] {
  // 中序遍历的话 那顺序 就是 左  =》  中  =》 右
  // 用迭代

  const res:number[] = []
  if(!root) return res

  // 当前节点
  let cur:TreeNode | null = root
  const stack:TreeNode[] | null = []
  
  // 如果当前节点存在 或者 栈中还要数据 就继续循环
  while(cur || stack.length){
      // 寻找最左边的节点，把寻找路径上遇到的节点都压入栈
      while(cur){
          // 将途径节点入栈
          stack.push(cur)
          // 继续搜索下一个左孩子
          cur = cur.left
      }

      // 这里已经找到了最远端的左孩子的了，要开始出栈了
      cur = stack.pop()
      res.push(cur.val)
      // 当前节点可能是中间根节点 也可能是左节点
      // 如果是根节点，就要查找它的右孩子
      //  尝试读取 cur 结点的右孩子
      cur = cur.right

  }

  return res
};
// @lc code=end

