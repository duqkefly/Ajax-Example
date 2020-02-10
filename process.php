<?php

    for($i=0;$i<=1000000;$i++){
        echo ".";
    }

    function retornar(){
        $val = ['val' => 1,'val2' => 2];
        echo $_POST['first']." ".$_POST['last']." ".$_POST['handle']."\n";
        echo  json_encode($val);
    }
    retornar(); 
?>