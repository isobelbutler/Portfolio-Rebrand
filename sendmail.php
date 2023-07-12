<?php
   if(isset($_POST['submit'])){
      $name = $_POST['name'];
      $email = $_POST['email'];
      $message = $_POST['message'];
      $to = "isobutler@icloud.com";
      $subject = "New Message from Contact Form";
      $body = "Name : $nameEmail: $email$message";
      mail($to,$subject,$body);
      echo "Thank you for your message!";
   }
?>