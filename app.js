// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

  

//const database = firebase.firestore();

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const social = document.querySelector('.social-icons');



let container = document.querySelector('#background-container');
let heroBackground = document.querySelector('.hero');

app.content.get({
  schemaKey: 'home',
  populate: [{
    field: 'heroImagePng',
    size:{
      height: 400,
      quality: 1,
      width: 600
    }
  }]
})
.then(hP => {
  console.log('daisy', hP)
  let html = `
        <div class="bk-img">
        <img src="${hP.heroImagePng[0].url}">
        </div>
        <article class="hero-img">
            <h1 style="text-align:center" class="name"> <span   class="human">${hP.text}</span>${hP.text2}</h1>
            <p class="daisy" style="text-align:center">${hP.text3}</p>
        </article>
      `
    heroBackground.innerHTML = html
})
.catch(error => console.log(error))


app.content.get({
  schemaKey: 'projects',
  orderBy: 'order',
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
        <button class="project-button"><a class="behance-links" href="/project.html?id=${proj.id}" target="_blank">View Here</a> </button>
      </div>
      </div>
    `
  }
  container.innerHTML = html
})


navToggle.addEventListener("click", function (){
    links.classList.toggle("show-links");
    links.classList.toggle("show-socials");
});

