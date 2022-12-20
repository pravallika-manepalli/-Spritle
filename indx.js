var rand_num = Math.floor(Math.random()*1000000)+1;
var password = document.getElementById('pwd');

let params;

function sendMail(){
params={
name:document.getElementById('name').value,
email:document.getElementById('email').value,
message:rand_num
};
const serviceID = "service_pm5sl1r";
const templateID = "template_y1zodlo";
emailjs.send(serviceID,templateID,params)
.then(
res =>{
alert("send mail ");
localStorage.setItem("remail",email.value);
localStorage.setItem("otp_val",rand_num);
localStorage.setItem("rpwd_val",password.value);
window.location="otp.html";
}).catch((err)=>alert(err));
}

function login(){
	var lemail = document.getElementById('lemail').value;
    var lpassword = document.getElementById('lpwd').value;
	var email=localStorage.getItem('remail');
	var password=localStorage.getItem('rpwd_val');
	alert(password);
	if(lemail==email)
		if(password==lpassword)
	{
			
			alert("login success");
			window.location="loginsuccess.html";
	}
	else
		alert("login fail at pswd");
	else
		alert("login fail at email");
		/*else
			document.getElementById('d').element.classList.add("v");
	else
		document.getElementById('d').element.classList.add("v");*/
}