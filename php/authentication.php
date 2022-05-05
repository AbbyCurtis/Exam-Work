<?php
session_start();

//Connecting the database
$DATABASE_HOST = "localhost";
$DATABASE_USER= "root";
$DATABASE_PASS = "";
$DATABASE_NAME = "student_account";

$link = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
 
//If cannot connect
if( mysqli_connect_error() ) {
    exit("ERROR: Could not connect. " . mysqli_connect_error());
}
//Null Fields
if ( !isset($_POST['username'], $_POST['password'])) {
    exit('Please fill both username and password fields');
}

//If password is correct
    if(password_verify($_POST['password'], $password)) {
    session_regenerate_id();
    $_SESSION['loggedin'] = TRUE;
    $_SESSION['name'] = $_POST['username'];
    $_SESSION['password'] = $password;
    echo 'Welcome '.$_SESSION['name'].'!';
    //If password is not correct
} else {
    echo 'Incorrect username/password';
}
