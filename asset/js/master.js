const signup = document.getElementsByClassName('signup')[0]
const login= document.getElementsByClassName('login')[0]
const signUp = document.getElementById('signUp')
const logIn = document.getElementById('logIn')
const started = document.getElementsByClassName('btn1')[0]
const LOGIN = document.getElementsByClassName('btn2')[0]
const inp = document.querySelectorAll('input')

logIn.style.display = 'none'
LOGIN.style.display = 'none'

signup.addEventListener('click', () => {
    login.style.backgroundColor = ' #435359';
    signup.style.backgroundColor = '#1ab188';
    signUp.style.display = 'flex'
    logIn.style.display = 'none'
    started.style.display = 'flex'
    LOGIN.style.display = 'none'
})

login.addEventListener('click', () => {
    signup.style.backgroundColor = ' #435359';
    login.style.backgroundColor = '#1ab188';
    signUp.style.display = 'none'
    logIn.style.display = 'flex'
    started.style.display = 'none'
    LOGIN.style.display = 'flex'

})


// ----------------------function myform---------------------
function myform(e) {
    let flag = 0
    let labels = document.querySelectorAll('label')
    labels.forEach((val) => {
        val.style.display = 'none'
    })

    const email = document.forms["myForm"]["email"].value;
    const password = document.forms["myForm"]["password"].value;
    const fname = document.forms["myForm"]["firstname"].value;
    const lname = document.forms["myForm"]["lastname"].value;


    // ------------------email----------------
    if (email == '' || email == null
        (email.search(/script/)) >= 0 ||
        (email.search(/<script/)) >= 0 ||
        (email.search(/\&lt\;\s*script/)) >= 0 ||
        (_email.search(/\s+/)) >= 0

    ) {
        document.forms['myForm']['email'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = email.match(/@/g)
        if (
            (temp == null) ||
            (email.search(/@/)) <= 2 ||
            email.length < 10 ||
            (email.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (email.search(/\s+/)) >= 0
        ) {
            document.forms['myform']['email'].nextElementSibling.style.display = 'flex'

            flag++
        }
    }

    //  ----------------password-----------------------
    if (password == '' || password == null
        (password.search(/script/)) >= 0 ||
        (password.search(/<script/)) >= 0 ||
        (password.search(/\&lt\;\s*script/)) >= 0 ||
        (password.search(/\s+/)) >= 0

    ) {
        document.forms['myForm']['password'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        if (
            password.search(/[0-9]/) == -1 ||
            password.search(/[a-z]/) == -1 ||
            password.search(/[A-Z]/) == -1 ||
            password.search(/[~!@#$%^&*()_+]/) == -1
        ) {
            document.forms['myform']['password'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }
    if (flag > 0) {
        e.preventDefault()
    }


}

// --------function myforms--------------
// -----------------first name--------------------
function myforms(e) {
    let flag = 0
    let labels = document.querySelectorAll('label')
    labels.forEach((val) => {
        val.style.display = 'none'
    })
    const fname = document.forms["myForms"]["firstname"].value;
    const lname = document.forms["myForms"]["lastname"].value;
    const email = document.forms["myForms"]["email"].value;
    const password = document.forms["myForms"]["password"].value;

    if (fname == '' || fname == null
        (fname.search(/script/)) >= 0 ||
        (fname.search(/<script/)) >= 0 ||
        (fname.search(/\&lt\;\s*script/)) >= 0 ||
        (fname.search(/\s+/)) >= 0 ||
        (fname.search(/^[a-z0-9_-]{3,15}$/))

    ) {
        document.forms['myForm']['firstname'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = fname.match(/@/g)
        if (
            (temp == null) ||
            (fname.search(/@/)) <= 2 ||
            fname.length < 10 ||
            (fname.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (fname.search(/\s+/)) >= 0
        ) {
            document.forms['myforms']['firstname'].nextElementSibling.style.display = 'flex'

            flag++
        }
    }

    // ----------------last name----------------
    if (lname == '' || lname == null
        (lname.search(/script/)) >= 0 ||
        (lname.search(/<script/)) >= 0 ||
        (lname.search(/\&lt\;\s*script/)) >= 0 ||
        (lname.search(/\s+/)) >= 0 ||
        (lname.search(/^[a-z0-9_-]{3,15}$/))

    ) {
        document.forms['myForms']['lastname'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = lname.match(/@/g)
        if (
            (temp == null) ||
            (lname.search(/@/)) <= 2 ||
            lname.length < 10 ||
            (lname.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (lname.search(/\s+/)) >= 0
        ) {
            document.forms['myforms']['lastname'].nextElementSibling.style.display = 'flex'

            flag++
        }
    }
    //  -------------------------email-----------------------
    if (email == '' || email == null
        (email.search(/script/)) >= 0 ||
        (email.search(/<script/)) >= 0 ||
        (email.search(/\&lt\;\s*script/)) >= 0 ||
        (_email.search(/\s+/)) >= 0

    ) {
        document.forms['myForms']['email'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        let temp = email.match(/@/g)
        if (
            (temp == null) ||
            (email.search(/@/)) <= 2 ||
            email.length < 10 ||
            (email.search(/[~!)#$%^&(*/]/)) >= 0 ||
            (email.search(/\s+/)) >= 0
        ) {
            document.forms['myforms']['email'].nextElementSibling.style.display = 'flex'

            flag++
        }
    }

    // -------------password------------------------
    if (password == '' || password == null
        (password.search(/script/)) >= 0 ||
        (password.search(/<script/)) >= 0 ||
        (password.search(/\&lt\;\s*script/)) >= 0 ||
        (password.search(/\s+/)) >= 0

    ) {
        document.forms['myForms']['password'].nextElementSibling.style.display = 'flex'
        flag++
    } else {
        if (
            password.search(/[0-9]/) == -1 ||
            password.search(/[a-z]/) == -1 ||
            password.search(/[A-Z]/) == -1 ||
            password.search(/[~!@#$%^&*()_+]/) == -1
        ) {
            document.forms['myforms']['password'].nextElementSibling.style.display = 'flex'
            flag++
        }
    }
    if (flag > 0) {
        e.preventDefault()
    }


}