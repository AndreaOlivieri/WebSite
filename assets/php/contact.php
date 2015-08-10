<?php
    require_once 'PHPMailer/PHPMailerAutoload.php';


    // Here we get all the information from the fields sent over by the form.
    $name = $_REQUEST["user-name"];
    $email = $_REQUEST["user-email"];
    $message = ( $_REQUEST["user-message"] ) ? $_REQUEST["user-message"] : "";
    $status = $_REQUEST["user-status"];

    $to = "andrea.olivieri1991@gmail.com";

    $subject = "Website Email";

    //create an instance of PHPMailer

    if (filter_var($email, FILTER_VALIDATE_EMAIL) && $status == "yes" ) { // shis line checks that we have a valid email address

      $mail = new PHPMailer(true);
      
      try {
        $mail->IsSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->From = $email;
        $mail->FromName = $name;
        $mail->AddAddress($to); //recipient 
        $mail->Subject = $subject;
        $mail->Body = $message;
        $mail->Send();
        echo "success";
      } catch (phpmailerException $e) {
        echo $e->errorMessage(); //Pretty error messages from PHPMailer
      } catch (Exception $e) {
        echo $e->getMessage(); //Boring error messages from anything else!
      }
    }else{
        echo "error: Invalid Email"; //error
    }

?>