 export const projectList = [{
    id:1,
    name:'Disney Quiz',
    image:'DisneyIMG.jpg',
    alt:'Disney Quiz Website ',
    width:'1920',
    height:'915',
    info:'Disney Quiz is a fun and interactive quiz website about disney movies, The main purporse of building this website was to get more famillar with typescript but also learn how to work in group with agile methodology.',
    link:'https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-swift-group/'
    
},
{
    id:2,
    name:'Dough Almighty',
    image:'DoughAlmightyIMG.jpg',
    alt:'Dough Almighty Website',
    width:'1901',
    height:'914',
    info:'This is ecommerce website called Dough Almighty, this was the first time I had to work with Javascript and build actual working website',
    link:'https://github.com/Medieinstitutet/fed24d-js-intro-inl-1-webshop-PotoVic'
    
},
{
    id:3,
    name:'Lumina',
    image:'LuminaIMG.jpg',
    alt:'Lumina Website',
    width:'1903',
    height:'916',
    info:'This is a business website of a fake company called Lumina, the main goal of this project was to build business website out of someone else design but also to use Vue as framework',
    link:'https://medieinstitutet.github.io/fed24d-grafiska-verktyg-surikaterna/'
    
},
{
    id:4,
    name:'SRs Humorprogram',
    image:'SRHumorprogramIMG.jpg',
    alt:'Humorprogram image',
    width:'1907',
    height:'913',
    info:'This is very simple Website of SR Humorprogram, The main goal of this project was to finish an unfinished project of someone else',
    link:'https://medieinstitutet.github.io/fed24d-arbetsmetodik-inl-1-PotoVic/'
    
}]


export function createProject(projectItems = projectList) {
    let projectListHTML = '';

    projectItems.forEach(project => {
        projectListHTML += `
        <div class="project-section-box-container">
            <h3>${project.name}</h3>
            <img src="/src/media/${project.image}" alt="${project.alt}" width="${project.width}" height="${project.height}" loading="lazy">
            <p>${project.info}</p>
            <a href="${project.link}">Demo</a>
        </div>
        `;
    });
    document.querySelector('.jsProjects').innerHTML = projectListHTML;
}

