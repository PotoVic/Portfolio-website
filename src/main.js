import "./style/style.scss"
import "./script/animation"
import {createProject, projectList} from "./script/projects"
const hamMenu = document.querySelector('.hambrg-icon');
const offScreenMenu = document.querySelector('.offScreenMenu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})
const turnOffBtn = document.querySelector('.offButton');
const menuScreen = document.querySelector('.offScreenMenu');
turnOffBtn.addEventListener('click', () => {
  turnOffBtn.classList.toggle('active');
  menuScreen.classList.remove('active');
})


createProject()