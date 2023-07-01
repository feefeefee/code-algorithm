import {TreeNode} from './BSTree'
export default class AVLTreeNode<T> extends TreeNode<T>{
  // 保证获取到的left/right节点的类型是AVLTreeNode
  left: AVLTreeNode<T> | null = null;
  right: AVLTreeNode<T> | null = null;
  parent: AVLTreeNode<T> | null = null;

  /* 获取每个节点的高度 */
 private getHeight(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return Math.max(leftHeight,rightHeight) + 1
  }

  /* 权重：平衡因子（左边height - 右边height） */
  private getBalanceFactor(): number {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    return leftHeight - rightHeight
  }

  /* 直接判断当前节点是否平衡 */
  get isBalanced(): boolean{
    const factor = this.getBalanceFactor()
    // return  factor >= -1 && factor <= 1  // -1 0 1
    return  Math.abs(factor) <=1 // -1 0 1
  }

  /* 获取更高子节点 */
  public get higherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0

    if (leftHeight > rightHeight) return this.left
    if (leftHeight < rightHeight) return this.right
    
    // 返回父节点相同方向节点
    return this.isLeft ? this.left : this.right
  }

  /* 旋转操作：右旋转 */
  rightRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理pivot节点
    const pivot = this.left!
    pivot.parent = this.parent

    // 2.处理pivot的right
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    // 3.处理this
    pivot.right = this
    this.parent = pivot

    // 4.挂载pivot
    if (!pivot.parent) {
      // pivot直接作为tree的根
      return pivot
    } else if (isLeft) {
      // pivot作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) {
      // pivot作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot

  }
 /* 旋转操作：左旋转 */
  leftRotation() {
    const isLeft = this.isLeft
    const isRight = this.isRight

    // 1.处理pivot节点
    const pivot = this.right!
    pivot.parent = this.parent

    // 2.处理pivot的left
    this.right = pivot.left
    if (pivot.left) {
      pivot.left.parent = this
    }

    // 3.处理this
    pivot.left = this
    this.parent = pivot

    // 4.挂载pivot
    if (!pivot.parent) {
      // pivot直接作为tree的根
      return pivot
    } else if (isLeft) {
      // pivot作为父节点的左子节点
      pivot.parent.left = pivot
    } else if (isRight) {
      // pivot作为父节点的右子节点
      pivot.parent.right = pivot
    }

    return pivot
  }
}

// const avlNode1 = new AVLTreeNode(10)
// avlNode1.right = new AVLTreeNode(15)
// avlNode1.right.right = new AVLTreeNode(20)
// console.log(avlNode1.getHeight())
// console.log(avlNode1.right.getHeight())

// 测试平衡因子
// console.log(avlNode1.getBalanceFactor())
// console.log(avlNode1.right.getBalanceFactor())


// 直接获取到一个节点目前是否平衡
// console.log(avlNode1.isBalanced)
// console.log(avlNode1.right.isBalanced)

// console.log(avlNode1.higherChild)


