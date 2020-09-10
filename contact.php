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
  
    // Recipient
    $to = 'mus.kadouri12@gmail.com';

    // Subject
    $subject = 'Contact Form Porfolio';

    // Message
    $message = !empty($_POST['message']) ? $_POST['message'] : NULL;

    // Email
    $email = !empty($_POST['email']) ? $_POST['email'] : NULL;

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-type: text/html\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();

    // Send email
    var_dump($_POST);

?>

</body>

</html>