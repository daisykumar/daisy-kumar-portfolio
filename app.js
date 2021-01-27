// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

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

//const database = firebase.firestore();

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const social = document.querySelector('.social-icons');

//let projectRef = database.collection('project');

//let unsubscribe = projectRef.get();


const app = flamelink({
	firebaseApp,
	dbType: 'cf' // cloud firestore
});

let container = document.querySelector('#background-container');
let heroBackground = document.querySelector('.hero');

//Ask line 41 to 72
//  app.content.get({
 //     schemaKey: 'home',
 //     populate: [{
 //       field: 'heroImagePng',
 //       size:{
 //         height: 400,
 //         quality: 1,
  //        width: 600
  //      }
 //     }]
  //  })

 //   .then(home =>{
  //    console.log('All of your projects:', home)
//      let html = "";

 //     for(const property in home){
 //       let home = home[property];
 //       html += `
  //      <header class="hero">
//        <div class="bk-img">
//        <img src="${home.heroImagePng[0].url}">
 //       </div>
 //       <article class="hero-img">
 //           <h1 style="text-align:center" class="name"> <span   class="human">Humanising Technology, </span>Creating Value through Design</h1>
  //          <p class="daisy" style="text-align:center">DAISY KUMAR</p>
   //     </article>
   //     </header>
  //      `
  //    }
  //    heroBackground.innerHTML = html
  //  })

app.content.get({
  schemaKey: 'projects',
  populate: [{
    field: 'dataPng',
    size: {
      height: 300,
      quality: 1,
      width: 500
    }
  }]
}) 
.then(projects =>{
  console.log('All of your projects:', projects)
  let html = "";

  for(const property in projects){
    let proj = projects[property];
    html += `
      <div class="container">
      <div class="container-image">
        <img class="project-image" src="${proj.dataPng[0].url}" alt="Apenhet">
      </div>
      <div class="container-text">
        <h3>${proj.title}</h3>
        <p>${proj.paragraph}
        </p>
        <p>UX DESIGN, UI DESIGN</p>
        <button class="project-button"><a class="behance-links" href="./Data.html" target="_blank">View Here</a> </button>
      </div>
      </div>
    `
  }
  container.innerHTML = html
})


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

    
});

