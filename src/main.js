import "./style/style.scss"
import "./script/animation"
import {createProject, projectList} from "./script/projects"

//turn on btn for menu
const hamMenu = document.querySelector('.hambrg-icon');
const offScreenMenu = document.querySelector('.offScreenMenu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

//turn off btn for menu
const turnOffBtn = document.querySelector('.offButton');
const menuScreen = document.querySelector('.offScreenMenu');
turnOffBtn.addEventListener('click', () => {
  turnOffBtn.classList.toggle('active');
  menuScreen.classList.remove('active');
})

// hides menu whenever u press any menu link
const menuLinks = document.querySelectorAll('.offScreenMenu a');
menuLinks.forEach(link =>{
  link.addEventListener('click', ()=>{
    offScreenMenu.classList.remove('active');
    hamMenu.classList.remove('active'); // resets state of burger menu,
  })
})

createProject()