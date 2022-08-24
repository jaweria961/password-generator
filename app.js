var password = document.getElementById('password');

function genPassword()
{
    debugger;
let chars ='0123456789abcdefghijklmnopqrstuvwxyz!@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let _passwordLength =12;
var password= ''

for(let i=0 ; i<=_passwordLength; i++)
{
    let randomNumber = Math.floor(Math.random() *chars.length)
    console.log(randomNumber);
    password = password + chars.substring(randomNumber, randomNumber+1);

    document.getElementById('password').value = password;
}
}

function copyPassword()
{
    let _copyPassword = document.getElementById('password');
    _copyPassword.select();
    copyPassword.setSelectionRnage(0,999);
    document.execCommand('copy');
}