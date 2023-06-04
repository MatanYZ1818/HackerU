class Gallery{
    images=[]
    currentImage=-1
    myInterval
    elem

    nextImage(){
        this.currentImage++

        if(this.currentImage>=this.images.length){
            this.currentImage=0
        }

        this.startAuto()
        
    }

    prevImage(){
        this.currentImage--

        if(this.currentImage<0){
            this.currentImage=this.images.length-1
        }

        this.startAuto()
    }

    startAuto(){
        this.stopAuto()
        this.myInterval=setInterval(this.nextImage,3*1000)
    }

    stopAuto(){
        clearInterval(this.myInterval)
    }

    constructor(elemId, ...images){
        this.images=images
        this.elem=document.getElementById(elemId)
    }
}

const gellery1=new Gallery("gallery1","Picture 1.jpg","Picture 2.png","Picture 3.jpg",
"Picture 4.jpg","Picture 5.jpg","Picture 6.jpg")

const gellery2=new Gallery("gallery2","Picture 2.png","Picture 4.jpg","Picture 6.jpg")

const gellery3=new Gallery("gallery1","Picture 1.jpg","Picture 2.png","Picture 3.jpg",
"Picture 4.jpg")