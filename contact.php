<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mustapha Kadouri</title>
    <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
    <!-- Main style -->
    <link rel="stylesheet" href="assets/css/main.css">
    <!-- Font Awesome -->
    <script src="https://kit.fontawesome.com/65e7219626.js" crossorigin="anonymous"></script>
    <!-- AOS CSS -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>

<body>

<div class="thanks">
    <div class="thanks-content">
        <img src="assets/img/success.svg" alt="thank-you" class="thanks-content__img">
        <h1 class="thanks-content__heading">Message received. Thanks!</h1>
        <p class="thanks-content__description">If your inquiry is urgent, please use the telephone number listed above of contact form to talk to one of our staff members. Otherwise, we will reply by email as soon as possible.</p>
        <a href="index.php" class="thanks-content__home">Go Home</a>
    </div>
</div>
<?php 
    // SET UP PHPMAILER
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    require_once 'phpmailer/vendor/autoload.php';

    // Create new PHPMailer object
    $mail = new PHPMailer(true);

    //Server settings
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = 'smtp.gmail.com';
    $mail->Username = 'mus.kadouri@gmail.com';
    $mail->Password = 'ahlan@gmail.com';
    $mail->Port = 587; // 465
    $mail->SMTPSecure = 'tls'; // or we can use ssl
    
    // name
    $name = !empty($_POST['full-name']) ? $_POST['full-name'] : NULL;
    // email
    $email = !empty($_POST['email']) ? $_POST['email'] : NULL;
    // message
    $message = !empty($_POST['message']) ? $_POST['message'] : NULL;
    // receiver
    $receiver = $mail->Username;

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addReplyTo($email, 'Porfolio');
    $mail->addAddress($receiver, 'Mustapha Kadouri');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Contact Porfolio';
    $mail->Body = "<pre><strong>$message</strong></pre>";

    // $mail->SMTPOptions = array(
    //     'ssl' => array(
    //         'verify_peer' => false,
    //         'verify_peer_name' => false,
    //         'allow_self_signed' => true,
    //     )
    // );

    $mail->send();

?>
</body>

</html>