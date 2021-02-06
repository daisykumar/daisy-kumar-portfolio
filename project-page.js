let projectContainer = document.querySelector('#project');

const queryString = window.location.search; // "?id=asdfasdfasdf"
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
//Get the button
var mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

if(id) {
    app.content.get({
      schemaKey: 'projects', // navnet på schema-et ditt
        entryId: id,
        populate: [
            {
                field: 'dataPng',
                size: {
                    height: 9999,
                    quality: 1,
                    width: 1440
                }
            },
            {
                field: 'content',
                subFields: ['image'], 
                size: {
                    height: 9999,
                    quality: 1,
                    width: 1440
                }
            }
        ]
    })
    .then(project => {
        console.log('Project:', project)
        let html = `
        <header class="data-hero">
        <div class="data-hero-image">       
        <img src="${project.dataPng[0].url}" alt="Hero-Image">
        </div>
        </header> 

        ${ project.content.map(el => `
        <p class="middle-para">${el.text}</p>
        <img class="inner-image" src="${el.image[0].url}">
        `).join('') 
        }
        `;

        projectContainer.innerHTML = html;
    })
    .catch(error => { console.error('Error', error); })
}
    else {
    projectsContainer.innerHTML = "Fant ikke prosjekt-ID :/";
}
//        <h1 class="main-heading" style="text-align: center;">
   //         ${project.title}        
    //        </h1>