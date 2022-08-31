function add(){
    const thisForm = document.getElementById('add-form');
    thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm)
    const values = [...formData.entries()];
    console.log(values)
    // if (values[0][2]!==values[0][2]){
    //     const msg = document.getElementById('diff-pass');
    //     console.log(msg)
    //     msg.classList.add("error");
    // }
    // else{
    // console.log(values)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        'authorization': `accessToken: ${sessionStorage.getItem("accessToken")}`},
        credentials: "same-origin",
        body: JSON.stringify({
            name: values[0][1], website: values[1][1],
             rollNumber: values[2][1], gender: values[3][1],
             imageLink: values[4][1], courses: values[6][1],
             email: values[5][1], address: {
                line1: values[7][1], line2: values[8][1], line3: values[9][1],
                pincode: values[10][1], city: values[11][1], state: values[12][1],
             }
        })
    };
    fetch('http://localhost:3000/api/student/add', requestOptions)
    .then(response =>
        response.json())
    .then(data => {
        if (data.message === 'Success'){
        const msg = document.getElementById('signup-success')
        msg.classList.add('success')
        setTimeout(()=>{
            window.location = "http://localhost:4000/students"
        }, 1000);     
        }
        });
    });
};