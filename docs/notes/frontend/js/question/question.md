# js中常见的问题

## 精度缺失问题
> 如果后台返回的number类型的数据超过2的53次方，在数值转换为js的Number类型时，有些数值会存在精度缺失的问题，需要处理一下，一般都是有后端处理的，但是前端也需要知道处理的方法，以axios请求为例

没有创建 axios 实例
```js
axios.defaults.transformResponse = [
  function (data) {
    try {
      // 如果转换成功，则直接把结果返回
      return JSONbigString.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      // 如果转换失败了，我们在这里把数据原封不动的直接返回给请求使用
      return data
    }
  }
]
```
使用创建的 axios 实例
```js
let request = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'},
  transformResponse: [
    function (data) {
      try {
        // 如果转换成功，则直接把结果返回
        return JSONbigString.parse(data)
      } catch (err) {
        console.log('转换失败', err)
        // 如果转换失败了，我们在这里把数据原封不动的直接返回给请求使用
        return data
      }
    }
  ]
})
```