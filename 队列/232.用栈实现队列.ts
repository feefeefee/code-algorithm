/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 */

/**
 * 每次 pop 或 peek 时，
 * 若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈，
 * 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序。
 * 
 */
// @lc code=start
class MyQueue {
    /**输入栈 */
    private s1: number[]
    /**输出栈 */
    private s2:number[]
    constructor() {
        this.s1 = []
        this.s2 = []
    }
    /**添加元素到队尾 */
    push(x: number): void {
        // 往输入栈里面塞数据
        this.s1.push(x)
    }
    /**删除队头的元素并返回 */
    pop(): number {
        // 先调用 peek 保证 s2 非空
        this.peek();
        return this.s2.pop()!;
    }
    /**返回队头元素 */
    peek(): number {
        if (this.s2.length === 0) {
            //把s1元素压入s2
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop()!)
            }
        }
          // 队头的元素从输出栈里面取
        return this.s2[this.s2.length - 1]
        
    }
    /**判断队列是否为空 */
    empty(): boolean {
        return this.s1.length===0 && this.s2.length===0
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

