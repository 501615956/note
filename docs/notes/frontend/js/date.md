
## 常用方法

### `getDate()`
* 从 Date 对象返回一个月中的某一天 (1 ~ 31)

### `getDay()`
* 从 Date 对象返回一周中的某一天 (0 ~ 6)。（星期）
* 0：星期日、1：星期一、2：星期二、3：星期三、4：星期四、5：星期五、6：星期六

### `getFullYear()`
* 从 Date 对象返回四位数字的年份

### `getHours()`
* 返回 Date 对象的小时 (0 ~ 23)

### `getMinutes()`
* 返回 Date 对象的分钟 (0 ~ 59)

### `getMonth()`
* 从 Date 对象返回月份 (0 ~ 11)
* 0：一月、1：二月、2：三月 ... 11：十二月

### `getSeconds()`
* 返回 Date 对象的秒数 (0 ~ 59)

### `toLocaleDateString()`
* 根据本地时间格式，把 Date 对象的日期部分转换为字符串
  
### `toLocaleTimeString()`
* 根据本地时间格式，把 Date 对象的时间部分转换为字符串
  
### `toLocaleString()`
* 根据本地时间格式，把 Date 对象转换为字符串

## 获取对应的时间
```js
day = parseInt(difference/60/60/24)      //天
hour = parseInt(difference/60/60)%24    //小时
minute = parseInt(difference/60)%60      //分钟
second = parseInt(difference)%60           //秒
```

## 格式化时间戳
```js
//格式化时间
function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};

function padLeftZero(str) {
	return ('00' + str).substr(str.length);
};

```