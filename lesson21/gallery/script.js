class Gallery{
    imgElement
    images=[]
    currentImage=-1

    constructor(elemId, ...images){
        this.images=images
        const galleryElem=document.getElementById(elemId)

        this.imgElement=document.createElement("img")
        this.imgElement.addEventListener("click",()=>this.nextImage())
        this.imgElement.addEventListener("contextmenu",ev=>{
            ev.preventDefault()
            this.prevImage()
        })

        galleryElem.appendChild(this.imgElement)

        this.nextImage()
    }

    nextImage(){
        this.currentImage++

        if(this.currentImage>=this.images.length){
            this.currentImage=0
        }

        this.imgElement.src=`images/${this.images[this.currentImage]}`
        
    }

    prevImage(){
        this.currentImage--

        if(this.currentImage<0){
            this.currentImage=this.images.length-1
        }
        this.imgElement.src=`images/${this.images[this.currentImage]}`

    }

}

const gallery1=new Gallery("gallery1","Picture 1.jpg","Picture 2.png","Picture 3.jpg","Picture 4.jpg","Picture 5.jpg","Picture 6.jpg")

const gallery2=new Gallery("gallery2","Picture 2.png","Picture 4.jpg","Picture 6.jpg")

const gallery3=new Gallery("gallery3","Picture 1.jpg","Picture 2.png","Picture 3.jpg","Picture 4.jpg")

function nextAll(){
    gallery1.nextImage()
    gallery2.nextImage()
    gallery3.nextImage()
}