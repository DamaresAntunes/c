<!DOCTYPE html>
<html>
<body>

<?php
require("php/src/PHPMailer.php");
require("php/src/SMTP.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);
$mail->IsSMTP(); // enable SMTP
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.gmail.com";
$mail->Port = 465; // 465 or 587 NO SSL
$mail->IsHTML(true);
$mail->Username = "damaresdejesusantunes@gmail.com"; // servidor de envio
$mail->Password = "xeuhsbxmctetgiac";
$mail->SetFrom($_POST["email"]);
$mail->Subject = "No Subject";
if (isset($_POST["textarea"])) {
	$longText = $_POST["textarea"];
} else {
	$longText = "";
}
$mail->Body = $_POST["name"]."<br>".$_POST["email"]."<br>".$_POST["contato"]."<br><br>".$longText ;
$mail->AddAddress("damaresdejesusantunes@gmail.com"); // quem vai receber o email

if(!$mail->Send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
    return false;
} else {
    echo "Mensagem enviada com sucesso";
    return true;
}
?>

</body>
</html>