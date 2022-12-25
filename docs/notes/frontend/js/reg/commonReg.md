
## 常用正则表达式

### 验证手机号（中国）

#### 宽松，只要是13,14,15,16,17,18,19开头即可

```js
// 正则
const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/g
// 验证方法
const isMPRelaxed = value => reg.test(value);
```

#### 严谨，根据工信部2019年最新公布的手机号段

```js
// 正则
const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g
// 验证方法
const isMPStrict = value => reg.test(value)
```

### 验证邮箱
 
```js
// 正则
const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g
// 验证方法
const isEmail = value => reg.test(value)
```

### 验证身份证号

#### (2代,18位数字),最后一位是校验位,可能为数字或字符X

```js
// 正则
const reg = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}[\dXx]$/g
// 验证方法
const isIDCardNew = value => reg.test(value)
```

#### (1代,15位数字)

```js
// 正则
const reg = /^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$/g
// 验证方法
const isIDCardOld = value => reg.test(value)
```

#### 支持1/2代(15位/18位数字)

```js
// 正则
const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/g
// 验证方法
const isIDCard = value => reg.test(value)
```

### 验证不能包含字母

```js
// 正则
const reg = /^[^A-Za-z]*$/g
// 验证方法
const isNoWord = value => reg.test(value);
```

### 验证邮政编码(中国)

```js
// 正则
const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/g
// 验证方法
const isPostcode = value => reg.test(value)
```

### 验证微信号
> 6至20位，以字母开头，字母，数字，减号，下划线

```js
// 正则
const reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g
// 验证方法
const isWeChatNum = value => reg.test(value);
```

### 验证16进制颜色

```js
// 正则
const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g
// 验证方法
const isColor16 = value => reg.test(value);
```

### 验证网址

```js
// 正则
const reg = /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g
// 验证方法
const isRightWebsite = value => reg.test(value)
```

### 验证统一社会信用代码

```js
// 正则
const reg = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/g
// 验证方法
const isCreditCode = value => reg.test(value)
```

### 验证银行卡号
> （10到30位, 覆盖对公/私账户, 参考微信支付）

```js
// 正则
const reg = /^[1-9]\d{9,29}$/g
// 验证方法
const isAccountNumber = value => reg.test(value)
```

### 验证中文姓名

```js
// 正则
const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/g
// 验证方法
const isChineseName = value => reg.test(value)
```

### 验证英文姓名

```js
// 正则
const reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g
// 验证方法
const isEnglishName = value => reg.test(value)
```