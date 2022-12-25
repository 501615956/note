
## 遍历树节点(递归算法实现)

```js
/**
 * 遍历树节点(递归算法实现)
 * @param data 需要遍历的数组
 * @param callback 回调函数
 * @param childrenName 下一层级的key,默认为children,根据实际情况填写
 * @example
 * foreachTree(data, (item) => {
 *   if (item.id === 9) {
 *     result = item
 *   }
 * })
 */

export const foreachTree = (data, childrenName = 'children', callback) => {
  for (let i = 0; i < data.length; i++) {
    callback(data[i])
    if (data[i][childrenName] && data[i][childrenName].length > 0) {
      foreachTree(data[i][childrenName], callback, childrenName)
    }
  }
}
```

##  追溯父节点

```js
/**
 * 追溯父节点
 * @param pid
 * @param data
 * @param rootPid
 * @param pidName
 * @param idName
 * @param childrenName 子节点的key
 * @return {*[]}
 */
export function traceParentNode(pid, data, rootPid, pidName = 'parentId', idName = 'id', childrenName = 'children') {
  let arr = [];
  foreachTree(data, childrenName, (node) => {
    if (node[idName] === pid) {
      arr.push(node);
      if (node[pidName] !== rootPid) {
        arr = arr.concat(traceParentNode(node[pidName], data, rootPid, pidName, idName));
      }
    }
  });
  return arr;
}
```



## 数组乱序

```js
/**
 * 数组乱序
 * @param {array} arr
 */
export function arrScrambling(arr = []) {
  let array = arr;
  let index = array.length;
  while (index) {
    index -= 1;
    let randomIndex = Math.floor(Math.random() * index);
    let middleware = array[index];
    array[index] = array[randomIndex];
    array[randomIndex] = middleware
  }
  return array
}
```



## 数组交集

```js
/**
 * 数组交集
 * @param { array} arr1 数组
 * @param { array } arr2 数组
 */
export const similarity = (arr1 = [], arr2 = []) => arr1.filter(v => arr2.includes(v)); 
```



## 数组去重（非对象的）

```js
/**
 * 数组去重（非对象的）
 * @param arr 要去重的数组
 * @return {any[]}
 * @example
 * uniqueArray([1, 2, 2, 3, 3, 4, 4, 5, 5, 6])
 */
const uniqueArray = (arr = []) => [...new Set(arr)];
```



## 数组对象根据字段去重

```js
/**
 * 数组对象根据字段去重
 * @param arr 要去重的数组
 * @param key 根据去重的字段名
 * @return {*[]} 数组
 * @example
 * const responseList = [
 *     { id: 1, name: '树哥' },
 *     { id: 2, name: '黄老爷' },
 *     { id: 3, name: '张麻子' },
 *     { id: 1, name: '黄老爷' },
 *     { id: 2, name: '张麻子' },
 *     { id: 3, name: '树哥' },
 *     { id: 1, name: '树哥' },
 *     { id: 2, name: '黄老爷' },
 *     { id: 3, name: '张麻子' },
 * ]
 * uniqueArrayObject(responseList, 'id')
 * // [{ id: 1, name: '树哥' },{ id: 2, name: '黄老爷' },{ id: 3, name: '张麻子' }]
 */
export const uniqueArrayObject = (arr = [], key = 'id') => {
  if (arr.length === 0) return []
  let list = []
  const map = {}
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item
    }
  })
  list = Object.values(map)
  return list
}
```



## 数组中某元素出现的次数

```js
/**
 * 数组中某元素出现的次数
 * @param { array } arr
 * @param {{}} key 数组中元素对象的key
 */
export function countOccurrences(arr = [], key = 'id') {
  return arr.reduce((a, v) => v[key] === key[key] ? a + 1 : a + 0, 0);
}
```



## 模糊搜索

```js
/**
 * 模糊搜索
 * @param list 原数组
 * @param keyWord 查询的关键词
 * @param attribute 数组需要检索属性
 * @return {*[]} 数组
 * @example
 * const list = [
 *   { id: 1, name: '树哥' },
 *   { id: 2, name: '黄老爷' },
 *   { id: 3, name: '张麻子' },
 * ]
 * fuzzyQuery(list, '树', 'name') // [{id: 1, name: '树哥'}]
 */
export const fuzzyQuery = (list = [], keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord)
  const arr = []
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i])
    }
  }
  return arr
}
```



## arrMatch 数组简单运算 求和|最大值|最小值|从小到大|从大到小

```js
/**
 * 数组简单运算
 */
class myArrMatch {
  // 求和
  sum(arr) {
    return arr.reduce((a, b) => a + b)
  }

  /**
   * 如果数据都为数字可以使用该方法快速获取最大值和最小值获取
   * let arr = [1, 10, 29, 50, 100]
   * Math.max(...arr)  // 100
   * Math.min(...arr)  // 1
   */

  // 最大值
  max(arr) {
    return arr.reduce((a, b) => a > b ? a : b)
  }

  // 最小值
  min(arr) {
    return arr.reduce((a, b) => a < b ? a : b)
  }

  // 从小到大排列
  sortMin(arr) {
    return arr.sort((a, b) => a - b)
  }

  // 从大到小排列
  sortMax(arr) {
    return arr.sort((a, b) => b - a)
  }
}

/**
 * 数组运算实例化
 * @type {myArrMatch}
 * @example
 * arrMatch.sum([...])
 * arrMatch.max([...])
 * arrMatch.min([...])
 */
export const arrMatch = new myArrMatch()
```



## 从数组中随机选择一个值

```js
/**
 * 从数组中随机选择一个值
 * @param {*} arr 需要选择的列表
 * @returns 数组中的某一个item
 * @example
 * const arr = ['a', 'b', 'c', 'd']
 * randomItem(arr)  // b
 */
export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)]
```

