

console.log(localStorage.getItem('token'))
axios.interceptors.request.use(function (config) {


 config.headers.authorization = 'Bearer '  + localStorage.getItem('token');

 return config;
});

  var puser = localStorage.getItem('token');
 const userFirstname = localStorage.getItem('firstname');
 const userLastname = localStorage.getItem('lastname');
 const userDOB = localStorage.getItem('DOB');
 const  userId= localStorage.getItem('id');
 const userToken = localStorage.getItem('token');
 const userOtp = localStorage.getItem('otp');
 const userimgProfile = "https://share.highflierstutors.com/images/1276705039.jpg";

// =====================================================================================================================================================
 var keeplist
 const reviewspaceTitle = localStorage.getItem('spaceTitle');
 const reviewspaceInfo = localStorage.getItem('spaceInfo');
 const reviewFullname = localStorage.getItem('fullnameReview');
//  axios.defaults.headers.common['Authorization'] =  puser;
//  instance.defaults.headers.common['Authorization'] = puser;

 //////////////////////////////All Listings Declaration///////////////////////////////////////////
  publicGet=[]
 publicHosting = []
  publicFees = []
  publicReview = []
  publicListing = []
  publicId = []




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
    window.location.href = 'index.html';
   
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
    if(window.location.href == 'add-listing.html')
    {
    populateCombo()
    }
    if(window.location.href == 'listing-single.html')
    {
    getUserId()
    }
    // /Attempt to get the element using document.getElementById
    var element = document.getElementById("allreview");

    //If it isn't "undefined" and it isn't "null", then it exists.
    if(typeof(element) != 'undefined' && element != null){
        // alert('Element exists!');
        document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');
        document.getElementById('fullname').innerHTML = userFirstname+" "+userLastname;
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
        localStorage.setItem('allreview',response.data.data.length);

      if (response.status !== 200) {
        console.warn('Looks like there was a problem. error: ' +
          response.message);
        return;
      }
      else
      {
       

       if(response.data.data != null){

        

        console.log(response.data.data.length);

        


      
        for (let i = 0;i < response.data.data.length;i++){

          keeplist = response.data.data[i].listingId;
          console.log(keeplist);
  
          findlisting()

          // =========================split date created on the API==================================================================
          var input = response.data.data[i].created_at;

          var fields = input.split('T');
  
          var name = fields[0];

          var div =  document.createElement("div");
          div.innerHTML = 

         ' <div class="reviews-comments-item">'+
          '<div class="review-comments-avatar">'+
              '<img src="images/avatar/2.jpg" alt=""> '+
         ' </div>'+
          '<div class="reviews-comments-item-text">'+
              '<h4><a href="#">'+reviewFullname+'</a> on <a href="listing-single.html" class="reviews-comments-item-link">'+reviewspaceTitle+'</a></h4>'+
             '<div class="review-score-user">'+
                  '<span>'+response.data.data[i].rating+'</span>'+
                  '<strong>'+response.data.data[i].comments+'</strong>'+
              '</div>'+
              '<div class="clearfix"></div>'+
              '<p> '+reviewspaceInfo+'</p>'+
              '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i>'+name+'</span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
          '</div>'+
      '</div>'


      // var element = document.getElementById("showreview");
      var element = document.getElementById("showreview");
      if(element != null && element != 'undefined')
      {
        element.appendChild(div);
      }
      
        
      }
    }
    else{
      var div =  document.createElement("div");
      div.innerHTML = 

     ' <div class="reviews-comments-item">'+
      '<div class="review-comments-avatar">'+
          // '<img src="images/avatar/2.jpg" alt=""> '+
     ' </div>'+
      '<div class="reviews-comments-item-text">'+
          // '<h4><a href="#">'+reviewFullname+'</a> on <a href="listing-single.html" class="reviews-comments-item-link">'+reviewspaceTitle+'</a></h4>'+
         '<div class="review-score-user">'+
              '<span></span>'+
              '<strong></strong>'+
          '</div>'+
          '<div class="clearfix"></div>'+
          '<p> No Review Available</p>'+
          '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i></span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
      '</div>'+
  '</div>'


  var element = document.getElementById("showreview");
     
  element.appendChild(div);
    }
       }
    }
      ).catch(function (err) {
        console.error('Fetch Error -', err);
      });

      
  }




  async function getUserListing() {
   
   
    loadIt();
    await axios.get('https://share.highflierstutors.com/api/listing')

    .then(function (response) {
      console.log(response)
    if (response.status !== 200) {
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else
    {
    
  
      console.log(response)


      for(let i = 0;i < response.data.data.length;i++){

        var input = response.data.data[i].listing.attachments;

        var fields = input.split(',');

        var name = fields[0];
        var div =  document.createElement("div");
          div.innerHTML = 
          '<div class="dashboard-list">'+
          '<div class="dashboard-message">'+
             ' <span class="new-dashboard-item">New</span>'+
              '<div class="listing-table-image">'+
                  '<a href="listing-single.html"><img src="https://share.highflierstutors.com/images/'+name+'" alt=""></a>'+
              '</div>'+
              '<div class="listing-table-text">'+
                  '<h4><a href="listing-single.html">'+response.data.data[i].listing.spaceTitle+'</a></a></h4>'+
                  '<span class="listing-table-address"><i class="far fa-map-marker"></i><a  href="#">'+response.data.data[i].listing.address+'</a></span>'+
                  '<ul class="listing-table-opt  fl-wrap">'+
                      '<li><a href="#">Edit <i class="fal fa-edit"></i></a></li>'+
                      '<li><a href="#" class="del-btn">Delete <i class="fal fa-trash-alt"></i></a></li>'+
                  '</ul>'+
              '</div>'+
          '</div>'+
      '</div>'

    var element = document.getElementById("showuserlisting");
         
         element.appendChild(div);

      }
  }})
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });

  }




  async function getUserBooking() {
    loadIt();

    await axios.get('https://share.highflierstutors.com/api/order')
  
    .then(function (response) {
      console.log(response)
    if (response.status !== 200) {
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else
    {
    
  
      console.log(response)


      for(let i = 0;i < response.data.data.length;i++){

        var div =  document.createElement("div");
          div.innerHTML = 
        '<div class="dashboard-message">'+
        '<span class="new-dashboard-item">New</span>'+
       ' <div class="dashboard-message-avatar">'+
           '<img src="images/avatar/3.jpg" alt="">'+
        '</div>'+
        '<div class="dashboard-message-text">'+
           '<h4>Andy <span>27 December 2021</span></h4>'+
            '<div class="booking-details fl-wrap">'+
               '<span class="booking-title">Listing Item :</span> :'+
                '<span class="booking-text"><a href="listing-sinle.html">'+response.data.data[i].listingDetails.listing.spaceTitle+'</a></span>'+
            '</div>'+
            '<div class="booking-details fl-wrap">'+
                '<span class="booking-title">Persons :</span>   '+
                '<span class="booking-text">4 Peoples</span>'+
            '</div>'+
            '<div class="booking-details fl-wrap">'+
                '<span class="booking-title">Booking Date :</span>   '+
                '<span class="booking-text">'+response.data.data[i].order.checkIn+" - "+response.data.data[i].order.checkOut+'</span>'+
            '</div>'+
            '<div class="booking-details fl-wrap">                       '+                                        
                '<span class="booking-title">Mail :</span>  '+
                '<span class="booking-text"><a href="#" target="_top">yormail@domain.com</a></span>'+
            '</div>'+
            '<div class="booking-details fl-wrap">'+
                '<span class="booking-title">Phone :</span>   '+
                '<span class="booking-text"><a href="tel:+496170961709" target="_top">+496170961709</a></span>'+
            '</div>'+
            '<div class="booking-details fl-wrap">'+
                '<span class="booking-title">Payment State :</span> '+
                '<span class="booking-text"> <strong class="done-paid">Paid  </strong>  using Paypal</span>'+
            '</div>'+
            '<span class="fw-separator"></span>'+
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere convallis purus non cursus. Cras metus neque, gravida sodales massa ut. </p>'+
        '</div>'+
    '</div>'

    var element = document.getElementById("dashboard-listing");
         
         element.appendChild(div);

      }
  }})
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });
}
    
      
      
      // localStorage.setItem('fullnameReview', response.data.data[0].host.firstname +" "+response.data.data[0].host.lastname)
      // localStorage.setItem('spaceInfo', response.data.data[0].listing.additionalInfo )
      // localStorage.setItem('spaceTitle', response.data.data[0].listing.spaceTitle )
     
  
  

