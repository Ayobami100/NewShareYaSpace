
// axios.defaults.baseURL="https://share.highflierstutors.com/api/";


axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

var puser = localStorage.getItem('token');
// var otpnumber = document.getElementById("otpnumber").value;
 var registerResponse ={};
// index.html -----------------------------------------


// const axios = require('axios').default;
function loadIt(){
  if(puser != null){
    registerResponse = JSON.parse(localStorage.getItem('user'));
    console.log(registerResponse)
    document.getElementById('signout').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
     document.getElementById('userValue').innerText = "Hello, "+ registerResponse.firstname+ " "+registerResponse.lastname;
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    // document.getElementById('userValue').innerText = " ";
    // document.getElementById("studentdetails").style.display = "none";

    // var d = new Date();  
    // $("#start").attr("min",d.getFullYear() + "-01-01").attr("max",d.getFullYear() + "-12-31");
    // alert(d)

      // var $dp2 = $("#datepicker2");
      // $dp2.datepicker({
      //   changeYear: true,
      //   changeMonth: true,
      //   yearRange: "-100:+20",
      //   dateFormat: "yy-m-dd",
      // });
  
     

    // document.getElementById("otp").style.display = "none";
    // populateCombo()
  }
    else{
    
      document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';
    // document.getElementById('avatar').src = res.data.user.imgProfile;
    document.getElementById('reg').style.display = 'block';
    document.getElementById('addlisting').style.display = 'none';

    // document.getElementById('userValue').innerText = "Hello,";
    // document.getElementById("studentdetails").style.display = "none";
   
   
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
function clearSignOff(){
  document.getElementById("email").value='';
  document.getElementById("password").value = '';
}
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
  // imgProfile = imgProfile
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
function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
     return false;
  }else{
     return true;
  }
}
async function loginUser(){

    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;
    if(email== ''){
      $('#email').next().show();
      return false;
   }
   if(IsEmail(email)==false){
    // $('.formerror').css('display', "block");
    return false;
  }
  if(password = ''){
    return false
  }
   await axios.post('https://share.highflierstutors.com/api/login', {
        email: email,
        password: password
      } )
      .then(function (response) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          puser = localStorage.getItem('token');
          console.log(response.data.user.firstname)
          // loadIt()
          clearSignOff();
        // alert('gggggggggggg')
        alert('You are Logged in  ' + response.data.user.firstname)
        window.location.reload();
    
      })
     
      .catch(function (error) {
        // alert('You are not Logged in  '+ error.)
        res = error.response.data.message[0];
        alert(res)
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
 function verifyUser() {
  window.location.href = 'index.html';
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
    // imgProfile = imgProfile
    var schoolId =  "3";
    var matricNo =  document.getElementById("mat").value ;
    var cos =        document.getElementById("cos").value ;
   
    if(firstname == '' || lastname == '' || email== '' || emailreg=='' || country == '' || phone == '' || start == ''
    || address == '' || password ==''
    ){
   
      return false;
   }
    await axios.post('https://share.highflierstutors.com/api/register', {
firstname : firstname,
lastname: lastname,
email:emailreg,
country: country,
number:phone,
DOB:start,
address:address,
password:password,
imgProfile: document.getElementById('imageUrl').innerText,
schoolId: schoolId,
course:cos,
matricNo:matricNo,
role:'1',
number_verification:'2'
  })
  .then(function (response) {

    if(response.data.status == "success"){
      localStorage.setItem('token', response.data.token);
      puser = localStorage.getItem('token');
      document.getElementById("otp").style.display = "block";
      document.getElementById("profileinfo").style.display = "none";
      registerResponse = response.data;
      console.log(response)
      console.log(response.data)
      console.log(response.data.data)
      console.log(puser)
      console.log(response.data.data.otp)
      document.getElementById("otpnumber").value = response.data.data.otp;
    }
    

    // loadIt()
    // clearOff();
   
   

  // alert('gggggggggggg')
  alert('You have successfully registered  ' + response.data.data.firstname)

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

 function populateCombo(){

  let dropdown = document.getElementById('locality-dropdown');
  console.log(dropdown)
dropdown.length = 0;


let defaultOption = document.createElement('option');
defaultOption.text = 'Choose Category';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

axios.get('https://share.highflierstutors.com/api/allCategory')

.then(function (response) {
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      // console.log(response);
      // .then(function(data) {  
        let option;
        
    console.log(response)
    	for (let i = 0; i < response.data.data.length; i++) {
          option = document.createElement('option');
      	  option.text = response.data.data[i].categoryName;
      	  option.value = response.data.data[i].id;
      	  dropdown.add(option);
    	
      }}
 )

  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });
 }
