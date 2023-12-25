function isValid(s: string): boolean {
  //利用栈的特点，先遍历 把括号压入的栈中，遇到对应的匹配的括号就出栈
  // 建立一个对应括号的字典
  // 结果应该是去判断最终栈里是否有残留的括号

  // 边界条件
  if(!s) return true
  
  type BracketMap = {
      [index: string]: string;
  }
  
  let helperStack: string[] = [];
  let bracketMap: BracketMap = {
      '(': ')',
      '[': ']',
      '{': '}'
  }
  for (let i of s) {
      if (bracketMap.hasOwnProperty(i)) {
          helperStack.push(bracketMap[i]);
      } else if (i !== helperStack.pop()) {
          return false;
      }
  }
  return helperStack.length === 0;
};