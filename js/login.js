
//$(".sub").click(function(){
//	alert("aaaa");
//	var xmlhttp;
//if(window.XMLHttpRequest)
//{
//	// code for IE7+, Firefox, Chrome, Opera, Safari
//	xmlhttp=new XMLHttpRequest();
//}
//else{
//	// code for IE6, IE5
//	 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//}
//var username=$(".txt").val();
//var pwd=$(".pwd").val();
//if(username=="123456" && pwd=="123456")
//{
//	alert("a");
//}
//});

//xmlhttp.onreadystatechange=function()
//{
////if (xmlhttp.readyState==4 && xmlhttp.status==200)
////  {
//// 
////  }
////}
////xmlhttp.open("GET","getcustomer.asp?q="+str,true);
////xmlhttp.send();



$(".sub").click(function(){
	var username=$(".txt").val();
	var pwd=$(".pwd").val();
	if(username!=""&& pawd!="")
	{
		$.ajax({
			type:"get",
			url:"login.php",
			async:true,
			dataType:"JSON",
			data:{
				"user_name":username,
				"passworld":pwd
			},
			success:function(){
				alert("登录成功");
			}
		});
	}
});
