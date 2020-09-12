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
      <form role="form" method="post" action="#" class="signup">
        <h1>Create Account</h1>
        <span>Or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </form>
    </div>
    <!-- End Sign Up -->

    <!-- Start Sign In -->
    <div class="form-container sign-in-container">
      <form role="form" method="post" action="#" class="signin">
        <h1>Sign in</h1>
        <span>Or use your account</span>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
    </div>

    <!-- Start Overlay -->
    <div class="overlay-container">
      <div class="overlay">

        <!-- Overlay Sign In -->
        <div class="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with me please login with your personal info</p>
          <button class="ghost" id="signin-overlay">Sign In</button>
        </div>
        <!-- Overlay Sign In -->

        <!-- Overlay Sign Up -->
        <div class="overlay-panel overlay-right">
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with me</p>
          <button class="ghost" id="signup-overlay">Sign Up</button>
        </div>
        <!-- Overlay Sign Up -->

      </div>
    </div>
    <!-- End Overlay -->

  </div>

  <!-- FORM JS -->
  <script src="assets/js/form.js"></script>

</body>

</html>