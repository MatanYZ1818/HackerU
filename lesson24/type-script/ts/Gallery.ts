class Gallery{
    currentIndex:number=-1
    imageElem: HTMLImageElement = document.createElement("img");

    constructor(private galleryId:string,private images:string[]){
        const elem=document.getElementById(this.galleryId)

        elem?.addEventListener("click",()=>this.nextImage())

        elem?.appendChild(this.imageElem)
        
        this.nextImage()
    }

    nextImage(){
        this.currentIndex++;

        if(this.currentIndex>=this.images.length){
            this.currentIndex=0
        }

        this.imageElem.src = "../images/" + this.images[this.currentIndex];
    }
}