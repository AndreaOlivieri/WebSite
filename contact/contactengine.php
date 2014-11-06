<?php
    require_once '../PHPMailer/PHPMailerAutoload.php';

    $EmailTo   = "andrea.olivieri1991@gmail.com";
    $Subject   = "Contact Form Submission";
    $Name      = Trim(stripslashes($_POST['name']));  
    $EmailFrom = Trim(stripslashes($_POST['senderEmail'])); 
    $Phone     = Trim(stripslashes($_POST['phone']));
    $Message   = Trim(stripslashes($_POST['message'])); 

    $Body = "Name: ".$Name."\n";
    $Body .= "Email: ".$EmailFrom."\n";
    $Body .= "Phone: ".$Phone."\n";
    $Body .= "Message: ".$Message."\n";


    //create an instance of PHPMailer
    $mail = new PHPMailer();

    $mail->From = $EmailFrom;
    $mail->FromName = $Name;
    $mail->AddAddress($EmailTo); //recipient 
    $mail->Subject = $Subject;
    $mail->Body = $Body;

    if($mail->send()) {
        print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.html\">";        
    }else{
        print "<meta http-equiv=\"refresh\" content=\"0;URL=error.html\">";
    }

?>