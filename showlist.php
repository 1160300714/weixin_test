<?php
    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 
    $link=mysql_connect("localhost","root","root"); 
    mysql_select_db("demo", $link); //选择数据库
    mysql_query("SET NAMES utf8");//解决中文乱码问题


    $q = "SELECT * FROM demo"; //SQL查询语句 SELECT * FROM 表名
    $rs = mysql_query($q); //获取数据集
    if(!$rs){
        die("数据库没有数据!");
    }

    //循环读取数据并存入数组对象
    $dlogs;$i=0;
    while($row=mysql_fetch_array($rs))
    {
        $dlog["name"]=$row["name"];
        $dlog["head"]=$row["head"];
        $dlog["txt"]=$row["txt"];
        $dlog["time"]=$row["time"];
        $dlogs[$i++]=$dlog;
    }


    //以json格式返回html页面
    echo urldecode(json_encode($dlogs));
?>