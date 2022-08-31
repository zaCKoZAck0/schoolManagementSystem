function fetchStudents(){
    const requestOptions = {
        method: 'GET',
        headers: { 
        'Content-Type': 'application/json',
        'authorization': `accessToken: ${sessionStorage.getItem("accessToken")}` },
        credentials: "same-origin"
    };
    fetch('http://localhost:3000/api/student/all', requestOptions)
    .then(response =>
        response.json())
    .then(data => {
        console.log(data)
        const tbody = document.getElementById('tbody')
        const tableData = data.map(function(student){
            return (
                `<tr>
                <td class="description">
                <span>${student.name}</span>
                <span>${student.gender}</span>
                <span>${student.email}</span>
                <span> <a href="${student.website}">${student.website}</a></span>
                <span>${student.courses}</span>
            </td>
            <td class="image">
                <img src="${student.imageLink}" alt="candidate">
            </td>
                </tr>`
            );
        }).join('');
        tbody.innerHTML = tableData;
    });
};

fetchStudents();

