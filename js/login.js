document.getElementById('login-submit').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    console.log(userEmail);
    const passwordFeild = document.getElementById('user-password').value;
    // const userPassword = passwordFeild.value;
    console.log(passwordFeild);

    if (userEmail == 'riyajulkabir@gmail.com' && passwordFeild == 'rakib') {
        window.location.href = 'banking.html';
    }
});