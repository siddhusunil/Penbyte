const firebaseConfig = {
  //   copy your firebase config informations
   // Your web app's Firebase configuration
    apiKey: "AIzaSyBbKRkB45YWrgP-vOay1imChE0llGzr7nI",
    authDomain: "penbyt-contactinfo.firebaseapp.com",
    databaseURL: "https://penbyt-contactinfo-default-rtdb.firebaseio.com",
    projectId: "penbyt-contactinfo",
    storageBucket: "penbyt-contactinfo.appspot.com",
    messagingSenderId: "540843596088",
    appId: "1:540843596088:web:cbe65e5cf9aed327ce49cd"

};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var phonenum = getElementVal("phonenum");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, phonenum, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";
    
  //   remove the alert
  setTimeout(() => {
    
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phonenum, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phonenum: phonenum,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

CheckCon