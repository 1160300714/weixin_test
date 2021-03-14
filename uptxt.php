<?php

    header("Content-Type:text/html;charset=utf8"); 
    header("Access-Control-Allow-Origin: *"); //解决跨域
    header('Access-Control-Allow-Methods:POST');// 响应类型  
    header('Access-Control-Allow-Headers:*'); // 响应头设置 
    $con = mysql_connect("localhost","root","root");
    mysql_select_db("demo", $con);
    mysql_query("SET NAMES utf8");//解决中文乱码问题


    if (!$con)
      {
      die('Could not connect: ' . mysql_error());
      }

    $name = $_POST['name'];
    $head = $_POST['head'];
    $txt = $_POST['txt'];
    $time = $_POST['time'];

    mysql_query("INSERT INTO demo (name,head,txt,time) 
    VALUES ('$name','$head','$txt','$time')");
    mysql_close($con); 
    echo $txt;

?>