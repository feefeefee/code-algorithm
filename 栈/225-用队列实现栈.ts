/*
 * @lc app=leetcode.cn id=225 lang=typescript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
class MyStack {
    // 这是一个队列，先进先出
    // 拥有
    //- 从队尾添加元素
    //- 从队头取出元素
    private q: number[]
    private top_elem:number
    
    constructor() {
        this.q = []
        this.top_elem = 0
        
    }
    /**添加元素到栈顶 */
    push(x: number): void {
        this.q.push(x)
        this.top_elem = x
        
    }
    /**删除栈顶元素并返回 */
    pop(): number {
        let size = this.q.length
        // 留下队尾2个元素
        while (size > 2) {
            this.q.push(this.q.shift()!)
            size --
        }
        // 记录新的队尾元素
        this.top_elem = this.q[0]
        this.q.push(this.q.shift()!)
        // 删除之前的队尾元素
        return this.q.shift()!

        
    }
    /**返回栈顶元素 */
    top(): number {
        return this.top_elem
    }
    /**判断栈是否为空 */
    empty(): boolean {
        return this.q.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

