<?php

include 'config.php';

error_reporting (E_ALL ^ E_NOTICE);

$post = (!empty($_POST)) ? true : false;

if($post)
{
include 'functions.php';

$name = stripslashes($_POST['name']);
$email = stripslashes($_POST['email']);
$phone = stripslashes($_POST['phone']);
$message = stripslashes($_POST['message']);
$subject = (EMAIL_SUBJECT);

$error = '';

// Check name

if(!$name)
{
$error .= '<p>Enter your name.</p>';
}

// Check email

if(!$email)
{
$error .= '<p>Enter your e-mail.</p>';
}

if($email && !ValidateEmail($email))
{
$error .= '<p>Invalid e-mail.</p>';
}

// Check message (length)

if(!$message || strlen($message) < 5)
{
$error .= "<p>Leave a message. At least 5 characters.</p>";
}

$content = "Phone: " . $phone . "\r\n";
$content .= "Message: " . $message . "\r\n";

if(!$error)
{
$mail = mail(WEBMASTER_EMAIL, $subject, $content,
     "From: ".$name. " <".$email.">\r\n"
    ."Reply-To: ".$email."\r\n"
    ."X-Mailer: PHP/" . phpversion());


if($mail)
{
echo 'OK';
}

}
else
{
echo '<div  id="message">'.$error.'</div>';
}

}
?>