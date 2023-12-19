/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
// 双指针+排序
const sortNums = nums.sort((a,b) => a -b)
// 左指针
let left = 0
// 右指针
let right = sortNums.length - 1
const resArr:number[][] = []
for(let i = 0; i < sortNums.length; i++){
    // 如果nums[i] > 0 那么就直接 跳出，得到答案
    // 因为nums[right] > nums[left] > nums[i]
    if(sortNums[i] > 0) return resArr
    // 去除重复项 如果下一个数已经 经过一次流程 那就跳过
    // 当前数和前一个数相等 说明重复
    if(i > 0 && sortNums[i] === sortNums[i-1]) continue

    // 每一次开始循环，都要重新定义左右指针的值
    // 左指针+1
    left = i + 1
    // 右指针
    right = sortNums.length -1

    while(left < right){
        // 三个数的总和
        const sum = sortNums[i] + sortNums[left] + sortNums[right]
        // 太大了，右指针后撤
        if(sum > 0){
            right--
        }else if(sum < 0){
            // 太小了，左指针向前
            left++
        }else {
            // 相等
            resArr.push([sortNums[i],sortNums[left],sortNums[right]])
            // 找到了之后，左右指针都要移动
            left++
            right--
            // 如果下一个左指针指向的值还是相同，继续移动，直到不同
            while(left < right && sortNums[left] === sortNums[left - 1]){
                left++
            }
            // 右指针同理
            while(left < right && sortNums[right] === sortNums[right +1]){
                right--
            }
        }
    }
}

return resArr
};
// @lc code=end

