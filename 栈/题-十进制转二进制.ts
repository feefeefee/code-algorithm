import ArrayStack from "./MTStack_array";

function decimalToBinary(decimal: number): string {
  // 创建一个栈，用于存放余数
  const stack = new ArrayStack<number>();

  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";

  // 所有余数都已经放在stack中，依次取出
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}

console.log(decimalToBinary(35));
console.log("——————");
console.log(decimalToBinary(100));