async function findlisting(){
  await axios.get('https://share.highflierstutors.com/api/listingfind/'+keeplist+'')
  .then(function (response) {

    console.log(response.data.data)
    localStorage.setItem('fullnameReview', response.data.data[0].host.firstname +" "+response.data.data[0].host.lastname)
    localStorage.setItem('spaceInfo', response.data.data[0].listing.additionalInfo )
    localStorage.setItem('spaceTitle', response.data.data[0].listing.spaceTitle )
   
  })
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
          console.log(response.data.data[i].listing.id)
          publicId = response.data.data[i].listing.id;

          if(Object.values(response.data.data[i].reviews).length > 1){

          
          var div =  document.createElement("div");
          div.innerHTML = 
          '<div class="listing-item">'+
          '<article class = geodir-category-listing fl-wrap">'+
              '<div class="geodir-category-img">'+
                  '<a href="listing-single.html" id="'+response.data.data[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/1276705039.jpg" alt="">'+'</a>'+
                  '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="images/avatar/3.jpg" alt="">'+'</a>'+
                    '<span class="avatar-tooltip">Added By<strong> '+response.data.data[i].host.firstname+" "+response.data.data[i].host.lastname+' </strong></span>'+
                  '</div>'+
                  '<div class="sale-window">Sale 20%</div>'+
                  ' <div class="geodir-category-opt">'+
                     '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                      '<div class="rate-class-name">'+
                          '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(response.data.data[i].reviews).length +" Reviews"+'</div>'+
                              '<span>'+response.data.data[i].reviews[i].rating+'</span>'+
                          '</div>'+
                      '</div>'+
                 '</div>'+
              '<div class="geodir-category-content fl-wrap">'+
                  '<div class="geodir-category-content-title fl-wrap">'+
                      '<div class="geodir-category-content-title-item">'+
                          '<h3 class="title-sin_map">'+
                          '<a href="listing-single.html" id="'+response.data.data[i].listing.id+'">'+response.data.data[i].listing.spaceTitle+'</a>'+
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
      else{
        var div =  document.createElement("div");
        div.innerHTML = 
        '<div class="listing-item">'+
        '<article class = geodir-category-listing fl-wrap">'+
            '<div class="geodir-category-img">'+
                '<a href="listing-single.html">'+'<img src="https://share.highflierstutors.com/images/1276705039.jpg" alt="">'+'</a>'+
                '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="images/avatar/3.jpg" alt="">'+'</a>'+
                  '<span class="avatar-tooltip">Added By<strong> '+response.data.data[i].host.firstname+" "+response.data.data[i].host.lastname+' </strong></span>'+
                '</div>'+
                '<div class="sale-window">Sale 20%</div>'+
                ' <div class="geodir-category-opt">'+
                   '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                    '<div class="rate-class-name">'+
                        '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(response.data.data[i].reviews).length +" Reviews"+'</div>'+
                            '<span>No Rating</span>'+
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
        }
        

        document.getElementById('totalListing').innerHTML = "TOTAL AVAILABLE LISTING " + "   "+response.data.data.length;

       
      }
    })
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });
}

function getUserId(){

}