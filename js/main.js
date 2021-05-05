

console.log(localStorage.getItem('token'))
console.log(localStorage.getItem('favUser'))




axios.interceptors.request.use(function (config) {

 config.headers.authorization = 'Bearer '  + localStorage.getItem('token');

 return config;
});



let fav = 0 ;
// document.getElementById('favoritecounter').innerHTML = localStorage.getItem('fav');
 var puser = localStorage.getItem('token');
 let favoptions
 let groupedFav
 let keeplistingfromhome;
 const userFirstname = localStorage.getItem('firstname');
 const userLastname = localStorage.getItem('lastname');
 const userDOB = localStorage.getItem('DOB');
 const  userId= localStorage.getItem('id');
 var favUser = localStorage.getItem('favUser')
 const userToken = localStorage.getItem('token');
 const userOtp = localStorage.getItem('otp');
 const userimgProfile = "https://share.highflierstutors.com/images/1276705039.jpg";

// =====================================================================================================================================================
 var keeplist
 const reviewspaceTitle = localStorage.getItem('spaceTitle');
 const reviewspaceInfo = localStorage.getItem('spaceInfo');
 const reviewFullname = localStorage.getItem('fullnameReview');


//  ===================================================================================================================================================
const keepsinglelist = localStorage.getItem('keepsinglelisting');
var keepsinglehost = localStorage.getItem('keepsinglehost') ;
var keepsinglespacetitle;
var keepsinglespaceprice;

let totalreview;
let totallisting;
let totalbooking;

// ======================================================================================
var keepnigeriastates;
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
  // const form = document.querySelector("form[name='contact-form']");
  // const nameInput = document.querySelector("input[name='password']");
  // const emailInput = document.querySelector("input[name='email']");
  // // const phoneInput = document.querySelector("input[name='phone']");
  // // const messageInput = document.querySelector("textarea[name='message']");
  
  // nameInput.isValid = () => !!nameInput.value;
  // emailInput.isValid = () => isValidEmail(emailInput.value);
  // // phoneInput.isValid = () => isValidPhone(phoneInput.value);
  // // messageInput.isValid = () => !!messageInput.value;
  
  // const inputFields = [nameInput, emailInput];
  
  // const isValidEmail = (email) => {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // };
  
  // const isValidPhone = (phone) => {
  //   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  //   return re.test(String(phone).toLowerCase());
  // };
  
  // let shouldValidate = false;
  // let isFormValid = false;
  
  // const validateInputs = () => {
  //   console.log("we are here");
  //   if (!shouldValidate) return;
  
  //   isFormValid = true;
  //   inputFields.forEach((input) => {
  //     input.classList.remove("invalid");
  //     // input.nextElementSibling.classList.add("hide");
  
  //     if (!input.isValid()) {
  //       input.classList.add("invalid");
  //       isFormValid = false;
  //       // input.nextElementSibling.classList.remove("hide");
  //     }
  //   });
  // };
  
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
    // shouldValidate = true;
    // validateInputs();
    if (email != "" && password != "") {
   
 
      document.getElementById('loader-wrap').style.display = 'block';


  await axios.post('https://share.highflierstutors.com/api/login', {

    email: email,
    password: password

  }) .then(function (response) {
      console.log(response)
      // alert(response)
      if (response != "success") {

       
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
  
         document.getElementById('loader-wrap').style.display = 'none';
         alert('You are Logged in Successfully ' + localStorage.getItem('firstname'))
        
         form = document.getElementById('loginform');
         window.location.reload();
         form.reset();
        window.location.href = 'index.html';
       
  
      }
      else{
        document.getElementById('loader-wrap').style.display = 'none';
        alert('These details does not match our record')
      }

    
    })

    .catch(function (error) {
      if(error){
        document.getElementById('loader-wrap').style.display = 'none';
        alert(error);
        console.log(error)
      }
      //  alert('You are not Logged in  ')
     // res = error.response.data.message[0];
     
    });



}
else{
  document.getElementById('loader-wrap').style.display = 'none';
        alert('Kindly fill all inputs')

}
}




