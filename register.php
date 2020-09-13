<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In | Sign Up</title>
  <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
  <!-- Main style -->
  <link rel="stylesheet" href="assets/css/register.css">
  <!-- Font Awesome -->
  <script src="https://kit.fontawesome.com/65e7219626.js" crossorigin="anonymous"></script>
  <!-- AOS CSS -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

</head>

<body>

  <div class="container" id="container">

    <!-- Start Sign Up -->
    <div class="form-container sign-up-container">
      <form role="form" method="post" action="process.php" class="signup">
        <h1>Create Account</h1>
        <span>Or use your email for registration</span>
        <input type="text" name="name" placeholder="Name" class="name">
        <small></small>
        <input type="email" name="email" placeholder="Email" class="email">
        <small></small>
        <input type="password" name="password" placeholder="Password" class="password">
        <small></small>
        <button type="submit">Sign Up</button>
      </form>
    </div>
    <!-- End Sign Up -->

    <!-- Start Sign In -->
    <div class="form-container sign-in-container">
      <form role="form" method="post" action="process.php" class="signin">
        <h1>Sign in</h1>
        <span>Or use your account</span>
        <input type="text" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>

    <!-- Start Overlay -->
    <div class="overlay-container">
      <div class="overlay">

        <!-- Overlay Sign In -->
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button class="ghost" id="signIn">Sign In</button>
        </div>
        <!-- Overlay Sign In -->

        <!-- Overlay Sign Up -->
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with me</p>
          <button class="ghost" id="signUp">Sign Up</button>
        </div>
        <!-- Overlay Sign Up -->

      </div>
    </div>
    <!-- End Overlay -->

  </div>

  <!-- REGISTER JS -->
  <script type="module" src="assets/js/register.js"></script>
  <?php

    include_once("config.php");

     // name
     $name = !empty($_POST['name']) ? $_POST['full-name'] : NULL;
     // email
     $email = !empty($_POST['email']) ? $_POST['email'] : NULL;
     // message
     $password = !empty($_POST['password']) ? $_POST['password'] : NULL;
    
    try {
        $con = new PDO("mysql:host={$db_host};dbname={$db_name};port={$db_port}", $db_user, $db_password);
        $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // insert data to users table
        $stmt = $con->prepare("INSERT INTO $db_name VALUES (:name, :email, :password)");
        $stmt->execute(array(':name' => $name, ':email' => $email, ':password' => $password));


    }
    catch (PDOException $e) {
        echo "Connection field" . $e->getMessage();
    }

?>
</body>

</html>