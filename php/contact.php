<?php
/**
* Copyright (C) Ahmed Abdelhady
* Ignite Ismailia STEM
*/

require('class.simple_mail.php');
function process_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
// 
$yourMail = "info@ignite-stemsimailia.com";
$yourName = "Ignite Stem ISmailia";
$subject = "Inquiry from website";

if(!empty($_POST)){

  if(!empty($_POST["contName"])) {
    $userName = process_input($_POST["contName"]);
  } else {
    echo json_encode(array('error' => true, 'message' => 'Please enter your name'));
    exit;
  }

  if(isset($_POST["contMail"])) {
    $email = process_input($_POST["contMail"]);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      echo json_encode(array('error' => true, 'message' => 'Please enter valid email address'));
      exit;
    }
  } else {
    echo json_encode(array('error' => true, 'message' => 'Please enter valid email address'));
    exit;
  }

  if(!empty($_POST["contMessage"])) {
    $userMessage = process_input($_POST["contMessage"]);
  } else {
    echo json_encode(array('error' => true, 'message' => 'The message cannot be empty'));
    exit;
  }

  $mailer = SimpleMail::make()
  ->setTo($yourMail, $yourName)
  ->setFrom($email, $userName)
  ->setSubject($subject)
  ->setMessage($userMessage)
  ->setReplyTo($email, $userName)
  ->send();

  if($mailer) {
    echo json_encode(array('error' => false, 'message' => 'Thanks for contacting us. We will get back to you soon'));
    exit;
  } else {
    echo json_encode(array('error' => true, 'message' => 'Problem connecting to the server. Please try again later'));
    exit;
  }
}
?>
