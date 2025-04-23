import "./style/style.scss"
import { projectList } from "./script/projects";


const urlParams = new URLSearchParams(window.location.search);
const projectId = parseInt(urlParams.get('id'), 10);

const project = projectList.find(p => p.id === projectId);
function createProjectInfo(){
    if (project) {
    const projectHTML = `
        <h1>${project.name}</h1>
        <img src="${project.image}" alt="${project.alt}" width="${project.width}" height="${project.height}">
        <p>${project.info}.</p>
        <a href="${project.link}">Link</a>
        
    `;
    document.querySelector('.jsProjectDetails').innerHTML = projectHTML;
} else {
    document.querySelector('.jsProjectDetails').innerHTML = '<p>Project not found.</p>';
}}

createProjectInfo()