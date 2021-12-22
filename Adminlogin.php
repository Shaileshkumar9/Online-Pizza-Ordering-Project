<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizza Admin Login</title>
    <link rel="stylesheet" href="Adminlogstyle.css">
	<style>
	        @media(max-width:870px)
{
    .container
    {
        display: block;
    }
    .image
    {
        margin-top: 20px;
    }
}
    </style>
</head>
<body>
    <div class="container">
        <div class="myform">
            <form action="adminvalidation.php" method="post">
                <h2>ADMIN LOGIN</h2>
                <input type="text" name="admin" placeholder="Admin Name" required>
                <input type="password" name="apassword" placeholder="Password" required>
				<button type="submit" >Login</button>
                
                
            </form>
        </div>
        <div class="image">
            <img src="https://m.media-amazon.com/images/I/71upTPFqneL._SL1358_.jpg" height="260px" width="380px">
        </div>
    </div>
</body>
</html>
