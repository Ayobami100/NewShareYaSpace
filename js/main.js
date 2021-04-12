
// axios.defaults.baseURL="https://share.highflierstutors.com/api/";



axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');



  var puser = localStorage.getItem('token');
 const userFirstname = localStorage.getItem('firstname');
 const userLastname = localStorage.getItem('lastname');
 const userDOB = localStorage.getItem('DOB');
 const  userId= localStorage.getItem('id');
 const userToken = localStorage.getItem('token');
 const userOtp = localStorage.getItem('otp');
 const userimgProfile = localStorage.getItem('imgProfile');



 function validateImage() {
  var formData = new FormData();
  var file = document.getElementById("img").files[0];
  formData.append("Filedata", file);
  var t = file.type.split('/').pop().toLowerCase();



  if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
      alert('Please select a valid image file');
      document.getElementById("img").value = '';
      return false;
  }
  if (file.size > 1024000) {
      alert('Max Upload size is 1MB only');
      document.getElementById("img").value = '';
      return false;
  }
  







    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    console.log(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0].name)

    // 
   document.getElementById('imageUrl').innerText = "images/" +event.target.files[0].name;
  document.getElementById('imageUrl').style.display = "none";

   return true;
}




async function loginUser() {

  var email = document.getElementById("email1").value;
  var password = document.getElementById('password1').value;

  alert(password);
  if (email == '') {
    $('#email').next().show();
    return false;
  }
  // if (IsEmail(email) == false) {
  //   // $('.formerror').css('display', "block");
  //   return false;
  // }
  if (password == '') {
    return false
  }
  else

  alert(email);

  await axios.post('https://share.highflierstutors.com/api/login', {

    email: email,
    password: password,

  })

    .then(function (response) {

      localStorage.setItem('token', response.data.token);

      console.log(response.data)
      console.log(response.data.user.id)
      console.log(response.data.user.firstname)
      console.log(response.data.user.lastname)


      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('firstname', response.data.user.firstname);
       localStorage.setItem('lastname', response.data.user.lastname);
       localStorage.setItem('DOB', response.data.user.DOB);



       alert('You are Logged in Successfully ' + userFirstname);

      window.location.reload();

    })

    .catch(function (error) {
      //  alert('You are not Logged in  ')
     // res = error.response.data.message[0];
      alert(error)
    });



}





async function registerUser() {

  
  var firstname = document.getElementById("firstname").value
  var lastname = document.getElementById("lastname").value
  var emailreg = document.getElementById("emailreg").value
  var country = document.getElementById("country").value
  var phone = document.getElementById("phone").value
  var start = document.getElementById("start").value
  var address = document.getElementById("address").value
  var password = document.getElementById("password").value
  // imgProfile = imgProfile
  var schoolId = "3";
  var matricNo = document.getElementById("mat").value;
  var cos = document.getElementById("cos").value;

  // if (firstname == '' || lastname == '' || emailreg == '' || country == '' || phone == '' || start == ''
  //   || address == '' || password == ''
  // ) {
  // alert("Ensure you fill out all the needed information")
  //   return false;
  // }



  await axios.post('https://share.highflierstutors.com/api/register', {
    firstname: firstname,
    lastname: lastname,
    email: emailreg,
    country: country,
    number: phone,
    DOB: start,
    address: address,
    password: password,
    imgProfile: document.getElementById('imageUrl').innerText,
    schoolId: schoolId,
    course: cos,
    matricNo: matricNo,
    role: '1',
    number_verification: '2'
  })



    .then(function (response) {

      if (response.data.status == "success") {


        console.log(response.data);
        console.log(response.data.data);

        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('id', response.data.user.id);
        localStorage.setItem('firstname', response.data.data.firstname);
        localStorage.setItem('lastname', response.data.data.lastname);
        localStorage.setItem('DOB', response.data.data.DOB);
        localStorage.setItem('otp', response.data.data.otp);
        localStorage.setItem('imgProfile', response.data.data.imgProfile);



        document.getElementById("otp").style.display = "block";
        document.getElementById("profileinfo").style.display = "none";
    
     
        document.getElementById("otpnumber").value = userOtp;
      }

      else{
        alert(response.data.message);
      }
      // loadIt()
      // clearOff();



      // alert('gggggggggggg')
     

    })

    .catch(function (error) {
      console.log(error)
      alert(error);
    });


}


function findStudent() {
  var yes = document.getElementById("yes").checked;

  if (yes == true) {
    document.getElementById("studentdetails").style.display = "block";
  }
  else
    document.getElementById("studentdetails").style.display = "none";

}

function logOff() {

    localStorage.clear();
    location.reload();
  // loadIt();

}


// index.html -----------------------------------------


// const axios = require('axios').default;


function verifyUser() {

  alert('You have successfully registered ' + userFirstname)
  window.location.href = 'index.html';
}



function loadIt() 
{
  if (puser != null) {
  
     console.log(userOtp)
    console.log(puser)
    
    document.getElementById('signout').style.display = 'block';
    document.getElementById('signin').style.display = 'none';
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';


    // console.log(localStorage.getItem('user'))
    // if(localStorage.getItem('user') == Object){
     
      document.getElementById('userValue').innerText = "Hello, " + userFirstname + " " + userLastname;
     
    // }
   
    // document.getElementById('userValue').innerText = " ";
    document.getElementById("studentdetails").style.display = "none";

    document.getElementById("otp").style.display = "none";
    populateCombo()
  }


  else {

    console.log(puser)

    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('dropit').style.display = 'none';
    // document.getElementById('avatar').src = res.data.user.imgProfile;
    document.getElementById('reg').style.display = 'block';
    document.getElementById('addlisting').style.display = 'none';
    document.getElementById("studentdetails").style.display = "none";

   
      document.getElementById("otp").style.display = "none";
  }
}




  function clearSignOff() {

    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
  }

  
  function clearOff() {
    document.getElementById("email").value = '';
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


  function assignValues() {
    // document.getElementById('loader').style.display='none';
    document.getElementById('avatar').src = userDetails.user.imgProfile;
    document.getElementById('userValue').innerText = "Hello," + " " + userDetails.user.firstname;
    // document.getElementById('username').innerText = response.login;
    // document.getElementById('location').innerText = response.location;
    // document.getElementById('bio').innerText = response.bio;
    // document.getElementById('count').innerText = "Foll0wers : "+response.followers;
  }





  function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }
 
  

  // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  async function getUserReview() {
    await axios.get('https://share.highflierstutors.com/api/review')

      .then(function (response) {
        console.log(response);
        console.log(response.data.length);
      }
      )
  }




  async function getUserListing() {
    await axios.get('https://share.highflierstutors.com/api/listing')

      .then(function (response) {
        console.log(response);
        console.log(response.data.length);
      }
      )
  }




  async function getUserBooking() {

  }



 
  
 
 
  ///////////////////////////////////////////////////////

  function populateCombo() {

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

        }
      }
      )

      .catch(function (err) {
        console.error('Fetch Error -', err);
      });
  }

