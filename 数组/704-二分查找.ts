function search(nums: number[], target: number): number {
  /**
  对于二分查找来说，最关键的是区间的定义，区间的定义是左闭右闭[left,right]，
  还是左闭右开[left,right) 对于后续边界的处理有很大的关系。
   */
  // 接下来以左闭右开[left,right)的形式来解这题
  // 初始化左右两边的索引
  let left = 0;
  let right = nums.length;

  while (left < right) {
    // 取中间值
    let middle = Math.floor((right - left) / 2) + left;
    // 接下来开始判断 middle和target的位置关系
    // 因为是左闭右开，所以不会出现left === right
    if (nums[middle] > target) {
      // middle 大于target，说明middle在target的右边，这个时候需要更新右区间
      right = middle;
    } else if (nums[middle] < target) {
      // middle 小于 target, 说明middl在target的左边，需要更新左区间
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
