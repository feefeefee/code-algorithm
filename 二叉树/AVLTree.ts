import AVLTreeNode from './AVLTreeNode'
import { BSTree, TreeNode } from './BSTree'
 
class AVLTree<T> extends BSTree<T>{
  // 重写调用的createNode方法
  protected createNode(value: T): TreeNode<T> {
  
    
    return new AVLTreeNode(value)
    
    // 检测树是否平衡
  }

  // 如何去找到不平衡的节点
  checkBalance(node: AVLTreeNode<T>) {
    let current = node.parent
 
    
    while (current) {
      if (!current.isBalanced) {
        this.rebalance(current)
        // break
      }
      current = current.parent
    }
    // console.log("插入一个新节点：",node.value,"检查树是否平衡~")
    
  }
  // 假设已经找到了，那么我们如何让这个节点变的平衡
  /**
   * 根据不平衡的节点的情况（LL/RR/LR/RL）让子树平衡
   * @param root 找到的不平衡的节点 
   */
  rebalance(root: AVLTreeNode<T>) {
    const pivot = root.higherChild
    const current = pivot?.higherChild
    

    let resultNode:AVLTreeNode<T> | null =null
    if (pivot?.isLeft) {// L:left
      if (current?.isLeft) { // LL: Left Left
        resultNode = root.rightRotation()
      } else {// RL: Right Left
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
      
    } else { // R:Right
      if (current?.isLeft) {// RL: Right Left
        pivot?.rightRotation()
        resultNode = root.leftRotation()
        
      } else {// RR: Right Right
        // console.log(root)
        
        resultNode = root.leftRotation()
        // console.log(`对${root.value}进行了左旋转`)
        
      }
      
    }

    // 判断返回的pivot是否有节点
    if (!resultNode.parent) {
      this.root = resultNode
    }
  }

}

const avlTree = new AVLTree<number>()

// avlTree.insert(50)
// avlTree.insert(100)
// avlTree.insert(150)
for (let i = 0; i<20; i++){
  avlTree.insert(Math.floor(Math.random() * 200))
}

avlTree.print()