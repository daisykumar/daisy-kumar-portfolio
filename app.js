
var firebaseConfig = {
    apiKey: "AIzaSyCG-EE0kPyk3S_lEqQ93hjq-6Z6kPwXgsc",
    authDomain: "daisy-kumar-portfolio.firebaseapp.com",
    projectId: "daisy-kumar-portfolio",
    storageBucket: "daisy-kumar-portfolio.appspot.com",
    messagingSenderId: "704513711349",
    appId: "1:704513711349:web:5656717463a935e76439bc"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const social = document.querySelector('.social-icons');

navToggle.addEventListener("click", function (){
    //console.log(links.classList);
    //console.log(links.classList.contains("random"));
    //console.log(links.classList.contains("links"));
    //if(links.classList.contains("show-links")){
    //     links.classList.remove("show-links") 
    //} else {
    //   links.classList.add("show-links");
    //}
    links.classList.toggle("show-links");
    links.classList.toggle("show-socials");

    
})

