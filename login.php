<html>
<head>
    <title> User Login And Registration </title>
	<link rel="stylesheet" type="text/css" href="loginstyle.css">
     <link rel="stylesheet" type="text/CSS" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">

</head>
<style>
       body
	   {
          background-position: center;
            background-size: cover;
            background-image: url(https://m.media-amazon.com/images/I/71upTPFqneL._SL1358_.jpg);
	   }
</style>
<body>
     <div class="container">
        <div class="login-box">
        <div class="row">
		<div class="col-md-6 login-left">
		<h2> Login Here </h2>
		
            <form action="validation.php" method="post">
                <div class="form-group">
				<lable>Username</lable>
                <input type="text" name="user" class="form-control" required >
				</div>
				 <div class="form-group">
				<lable>Password</lable>
                <input type="password" name="password" class="form-control" required >
				</div>
                
				<button type="submit" class=" btn btn-primary">Login</button>
                
                
            </form>
        </div>
		<div class="col-md-6 login-right">
		<h2> Register  Here </h2>
            <form action="Register.php" method="post">
                <div class="form-group">
				<lable>Username</lable>
                <input type="text" name="user" class="form-control" required >
				</div>
				 <div class="form-group">
				<lable>Password</lable>
                <input type="password" name="password" class="form-control" required >
				</div>
                
				<button type="submit" class=" btn btn-primary">Resister</button>
                
                
            </form>
        </div>
		</div>
		</div>
		</div>
       
</body>





</html>