document.getElementById('btn-submit').addEventListener('click', function () {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    if (email === "arafatshabbir8@gmail.com" && password == "01632029032") {
        location.href = 'bank.html'
    } else {
        console.log('Invalid User');
    }
})
document.getElementById('password').addEventListener('keyup',function (event) {
    if (event.key === 'Enter') {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        if (email === "arafatshabbir8@gmail.com" && password == "01632029032") {
            location.href = 'bank.html'
        } else {
            console.log('Invalid User');
        }
    }

    })