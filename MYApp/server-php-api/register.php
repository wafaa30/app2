<?php
include 'config.php';

$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Log the received JSON object for debugging
file_put_contents('php://stderr', print_r($obj, TRUE));

// first_name stored into $first_name.
$first_name = $obj['firstName'];

// last_name stored into $last_name.
$last_name = $obj['lastName'];

// username stored into $username.
$username = $obj['username'];

// email stored into $email.
$email = $obj['email'];

// password stored into $password.
$password = $obj['password'];

if ($obj['email'] != "" && $obj['username'] != "") {
    $resultUsername = $mysqli->query("SELECT * FROM users WHERE username='$username'");
    $resultEmail = $mysqli->query("SELECT * FROM users WHERE email='$email'");

    if ($resultUsername->num_rows > 0) {
        echo json_encode('Ce nom d utilisateur existe deja'); // alert msg in react native
    } elseif ($resultEmail->num_rows > 0) {
        echo json_encode('Cette Adress email existe deja'); // alert msg in react native
    } else {
        $query = "INSERT INTO users (first_name, last_name, username, email, password) VALUES ('$first_name', '$last_name', '$username', '$email', '$password')";
        $add = $mysqli->query($query);

        if ($add) {
            echo json_encode('Utilisateur enregistre avec succes'); // alert msg in react native
        } else {
            echo json_encode('Verifiez la connexion Internet'); // our query failed
        }
    }
} else {
    echo json_encode('Réessayez');
}

