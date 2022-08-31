function isLogin(){
    console.log(sessionStorage.getItem("accessToken"))
    if(sessionStorage.getItem("accessToken")){
        window.location = "http://localhost:3000/students";
    }
    else{
        window.location = "http://localhost:3000/login"
    }
}

function login(){
    const thisForm = document.getElementById('login-form');
    thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm)
    const values = [...formData.entries()];
    console.log(values)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email: values[0][1], password: values[1][1]})
    };
    fetch('http://localhost:3000/api/user/login', requestOptions)
    .then(response =>
        response.json())
    .then(data => {
        console.log(data)
        if (data.message === '404 User Not Found'){
            const msg = document.getElementById('not-exist')
            console.log(msg)
            msg.classList.add("error");
        }
        else{
        sessionStorage.setItem("accessToken",data.accessToken);
        window.location = "http://localhost:3000/students";
        }
    });
    });
};

function signup(){
    const thisForm = document.getElementById('signup-form');
    thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm)
    const values = [...formData.entries()];
    if (values[0][2]!==values[0][2]){
        const msg = document.getElementById('diff-pass');
        console.log(msg)
        msg.classList.add("error");
    }
    else{
    console.log(values)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: values[0][1], email: values[1][1], password: values[2][1]})
    };
    fetch('http://localhost:3000/api/user/signup', requestOptions)
    .then(response =>
        response.json())
    .then(data => {
        console.log(data)
        if (data.message === 'User Exists'){
            const msg = document.getElementById('already-exists')
            console.log(msg)
            msg.classList.add("error");
        }
        else{
        const msg = document.getElementById('signup-success')
        msg.classList.add('success')
        setTimeout(()=>{
            window.location = "http://localhost:3000/login"
        }, 1000);        }
    });}
    });
};

function logout(){
    sessionStorage.setItem("accessToken","");
    window.location = "http://localhost:3000/students";
}