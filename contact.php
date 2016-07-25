<?php
    $to      = 'test@example.com';
    $email   = $_POST['email'];

    $name  = $_POST['name'];
    $message = $_POST['text-massage'];

    $headers = 'From: http://YourUrl'. '<'.$email.'>' . "\r\n" .
        'Reply-To: '. $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)){
     echo "<script>window.location.href = 'http://technext.github.io/creative-star';</script>";
    }
  
?>