const images=["Picture 1.jpg","Picture 2.png","Picture 3.jpg",
            "Picture 4.jpg","Picture 5.jpg","Picture 6.jpg",]

let currentImage=0

function nextImage(){
    currentImage++
    
    if(currentImage>=images.length){
        currentImage=0
    }
    showImage(currentImage)
}

function showImage(imgIndex){

    const gallery=document.querySelector("#gallery")
    gallery.innerHTML=""

    const img=document.createElement("img")
    img.src=`images/${images[imgIndex]}`
    gallery.appendChild(img)
}

showImage(0)

function prevImage(ev){
    currentImage--

    if(currentImage<0){
        currentImage=images.length-1
    }

    showImage(currentImage)

}