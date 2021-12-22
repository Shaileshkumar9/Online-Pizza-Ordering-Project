<?php
session_start();

$x=$_POST['admin'];
$y=$_POST['apassword'];

if($x==""||$y=="")
{
	echo "plz fill all entity";
}
else
{
 $con=mysqli_connect("localhost","root","945880");
mysqli_select_db( $con,"admin");
$query="select * from admintable where name='$x' && pass='$y'";
$result=mysqli_query($con,$query);
$count=mysqli_num_rows($result);
}
if($count==1)
{
	header('location:Adminwork2.php');

}
else
{    echo" password is wrong";
     header('location:Adminlogin.php'); 
     	 
	
}