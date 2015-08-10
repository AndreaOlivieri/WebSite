<?php
    require_once '../PHPMailer/PHPMailerAutoload.php';


    // Here we get all the information from the fields sent over by the form.
    $name = $_REQUEST["user-name"];
    $email = $_REQUEST["user-email"];
    $message = ( $_REQUEST["user-message"] ) ? $_REQUEST["user-message"] : "";
    $status = $_REQUEST["user-status"];

    $to = "oli.andrea17@gmail.com";

    $subject = "Website Email";

    //create an instance of PHPMailer
    $mail = new PHPMailer(true);

    $mail->From = $email;
    $mail->FromName = $name;
    $mail->AddAddress($to); //recipient 
    $mail->Subject = $subject;
    $mail->Body = $message;

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $status == "yes" ) { // shis line checks that we have a valid email address

      if($mail->Send()) {
          echo "success"; // this method sends the mail.
      }else{
          echo "error: something wrong"; // this method sends the mail.
      }
    }else{
        echo "error: Invalid Email"; //error
    }

?>