# css变量
```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
        .test1 {
            position: absolute;
            width: 200px;
            height: 200px;
            color: #fff;
            font-size: 18px;
            top: 0;
            background: red;
            transform: rotate(var(--percent)); //重点
        }
    </style>
</head>


<body>

</body>
    <div class="content">
        <div class="test1" style="--percent: 100deg;">abc</div>
    </div>
</html>
```