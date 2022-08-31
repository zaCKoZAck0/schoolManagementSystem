const studentsJson = [
  {
    rollNumber: "1",
        name: "Aarsh Mishra",
        gender: "Male",
        email: "aarsh@gmail.com",
        website: "www.aarsh.com",
        imageLink: "https://i.postimg.cc/MpfkdJJb/pngkey-com-empty-circle-png-523516.png",
        address: {
            line1: "Shuklaganj",
            line2: "Unnao",
            line3: "",
            pincode: "206018",
            city: "Unnao",
            state: "Uttar Pradesh"
        },
        courses: "HTML,CSS,JS"
  }
]

const addStudent = async (request,response)=>{

  if (!request.body.imageLink){
    request.body.imageLink = "https://i.postimg.cc/MpfkdJJb/pngkey-com-empty-circle-png-523516.png";
  }

    const student = {
        rollNumber: request.body.rollNumber,
        name: request.body.name,
        gender: request.body.gender,
        email: request.body.email,
        website: request.body.website,
        imageLink: request.body.imageLink,
        address: {
            line1: request.body.address.line1,
            line2: request.body.address.line2,
            line3: request.body.address.line3,
            pincode: request.body.address.pincode,
            city: request.body.address.city,
            state: request.body.address.state
        },
        courses: request.body.courses
    };
        studentsJson.push(student);
        response.status(201).json({
          message: "Success"
        });
  };


const getAllStudents = async (req,res)=>{
    res.status(200).json(studentsJson);
}


module.exports = { addStudent, getAllStudents }
