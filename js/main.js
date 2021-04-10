
// axios.defaults.baseURL="https://share.highflierstutors.com/api/";


axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

var puser = localStorage.getItem('token');
var imgProfile="";
 
// index.html -----------------------------------------


// const axios = require('axios').default;
function loadIt(){
  console.log(puser)

  if(puser != null){

    document.getElementById('signout').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
     document.getElementById('userValue').innerText = "Hello, firstname and lastname";
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    // document.getElementById('userValue').innerText = " ";
    document.getElementById("studentdetails").style.display = "none";





    document.getElementById("otp").style.display = "none";
   
  }
    else{
      document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';
    // document.getElementById('avatar').src = res.data.user.imgProfile;
    document.getElementById('reg').style.display = 'block';
    document.getElementById('addlisting').style.display = 'none';
    // document.getElementById('userValue').innerText = "Hello,";
    document.getElementById("studentdetails").style.display = "none";




    document.getElementById("otp").style.display = "none";
    }
}

///////////////////////////////////////////////////////////
function logOff(){
    localStorage.removeItem('token'); 
  
    loadIt();
    window.location.reload();
   
}

////////////////////////////////////////////////////////////////
function clearOff(){
  document.getElementById("email").value='';
  document.getElementById("password").value = '';
document.getElementById("firstname").value = '';
   document.getElementById("lastname").value = '';
 document.getElementById("emailreg").value = '';
  document.getElementById("country").value = '';
   document.getElementById("phone").value = '';
 document.getElementById("start").value = '';
  document.getElementById("address").value = '';
 document.getElementById("password").value = '';
  imgProfile = imgProfile
 document.getElementById("school").value = '';
  document.getElementById("mat").value = '';
document.getElementById("cos").value = '';
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
async function getUserBooking(){

}

async function loadReview(){
    
  loadIt();
 
   
    }

  async function registerUser(){

    var firstname =  document.getElementById("firstname").value 
    var lastname =  document.getElementById("lastname").value 
    var emailreg =  document.getElementById("emailreg").value 
    var country =  document.getElementById("country").value 
    var phone =  document.getElementById("phone").value 
    var start =  document.getElementById("start").value 
    var address =  document.getElementById("address").value 
    var password =  document.getElementById("password").value 
    imgProfile = imgProfile
    var schoolId =  document.getElementById("school").value 
    var matricNo =  document.getElementById("mat").value 
    var cos =        document.getElementById("cos").value ;


    await axios.post('https://share.highflierstutors.com/api/register', {
firstname : firstname,
lastname: lastname,
email:emailreg,
country: country,
number:phone,
DOB:start,
address:address,
password:password,
imgProfile: imgProfile,
schoolId: schoolId,
course:cos,
matricNo:matricNo




  })
  .then(function (response) {
    localStorage.setItem('token', response.data.token);
     

    puser = localStorage.getItem('token');

    document.getElementById("otp").style.display = "block";
    document.getElementById("profileinfo").style.display = "none";
    document.getElementById("otpnumber").value = response.data.otp;
    console.log(response)

    // loadIt()
    clearOff();
   
   

  // alert('gggggggggggg')
  alert('You have successfully registered  ' + response.data.user.firstname)

})

.catch(function (error) {
  console.log(error);
});



    
  }


    ////////////////////////////////////////////////////////////////////////////////////////
    function findStudent(){
      var yes = document.getElementById("yes").checked;

      if (yes==true){
        document.getElementById("studentdetails").style.display = "block";
      }
      else
        document.getElementById("studentdetails").style.display = "none";
      
    }
 ///////////////////////////////////////////////////////
 