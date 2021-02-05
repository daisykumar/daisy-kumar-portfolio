let projectContainer = document.querySelector('#project');

const queryString = window.location.search; // "?id=asdfasdfasdf"
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

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
        <h1 class="main-heading" style="text-align: center;">
        ${project.title}        
        </h1>

        ${project.field_1612457640615}        

        `;

        projectContainer.innerHTML = html;
    })
    .catch(error => { console.error('Error', error); })
}
    else {
    projectsContainer.innerHTML = "Fant ikke prosjekt-ID :/";
}
