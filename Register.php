
<?php
header('location:login.php');
$x=$_POST['user'];
$y=$_POST['password'];

if($x==""||$y=="")
{
	echo "plz fill all entity";
}
else
{
mysql_connect("localhost","root","945880");
mysql_select_db("userregister");
$query="SELECT *FROM usertable WHERE name='$x' AND password='$y'";
$result=mysqli_query($query);
$count=mysqli_num_rows($result);
}
if($count==0)
{
	$query1="INSERT INTO usertable VALUES ('$x','$y')";
mysql_query($query1);
echo "Database Updated";

}
else
{
	echo "user exixts";
}







?>