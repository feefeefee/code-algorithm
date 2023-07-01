/* 
二叉搜索树
*/
import Node from "../types/Node";
import { btPrint } from "hy-algokit";

export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;

  parent: TreeNode<T> | null = null;

  get isLeft(): boolean {
    return !!(this.parent && this.parent.left === this);
  }
  get isRight(): boolean {
    return !!(this.parent && this.parent.right === this);
  }
}

export class BSTree<T> {
  protected root: TreeNode<T> | null = null;

  print() {
    btPrint(this.root);
  }
  private searchNode(value: T): TreeNode<T> | null {
    //1.当前是否有这个value
    let current = this.root;
    let parent: TreeNode<T> | null = null;
    while (current) {
      if (current.value === value) {
        return current;
      }

      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }

      // 如果current有值，那么current保存自己的节点

      if (current) current.parent = parent;
    }

    return null;
  }
  // 设计模式：模板模式
  protected createNode(value: T): TreeNode<T>{
    
    // BSTree 调用时就是TreeNode，子类AVLTree重写了，在子类调用时就是AVLTreeNode
    return new TreeNode(value)
  }

  // 如何去找到不平衡的节点
  protected  checkBalance(node: TreeNode<T>) {  }
  //插入数据的操作
  insert(value: T) { 
    //1.根据传入value创建Node（TreeNode）节点
    const newNode = this.createNode(value);

    //2.判断当前是否已经有了根节点
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }

    //3.检测树是否平衡
    this.checkBalance(newNode)
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      // 去左边查找空白位置
      if (node.left === null) {
        node.left = newNode;
        newNode.parent = node 
      } else { 
        this.insertNode(node.left, newNode);
      }
    } else {
      // 继续去右边查找空白位置
      if (node.right === null) {
        node.right = newNode;
        newNode.parent = node
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  /* 遍历操作 */
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      this.inOrderTraverseNode(node.right);
    }
  }
  // 后续遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);
      this.postOrderTraverseNode(node.right);
    }
  }
  // 层序遍历
  levelOrderTraverse() {
    //1.如果没有根节点，那么不需要遍历
    if (!this.root) return;

    //2.创建队列结构
    const queue: TreeNode<T>[] = [];
    queue.push(this.root);

    //3.遍历队列中所有的节点（依次出列）
    while (queue.length) {
      //3.1 访问节点的过程
      const current = queue.shift()!;

      //3.2 将左子节点放入队列
      if (current.left) {
        queue.push(current.left);
      }
      //3.3 将右子节点放入队列
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  /* 获取最值操作：最大值、最小值 */
  getMaxValue(): T | null {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current?.value ?? null;
  }
  getMinValue(): T | null {
    let current = this.root;
    while (current && current.left) {
      current = current.left;
    }
    return current?.value ?? null;
  }
  /* 搜索特定的值 */
  search(value: T): boolean {
    return !!this.searchNode(value);
  }
  /* 实现删除操作 */
  private getSuccessor(delNode: TreeNode<T>): TreeNode<T> {
    // 获取右子树
    let current = delNode.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }

    // 找到后继节点
    if (successor !== delNode.right) {
      successor!.parent!.left = successor!.right;
      // successor!.right = delNode.right;
      if (successor?.right) {
        successor.right.parent = successor.parent
      }
    } else {
      delNode.right = successor!.right
      if (successor!.right) {
        successor!.right.parent = delNode
      }

    }
    console.log("删除节点：", delNode.value, "后继节点：", successor?.value);

    // 一定要进行的操作:将删除节点的left，赋值给后继节点的left
    // successor!.left = delNode.left;

    return successor!;
  }
  remove(value: T): boolean {
    // 搜索当前是否有这个value
    const current = this.searchNode(value);
    if (!current) return false;

    let delNode:TreeNode<T> = current

    console.log(
      "当前节点：",
      current?.value,
      "父节点：",
      current?.parent?.value
    );

    // 如果删除是叶子节点
    let replaceNode: TreeNode<T> | null = null;
    if (current.left === null && current.right === null) {
      /*      if (current === this.root) { 
        this.root = null
      } else if (current.isLeft) {
        // current在父节点左边
        current.parent!.left = null
      } else {
        //current 在父节点右边
        current.parent!.right = null
      } */
      replaceNode = null;
    }

    // 只有一个子节点：只有左子节点
    else if (current.right === null) {
      /*  if (current === this.root) {
        this.root = current.left
      } else if (current.isLeft) {
        current.parent!.left = current.left
      } else {
        current.parent!.right = current.left
      } */
      replaceNode = current.left;
    }
    // 只有一个节点：只有右子节点
    else if (current.left === null) {
      /*    if (current === this.root) {
        this.root = current.right
      } else if (current.isLeft) {
        current.parent!.left = current.right
      } else {
        current.parent!.right = current.right
      } */
      replaceNode = current.right;
    }
    // 5.有2个子节点
    else {
      const successor = this.getSuccessor(current);
      current.value = successor.value

      delNode = successor
      this.checkBalance(delNode)
      return true
      /*       if (current === this.root) {
        this.root = successor
      } else if (current.isLeft) {
        current.parent!.left = successor
      } else {
        current.parent!.right = successor
      }
      */
      // replaceNode = successor;

    }

    if (current === this.root) {
      this.root = replaceNode;
    } else if (current.isLeft) {
      current.parent!.left = replaceNode;
    } else {
      current.parent!.right = replaceNode;
    }

    // 判断replaceNode
    if (replaceNode && current.parent) {
      replaceNode.parent = current.parent
    }


    // 删除完成后，检测树是否平衡（传入的节点是那个真正从二叉树中被移除的节点）
    this.checkBalance(delNode)


    return true;
  }
}

const bst = new BSTree<number>();

// bst.insert(20);
// bst.insert(30);
// bst.insert(18);

// bst.print()

export {};
