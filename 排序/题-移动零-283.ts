/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]

*/

function moveZeroes(nums: number[]): void {
  const n = nums.length
  // 记录末尾 0 的数量
  let zeroCount = 0
  // 先排序
  for (let i = 0; i < n - zeroCount; i++) {
    if (nums[i] === 0) {
      //   利用冒泡排序的思想，不断交换，将 0 移动到数组末尾
      for (let j = i; j < n - zeroCount - 1; j++) {
        swap(nums, j, j + 1)
      }
      // 末尾多了一个 0，记录下来，以缩小遍历范围
      zeroCount++
      /* 下一轮遍历时 i 会增加 1，但此时 nums[i] 已经和 nums[i+1] 交换了，nums[i+1] 还没有判断是否为 0，所以这里先减 1，以使下一轮继续判断 i 位置。*/
      i--
    }

  }

}


function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


/*双指针法，比冒泡排序效率要高，时间复杂度为O(n)*/
function moveZeroesV2(nums: number[]): void {
  const n = nums.length
  let showIndex = 0
  for(let i = 0; i < n; i++){
      // 如果不是0的话，就覆盖元素
      if(nums[i] !== 0){
          nums[showIndex] = nums[i]

          showIndex++
      }
  }

  // 在遍历一遍数组。从第一个0的索引开始遍历，后续置为0
  for(let j = showIndex; j < n; j++){
      nums[j] = 0
  }

};