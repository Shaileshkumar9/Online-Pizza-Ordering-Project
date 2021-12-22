<?php
session_start();

$x=$_POST['user'];
$y=$_POST['password'];

if($x==""||$y=="")
{
	echo "plz fill all entity";
}
else
{
 $con=mysqli_connect("localhost","root","945880");
mysqli_select_db( $con,"userregister");
$query="select * from usertable where name='$x' && password='$y'";
$result=mysqli_query($con,$query);
$count=mysqli_num_rows($result);
}
if($count==1)
{
	header('location:user2.php');

}
else
{    
     header('location:login.php');  
	 echo "Incorrect Username and Password";
	
}