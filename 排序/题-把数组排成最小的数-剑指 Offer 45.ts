/* 
输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
示例 1:
输入: [10,2]
输出: "102"
示例 2:
输入: [3,30,34,5,9]
输出: "3033459"

提示:
0 < nums.length <= 100
说明:
输出结果可能非常大，所以你需要返回一个字符串而不是整数
拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0
相关标签

 */

// 先用冒泡实现
function minNumber(nums: number[]): string {
  const n = nums.length
  
  // 把数组里的值从小到大进行排序
  for(let i = 0 ; i < n ;i++){
      let hasSort = true
      for(let j = 0 ; j < n - 1 -i ;j++){
          const s1:string = `${nums[j]}`+ `${nums[j+1]}`
          const s2:string =  `${nums[j+1]}`+ `${nums[j]}`
          if(s1 > s2){
            swap(nums,j,j+1)
            hasSort = false
          }
      }
      if(hasSort) break
  }

  // 输出数组里的值进行拼接
  return nums.join('')

};

function swap(arr:number[], i:number,j:number){
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}


/* 
心问题是排序，优先选用快排，归并等排序。

这里比较不仅仅是大小的比较，而是
- 2个数字拼接起来之后的比较
- 如果 a 和 b 组成的字符串大于 b 和 a 组成的字符串，则交换 a 和 b。

*/