/*
* @Author: 754846039
* @Date:   2017-08-20 15:07:00
* @Last Modified by:   754846039
* @Last Modified time: 2017-08-20 15:07:36
*/
$(function () {
    var id=location.href.split("?")[1].split("=")[1];
    $.ajax({
        url:"/pkh/findById?id="+id,
        type:"get",
        dataType:"json",
        success:function (data) {
            if(data.code==200){
                data=data.data;
                $.each(data,function (i,v) {
                    $(`td[data=${i}]`).text(v);
                })
            }else{
                layer.msg("请求数据出错");
            }
        }
    })
})