require('dotenv/config')

const bcrypt = require("bcrypt")
const fs = require('fs')
var path = require('path');
const jwt = require('jsonwebtoken')

const userJson = [{
  name: "Aarsh",
  email: "aarsh@gmail.com",
  password: "aarsh@gmail.com",
  hasAccess: true
},
{
  name: "Test",
  email: "test@gmail.com",
  password: "test@gmail.com",
  hasAccess: false
}
]

const userLogin = async function(request,response){
    let userExist = false;
    userJson.forEach(obj => { 
    if (request.body.email === obj.email) {
        userExist = true;
        if (request.body.password === obj.password){
          if (obj.hasAccess){
          const accessToken = jwt.sign({email: request.body.email},process.env.ACCESS_TOKEN_SECRET);
        // response.cookie('accessToken', accessToken, {httpOnly: true});
        response.status(200).json({
            message: "Success",
            accessToken: accessToken
        })}
        else{
          const accessToken = '';
          response.status(200).json({
            message: "Success",
            accessToken: accessToken
        })
        }}
        else{
          response.status(200).json({
            message: "Wrong Password"
        })        
}}});
  if (!userExist){
    response.status(200).json({
      message : "404 User Not Found"
    })
  }
}

const userSignup = async function(request,response){
  var userExist = false;
    try {
        userJson.forEach(obj => { 
            if (request.body.email === obj.email) {
              userExist = true;
              response.status(409).json({
              message: "User Exists"
        });      
      };
  });
      } catch (err) {
        console.log(err);
      }
      console.log(userJson);
      if (!userExist){
      userJson.push({
          email: request.body.email,
          password: request.body.password,
          name: request.body.name
      });
          response.status(201).json({
            message: "Success"
          });
        }
}

module.exports = { userLogin, userSignup }