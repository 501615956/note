---
sidebar: 'auto'
---

# css基本样式

## 基本样式
### 取消点击时外边框
```css
outline: none; 
```
### 鼠标点击时变小手
```css
cursor: pointer;  
```
### 设置input中placeholder的颜色
```css
input::-webkit-input-placeholder{color:(r,g,b);}   
```
### border边框样式  
```css
border: 1px solid #ddd;   /*实线 */
border: 1px dashed #ddd;   /*虚线（短杠虚线） */
border: 1px dotted #ddd;   /*虚线（圆点虚线）*/
```
### 让元素消失
```css
display: none;        /*让元素消失（元素不占位置）*/
visibility: hidden;   /*让元素消失（元素还占位置）*/
opacity: 0;           /*透明度为0 */
```
### 省略号（一行/多行）
```css
/* 一行省略号 */
white-space:nowrap;        /*让内容不换行*/
overflow:hidden;           /*溢出隐藏*/
text-overflow:ellipsis;    /*溢出部分变省略号*/

/* 多行省略号 */
display: -webkit-box;            /*创建弹性伸缩盒子模型显示*/
-webkit-box-orient: vertical;    /*从上到下垂直排列子元素*/
-webkit-line-clamp: 6;           /*显示的行数*/
text-overflow: ellipsis;         /*溢出部分变省略号*/
overflow: hidden;                /*溢出隐藏*/
```
### 背景缩放
```css
background-size: cover;       /*让背景以高度缩放（多余的部分不要）*/
min-width: 1200px;       /*给缩放的背景设置一个最小宽度  */   
```
### 取消图片默认的底部边距
```css
vertical-align: middle;
```
### 滚动条
```css
/* 隐藏滚动条*/
div::-webkit-scrollbar {
  display: none;
}

/* 修改html滚动条样式 */
::-webkit-scrollbar {
  background-color: transparent;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #999999;
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: content-box;
}
```

## 图片样式
### 警示线
![](https://cdn.nlark.com/yuque/0/2022/png/28469598/1651551785615-59e1314b-4545-4b31-8fb8-e811e4f064ad.png#averageHue=%23f8f1f1&crop=0&crop=0&crop=1&crop=1&id=nT0JM&originHeight=26&originWidth=710&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)
```css
background: repeating-linear-gradient(
  -45deg,
  #ff6c6c 0,
  #ff6c6c 20%,
  transparent 0,
  transparent 25%,
  #1989fa 0,
  #1989fa 41%,
  transparent 0,
  transparent 50%
);
```