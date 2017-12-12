# loading弹窗
仿微信提交信息弹出的loading，提交成功或失败后进行提示及动画隐藏loadbox；原生js，没有依赖其他库，只有2k
#用法

引入css
```
@import 'assembly/ajaxLoadbox';
```
在sass文件引入_ajaxLoadbox.scss,如果你写的是css，那需要下一个考拉sass编译器把他转成css文件


在文件中引入js，new一个出来的同时会生成弹窗，z-index是19，要注意；
关闭的时候给调用他的hide（）方法，参数传你想呈现给用户的信息。调用后执行渐隐动画，动画结束后loading块被设置为display：none；
```
<script src="javascripts/ajaxloadbox.js"></script>
<script>
    document.querySelector('.js-submit').addEventListener('click',function(){
        var loadbox = new ajaxLoadBox();
        setTimeout(function(){
            loadbox.hide('000')
        },2000)
    })
</script>
```
