/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
        // 排序 + 双指针
    // 先排序
    nums.sort((a,b) => a - b)

    // 定义 下标
    let first:number = 0,
    second:number,
    third:number,
    fourth:number

    // 数组长度
    const n = nums.length
    const resArr:number[][] = []

    // 开始循环
    for(;first < n; first++){
        // 当first > 0 时
        if(first > 0 && nums[first] === nums[first - 1]) continue

        //下个循环 继续从second开始
        for(second = first + 1; second < n; second++){
            if(second - first > 1 && nums[second] === nums[second - 1]) continue

            third = second + 1
            fourth = n - 1

            while(third < fourth){
                const sum:number = nums[first] + nums[second] + nums[third] + nums[fourth]

                if(sum > target){
                    fourth--
                }else if(sum < target){
                    third++
                }else {
                    resArr.push([nums[first],nums[second],nums[third],nums[fourth]])
                    third++
                    fourth--
                    while(nums[third] === nums[third - 1]){
                        third++
                    }
                    while( nums[fourth] === nums[fourth + 1]){
                        fourth--
                    }
                }
            }
        }
    }

    return resArr
};
// @lc code=end

