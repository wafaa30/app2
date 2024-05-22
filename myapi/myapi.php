
<?php
  $CN = mysqli_connect("localhost:3307", "root", "", "cms");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true);

    $first_name=$_POST['first_name'];
    $last_name=$_POST['last_name'];		
    $userName=$_POST['userName'];	
    $email=$_POST['email'];
    $password=$_POST['password'];

    $insertMemberData = "INSERT INTO user (first_name, last_name, userName, email, password) 
    VALUES ('$first_name', '$last_name', '$userName', '$email', '$password')";

    $register = mysqli_query($CN, $insertMemberData);

    if ($register) 
        $Message = "Member has been registered successfully";
    else 
        $Message = "Server Error... please try latter";

    $Response[] = array("Message" => $Message);
    echo json_encode($Response);
 