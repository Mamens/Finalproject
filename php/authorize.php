<?php 
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$login = $request->login;
    @$password = $request->password;

    if($login == "mamen.erbolat@gmail.com" && $password == "1234"){
      echo "Ok";
    }else{
      echo "Error";
    }
?>