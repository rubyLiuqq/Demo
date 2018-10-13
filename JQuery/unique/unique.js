/**
 * 数组去重的方法
 */

 // 方法一：使用 ES6 Set去重（ES6中最常用）
function unique(arr) {
  return Array.from(new Set(arr));
}

// 方法二：利用for嵌套for，然后splice去重（ES5中最常用）
// 缺点： NaN 和 {}没有去重
function uniqueFor(arr) {
  for (var i = 0; i < arr.length; i ++) {
    for (var j = (i + 1); j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// 方法三：利用indexOf去重
function uniqueIndex(arr) {
  if (!Array.isArray(arr)) return;
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
}

// 方法四：利用sort()，先排序再比较相邻的
function uniqueSort(arr) {
  if (!Array.isArray(arr)) return;
  arr = arr.sort();
  var array = [arr[0]];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) array.push(arr[i]);
  }
  return array;
}

// 方法五：利用includes：检测数组是否有某个值
function uniqueInclude(arr) {
  if (!Array.isArray(arr)) return;
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) array.push(arr[i]);
  }
  return array;
}

// 方法六、利用hasOwnProperty（最干净的方法）
function uniqueHasOwnPro(arr) {
  if (!Array.isArray(arr)) return;
  return arr.filter(function (item, index, arr) {
    // typeof item + item = 类型+item 拼接
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  });
}

// 方法八、利用filter，如果是相同的，arr.indexOf(item, 0)返回相同的第一个值，因此重复的肯定与index不相等
// 返回true表示保留该元素，false则不保留
function uniqueFilter(arr) {
  return arr.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  });
}

// 方法十一、利用reduce+includes
function uniqueReduce(arr) {
  return arr.reduce((pre, cur) => pre.includes(cur) ? pre : [...pre, cur], []);
}

// 方法十二、[...new Set(arr)]
[...new Set(arr)]
