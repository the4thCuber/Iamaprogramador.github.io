document.body.style.display = 'none';

function promptPassword() {
    var _password = prompt('Enter some text to display this page. This do be a cookie.');
    //if (_password != '') promptPassword();
    document.cookie = _password;
    document.body.style.display = 'default';
}

promptPassword();
alert('Your text is now a cookie');
