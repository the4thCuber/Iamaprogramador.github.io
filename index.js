document.body.style.display = 'none';

def promptPassword() {
    var _password = prompt('Enter some text to display this page');
    //if (_password != '') promptPassword();
    document.body.style.display = 'default';
}
