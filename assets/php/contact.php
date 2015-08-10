<?php


$to      = 'andrea.olivieri1991@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: oli.andra17@gmail.com' . "\r\n" .
    'Reply-To: oli.andra17@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    
        mail($to, $subject, $message, $headers); // this method sends the mail.
        echo "success"; // success message
   
?>