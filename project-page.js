let projectContainer = document.querySelector('.project_container');

const queryString = window.location.search; // "?id=asdfasdfasdf"
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

if(id) {
    app.content.get({
      schemaKey: 'projects', // navnet på schema-et ditt
        entryId: id,
        populate: [{
        field: 'dataPng',
        size: {
            height: 9999,
            quality: 1,
            width: 667
        }
    }]
    })
    .then(project => {
        console.log('Project:', project)
        let html = `
        <a href="/">Tilbake til prosjektene</a>

        <div class="${project.themeColour || 'project-blue'}">
            <div class="top-banner">
            <h1>${project.projectTitle}</h1>
            <img src="${project.mainImage[0].url}" class="main-project-image">
            </div>

            ${ project.linkToWebsite ? `<a href="${project.linkToWebsite}" target="_blank">Link til prosjekt-nettsiden</a>` : "" }
            <br>

            <p>${project.introText}</p>
        </div>
        `;

        projectContainer.innerHTML = html;
    })
    .catch(error => { console.error('Error', error); })
}
    else {
    projectsContainer.innerHTML = "Fant ikke prosjekt-ID :/";
}
then(projects => {
        console.log('All of your projects:', projects)
        let html = "";

        for(const property in projects) {
            let proj = projects[property];

            html += `
            <a class="project-listing" href="/project.html?id=${proj.id}">
                <h2>${proj.projectTitle}</h2>
                <img src="${ proj.mainImage[0].url }">
            </a>
            `
        }
        container.innerHTML = html
})
