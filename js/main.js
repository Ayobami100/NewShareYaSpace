
axios.defaults.baseURL="https://share.highflierstutors.com/api/";


axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

var puser = localStorage.getItem('token');
 
// index.html -----------------------------------------


// const axios = require('axios').default;
function loadIt(){
    windows.alert(puser)
  if(puser != ""){

    document.getElementById('signout').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
     document.getElementById('userValue').innerText = "Hello, firstname and lastname";
    // document.getElementById('dropit').style.display = 'none';
    // document.getElementById('avatar').style.display = 'none';
    // document.getElementById('userValue').innerText = " ";

   
  }
    else{
      document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    // document.getElementById('dropit').style.display = 'block';
    // document.getElementById('avatar').src = res.data.user.imgProfile;
    // document.getElementById('userValue').innerText = "Hello,";
    }
}


function logOff(){
    localStorage.setItem('token',''); 
   
   
}


function clearOff(){
  document.getElementById("email").value='';
  document.getElementById("password").value = '';
}


function assignValues(){
    // document.getElementById('loader').style.display='none';
    document.getElementById('avatar').src = userDetails.user.imgProfile;
    document.getElementById('userValue').innerText ="Hello,"+" "+ userDetails.user.firstname;
    // document.getElementById('username').innerText = response.login;
    // document.getElementById('location').innerText = response.location;
    // document.getElementById('bio').innerText = response.bio;
    // document.getElementById('count').innerText = "Foll0wers : "+response.followers;
}
  
async function loginUser(){

    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;


   await axios.post('https://share.highflierstutors.com/api/login', {

        email: email,
        password: password

      } )

      .then(function (response) {
          localStorage.setItem('token', response.data.token);
           

          puser = localStorage.getItem('token');

          console.log(response)

          // loadIt()
          clearOff();
         
         

        // alert('gggggggggggg')
        alert('You are Logged in  ' + response.data.user.firstname)
    
      })
     
      .catch(function (error) {
        console.log(error);
      });

     
     
   
      $('.modal , .reg-overlay').fadeOut(200);
        $("html, body").removeClass("hid-body");
    
 
  }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function getUserReview(){
  await axios.get('https://share.highflierstutors.com/api/review')

  .then(function (response) {
    console.log(response);
    console.log(response.data.length);
    } 
   )
}
async function getUserListing(){
  await axios.get('https://share.highflierstutors.com/api/listing')

  .then(function (response) {
  console.log(response);
  console.log(response.data.length);
   } 
   )
}
function getUserBooking(){

}
async function loadReview(){
    
  loadIt();
 
   
    }