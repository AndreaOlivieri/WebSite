<?php

    // Here we get all the information from the fields sent over by the form.
    $name = $_REQUEST['user-name'];
    $email = $_REQUEST['user-email'];
    $message = ( $_REQUEST['user-message'] ) ? $_REQUEST['user-message'] : '';
    $status = $_REQUEST['user-status'];

    $to = 'andrea.olivieri1991@gmail.com';
    $subject = "Website Email";

    $headers = "From: ".$name." <".$email.">". "\r\n" .
               "Reply-To: ".$name." <".$email.">". "\r\n".
               "MIME-Version: 1.0\r\n".
               "Content-type: text/html; charset=iso-8859-1\r\n".
               "X-Priority: 1\r\n".
               "X-Mailer: PHP/".phpversion();

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $status == "yes" ) { // shis line checks that we have a valid email address
        if (mail($to, $subject, $message, $headers)) { // this method sends the mail.
          echo "success"; // success message
        }
        else{
          echo "error: something wrong\r\n".
               "name = ".$name."\r\n".
               "email = ".$email."\r\n".
               "message = ".$message."\r\n".
               "status = ".$status."\r\n".
               "to = ".$to."\r\n".
               "headers = ".$headers."\r\n";
        }
    }else{
        echo "error: Invalid Email"; //error
    }

?>