async function registerUser() {
loadIt();

  
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

  if (firstname == '' || lastname == '' || emailreg == '' || country == '' || phone == '' || start == ''
  || address == '' || password == '') {
  alert("Ensure you fill out all the needed information")
    return false;
  }
else{
  document.getElementById('loader-wrap').style.display = 'block';


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

      if (response.status == 200 && response.data != undefined) {

        document.getElementById('loader-wrap').style.display = 'none';

        console.log(response.data);
        console.log(response.data.data);

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('id', response.data.data.id);
        localStorage.setItem('firstname', response.data.data.firstname);
        localStorage.setItem('lastname', response.data.data.lastname);
        localStorage.setItem('DOB', response.data.data.DOB);
        localStorage.setItem('otp', response.data.data.otp);
        localStorage.setItem('imgProfile', response.data.data.imgProfile);



        document.getElementById("otp").style.display = "block";
        document.getElementById("profileinfo").style.display = "none";
    
     
        document.getElementById("otpnumber").value = response.data.data.otp;
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
 


}


function findStudent() {
  var school = document.getElementById("school").value;

  if (school == "yes") {
    document.getElementById("studentdetails").style.display = "block";
  }
  else
    document.getElementById("studentdetails").style.display = "none";

}

function logOff() {

  if (confirm('Are you sure you want to sign out?')) {
    
    localStorage.clear();
    window.location.href = 'index.html';
  //  loadIt();
  } else {
    // Do nothing!
   
  }

  

}


// index.html -----------------------------------------


// const axios = require('axios').default;


function verifyUser() {

  alert('You have successfully registered ' + localStorage.getItem('firstname'))
  window.location.href = 'index.html';

}



function loadIt() 
{
  if (puser) {
    
    // alert('treasposs')
      
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'none';
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';
    document.getElementById('avatar').src = userimgProfile;
  

    // console.log(loc var element = document.getElementById("allreview");alStorage.getItem('user'))
    // if(localStorage.getItem('user') == Object){
     
      document.getElementById('userValue').innerText = userFirstname + " " + userLastname;
      allfavorite();
    // }

    // document.getElementById('userValue').innerText = " ";
    if(document.body.contains(document.getElementById('studentdetails'))){
      
    document.getElementById("studentdetails").style.display = "none";    
    document.getElementById("otp").style.display = "none";
    }


    if(document.body.contains(document.getElementById('category'))){
      
      // document.getElementById('showdiscount').style.display = "none"
    populateCombo()
    populatecountry()
    populatestate()
   
    }
  
    //If it isn't "undefined" and it isn't "null", then it exists.
    if(document.body.contains(document.getElementById('allreview'))){
      
      getreviewlength();
    getlistinglength();
    getbookinglength()
    }
 
    if(document.body.contains(document.getElementById('sent'))){
      
      document.getElementById('sent').style.display = 'none'
    }
    
  }
  
  else {

    // alert('No')

    console.log(puser)

    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'block';
    document.getElementById('dropit').style.display = 'none';
    document.getElementById('reg').style.display = 'block';
    document.getElementById('addlisting').style.display = 'none';

    // alert('and NO')


    if(window.location.href === 'register.html')
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


async function getreviewlength(){


  document.getElementById('loader-wrap').style.display = 'block';

  await axios.get('https://share.highflierstutors.com/api/review',{

    // headers: {
    //   'Authorization': `Bearer ${puser}` 
    // }

  })

    
  .then(function (response) {
    if(response.status == 200){
       // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');
        // document.getElementById('fullname').innerHTML = userFirstname+" "+userLastname;
        // alert(userId)
        // console.log(response.data)
        
        // localStorage.setItem('allreview',response.data.data.length);
       totalreview = response.data.data.filter(ttb => ttb.hostId == userId)
       document.getElementById('allreview').innerHTML = totalreview.length;
        
       if( document.getElementById("showreview") != undefined)
       {

          
        if(totalreview.length > 1){
        
          // console.log(response.data.data.length);
          
          // localStorage.setItem('allreview',response.data.data.length);
  
        

         
            for (let i = 0;i < totalreview.length;i++){
  
              keeplist = totalreview[i].listingId;
              // console.log(keeplist);
      
              // findlisting()
    
              // =========================split date created on the API==================================================================
              var input = totalreview[i].created_at;
              
              var finduserwithid = totalreview[i].userId;
              var usernameReview;

              axios.get('https://share.highflierstutors.com/api/findUser/'+finduserwithid)
            
                
              .then(function (response) {
                // console.log(response.data.user)
              usernameReview = response.data.user[0].firstname +" "+response.data.user[0].lastname;
              
              })
                // ======================================================================================================================
             
                axios.get('https://share.highflierstutors.com/api/listing')

                .then(function (response) 
              {
                // console.log(response)
                filteredlisting = response.data.data.filter(ttb => ttb.listing.id == keeplist)

                console.log(filteredlisting)

              var fields = input.split('T');
      
              var name = fields[0];

              if(filteredlisting.length > 0){

                var div =  document.createElement("div");
                div.innerHTML = 
      
               ' <div class="reviews-comments-item">'+
                '<div class="review-comments-avatar">'+
                    '<img src="images/avatar/2.jpg" alt="" class="respimg"> '+
               ' </div>'+
                '<div class="reviews-comments-item-text">'+
                    '<h4><a href="#">'+usernameReview+'</a> on <a href="listing-single.html" class="reviews-comments-item-link">'+filteredlisting[0].listing.spaceTitle+'</a></h4>'+
                   '<div class="review-score-user">'+
                        '<span>'+totalreview[i].rating+'</span>'+
                        '<strong>'+totalreview[i].comments+'</strong>'+
                    '</div>'+
                    '<div class="clearfix"></div>'+
                    '<p> '+filteredlisting[0].listing.spaceDetails+'</p>'+
                    '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i>'+name+'</span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
                '</div>'+
            '</div>'
      
      
                document.getElementById('loader-wrap').style.display = 'none';
          
                var element = document.getElementById("showreview");
              
                if(element != null && element != 'undefined')
                {
                  element.appendChild(div);
                }
              }
              else{ 
                
                var div =  document.createElement("div");

                div.innerHTML = 
      
                ' <div class="reviews-comments-item">'+
                 '<div class="review-comments-avatar">'+
                     '<img src="images/avatar/2.jpg" alt="" class="respimg"> '+
                ' </div>'+
                 '<div class="reviews-comments-item-text">'+
                     '<h4><a href="#">'+usernameReview+'</a> on <a href="listing-single.html" class="reviews-comments-item-link">Unavailable</a></h4>'+
                    '<div class="review-score-user">'+
                         '<span>'+totalreview[i].rating+'</span>'+
                         '<strong>'+totalreview[i].comments+'</strong>'+
                     '</div>'+
                     '<div class="clearfix"></div>'+
                     '<p>Unavailable</p>'+
                     '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i>'+name+'</span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
                 '</div>'+
             '</div>'
       
       
                 document.getElementById('loader-wrap').style.display = 'none';
           
                 var element = document.getElementById("showreview");
               
                 if(element != null && element != 'undefined')
                 {
                   element.appendChild(div);
                 }
              }
    
            
            })
        
        }
          
          
        
      }
      else{

              var div =  document.createElement("div");
              div.innerHTML = 
            '<div class="dashboard-message">'+
           '<h1 style="color: red; margin-top: 60px">No Review Available</h1>'
            '</div>'
        
          
        
          var element = document.getElementById("showreview");
            
          element.appendChild(div);
        }

          // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');

       
          document.getElementById('loader-wrap').style.display = 'none';

       }
         
    }

    document.getElementById('loader-wrap').style.display = 'none';


  }).catch(function (err) {
        console.error('Fetch Error -', err);
      });



}
async function getlistinglength(){

  document.getElementById('loader-wrap').style.display = 'block';

  await axios.get('https://share.highflierstutors.com/api/listing')

    
  .then(function (response) {

    if(response.status == 200){
      // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');
       // document.getElementById('fullname').innerHTML = userFirstname+" "+userLastname;
      //  alert(userId)
       console.log(response.data)
       // localStorage.setItem('allreview',response.data.data.length);
       totallisting = response.data.data.filter(ttb => ttb.host.id == userId)
         document.getElementById('alllisting').innerHTML = totallisting.length;

         if(document.getElementById("showuserlisting") != undefined){
          if(totallisting.length > 1){

            for(let i = 0;i < totallisting.length;i++){
    
              var input = totallisting[i].listing.attachments;
      
              var fields = input.split(',');
      
              var name = fields[0];
              var div =  document.createElement("div");
                div.innerHTML = 
                '<div class="dashboard-list">'+
                '<div class="dashboard-message">'+
                   ' <span class="new-dashboard-item">New</span>'+
                    '<div class="listing-table-image">'+
                        '<a href="listing-single.html"><img src="https://share.highflierstutors.com/images/'+name+'" alt="" class="respimg"></a>'+
                    '</div>'+
                    '<div class="listing-table-text">'+
                        '<h4><a href="listing-single.html">'+totallisting[i].listing.spaceTitle+'</a></a></h4>'+
                        '<span class="listing-table-address"><i class="far fa-map-marker"></i><a  href="#">'+totallisting[i].listing.address+'</a></span>'+
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
          }
          else{
    
                  var div =  document.createElement("div");
                  div.innerHTML = 
                '<div class="dashboard-message">'+
               '<h1 style="color: red; margin-top: 60px">No Listing Available</h1>'
                '</div>'
                
                var et = document.getElementById("showuserlisting");
             
                
              et.appendChild(div);
            }
    
              // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');
    
           
             
    
         }
         document.getElementById('loader-wrap').style.display = 'none';
   }
  }).catch(function (err) {
    console.error('Fetch Error -', err);
  });


 

}
async function getbookinglength(){

  document.getElementById('loader-wrap').style.display = 'block';
 


    await axios.get('https://share.highflierstutors.com/api/order',{

    // headers: {
    //   'Authorization': `Bearer ${puser}` }
    })
    .then(function (response) {

      if(response.status == 200){
        // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');
         // document.getElementById('fullname').innerHTML = userFirstname+" "+userLastname;
        //  alert(userId)
         console.log(response.data)
         // localStorage.setItem('allreview',response.data.data.length);
         filteredbooking = response.data.data.filter(ttb => ttb.order.hostId == userId)
           document.getElementById('allbookings').innerHTML = filteredbooking.length;


           if(document.getElementById("dashboard-listing") != undefined){
             
      if(filteredbooking != null & filteredbooking != "")
      {
        for(let i = 0;i < filteredbooking.length;i++){

          var div =  document.createElement("div");
            div.innerHTML = 
          '<div class="dashboard-message">'+
          '<span class="new-dashboard-item">New</span>'+
         ' <div class="dashboard-message-avatar">'+
             '<img src="images/avatar/avatar-bg.png" alt="">'+
          '</div>'+
          '<div class="dashboard-message-text">'+
             '<h4>'+filteredbooking[i].User.firstname+' <span>27 December 2021</span></h4>'+
              '<div class="booking-details fl-wrap">'+
                 '<span class="booking-title">Listing Item :</span> :'+
                  '<span class="booking-text"><a href="listing-sinle.html">'+filteredbooking[i].listingDetails.listing.spaceTitle+'</a></span>'+
              '</div>'+
              '<div class="booking-details fl-wrap">'+
                  '<span class="booking-title">Persons :</span>   '+
                  '<span class="booking-text">'+filteredbooking[i].listingDetails.listing.bathrooms+' Peoples</span>'+
              '</div>'+
              '<div class="booking-details fl-wrap">'+
                  '<span class="booking-title">Booking Date :</span>   '+
                  '<span class="booking-text">'+filteredbooking[i].order.checkIn+" - "+response.data.data[i].order.checkOut+'</span>'+
              '</div>'+ 
              '<div class="booking-details fl-wrap">                       '+                                        
                  '<span class="booking-title">Mail :</span>  '+
                  '<span class="booking-text"><a href="#" target="_top">'+filteredbooking[i].User.email+'</a></span>'+
              '</div>'+
              '<div class="booking-details fl-wrap">'+
                  '<span class="booking-title">Phone :</span>   '+
                  '<span class="booking-text"><a href="tel:+496170961709" target="_top">'+filteredbooking[i].User.number+'</a></span>'+
              '</div>'+
              '<div class="booking-details fl-wrap">'+
                  '<span class="booking-title">Payment State :</span> '+
                  '<span class="booking-text"> <strong class="done-paid">Paid  </strong>'+filteredbooking[i].order.paymentMode+'</span>'+
              '</div>'+
              '<span class="fw-separator"></span>'+
              '<p></p>'+
          '</div>'+
      '</div>'
  
      var element = document.getElementById("dashboard-listing");
           
           element.appendChild(div);
  
        }
      }
      else{
         var div =  document.createElement("div");
      div.innerHTML = 
    '<div class="dashboard-message">'+
   '<h1 style="color: red; margin-top: 60px">No Order Available</h1>'
    '</div>'

      var element = document.getElementById("dashboard-listing");
     
     element.appendChild(div);

      }

           }
           document.getElementById('loader-wrap').style.display = 'none';


     }
    }).catch(function (err) {
          console.error('Fetch Error -', err);
        });
            


 

}

function getUserListing() {

    document.getElementById('loader-wrap').style.display = 'block';
   
    loadIt();
    // await axios.get('https://share.highflierstutors.com/api/listing')

    // .then(function (response) {
      // console.log(response)
  
   
      // document.getElementById('loader-wrap').style.display = 'none';
     
     

      console.log(totallisting)

    

 

  

  }

function getUserReview() {
    

    document.getElementById('loader-wrap').style.display = 'block';
    loadIt();
  
   


    // await axios.get('https://share.highflierstutors.com/api/review')

    
    // .then(function (response) {
      // if (response.data != undefined && response.data != null){
       
      
      // // }
      // var element = document.getElementById("showreview"); 

   

      //   if(totalreview.length > 1){
        
      //     // console.log(response.data.data.length);
          
      //     // localStorage.setItem('allreview',response.data.data.length);
  
        

         
      //       for (let i = 0;i < totalreview.length;i++){
  
      //         keeplist = totalreview[i].listingId;
      //         console.log(keeplist);
      
      //         // findlisting()
    
      //         // =========================split date created on the API==================================================================
      //         var input = totalreview[i].created_at;
    
      //         var fields = input.split('T');
      
      //         var name = fields[0];
    
      //         var div =  document.createElement("div");
      //         div.innerHTML = 
    
      //        ' <div class="reviews-comments-item">'+
      //         '<div class="review-comments-avatar">'+
      //             '<img src="images/avatar/2.jpg" alt="" class="respimg"> '+
      //        ' </div>'+
      //         '<div class="reviews-comments-item-text">'+
      //             '<h4><a href="#">Segun Ola</a> on <a href="listing-single.html" class="reviews-comments-item-link">'+reviewspaceTitle+'</a></h4>'+
      //            '<div class="review-score-user">'+
      //                 '<span>'+totalreview[i].rating+'</span>'+
      //                 '<strong>'+totalreview[i].comments+'</strong>'+
      //             '</div>'+
      //             '<div class="clearfix"></div>'+
      //             '<p> '+reviewspaceInfo+'</p>'+
      //             '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i>'+name+'</span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
      //         '</div>'+
      //     '</div>'
    
    
      //     document.getElementById('loader-wrap').style.display = 'none';
    
      //     var element = document.getElementById("showreview");
         
      //     if(element != null && element != 'undefined')
      //     {
      //       element.appendChild(div);
      //     }
          
            
      //   }
          
          
        
      // }
      // else{

      //         var div =  document.createElement("div");
      //         div.innerHTML = 
      //       '<div class="dashboard-message">'+
      //      '<h1 style="color: red; margin-top: 60px">No Review Available</h1>'
      //       '</div>'
        
          
        
      //     var element = document.getElementById("showreview");
            
      //     element.appendChild(div);
      //   }

      //     // document.getElementById('allreview').innerHTML = localStorage.getItem('allreview');

       
      //     document.getElementById('loader-wrap').style.display = 'none';

         
        
      
    

      
  }
function getUserBooking() {

    document.getElementById('loader-wrap').style.display = 'block';
    loadIt();

    // await axios.get('https://share.highflierstutors.com/api/order')
  
    // .then(function (response) {
    //   console.log(response)
  
      document.getElementById('loader-wrap').style.display = 'none';
  
      console.log(userId)

      

     
    }
      
     
  
  

async function findlisting(){

  document.getElementById('loader-wrap').style.display = 'block';

  await axios.get('https://share.highflierstutors.com/api/listingfind/'+keeplist+'')
  .then(function (response) {
if(response.status == 200){

  document.getElementById('loader-wrap').style.display = 'none';  
  localStorage.setItem('fullnameReview', response.data.data[0].host.firstname +" "+response.data.data[0].host.lastname)
  localStorage.setItem('spaceInfo', response.data.data[0].listing.additionalInfo )
  localStorage.setItem('spaceTitle', response.data.data[0].listing.spaceTitle )
}
   
   
  })
}
async function postNewReview(){

 
  var comment = document.getElementById('comment').value;
  rating =  document.getElementById('rg_total').value


  if(puser != null && comment != ""){
      
  document.getElementById('loader-wrap').style.display = 'block';
       
      await axios.post('https://share.highflierstutors.com/api/review', {

        comments: comment,
        rating: rating,
        hostId : keepsinglehost,
        listingId: keepsinglelist
    
      })  
      .then(function (response) {

        if(response.status == 200){
          document.getElementById('loader-wrap').style.display = 'none';

          frm = document.getElementById("add-comment");
          document.getElementById("reviewmessage").style.display="block";
          document.getElementById("reviewmessage").innerHTML="Your review is successfully submitted!"
          document.getElementById("reviewmessage").style.backgroundColor= "lightgreen"
          document.getElementById("reviewmessage").style.color= "white"
          setTimeout(function(){
            document.getElementById("reviewmessage").style.display="none";
            },3000);
            frm.reset();  // 
            location.reload();
        }
      
      
       
      })
    
   }
   else{
     alert('Only Logged In Users are allowed to review and also put a comment')
   }
  
}


async function postNewBooking(){

 
      
  document.getElementById('loader-wrap').style.display = 'block';
       
      await axios.post('https://share.highflierstutors.com/api/order', {

       
    
      })  
      .then(function (response) {

        if(response.status == 200){
      document.getElementById('loader-wrap').style.display = 'none';

          frm = document.getElementById("add-comment");
          document.getElementById("reviewmessage").style.display="block";
          document.getElementById("reviewmessage").innerHTML="Your review is successfully submitted!"
          document.getElementById("reviewmessage").style.backgroundColor= "lightgreen"
          document.getElementById("reviewmessage").style.color= "white"
          setTimeout(function(){
            document.getElementById("reviewmessage").style.display="none";
            },3000);
            frm.reset();  // 
        }
      
      
        
      })
    
   }
  

    
  
async function findsinglelisting(){

loadIt()
 
const parsedUrl = new URL(window.location.href);
parsedUrlId = parsedUrl.searchParams.get("id");

if(parsedUrlId ){

              

              console.log(parsedUrlId)
              console.log(isNaN (parsedUrlId))
  
              getparsedUrlId = isNaN(parsedUrlId);
  
  
    document.getElementById('loader-wrap').style.display = 'block';
  
   
    await axios.get('https://share.highflierstutors.com/api/listingfind/'+parsedUrlId+'')
    .then(function (response) {
    if (response.status !== 200){
        console.warn('Looks like there was a problem. error: ' +
          response.message);
        return;
      }
      else
      {
        
        findsinglehosting();
  
         document.getElementById('loader-wrap').style.display = 'none';
  
        console.log(response.data.data)
        console.log(response.data.data[0].host.number)
        console.log(response.data.data[0].host.email)
        console.log(response.data.data[0].listing.spaceTitle)
        console.log(response.data.data[0].listing.address)
        console.log(response.data.data[0].listing.amenities)
        console.log(response.data.data[0].listing.additionalInfo)
         console.log(response.data.data[0].host.firstname)
  
         localStorage.setItem('keepsinglehost',response.data.data[0].host.id)      
        keepsinglespacetitle = response.data.data[0].listing.spaceTitle;
        keepsinglespaceprice = response.data.data[0].listing.price
  
        
        // '<option value="'+response.data.data[0].listing.price+'" selected disabled>'+response.data.data[0].listing.spaceTitle+'</option>';
         document.getElementById("listingspaceTitle").innerHTML = response.data.data[0].listing.spaceTitle;
         document.getElementById("listingEmail").innerHTML = response.data.data[0].host.email;
         document.getElementById("listingPhone").innerHTML = response.data.data[0].host.number;
         document.getElementById("listingAddress").innerHTML = response.data.data[0].listing.address;
  
       //
      //  document.getElementById("orderfirstname").value = response.data.data[0].user.firstname;
      //  document.getElementById("orderlastname").value = response.data.data[0].user.lastname;
      //  document.getElementById("orderemail").value = response.data.data[0].user.email;
      // document.getElementById("orderphonee").value = response.data.data[0].user.phone;
   
         document.getElementById("orderspacetitle").innerHTML = response.data.data[0].listing.spaceTitle;
         document.getElementById("datetoday").innerHTML = new Date().toLocaleDateString();
         document.getElementById("orderprice").innerHTML = response.data.data[0].listing.price;
        // console.log(keepsinglehost)
     
        //  document.getElementById('bookedprice').value = response.data.data[0].listing.price;
         document.getElementById('bookedlisting').innerHTML =  '<option value="" selected disabled>'+response.data.data[0].listing.spaceTitle+'</option>'
         document.getElementById("listingAbout").innerHTML = response.data.data[0].listing.additionalInfo;
         document.getElementById("listingFullname").innerHTML = response.data.data[0].host.firstname+" "+response.data.data[0].host.lastname;
        //  document.getElementById("holdhostid").innerHTML = keepsinglehost
  
         document.getElementById("listingPrice").innerHTML = "NGN "+response.data.data[0].listing.price;
  
  
         document.getElementById("listingReview").innerHTML = (response.data.data[0].reviews.length >= 1) ? response.data.data[0].reviews.length + " Reviews" : "0 Review";
         document.getElementById("listingRating").innerHTML = (response.data.data[0].reviews.length >= 1) ? response.data.data[0].reviews[0].rating  : "No Rating";
         document.getElementById("listingComment").innerHTML = (response.data.data[0].reviews.length >= 1) ? response.data.data[0].reviews[0].comments  : "No Comment";
         
         if(response.data.data[0].listing){
          allhomestates = response.data.data.filter(homestate => homestate.listing.state)
          const items = allhomestates.slice(0, 5)
          for (let i = 0; i < items.length-1; i++){
            var available = document.createElement('div')
            available.innerHTML =
            '<div class="rooms-item fl-wrap">'+
            '<div class="rooms-media">'+
                '<img src="images/gal/5.jpg" alt="">'+
                '<div class="dynamic-gal more-photos-button" data-dynamicPath="">  View Gallery'+
                '<span>3 photos</span> <i class="far fa-long-arrow-right"></i></div>'+
               
            '</div>'+
            '<div class="rooms-details">'+
                '<div class="rooms-details-header fl-wrap">'+
                   '<span class="rooms-price">NGN81 <strong> / person</strong></span>'+
                    '<h3>Standard Family Room</h3>'+
                   '<h5>Max Guests: <span>3 persons</span></h5>'+
                '/div>'+
                '<p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'+
                '<div class="facilities-list fl-wrap">'+
                    '<ul>'+
                        '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                        '<li><i class="fal fa-bath"></i><span>1 Bathroom</span></li>'+
                        '<li><i class="fal fa-snowflake"></i><span>Air conditioner</span></li>'+
                        '<li><i class="fal fa-tv"></i><span> Tv Inside</span></li>'+
                        '<li><i class="fas fa-concierge-bell"></i><span>Breakfast</span></li>'+
                    '</ul>'+
                    '<a href="rooms/room1.html" class="btn color-bg ajax-link">Details<i class="fas fa-caret-right"></i></a>'+
                '</div>'+
            '</div>'+
        '</div>'

          }


         }

         if(response.data.data[0].listing.attachments){
           getImages = response.data.data[0].listing.attachments.split(',');
          //  alert(getImages.length)
          for (let i = 0; i < getImages.length-1; i++){

              var putImages = document.createElement('a')
              
              document.getElementById('tagImages'+i).src = "https://share.highflierstutors.com/images/"+getImages[i]
              putImages.innerHTML =
              
                      '<a href="https://share.highflierstutors.com/images/'+getImages[i]+'" class="gal-link popup-image"><i class="fa fa-search"></i></a>'
        

          document.getElementById('tagImages'+i).append(putImages)
          }
         }
         else{

         }
  
         if(response.data.data[0].reviews.length >= 1){
  
          for (let i = 0; i < response.data.data[0].reviews.length; i++){
  
  
          var input = response.data.data[0].listing.created_at;
  
          var fields = input.split('T');
   
          var name = fields[0];
   
          var div =  document.createElement("div");
          div.innerHTML = 
         ' <div class="reviews-comments-item">'+
          '<div class="review-comments-avatar">'+
              '<img src="images/avatar/2.jpg" alt=""> '+
         ' </div>'+
          '<div class="reviews-comments-item-text">'+
              '<h4><a href="#">'+ response.data.data[0].host.lastname +'</a> on <a href="listing-single.html" class="reviews-comments-item-link">'+response.data.data[0].listing.spaceTitle+'</a></h4>'+
             '<div class="review-score-user">'+
                  '<span>'+ response.data.data[0].reviews[i].rating +'</span>'+
                  '<strong>'+response.data.data[0].reviews[i].comments+'</strong>'+
              '</div>'+
              '<div class="clearfix"></div>'+
              '<p> '+ response.data.data[0].listing.spaceDetails +'</p>'+
              '<div class="reviews-comments-item-date"><span><i class="far fa-calendar-check"></i>'+name+'</span><a href="#"><i class="fal fa-reply"></i> Reply</a></div>'+
          '</div>'+
      '</div>'
   
  
   
      // var element = document.getElementById("showreview");
      var element = document.getElementById("singlelistreview");
      if(element != null && element != 'undefined')
      {
        
        element.appendChild(div);
      }
    }
        
       }
       else
       {
        document.getElementById('loader-wrap').style.display = 'none';
         document.getElementById('constantreview').style.display = "block";
       }
  
         }
  
  
    }) .catch(function (err) {
      document.getElementById('loader-wrap').style.display = 'none';
      console.error('Fetch Error -', err);
    });

    }
    else{
      window.location.href = "404.html"
    }




}
  
function addBooking(){

  var bookedlisting = document.getElementById("bookedlisting").value;
  var CheckIn = document.getElementById('bookeddate').value.split('-')[0];
  var CheckOut = document.getElementById('bookeddate').value.split('-')[1];
  var Amount = document.getElementById('bookedprice').value;
  // rating =  document.getElementById('rg_total').value


  if(puser != null && comment != ""){


  }
    else{
      if (confirm('Kindly login before you proceed')) {
      
        $('.modal-open').on("click", function (e) {
          e.preventDefault();
          $('.modal , .reg-overlay').fadeIn(200);
          $("html, body").addClass("hid-body");
        });
  
      } else {
        // Do nothing!
       
      }
}
}
// ==============================================================================================




 async function postNewListing(){  
  
 
  const inpFile = document.getElementById('docpicker');
  const btnUpload = document.getElementById('filly');
 



    // btnUpload.addEventListener('click', async function(){
    let spacetitle = document.getElementById('spacetitle').value;
    let category = document.getElementById('category').value;
    let address = document.getElementById('address').value;
    let entirespace = document.getElementById('entirespace').value;
    let organization = document.getElementById('organization').value;
    let guestonly = document.getElementById('guestonly').value;
    let spaceowner = document.getElementById("spaceowner").value;
    let spacerules = document.getElementById('spacerules').value;
    let country = document.getElementById('country').value;
    let state = document.getElementById("state").value;
    let city = document.getElementById('city').value;
    let numberofrooms = document.getElementById('numberofrooms').value;

    let numberofguest = document.getElementById('numberofguest').value;
    let bathrooms = document.getElementById('bathrooms').value;
    let beds = document.getElementById('beds').value;
    let price = document.getElementById('price').value;
    let listingdate = document.getElementById('listingdate').value;
    let discount = document.getElementById('discount').value;
    let discountperiod = document.getElementById("discountperiod").value;
    let spacedetails = document.getElementById('spacedetails').value;
    let additionalinfo = document.getElementById('additionalinfo').value;
    frm = document.getElementById("newlisting");

      const formData = new FormData(frm); 
      // alert(spacedetails);
      // alert(spacetitle);
      // alert(organization);
      // alert(discountperiod);
          
          if(puser != null && spacedetails != "" && spacetitle != "" && organization != "" && additionalinfo != "" && country != "" && 
          guestonly != "" && price != "" && listingdate != "" )
          
          {

        //  =====================================================================================

            legalAuthorization = "1"
            terms = "1"
            lastname = "ismail",
            verifiedID = "1",
            student = "no";
            amenities = "ee";
          
            
    if(discountperiod != null && discountperiod != ""){
      var input = discountperiod;

      var fields = input.split('-');

      var start1 = fields[0];
      var end1 = fields[1]
    }
            

            var input = listingdate;

            var fields = input.split('-');

            var start2 = fields[0];
            var end2 = fields[1];

            discountStart = start1;
            discountEnd  = end1,
            startDate = start2,
            endDate = end2;

          // =====================================================================
              for(const file of inpFile.files){
                formData.append('attachments[]',file)
              }      

                formData.append('spaceTitle' , document.getElementById('spacetitle').value)
                formData.append('address'  , address);
                formData.append( 'entireSpace' , entirespace);
              
                formData.append( 'spaceType' , category);
                formData.append('student' ,student );
                formData.append('guestOnly' , guestonly);
                formData.append( 'organization' ,  document.getElementById('organization').value);
                formData.append( 'numberOfGuest' , numberofguest);
                formData.append( 'numberOfRooms' , numberofrooms);
                formData.append( 'bathrooms'  , bathrooms);
                formData.append('beds'  , beds);
                formData.append('amenities' ,amenities);
                formData.append('spaceRules' , spacerules);
                formData.append('spaceDetails' , spacedetails);
                formData.append('additionalInfo' , additionalinfo);
                formData.append('startDate' , startDate);
                formData.append('endDate' , endDate);
                formData.append('price' , price);
                formData.append('discount' , discount);
                formData.append('discountStart' , discountStart);
                formData.append('discountEnd' , discountEnd);
                formData.append('lastname' ,'deewhy');
                formData.append('verifiedID' , verifiedID);
                formData.append('spaceOwner' , spaceowner);
                formData.append('legalAuthorization' , legalAuthorization);
                formData.append('terms' ,terms);
                formData.append('userId' , userId);
                formData.append('country' , country);
                formData.append('state' , state);
                formData.append('city' ,city);



                  document.getElementById('loader-wrap').style.display = 'block';

                  await fetch('https://share.highflierstutors.com/api/listingsave',{
                    method: "POST",        
                    body: formData,
                    // credentials: 'include',
                  // headers:{
                  //   Authorization : 'Bearer '  + localStorage.getItem('token')
                  // }
                    // headers['content-type'] = 'multipart/form-data; boundary'
                  }
                
                  )  .then(response =>  response.json())
                  .then(json => {
                  
                  
                    if (json == 200){
                      document.getElementById('loader-wrap').style.display = 'none';
                      
                      document.getElementById("listmessage").style.display="block";
                      document.getElementById("listmessage").innerHTML="Your listing is successfully submitted!"
                      document.getElementById("listmessage").style.backgroundColor= "lightgreen"
                      document.getElementById("listmessage").style.fontWeight = "bold"
                      document.getElementById("listmessage").style.color = "white"
                      setTimeout(function(){
                        document.getElementById("listmessage").style.display="none";
                        },3000);
                      
                        frm.reset();  
                    }
                    else{
                      document.getElementById('loader-wrap').style.display = 'none';
                      // alert(response.error)
                    }
                  }).catch(function (error) {
                    document.getElementById('loader-wrap').style.display = 'none';
                    console.log('Fetch Error -', error);
                  });

                
                
                
            //     })  
              

              
            //  }
            // 
            } else{
                alert('Kindly Fill all inputs')
              }
  }
// })

 
  ///////////////////////////////////////////////////////
  


  async function allListing(){
            // loadIt();
            
            const parsedUrl = new URL(window.location.href);
            parsedUrlId = parsedUrl.searchParams.get("id");

            // console.log(parsedUrlId)
            // console.log(isNaN (parsedUrlId))

            getparsedUrlId = isNaN(parsedUrlId);

          // document.getElementById('loader-wrap').style.display = 'block';
          axios.get('https://share.highflierstutors.com/api/listing')
          .then(function (response) 
        {

            if (response.status !== 200){
              console.warn('Looks like there was a problem. error: ' +
                response.message);
              return;
            }


            else
            {
              

             if(getparsedUrlId === true & parsedUrlId != 'all-listing'){
                
                // console.log(response.data.data)
                allhomestates = response.data.data.filter(homestate => homestate.listing.state)
      
                // console.log(allhomestates);

                filteredStates = allhomestates.filter(kw => kw.listing.state == parsedUrlId)
                console.log(filteredStates);

                if(filteredStates != null & filteredStates != ""){
                  for(let i = 0; i < filteredStates.length; i++)
                  {


                      // console.log(filteredStates[i].listing.id)
                      // console.log(filteredStates[i].listing.id)
                      // publicId = filteredStates[i].listing.id;
                          
                        // console.log(filteredStates[i].reviews[i].rating )
                      
                      if(filteredStates[i].reviews[0] != undefined){
              
                        for (let j = 0;j < filteredStates[i].reviews.length;j++){
                      
                          var div =  document.createElement("div");
                          div.innerHTML = 
                          '<div class="listing-item" style="cursor:pointer;">'+
                          '<article class="geodir-category-listing fl-wrap">'+
                              '<div class="geodir-category-img">'+
                                  '<a onclick="getUserId(id)" id="'+filteredStates[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+filteredStates[i].listing.attachments.split(',')[0]+'" alt="" style="object-fit: cover;">'+'</a>'+
                                  '<div class="listing-avatar">'+'<a id="getUserId(id)">'+'<img src="./images/avatar/avatar-bg.png" alt="" style="object-fit: cover;">'+'</a>'+
                                    '<span class="avatar-tooltip">Added By<strong> '+filteredStates[i].host.firstname+" "+filteredStates[i].host.lastname+' </strong></span>'+
                                  '</div>'+
                                
                                  // '<div class="sale-window">Sale 20%</div>'+
                                  '<div class="geodir-category-opt">'+
                                    '<div class="listing-rating card-popup-rainingvis" data-starrating2 ="'+filteredStates[i].reviews[j].rating.split('.')[0]+'"></div>'+
                                      '<div class="rate-class-name">'+
                                          '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(filteredStates[i].reviews).length +" Reviews"+'</div>'+
                                              '<span>'+filteredStates[i].reviews[j].rating+'</span>'+
                                          '</div>'+
                                      '</div>'+
                                '</div>'+
                                '<div class="geodir-category-content fl-wrap">'+
                                  '<div class="geodir-category-content-title fl-wrap">'+
                                    '<div class="geodir-category-content-title-item">'+
                                      '<h3 class="title-sin_map">'+
                                      '<a onclick="getUserId(id)" id="'+filteredStates[i].listing.id+'" return false;>'+filteredStates[i].listing.spaceTitle+'</a>'+
                                      '</h3>'+
                                      '<div class="geodir-category-location fl-wrap">'+
                                        '<a  id="'+filteredStates[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                                          '<i class="fas fa-map-marker-alt"></i>'+
                                          filteredStates[i].listing.address+
                                        '</a>'+
                                      '</div>'+
                                  //   '</div>'+
                                  // '</div>'+
                                '</div>'+
                              '<div class="more">'+  filteredStates[i].listing.spaceDetails +'</div>'+
              
                                  // '<ul class="facilities-list fl-wrap">'+
                                  //     '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                                  //   '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                                  //     '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                                  //     '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                                  // '</ul>'+
                                  '<div class="geodir-category-footer fl-wrap">'+
                                      '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  filteredStates[i].listing.price +'</span></div>'+
                                      '<div class="geodir-opt-list">'+
                                          // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                                          '<a class="geodir-js-favorite" id="'+filteredStates[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save as Favorite</span></a>'+
                                          // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                                      '</div>'+
                                  '</div>'+
                              '</div>'+
                              '</article>'+
                              '</div>'
                          var element = document.getElementById("listing-item");
                        
                          element.append(div);
                          // alert('jjjj')  
                        
                          console.log(div)
                          break;
                        }
                          
                        
                      }
                      else{
                        
                        var div1 =  document.createElement("div");
                        // div1.id = 'more'
                        div1.innerHTML = 
                        '<div class="listing-item" style="cursor:pointer;">'+
                          '<article class="geodir-category-listing fl-wrap">'+
                            '<div class="geodir-category-img">'+
                              '<a onclick="getUserId(id)" id="'+filteredStates[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+filteredStates[i].listing.attachments.split(',')[0]+'" alt="" style="object-fit: cover;">'+'</a>'+
                              '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="./images/avatar/avatar-bg.png" alt="" style="object-fit: cover;">'+'</a>'+
                                '<span class="avatar-tooltip">Added By<strong> '+filteredStates[i].host.firstname+" "+filteredStates[i].host.lastname+' </strong></span>'+
                              '</div>'+
                            // '<div class="sale-window">Sale 20%</div>'+
                                ' <div class="geodir-category-opt">'+
                                  '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                                    '<div class="rate-class-name">'+
                                        '<div class="score" id="score"><strong>No Comment</strong>No Reviews</div>'+
                                        '<span>No Rating</span>'+
                                    '</div>'+
                                '</div>'+
                          '</div>'+
                        '<div class="geodir-category-content fl-wrap">'+
                            '<div class="geodir-category-content-title fl-wrap">'+
                                '<div class="geodir-category-content-title-item">'+
                                    '<h3 class="title-sin_map">'+
                                    '<a onclick="getUserId(id)" id="'+filteredStates[i].listing.id+'" return false;>'+filteredStates[i].listing.spaceTitle+'</a>'+
                                    '</h3>'+
                                    '<div class="geodir-category-location fl-wrap">'+
                                    '<a  id="'+filteredStates[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                                      '<i class="fas fa-map-marker-alt"></i>'+
                                      filteredStates[i].listing.address+
                                      '</a>'+
                                      '</div>'+
                              '</div>'+
                            '</div>'+
                          '<div class="more">'+  filteredStates[i].listing.spaceDetails +'</div>'+
                                  
                                  
                              // '<p></p>'+
                              
                              // '</div>'+
                            
                            // '</div>'+
                            
                            // '<ul class="facilities-list fl-wrap">'+
                            //     '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                            //   '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                            //     '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                            //     '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                            // '</ul>'+
                            '<div class="geodir-category-footer fl-wrap">'+
                                '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  filteredStates[i].listing.price +'</span></div>'+
                                '<div class="geodir-opt-list">'+
                                    // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                                    '<a class="geodir-js-favorite" id="'+filteredStates[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save as Favorite</span></a>'+
                                    // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '</article>'+
                        '</div>'
              
                        var ele = document.getElementById("listing-item");
                      
                        ele.append(div1);
                        
                      }
                    
                        
                        document.getElementById('totalListing').innerHTML = "TOTAL AVAILABLE LISTINGS " + "   "+filteredStates.length;
                        document.getElementById('totalListing').style.marginBottom = '100px'
                    
                  }
                                     
                      
                        // var readMore = new ReadMore('#more');
                    
                        new ReadMore('.more', {});
                        //  openText: 'Read more...',
                        //  closeText: 'Show less...',
                        //  speed: '3'
                    
                        document.getElementById('loader-wrap').style.display = 'none'; 
                }
                else{
                  var element = document.getElementById("listing-item");
                      
                  var div =  document.createElement("div");
                  div.innerHTML = 
                  '<div  style="margin-top: 100px; font-weight: bold;color : red">'+
                '<h1>No Listing Available</h1>'+
                '</div>'
                  element.append(div);
                  // alert('jjjj')  
                
                  console.log(div)
                    // document.getElementById('loader-wrap').style.display = 'none';
                }
                document.getElementById('loader-wrap').style.display = 'none';
                

              }


              else if(getparsedUrlId === true & parsedUrlId == 'all-listing')
              {

              
                
                  // loadIt();   
                  document.getElementById('loader-wrap').style.display = 'none';
                  // console.log(response.data)
    
                    for (let i = 0;i < response.data.data.length;i++)
                    {
                      // console.log(response.data.data[i].listing.address)
                      // console.log(response.data.data[i].listing.id)
                      publicId = response.data.data[i].listing.id;
                          
                        // console.log(response.data.data[i].reviews[i].rating )
                      
                        if(response.data.data[i].reviews[0] != undefined){
                
                          for (let j = 0;j < response.data.data[i].reviews.length;j++){
                        
                            var div =  document.createElement("div");
                            div.innerHTML = 
                            '<div class="listing-item" style="cursor:pointer; float:left">'+
                              '<article class="geodir-category-listing fl-wrap">'+
                                  '<div class="geodir-category-img">'+
                                      '<a onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+response.data.data[i].listing.attachments.split(',')[0]+'" alt="" style="object-fit: cover;">'+'</a>'+
                                      '<div class="listing-avatar">'+'<a id="getUserId(id)">'+'<img src="./images/avatar/avatar-bg.png" alt="" style="object-fit: cover;">'+'</a>'+
                                        '<span class="avatar-tooltip">Added By<strong> '+response.data.data[i].host.firstname+" "+response.data.data[i].host.lastname+' </strong></span>'+
                                      '</div>'+
                                    
                                      // '<div class="sale-window">Sale 20%</div>'+
                                      '<div class="geodir-category-opt">'+
                                        '<div class="listing-rating card-popup-rainingvis" data-starrating2 ="'+response.data.data[i].reviews[j].rating.split('.')[0]+'"></div>'+
                                          '<div class="rate-class-name">'+
                                              '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(response.data.data[i].reviews).length +" Reviews"+'</div>'+
                                                  '<span>'+response.data.data[i].reviews[j].rating+'</span>'+
                                              '</div>'+
                                          '</div>'+
                                      '</div>'+
                                      '<div class="geodir-category-content fl-wrap">'+
                                        '<div class="geodir-category-content-title fl-wrap">'+
                                          '<div class="geodir-category-content-title-item">'+
                                            '<h3 class="title-sin_map">'+
                                            '<a onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'" return false;>'+response.data.data[i].listing.spaceTitle+'</a>'+
                                            '</h3>'+
                                            '<div class="geodir-category-location fl-wrap">'+
                                              '<a  id="'+response.data.data[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                                                '<i class="fas fa-map-marker-alt"></i>'+
                                                response.data.data[i].listing.address+
                                              '</a>'+
                                            '</div>'+
                                          '</div>'+
                                        // '</div>'+
                                      '<div class="more">'+  response.data.data[i].listing.spaceDetails +'</div>'+
                  
                                      // '<ul class="facilities-list fl-wrap">'+
                                      //     '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                                      //   '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                                      //     '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                                      //     '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                                      // '</ul>'+
                                      '<div class="geodir-category-footer fl-wrap">'+
                                      '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  response.data.data[i].listing.price +'</span></div>'+
                                      '<div class="geodir-opt-list">'+
                                          // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                                          '<a class="geodir-js-favorite" id = "'+response.data.data[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip" >Save as Favorite</span></a>'+
                                          // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                                      '</div>'+
                                  '</div>'+
                              '</div>'+
                              '</article>'+
                              '</div>'
                            var element = document.getElementById("listing-item");
                          
                            element.append(div);
                            // alert('jjjj')  
                          
                            console.log(div)
                            break;
                          }
                            
                          
                        }
                        else{
                          
                          var div1 =  document.createElement("div");
                          // div1.id = 'more'
                          div1.innerHTML = 
                          '<div class="listing-item" style="cursor:pointer; display:block">'+
                            '<article class="geodir-category-listing fl-wrap">'+
                              '<div class="geodir-category-img">'+
                                '<a onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+response.data.data[i].listing.attachments.split(',')[0]+'" alt="" style="object-fit: cover;">'+'</a>'+
                                '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="./images/avatar/avatar-bg.png" alt="" style="object-fit: cover;">'+'</a>'+
                                  '<span class="avatar-tooltip">Added By<strong> '+response.data.data[i].host.firstname+" "+response.data.data[i].host.lastname+' </strong></span>'+
                                '</div>'+
                              // '<div class="sale-window">Sale 20%</div>'+
                                  ' <div class="geodir-category-opt">'+
                                    '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                                      '<div class="rate-class-name">'+
                                          '<div class="score" id="score"><strong>No Comment</strong>No Reviews</div>'+
                                          '<span>No Rating</span>'+
                                      '</div>'+
                                  '</div>'+
                            '</div>'+
                          '<div class="geodir-category-content fl-wrap">'+
                              '<div class="geodir-category-content-title fl-wrap">'+
                                  '<div class="geodir-category-content-title-item">'+
                                      '<h3 class="title-sin_map">'+
                                      '<a onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'" return false;>'+response.data.data[i].listing.spaceTitle+'</a>'+
                                      '</h3>'+
                                      '<div class="geodir-category-location fl-wrap">'+
                                      '<a  id="'+response.data.data[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                                        '<i class="fas fa-map-marker-alt"></i>'+
                                        response.data.data[i].listing.address+
                                        '</a>'+
                                        '</div>'+
                                '</div>'+
                              '</div>'+
                              // '<div  class="content">'+
                                // '<div >'+
                                    
                                      '<div class="more">'+ response.data.data[i].listing.spaceDetails +'</div>'+
                                    
                                    
                                // '<p></p>'+
                                
                                // '</div>'+
                              
                              // '</div>'+
                              
                              // '<ul class="facilities-list fl-wrap">'+
                              //     '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                              //   '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                              //     '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                              //     '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                              // '</ul>'+
                              '<div class="geodir-category-footer fl-wrap">'+
                                  '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  response.data.data[i].listing.price +'</span></div>'+
                                  '<div class="geodir-opt-list">'+
                                      // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                                      '<a class="geodir-js-favorite" id = "'+response.data.data[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip" >Save as Favorite</span></a>'+
                                      // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                                  '</div>'+
                              '</div>'+
                          '</div>'+
                          '</article>'+
                          '</div>'
                
                          var elem = document.getElementById("listing-item");
                        
                          elem.append(div1);
                          
                        }
                      
                       
                        document.getElementById('totalListing').innerHTML = "TOTAL AVAILABLE LISTINGS" + "   "+response.data.data.length;
                        document.getElementById('totalListing').style.marginBottom = '100px'           
                      
                    } // var readMore = new ReadMore('#more');
                    new ReadMore('.more', {});
                    
                    //  openText: 'Read more...',
                    //  closeText: 'Show less...',
                    //  speed: '3'
                
                    document.getElementById('loader-wrap').style.display = 'none'; 
                
           
           
              }
              else{
                
                var element = document.getElementById("listing-item");
                      
                var div =  document.createElement("div");
                div.innerHTML = 
                '<div><h1>No Listing Available</h1></div>'+
                element.append(div);
                // alert('jjjj')  
              
                console.log(div)
    
              }
            }
          

          
      })   
}

function getUserId(listId){

  // console.log(listId);
  localStorage.setItem('keepsinglelisting', listId)
  console.log(listId);
window.location.href = 'listing-single.html?id='+listId;
}
function gerHostId(){

  // console.log(listId);
  localStorage.setItem('keepsinglehost', keepsinglehost)
  alert(hostid);
// window.location.href = 'listing-single.html';
}
function getsinglehost(){
  window.location.href = "author-single.html?id="+keepsinglehost
}

async function findsinglehosting(){

  document.getElementById('loader-wrap').style.display = 'block';
  loadIt();   

  await axios.get('https://share.highflierstutors.com/api/listing')
  .then(function (response) {

  if (response.status !== 200){
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }


    else
    {
      

    if(document.getElementById('hostname-top') != null)

    {
      
      hostsingle = response.data.data.filter(hosty => hosty.host.id == keepsinglehost)

      // console.log(hostsingle)
      // console.log(keepsinglehost)

      document.getElementById('totalListing').innerHTML = "TOTAL LISTING " + "   "+hostsingle.length;
      document.getElementById('hostname').innerHTML = hostsingle[0].host.firstname +" "+hostsingle[0].host.lastname;
      document.getElementById('hostname-top').innerHTML = hostsingle[0].host.firstname +" "+hostsingle[0].host.lastname;
      document.getElementById('hostname-below').innerHTML = hostsingle[0].host.firstname +" "+hostsingle[0].host.lastname;
      document.getElementById('hostcountry').innerHTML = hostsingle[0].host.country;
      // document.getElementById('hoststate').innerHTML = hostsingle[0].host.country;
      // document.getElementById('hostcity').innerHTML = hostsingle[0].host.number;
      // document.getElementById('hostreview').innerHTML = hostsingle[0].host.email;
      // document.getElementById('hostcreated').innerHTML = hostsingle[0].host.email;
  
      // var div =  document.createElement("ul");
      // div.innerHTML = 
    

      // var element = document.getElementById("social");
        
      // element.append(div);

        for (let i = 0;i < hostsingle.length;i++){
  
          if(hostsingle[i].reviews[0] != undefined){
  
          var div =  document.createElement("div");
          div.innerHTML = 
          '<div class="gallery-item listing-item" style="cursor:pointer;">'+
          '<article class="geodir-category-listing fl-wrap">'+
              '<div class="geodir-category-img">'+
                  '<a onclick="getUserId(id)" id="'+hostsingle[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+hostsingle[i].listing.attachments.split(',')[0]+'" alt="" style="object-fit: cover;">'+'</a>'+
                  '<div class="listing-avatar">'+'<a id="getUserId(id)">'+'<img src="./images/avatar/avatar-bg.png" alt="" style="object-fit: contain;">'+'</a>'+
                    '<span class="avatar-tooltip">Added By<strong> '+hostsingle[i].host.firstname+" "+hostsingle[i].host.lastname+' </strong></span>'+
                  '</div>'+
                 
                  // '<div class="sale-window">Sale 20%</div>'+
                  '<div class="geodir-category-opt">'+
                    '<div class="listing-rating card-popup-rainingvis" data-starrating2 ="'+hostsingle[i].reviews[0].rating.split('.')[0]+'"></div>'+
                      '<div class="rate-class-name">'+
                          '<div class="score" id="score"><strong>Very Good</strong>'+ Object.values(hostsingle[i].reviews).length +" Reviews"+'</div>'+
                              '<span>'+hostsingle[i].reviews[j].rating+'</span>'+
                          '</div>'+
                      '</div>'+
                '</div>'+
                '<div class="geodir-category-content fl-wrap">'+
                  '<div class="geodir-category-content-title fl-wrap">'+
                    '<div class="geodir-category-content-title-item">'+
                      '<h3 class="title-sin_map">'+
                      '<a onclick="getUserId(id)" id="'+hostsingle[i].listing.id+'" return false;>'+hostsingle[i].listing.spaceTitle+'</a>'+
                      '</h3>'+
                      '<div class="geodir-category-location fl-wrap">'+
                        '<a  id="'+hostsingle[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                          '<i class="fas fa-map-marker-alt"></i>'+
                          hostsingle[i].listing.address+
                        '</a>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                  '<div class="more">'+  hostsingle[i].listing.spaceDetails +'</div>'+
                  '<ul class="facilities-list fl-wrap">'+
                      '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
                    '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
                      '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
                      '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
                  '</ul>'+
                  '<div class="geodir-category-footer fl-wrap">'+
                      '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  hostsingle[i].listing.price +'</span></div>'+
                      '<div class="geodir-opt-list">'+
                          // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                          '<a class="geodir-js-favorite" id="'+hostsingle[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save as Favorite</span></a>'+
                          // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '</article>'+
              '</div>'
          var element = document.getElementById("host-listing");
        
          element.append(div);
          // alert('jjjj')  
  
        }
        else{
          
          var div1 =  document.createElement("div");
          // div1.id = 'more'
          div1.innerHTML = 
          '<div class="listing-item">'+
            '<article class="geodir-category-listing fl-wrap">'+
              '<div class="geodir-category-img">'+
                '<a onclick="getUserId(id)" id="'+hostsingle[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/'+hostsingle[i].listing.attachments.split(',')[0]+'" alt=""  style="object-fit: cover;">'+'</a>'+
                '<div class="listing-avatar">'+'<a href="author-single.html">'+'<img src="./images/avatar/avatar-bg.png" alt="">'+'</a>'+
                  '<span class="avatar-tooltip">Added By<strong> '+hostsingle[i].host.firstname+" "+hostsingle[i].host.lastname+' </strong></span>'+
                '</div>'+
              // '<div class="sale-window">Sale 20%</div>'+
                  ' <div class="geodir-category-opt">'+
                    '<div class="listing-rating card-popup-rainingvis" data-starrating2="5"></div>'+
                      '<div class="rate-class-name">'+
                          '<div class="score" id="score"><strong>No Comment</strong>No Reviews</div>'+
                          '<span>No Rating</span>'+
                      '</div>'+
                  '</div>'+
            '</div>'+
          '<div class="geodir-category-content fl-wrap">'+
              '<div class="geodir-category-content-title fl-wrap">'+
                  '<div class="geodir-category-content-title-item">'+
                      '<h3 class="title-sin_map">'+
                      '<a onclick="getUserId(id)" id="'+hostsingle[i].listing.id+'" return false;>'+hostsingle[i].listing.spaceTitle+'</a>'+
                      '</h3>'+
                      '<div class="geodir-category-location fl-wrap">'+
                      '<a  id="'+hostsingle[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
                        '<i class="fas fa-map-marker-alt"></i>'+
                        hostsingle[i].listing.address+
                        '</a>'+
                        '</div>'+
                '</div>'+
              '</div>'+
              // '<div  class="content">'+
                // '<div >'+
                    
                      '<div class="more">'+ hostsingle[i].listing.spaceDetails +'</div>'+
                     
                    
                // '<p></p>'+
                
                // '</div>'+
               
              // '</div>'+
              
              // '<ul class="facilities-list fl-wrap">'+
              //     '<li><i class="fal fa-wifi"></i><span>Free WiFi</span></li>'+
              //   '<li><i class="fal fa-parking"></i><span>Parking</span></li>'+
              //     '<li><i class="fal fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>'+
              //     '<li><i class="fal fa-utensils"></i><span> Restaurant</span></li>'+
              // '</ul>'+
              '<div class="geodir-category-footer fl-wrap">'+
                  '<div class="geodir-category-price">Per Day <span>'+" NGN  "+  hostsingle[i].listing.price +'</span></div>'+
                  '<div class="geodir-opt-list">'+
                      // '<a href="#0" class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                      '<a class="geodir-js-favorite" id="'+hostsingle[i].listing.id+'" onclick="crosscheckFavorite(id)"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save as Favorite</span></a>'+
                      // '<a href="#" class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
                  '</div>'+
              '</div>'+
          '</div>'+
          '</article>'+
          '</div>'
    
          var eleme = document.getElementById("host-listing");
        
          eleme.append(div1);
          
        }
         
          // console.log(div)
          // break;
        }
          
         
        document.getElementById('loader-wrap').style.display = 'none';
     
  
      }
      else{
        document.getElementById('loader-wrap').style.display = 'none';

        hostsingle = response.data.data.filter(hosty => hosty.host.id == keepsinglehost);
        document.getElementById("hostedlist").innerHTML = hostsingle.length +" Places Hosted";

      }
    }
     

  
  }) .catch(function (err) {
    document.getElementById('loader-wrap').style.display = 'none';
    console.error('Fetch Error -', err);
  });


}

function populatecountry(){
  // axios.get('https://share.highflierstutors.com/api/allcountry')
  // .then(function (response) {
  // if (response.status !== 200){
  //     console.warn('Looks like there was a problem. error: ' +
  //       response.message);
  //     return;
  //   }
  //   else{

  //     let options = response.data.data.map(country => '<option value="' + country.phonecode+ '">'+country.nicename+'</option>').join('\n')
  //     let dropdown = document.getElementById('country');
  //     dropdown.innerHTML = options;
      
  //     console.log(response.data.data)
      // for(let i = 0; i < response.data.data.length; i++){
       
       
      //   console.log(response.data.data[i].iso)
      //   console.log(response.data.data[i].nicename)
      //   console.log(response.data.data[i].phonecode)
      // }
        
//     }

// }  )
}

function populatestate(){
  document.getElementById('loader-wrap').style.display = 'block';

  axios.get('https://share.highflierstutors.com/api/ngstatecities')
  .then(function (response) {
  if (response.status !== 200){
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else{
      console.log(response.data.data)
      document.getElementById('loader-wrap').style.display = 'none';
      let options = response.data.data.map(state => '<option value="' + state.admin_name+ '">'+state.admin_name+'</option>').join('\n')
      let dropdown = document.getElementById('state');
      dropdown.innerHTML ='<option value="0" selected>Choose State</option>\n' + options;
      
      keepnigeriastates = response.data.data;
      // console.log(options) ;
      console.log(dropdown)
      // console.log(response.data.data)
      // for(let i = 0; i < response.data.data.length; i++){
       
       
      //   console.log(response.data.data[i].admin_name)
      //   console.log(response.data.data[i].city)
      //   console.log(response.data.data[i].lat)
      //   console.log(response.data.data[i].lng)
      // }
        
    }

}  )  .catch(function (err) {
  document.getElementById('loader-wrap').style.display = 'none';
  console.error('Fetch Error -', err);
});
}
function getCity(){
  let sool = document.getElementById('state');
 
  
    let result = keepnigeriastates.filter(city => city.admin_name == sool.value);
    // console.log(result)
    let options = result.map(rl => '<option value="' + rl.city+ '">'+rl.city+'</option>').join('\n')
    let dropdown = document.getElementById('city');
    dropdown.innerHTML = '<option value="0" selected>Choose City</option>\n' + options;

}


function populateCombo() {

  
  document.getElementById('loader-wrap').style.display = 'block';
  axios.get('https://share.highflierstutors.com/api/allCategory')

    .then(function (response) {
    if (response.status !== 200){
        console.warn('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      document.getElementById('loader-wrap').style.display = 'none';
     console.log(response.data.data)
    
      let options = response.data.data.map(category => '<option value="' + category.id+ '">'+category.categoryName+'</option>').join('\n')
      let dropdown = document.getElementById('category');
       dropdown.innerHTML = options;
    } 
    )

    .catch(function (err) {
      console.error('Fetch Error -', err);
    });
}

async function postNewFavorite(vid){

  document.getElementById('loader-wrap').style.display = 'block';

  


          axios.post('https://share.highflierstutors.com/api/favorite',{
            userId: favUser,
            listingId : vid
          })
            .then(function (response) {
              console.log(response)
            if (response.status !== 200){
              document.getElementById('loader-wrap').style.display = 'none';
              
                console.warn('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
              // favoptions.push(response.data.data)
              document.getElementById('loader-wrap').style.display = 'none';
              allfavorite()

             
              // favorite = document.getElementById('favoritecounter');
        
              // document.getElementById(vid).style.display = "none";
              // fav++
              // localStorage.setItem('fav',fav);
              
              
            
            
            } 
            )
        
             .catch(function (err) {
            document.getElementById('loader-wrap').style.display = 'none';
            console.error('Fetch Error -', err);
  });
        

    
  // checking = document.querySelectorAll("i.fa-heart")[4].style.backgroundColor = "red"

  // chkn = document.getElementById(vid).child[1];

  // console.log(checking)
  // console.log(checking[1])
  // console.log(chkn)



  
}
function crosscheckFavorite(vid){

   
    console.log(favoptions)
    if(puser != null & favoptions != undefined){
      for (let i = 0;i < favoptions.length;i++){

        if(favoptions[i].listingDetails.listing.id == vid){
      
          alert('This listing is already your favourite')
          break;
        }


        else if(favoptions[i].listingDetails.listing.id != vid && i == favoptions.length-1){ 
          postNewFavorite(vid)
        
        }
    }
   
   
    }
    else if(puser != null & favoptions === undefined){
      postNewFavorite(vid)
    }
    else if(puser == null){
      alert('Kndly, login to proceed')
  }

}
async function allfavorite(){

  // loadIt()
  // axios.get('https://share.highflierstutors.com/api/favorite')
 
  await fetch('https://share.highflierstutors.com/api/favorite',{
  
    headers: {
      Authorization: 'Bearer '  + localStorage.getItem('token')}

        })
        .then(response =>  response.json())
        .then(json => {
          console.log(json.data)
          console.log(userId)
        if(json.data != null & json.data != undefined){
        favoptions = json.data
              localStorage.setItem('favUser',json.data.length)
            // console.log(json.data)
              // console.log(favoptions)
              document.getElementById('favoritecounter').innerText = json.data.length;
              console.log(json.data.length)

            loadAllFavoriteListing();
        }
       
  })
  .catch(function (err) {
    document.getElementById('loader-wrap').style.display = 'none';
    console.error('Fetch Error -', err);
  });
  
}
async function loadAllFavoriteListing(){

  // console.log(favoptions)

  for (let i = 0;i < favoptions.length;i++)
  {

            var li =  document.createElement("li");

                li.innerHTML = 
                '<li class="clearfix" style="cursor: pointer;">'+
                  '<a  id="'+favoptions[i].listingDetails.listing.id+'" onclick=getUserId(id) class="widget-posts-img"><img src="https://share.highflierstutors.com/images/'+favoptions[i].listingDetails.listing.attachments.split(',')[0]+'"alt="" class="respimg">'+
                    '<div class="widget-posts-descr">'+
                        '<a >'+favoptions[i].listingDetails.listing.spaceTitle+'</a>'+
                        '<div class="listing-rating card-popup-rainingvis" data-starrating2="5">'+
                        '</div>'+
                        '<div class="geodir-category-location fl-wrap"><a ><i class="fas fa-map-marker-alt"></i>'+favoptions[i].listingDetails.listing.spaceDetails+'</a></div>'+
                        '<span class="rooms-price">NGN '+favoptions[i].listingDetails.listing.price+' <strong> / Day</strong></span>'+
                    '</div>'+
                    '</a>'+
                '</li>'
                var ele = document.getElementById('favoritelist');
                
              
                ele.append(li);
                // console.log(li)
                // alert('78')
  }
 
}

async function getHomeStates(){

  loadIt();
  // var emailreview = document.getElementById("emailreview").value;
  // var namereview = document.getElementById('namereview').value;
  // var comment = document.getElementById('comment').value;
  // rating =  document.getElementById('rg_total').value


  document.getElementById('loader-wrap').style.display = 'block';
 
      await axios.get('https://share.highflierstutors.com/api/ngstatecities', {

       
      })  
      .then(function (response) {

        if(response.status == 200 || response.status == 201){
          console.log(response.data.data);
          // for (let i = 1;i < 9;i++){

          document.getElementById('state1').innerText = response.data.data[0].admin_name;
          document.getElementById('state2').innerText = response.data.data[14].admin_name;
          document.getElementById('state3').innerText = response.data.data[12].admin_name;     
          document.getElementById('state4').innerText = response.data.data[3].admin_name;
          document.getElementById('state5').innerText = response.data.data[22].admin_name;
          document.getElementById('state6').innerText = response.data.data[5].admin_name;
          document.getElementById('state7').innerText = response.data.data[25].admin_name;
        }
      
      
        
      })  .catch(function (err) {
        document.getElementById('loader-wrap').style.display = 'none';
        console.error('Fetch Error -', err);
      });


      await axios.get('https://share.highflierstutors.com/api/listing')
      .then(function (response) {
        if (response.status !== 200){
          console.warn('Looks like there was a problem. error: ' +
            response.message);
          return;
        }

        else{
          // document.getElementById('loader-wrap').style.display = 'none';
          console.log(response.data.data)

          keeplistingfromhome = response.data.data;
          allhomestates = response.data.data.filter(homestate => homestate.listing.state)

          console.log(allhomestates);

          kwara = allhomestates.filter(kw => kw.listing.state == "Kwara").length
          // console.log(kwara)
          lagos = allhomestates.filter(lg => lg.listing.state == "Lagos").length
          // console.log(lagos)
          oyo = allhomestates.filter(oy => oy.listing.state == "Oyo").length
          // console.log(oyo)
          osun = allhomestates.filter(os => os.listing.state == "Osun").length
          // console.log(osun)
          fed = allhomestates.filter(fd => fd.listing.state == "Federal Capital Territory").length
          // console.log(fed)
          ekiti = allhomestates.filter(ek => ek.listing.state == "Ekiti").length
          // console.log(ekiti)
          ogun = allhomestates.filter(og => og.listing.state == "Ogun").length
          // console.log(ogun)

          document.getElementById('statelisting1').innerText = lagos;
          document.getElementById('statelisting2').innerText = kwara;
          document.getElementById('statelisting3').innerText = ogun;
          document.getElementById('statelisting4').innerText = oyo;
          document.getElementById('statelisting5').innerText = osun;
          document.getElementById('statelisting6').innerText = fed;
          document.getElementById('statelisting7').innerText = ekiti

          // document.getElementById('loader-wrap').style.display = 'none';

          if(allhomestates != ""){

            const items = allhomestates.slice(0, 9)

            if(items != null & items != ""){
             
  
              for(let i = 1; i < items.length;i++ )
              {


     if(i == 4 || i == 5 || i == 6 || i == 7){
  
      document.getElementById('popularUser'+i).innerText = items[i].host.firstname;
      document.getElementById('popularComment'+i).innerText = (items[i].reviews != "") ? items[i].reviews[0].comments : "No Comments";
      document.getElementById('popularReview'+i).innerText = (items[i].reviews != "") ? items[i].reviews.length : "No Review";
      document.getElementById('popularRating'+i).innerText = (items[i].reviews != "") ? items[i].reviews[0].rating : "No Rating";
      // document.getElementById('popularTitle'+i).innerText = items[i].listing.spaceTitle;
      document.getElementById('popularAddress'+i).innerText = items[i].listing.address;
      document.getElementById('popularDetails'+i).innerText = items[i].listing.spaceDetails;
      // li.classList.add('more')
      document.getElementById('popularPrice'+i).innerText = "NGN "+ items[i].listing.price;
      // document.getElementById('popularUser'+i).className = items[i].listing.id;

     
    
      document.getElementById('popularDetails'+i).style.height = '100px'
      document.getElementById('popularDetails'+i).style.border = '1px solid transparent'
      document.getElementById('popularDetails'+i).style.overflow = 'hidden'
 
   var li =  document.createElement("div");

    li.innerHTML = 
            '<h3 class="title-sin_map "><a id="'+items[i].listing.id+'" onclick="pool(id)" style="cursor:pointer;">'+items[i].listing.spaceTitle+'</a></h3>'
           
    var ele = document.getElementById('popularTitle'+i);


ele.appendChild(li);

var di =  document.createElement("div");

di.innerHTML = 
    '<a id="'+items[i].listing.id+'" onclick="pool(id)" style="cursor:pointer;"><img src="images/gal/8.jpg" alt=""></a>'
       
var ele = document.getElementById('tryit'+i);


ele.append(di);




}


}
     }
     new ReadMore('.more', {});
                
          }
        
          }
            
               
              
          document.getElementById('loader-wrap').style.display = 'none';


        
        
      }).catch(function (err) {
        document.getElementById('loader-wrap').style.display = 'none';
        console.error('Fetch Error -', err);
      });
   
 
}
function pool(singleId){
  window.location.href = "listing-single.html?id="+singleId
}

async function cityListing(cityid){
// alert(cityid)
  window.location.href = "listing.html?id="+cityid
}
function checkAvailable(){

var checkbegin = document.getElementById('checkdate').value.split('-')[0];
var checkend = document.getElementById('checkdate').value.split('-')[1];

// To calculate the time difference of two dates
var Difference_In_Time = checkend - checkbegin;
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
//To display the final no. of days (result)
console.log("Total number of days between dates  <br>"
               + checkbegin + "<br> and <br>" 
               + checkend + " is: <br> " 
               + Difference_In_Days);

               alert(checkbegin)
               alert(checkend)
               alert(Difference_In_Days)
}
async function recentAdded(){
  filteredkeeplistingfromhome = keeplistingfromhome.filter(hg => hg.listingDetails) 
}

// ==============================================================================

async function firstMessage()
{
window.location.href = 'conversation.html'


  
}

function createConversation(){
  
  document.getElementById('receive').style.display = 'none'
  document.getElementById('sent').style.display = 'block'
}