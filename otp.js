var otp = document.getElementById('otp_value');
var storage_otp=localStorage.getItem('otp_val');

function Otp_submit(){

if(otp.value == storage_otp)
{
alert("registration success");
}
else{
alert("Invalid OTP.. Please cross check!");
}
};