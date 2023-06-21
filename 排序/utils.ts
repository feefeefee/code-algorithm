// 两数交换
export function swap(arr: number[], i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  /*
  另一种写法
  [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  */
}
export function isSorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

//帮助测式排序算法
type SortAlgoFn = (arr: number[]) => number[];
export function testSort(sortFn: SortAlgoFn) {
  const nums = Array.from({ length: 10 }, () => {
    return Math.floor(Math.random() * 200);
  });
  console.log("排序前的数组：", nums);
  const newNums = sortFn(nums);
  console.log("排序后的数组：", newNums);
  console.log("是否排序后有正确的顺序？", isSorted(newNums));
}
