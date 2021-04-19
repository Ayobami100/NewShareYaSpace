
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


//  ===================================================================================================================================================
const keepsinglelist = localStorage.getItem('keepsinglelisting');
var keepsinglehost ;
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
  document.getElementById('loader-wrap').style.display = 'block';

  await axios.post('https://share.highflierstutors.com/api/login', {

    email: email,
    password: password,

  })

    .then(function (response) {

      if (response.data != undefined && response.data != null) {

        document.getElementById('loader-wrap').style.display = 'none';
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
  
      }

    
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

      if (response.data != undefined && response.data != null) {

        document.getElementById('loader-wrap').style.display = 'none';

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
    
    // alert('treasposs')
      
    document.getElementById('signout').style.display = 'none';
    document.getElementById('signin').style.display = 'none';
    document.getElementById('reg').style.display = 'none';
    document.getElementById('addlisting').style.display = 'block';
    document.getElementById('dropit').style.display = 'block';
    document.getElementById('avatar').src = userimgProfile;
  
    var category = document.getElementById("category");
    var constantreview = document.getElementById("constantreview");
    // console.log(loc var element = document.getElementById("allreview");alStorage.getItem('user'))
    // if(localStorage.getItem('user') == Object){
     
      document.getElementById('userValue').innerText = userFirstname + " " + userLastname;
     
    // }

    // document.getElementById('userValue').innerText = " ";
    if(window.location.href === 'register.html')
    {
      
    document.getElementById("studentdetails").style.display = "none";    
    document.getElementById("otp").style.display = "none";
    }
    else if(typeof(category) != 'undefined' && category != null)
    {
      // document.getElementById('showdiscount').style.display = "none"
    populateCombo()
    populatecountry()
    populatestate()
   
    }
    
    if(location.href.match('/add-listing.html'))
    {
    // getUserId()
   alert('kkkk')
      document.getElementById('constantreview').style.display = "none";
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
    
    document.getElementById('loader-wrap').style.display = 'block';
    loadIt();
  
    await axios.get('https://share.highflierstutors.com/api/review')
    .then(function (response) {
      if (response.data != undefined && response.data != null){
       
        document.getElementById('loader-wrap').style.display = 'none';
        localStorage.setItem('allreview',response.data.data.length);
      }
       

    if (response.status !== 200){
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
    document.getElementById('loader-wrap').style.display = 'block';
   
    loadIt();
    await axios.get('https://share.highflierstutors.com/api/listing')

    .then(function (response) {
      // console.log(response)
  if (response.status !== 200){
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else
    {
      document.getElementById('loader-wrap').style.display = 'none';
  
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
    document.getElementById('loader-wrap').style.display = 'block';
    loadIt();

    await axios.get('https://share.highflierstutors.com/api/order')
  
    .then(function (response) {
      console.log(response)
  if (response.status !== 200){
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else
    {
      document.getElementById('loader-wrap').style.display = 'none';
  
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

  var emailreview = document.getElementById("emailreview").value;
  var namereview = document.getElementById('namereview').value;
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
        }
      
      
       
      })
    
   }
   else{
     alert('Only Logged In Users are allowed to review and also put a comment')
   }
  
}
async function postNewBooking(){
  // var emailreview = document.getElementById("emailreview").value;
  // var namereview = document.getElementById('namereview').value;
  // var comment = document.getElementById('comment').value;
  // rating =  document.getElementById('rg_total').value


  if(puser != null && comment != ""){
      
  document.getElementById('loader-wrap').style.display = 'block';
       
      await axios.post('https://share.highflierstutors.com/api/order', {

        // checkOut,
        // checkOut
        // Amount,
        // paymentMode,
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
        }
      
      
        
      })
    
   }
   else{
     alert('Only Logged In Users are allowed to review and also put a comment')
   }
}
async function findsinglelisting(){
  document.getElementById('loader-wrap').style.display = 'block';

  loadIt();
  console.log(keepsinglelist);
  await axios.get('https://share.highflierstutors.com/api/listingfind/'+keepsinglelist+'')
  .then(function (response) {
  if (response.status !== 200){
      console.warn('Looks like there was a problem. error: ' +
        response.message);
      return;
    }
    else
    {
  document.getElementById('loader-wrap').style.display = 'none';

      console.log(response.data.data[0])
      console.log(response.data.data[0].host.number)
      console.log(response.data.data[0].host.email)
      console.log(response.data.data[0].listing.spaceTitle)
      console.log(response.data.data[0].listing.address)
      console.log(response.data.data[0].listing.amenities)
      console.log(response.data.data[0].listing.additionalInfo)
       console.log(response.data.data[0].host.firstname)

       keepsinglehost = response.data.data[0].host.id;
 

       document.getElementById("listingspaceTitle").innerHTML = response.data.data[0].listing.spaceTitle;
       document.getElementById("listingEmail").innerHTML = response.data.data[0].host.email;
       document.getElementById("listingPhone").innerHTML = response.data.data[0].host.number;
       document.getElementById("listingAddress").innerHTML = response.data.data[0].listing.address;
      //  document.getElementById("listing-item").innerHTML = response.data.data[0].listing.amenities;
       document.getElementById("listingAbout").innerHTML = response.data.data[0].listing.additionalInfo;
       document.getElementById("listingFullname").innerHTML = response.data.data[0].host.firstname+" "+response.data.data[0].host.lastname;
       document.getElementById("listingPrice").innerHTML = "NGN "+response.data.data[0].listing.price;


       document.getElementById("listingReview").innerHTML = (response.data.data[0].reviews.length > 1) ? response.data.data[0].reviews.length + " Reviews" : "0 Review";
       document.getElementById("listingRating").innerHTML = (response.data.data[0].reviews.length > 1) ? response.data.data[0].reviews[0].rating  : "No Rating";
       document.getElementById("listingComment").innerHTML = (response.data.data[0].reviews.length > 1) ? response.data.data[0].reviews[0].comments  : "No Comment";


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
       document.getElementById('constantreview').style.display = "block";
     }

       }


  })
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


  const formData = new FormData(); 
  alert(spacedetails);
  alert(spacetitle);
  alert(organization);
  alert(discountperiod);
       
      if(puser != null && spacedetails != "" && spacetitle != "" && organization != "" && additionalinfo != "" && country != "" && 
      guestonly != "" && price != "" && listingdate != "" )
      
      {

    //  =====================================================================================

        legalAuthorization = "1"
        terms = "1"
        userid = "2"
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
              formData.append('beds'  , beds);
                formData.append( 'spaceType' , category);
                  formData.append('student' ,student );
                    formData.append('guestOnly' , guestonly);
                      formData.append( 'organization' ,  document.getElementById('organization').value);
                      formData.append( 'numberOfGuest' , numberofguest);
                        formData.append( 'numberOfRooms' , numberofrooms);
                          formData.append( 'bathrooms'  , bathrooms);
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
              formData.append('verifiedID' , verifiedID);
              formData.append('spaceOwner' , spaceowner);
              formData.append('legalAuthorization' , legalAuthorization);
              formData.append('terms' ,terms);
              formData.append('userId' , userid);
              formData.append('country' , country);
              formData.append('state' , state);
              formData.append('city' ,city);

              document.getElementById('loader-wrap').style.display = 'block';

              await fetch('https://share.highflierstutors.com/api/listing',{
                method: "post",
                body: formData
              }
            
              )  .then(function (response) {
                if (response == 200){
                  document.getElementById('loader-wrap').style.display = 'none';
                  frm = document.getElementById("newlisting");
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
                  alert(response.error)
                }
              }).catch(function (error) {
                alert('Fetch Error -', error);
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
    document.getElementById('loader-wrap').style.display = 'block';
    loadIt();   

    axios.get('https://share.highflierstutors.com/api/listing')
    .then(function (response) {
    if (response.status !== 200){
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

        console.log(response.data.data[i].reviews[i].rating + response.data.data[i].listing.spaceTitle)

          if(Object.values(response.data.data[i].reviews).length > 1){

          
          var div =  document.createElement("div");
          div.innerHTML = 
          '<div class="listing-item">'+
          '<article class = geodir-category-listing fl-wrap">'+
              '<div class="geodir-category-img">'+
                  '<a onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'">'+'<img src="https://share.highflierstutors.com/images/1276705039.jpg" alt="">'+'</a>'+
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
                          '<a href="#" onclick="getUserId(id)" id="'+response.data.data[i].listing.id+'" return false;>'+response.data.data[i].listing.spaceTitle+'</a>'+
                          '</h3>'+
                          '<div class="geodir-category-location fl-wrap">'+
                          '<a  id="'+response.data.data[i].listing.id+' onclick="getUserId(id)" class="map-item">'+
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
                '<a href="#" id="'+response.data.data[i].listing.id+'" onclick="getUserId(id)" return false;>'+'<img src="https://share.highflierstutors.com/images/1276705039.jpg" alt="">'+'</a>'+
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
                        '<a  href="#" id="'+response.data.data[i].listing.id+'" onclick="getUserId(id)" return false;>'+response.data.data[i].listing.spaceTitle+'</a>'+
                        '</h3>'+
                        '<div class="geodir-category-location fl-wrap">'+
                        '<a href="#" id="'+response.data.data[i].listing.id+'" onclick="getUserId(id)" class="map-item" return false;>'+
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
                        '<a  class="map-item"><i class="fal fa-map-marker-alt"></i><span class="geodir-opt-tooltip">On the map <strong>1</strong></span></a>'+
                        '<a class="geodir-js-favorite"><i class="fal fa-heart"></i><span class="geodir-opt-tooltip">Save</span></a>'+
                        '<a class="geodir-js-booking"><i class="fal fa-exchange"></i><span class="geodir-opt-tooltip">Find Directions</span></a>'+
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
        document.getElementById('loader-wrap').style.display = 'none';
       
      }
    })
  .catch(function (err) {
    console.error('Fetch Error -', err);
  });
}

function getUserId(listId){

  // console.log(listId);
  localStorage.setItem('keepsinglelisting', listId)
  console.log(listId);
window.location.href = 'listing-single.html';
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
      document.getElementById('loader-wrap').style.display = 'none';
      let options = response.data.data.map(state => '<option value="' + state.admin_name+ '">'+state.admin_name+'</option>').join('\n')
      let dropdown = document.getElementById('state');
      dropdown.innerHTML = options;
      
      keepnigeriastates = response.data.data;
      
      // console.log(response.data.data)
      // for(let i = 0; i < response.data.data.length; i++){
       
       
      //   console.log(response.data.data[i].admin_name)
      //   console.log(response.data.data[i].city)
      //   console.log(response.data.data[i].lat)
      //   console.log(response.data.data[i].lng)
      // }
        
    }

}  )
}
function getCity(){
  let sool = document.getElementById('state');
 
  
    let result = keepnigeriastates.filter(city => city.admin_name == sool.value);
    // console.log(result)
    let options = result.map(rl => '<option value="' + rl.city+ '">'+rl.city+'</option>').join('\n')
    let dropdown = document.getElementById('city');
    // alert('retweet')
    // alert(sool.value)
    // console.log(keepnigeriastates)
    // console.log(result)
    dropdown.innerHTML = options;

}

function populatecity(){

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

