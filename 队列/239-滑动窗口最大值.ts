class Solution {
  maxSlidingWindow(nums: number[], k: number): number[] {
    const n = nums.length;
    const deque: number[] = [];
    for (let i = 0; i < k; ++i) {
      while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(i);
    }

    const ans: number[] = [];
    ans.push(nums[deque[0]]);
    for (let i = k; i < n; ++i) {
      while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
        deque.pop();
      }
      deque.push(i);
      while (deque[0] <= i - k) {
        deque.shift();
      }
      ans.push(nums[deque[0]]);
    }
    return ans;
  }
}