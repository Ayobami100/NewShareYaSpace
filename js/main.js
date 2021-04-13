axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');



  var puser = localStorage.getItem('token');
 const userFirstname = localStorage.getItem('firstname');
 const userLastname = localStorage.getItem('lastname');
 const userDOB = localStorage.getItem('DOB');
 const  userId= localStorage.getItem('id');
 const userToken = localStorage.getItem('token');
 const userOtp = localStorage.getItem('otp');
 const userimgProfile = "https://share.highflierstutors.com/images/1276705039.jpg";


 //////////////////////////////All Listings Declaration///////////////////////////////////////////
  publicGet=[]
 publicHosting = []
  publicFees = []
  publicReview = []
  publicListing = []




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
       localStorage.setItem('imgProfile', response.data.user.imgProfile);


       alert('You are Logged in Successfully ' + localStorage.getItem('firstname'))

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

  if (confirm('Are you sure you want to sign out?')) {
    
    localStorage.clear();
    location.reload();
  
  } else {
    // Do nothing!
   
  }

  

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
    
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'none';
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';
    document.getElementById('avatar').src = userimgProfile;

    // console.log(localStorage.getItem('user'))
    // if(localStorage.getItem('user') == Object){
     
      document.getElementById('userValue').innerText = userFirstname + " " + userLastname;
     
    // }
   
    // document.getElementById('userValue').innerText = " ";
    if(window.location.href == 'register.html')
    {
    document.getElementById("studentdetails").style.display = "none";    
    document.getElementById("otp").style.display = "none";
    }
    if(window.location.href == 'dashboard-add-listing.html')
    {
    populateCombo()
    }
  }


  else {

    console.log(puser)

    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('dropit').style.display = 'none';
    // document.getElementById('avatar').src = res.data.user.imgProfile;
    document.getElementById('reg').style.display = 'block';
    document.getElementById('addlisting').style.display = 'none';
    if(window.location.href == 'register.html')
    {
    document.getElementById("studentdetails").style.display = "none";    
    document.getElementById("otp").style.display = "none";
    }
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
    loadIt();
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


  async function allListing(){
    loadIt();
    axios.get('https://share.highflierstutors.com/api/listing')
    .then(function (response) {
      if (response.status !== 200) {
        console.warn('Looks like there was a problem. error: ' +
          response.message);
        return;
      }
      else
      {
        console.log(response.data.data)
        for (let i = 0;i < response.data.data.length;i++){
          console.log(response.data.data[i].listing.address)
          console.log(response.data.data[i].listing.spaceTitle)

          var div =  document.createElement("div");
          div.innerHTML = 
          '<div class="listing-item">'+
          '<article class = geodir-category-listing fl-wrap">'+
              '<div class="geodir-category-img">'+
                  '<a href="listing-single.html">'+'<img src="https://share.highflierstutors.com/images/1276705039.jpg" alt="">'+'</a>'+
                  '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="images/avatar/1.jpg" alt="">'+'</a>'+
                    '<span class="avatar-tooltip">Added By<strong> Alisa Noory </strong></span>'+
                  '</div>'+
                  '<div class="sale-window">Sale 20%</div>'+
                  ' <div class="geodir-category-opt">'+
                     '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                      '<div class="rate-class-name">'+
                          '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(response.data.data[i].reviews).length +" Reviews"+'</div>'+
                              '<span>9.0</span>'+
                          '</div>'+
                      '</div>'+
                 '</div>'+
              '<div class="geodir-category-content fl-wrap">'+
                  '<div class="geodir-category-content-title fl-wrap">'+
                      '<div class="geodir-category-content-title-item">'+
                          '<h3 class="title-sin_map">'+
                          '<a href="listing-single.html">'+response.data.data[i].listing.spaceTitle+'</a>'+
                          '</h3>'+
                          '<div class="geodir-category-location fl-wrap">'+
                          '<a href="#0" class="map-item">'+
                            '<i class="fas fa-map-marker-alt"></i>'+
                            response.data.data[i].listing.address+
                             '</a>'+
                             '</div>'+
                    '</div>'+
                  '</div>'+
                  '<p>'+  response.data.data[i].listing.spaceDetails +'</p>'+
                  '<ul class="facilities-list fl-wrap">'+
                      '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                     '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                      '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                      '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                  '</ul>'+
                  '<div class="geodir-category-footer fl-wrap">'+
                      '<div class="geodir-category-price">Awg/Night <span>'+"NGN  "+  response.data.data[i].listing.price +'</span></div>'+
                      '<div class="geodir-opt-list">'+
                          '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                          '<a href="#" class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save</span></a>'+
                          '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
          '</article>'+
          '</div>'
          var element = document.getElementById("listing-item");
         
          element.appendChild(div);
       
      
        }
        
        // console.log(publicGet[0].listing.address)
        // console.log(response.data.data[0].listing.spaceTitle)
        // var getListing = response.data.data;
        // getListing1 = []
        // getListing2 = [];
        // console.log(response.data.data.len;gth)

        document.getElementById('totalListing').innerHTML = "TOTAL AVAILABLE LISTING " + "   "+response.data.data.length;

        // getListing.forEach(function(dt){
        //   console.log(dt.);
        // })

        // const map1 = getListing.map(x =>{
        //   console.log(map1);
        // });
        
          // for(let i = 0;i < getListing.length;i++)
          // {

          //   getListing1 = getListing[i];

          //   getListing2 = Object.values(getListing1);  
          


          //   for(let j = 0;j < getListing2.length;j++)
          //   {
          //    publicGet =  Object.values(getListing2[j])
          //    console.log(publicGet)
          //   }       
            // for(let k = 0;k < publicGet.length;k++)
            // {

            //   publicHosting =  Object.values(publicGet[k]);
            //   // publicReview = publicGet[2];
            //   // publicFees = publicGet[1];
            //   // publicListing = publicGet[3];

            //   console.log(publicHosting)
            //   // console.log(publicListing)

            // }
        
              
        
       
      }
    })
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });
}