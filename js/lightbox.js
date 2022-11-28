const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenederLight = document.querySelector('.imagen-light')
const menu12 = document.querySelector('.menu2')

console.log(imagenes)
console.log(imagenesLight)
console.log(contenederLight)

imagenes.forEach(imagen=>{
    imagen.addEventListener('click' , ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenederLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
    contenederLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu12.style.opacity = '1' 
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenederLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu12.style.opacity = '0'
}