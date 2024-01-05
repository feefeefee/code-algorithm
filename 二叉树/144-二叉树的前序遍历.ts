/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
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

function preorderTraversal(root: TreeNode | null): number[] {
      // 前序遍历 也就是去 根 -》 左 -》右 节点的遍历方式

      const res = []
      // 递归函数
      const traverse = (node:TreeNode | null) => {
          // 要有一个递归的边界
          if(!node) return null
          // 要处理重复干的逻辑
          res.push(node.val)
          // 遍历左节点
          traverse(node.left)
          // 遍历右节点
          traverse(node.right)
      }
  
      traverse(root)
  
      return res
};


// @lc code=end

function preorderTraversal_v2(root: TreeNode | null): number[] {
    // 前序遍历 除了用递归来实现，还可以用迭代遍历来实现
    // 迭打遍历，其实就是用栈来存储节点，然后一个入栈出栈的过程
    // 1. 先把根节点入栈
    // 2. 然后根节点出栈，右节点入栈，左节点入栈
    // 3. 左节点出栈，右节点出栈
    const res:number[] = []

    if(!root) return res

    const stack:TreeNode[]=[]
    

    // 根节点入栈
    stack.push(root)

    // 开始入栈、出栈循环,知道栈为空
    while(stack.length){
        // 把栈顶节点出栈，并且当作当前节点
        const cur = stack.pop()
        // 当前节点 就是当前子树的根节点
        res.push(cur.val)
        //当前子树根节点右右孩子
        if(cur.right){
            stack.push(cur.right)
        }
        // 当前子树根节点有左孩子
        if(cur.left){
            stack.push(cur.left)
        }
    }
    return res
};

