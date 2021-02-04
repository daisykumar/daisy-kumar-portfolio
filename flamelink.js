// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCG-EE0kPyk3S_lEqQ93hjq-6Z6kPwXgsc",
    authDomain: "daisy-kumar-portfolio.firebaseapp.com",
    projectId: "daisy-kumar-portfolio",
    storageBucket: "daisy-kumar-portfolio.appspot.com",
    messagingSenderId: "704513711349",
    appId: "1:704513711349:web:5656717463a935e76439bc"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig); 

console.log(firebase);
const app = flamelink({
	firebaseApp,
	dbType: 'cf' // cloud firestore
});