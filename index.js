function promptPassword() {
    var _password = prompt('Please enter some text to display this page. Your text will be saved as a cookie for the next time you visit this site.');
    //if (_password != '') promptPassword();
    document.cookie = _password;
    document.body.style.display = 'inherit';
}

if (document.cookie = null) {
    document.body.style.display = 'none';
    promptPassword();
}
alert('Your inputted text was stored as a cookie.');
