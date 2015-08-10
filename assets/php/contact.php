<?php


$to      = 'andrea.olivieri1991@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: andrea.olivieri1991@gmail.com' . "\r\n" .
    'Reply-To: andrea.olivieri1991@gmail.com.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $status == "yes" ) { // shis line checks that we have a valid email address
        mail($to, $subject, $message, $headers); // this method sends the mail.
        echo "success"; // success message
        exit;
    }else{
        echo "error"; //error
    }

?>