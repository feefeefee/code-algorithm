/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
        // 创造一个map 去存储数组中的元素和与索引值
        const targetMap = new Map<number,number>()

        for(let i = 0; i < nums.length; i++){
            const reducrVale = target - nums[i]
            if(targetMap.has(reducrVale)){
                return [i, targetMap.get(reducrVale)]
            }
             targetMap.set(nums[i],i)
        }
    
        return null
};
// @lc code=end

