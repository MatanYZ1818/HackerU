const images=["Picture 1.jpg","Picture 2.png","Picture 3.jpg",
            "Picture 4.jpg","Picture 5.jpg","Picture 6.jpg",]

let currentImage=-1

function showImage(){
    currentImage++

    if(currentImage>=images.length){
        currentImage=0
    }

    const gallery=document.querySelector("#gallery")
    gallery.innerHTML=""

    const img=document.createElement("img")
    img.src=`images/${images[currentImage]}`
    gallery.appendChild(img)
}


showImage()

function prevImage(ev){
    ev.preventDefault()
    currentImage--

    if(currentImage<0){
        currentImage=images.length-1
    }

    const gallery=document.querySelector("#gallery")
    gallery.innerHTML=""

    const img=document.createElement("img")
    img.src=`images/${images[currentImage]}`
    gallery.appendChild(img)

}