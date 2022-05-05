
<?php

session_start();


$ID = $_POST['ID'];
$comment = $_POST['comment'];

if(!$ID) {
    $errorMsg = "Please enter your user ID.";
} else
    $errorMsg = "Please enter your comment.";
