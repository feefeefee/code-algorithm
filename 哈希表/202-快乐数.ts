/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
function isHappy(n: number): boolean {
        // 边界情况
    // <=0 不是快乐数
    if(n <=0 ) return false

// 计算平方和
const calcSum = (val:number) => {
  return  String(val).split('').reduce((pre,cur) => {
        return pre + Number(cur) * Number(cur)
    },0)
}    

// 这里面会有三种结果
// - 最终会得到1
// - 最终会进入一个循环
// - 值会越来越大 最后接近无穷大

// 用一个集合来判断是否包含整个数，从而来判断是否进入无限循环
let newN = n
const hashSet = new Set<number>()
while(newN !== 1 &&  !hashSet.has(newN)){
    hashSet.add(newN)
    newN = calcSum(newN)
}

return newN === 1
};
// @lc code=end

