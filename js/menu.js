const menu2 = document.querySelector('.menu2')
const menu = document.querySelector('.menu-navegacion')

console.log(menu2)
console.log(menu)

menu2.addEventListener('click', ()=>{
  menu.classList.toggle("spread")
})