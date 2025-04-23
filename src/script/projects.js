 export const projectList = [{
    id:1,
    name:'Disney Quiz',
    image:'./src/media/DisneyIMG.jpg',
    alt:'Disney Quiz Website ',
    width:'1920',
    height:'915',
    info:'This is a basic quiz website, The main goal of building this website was to get more familliar how Typescript works, but also to learn how to use the scrum agile methodology in groups',
    link:'https://medieinstitutet.github.io/fed24d-js-intro-inl-2-quiz-swift-group/'
    
},
{
    id:2,
    name:'Dough Almighty',
    image:'./src/media/DoughAlmightyIMG.jpg',
    alt:'Dough Almighty Website',
    width:'1901',
    height:'914',
    info:'This is ecommerce website called Dough Almighty, this was the first time I had to work with Javascript and build actual working website',
    link:'https://github.com/Medieinstitutet/fed24d-js-intro-inl-1-webshop-PotoVic'
    
},
{
    id:3,
    name:'Lumina',
    image:'./src/media/LuminaIMG.jpg',
    alt:'Lumina Website',
    width:'1903',
    height:'916',
    info:'This is a business website of a fake company called Lumina, the main goal of this project was to build business website out of someone else design but also to use Vue as framework',
    link:'https://medieinstitutet.github.io/fed24d-grafiska-verktyg-surikaterna/'
    
},
{
    id:4,
    name:'SRs Humorprogram',
    image:'./src/media/SRHumorprogramIMG.jpg',
    alt:'Humorprogram image',
    width:'1907',
    height:'913',
    info:'This is very simple Website of SR Humorprogram, The main goal of this project was to finish an unfinished project of someone else',
    link:'https://medieinstitutet.github.io/fed24d-arbetsmetodik-inl-1-PotoVic/'
    
},
{
    id:5,
    name:'Empty',
    image:'',
    alt:'',
    width:'3840',
    height:'1734'
},
{
    id:6,
    name:'Empty',
    image:'',
    alt:'',
    width:'3840',
    height:'1734' 
}]


export function createProject(projectItems = projectList) {
    let projectListHTML = '';

    projectItems.forEach(project => {
        projectListHTML += `
        <div class="project-section-box-container">
            <a href="/project.html?id=${project.id}">
                <p>${project.name}</p>
                <div class="project-section-box-overlay"></div>
                <img src="${project.image}" alt="${project.alt}" width="${project.width}" height="${project.height}" loading="lazy">
            </a> 
        </div>
        `;
    });
    document.querySelector('.jsProjects').innerHTML = projectListHTML;
}

