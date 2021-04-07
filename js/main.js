
axios.defaults.baseURL="https://share.highflierstutors.com/api/";

axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token');

// const axios = require('axios').default;
function loadIt(){
    document.getElementById('signout').style.display = 'none';
    document.getElementById('dropit').style.display = 'none';
}


function logOff(){
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('avatar').src = './.images/logo.png';
    document.getElementById('userValue').innerText = ' ';
}



function assignValues(){
    // document.getElementById('loader').style.display='none';
    document.getElementById('avatar').src = userDetails.user.imgProfile;
    document.getElementById('userValue').innerText = userDetails.user.firstname;
    // document.getElementById('username').innerText = response.login;
    // document.getElementById('location').innerText = response.location;
    // document.getElementById('bio').innerText = response.bio;
    // document.getElementById('count').innerText = "Foll0wers : "+response.followers;
}

function customHeaders() {
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: response.data.token,
    //   }
    // }
}
  
async function loginUser(){

    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;


   await axios.post('http://share.highflierstutors.com/api/login', {

        email: email,
        password: password
      })
      .then(function (response) {
          localStorage.setItem('res', JSON.stringify(response.data));
          var userDetails = JSON.parse(localStorage.getItem("res"));
          console.log(userDetails);
          console.log(userDetails.user.imgProfile);
          console.log(response)

          document.getElementById('dropit').style.display = 'block';
          document.getElementById('avatar').src = userDetails.user.imgProfile;
          document.getElementById('userValue').innerText = userDetails.user.firstname;
          document.getElementById('signout').style.display = 'block';
          document.getElementById('signin').style.display = "none";

        // alert('gggggggggggg')
        alert('You are Logged in  ' + response.data.user.firstname)
    
      })
     
      .catch(function (error) {
        console.log(error);
      });

     
     
   
      $('.modal , .reg-overlay').fadeOut(200);
        $("html, body").removeClass("hid-body");
    
 
  }

