var Gallery = /** @class */ (function () {
    function Gallery(galleryId, images) {
        var _this = this;
        this.galleryId = galleryId;
        this.images = images;
        this.currentIndex = -1;
        this.imageElem = document.createElement("img");
        var elem = document.getElementById(this.galleryId);
        elem === null || elem === void 0 ? void 0 : elem.addEventListener("click", function () { return _this.nextImage(); });
        elem === null || elem === void 0 ? void 0 : elem.appendChild(this.imageElem);
        this.nextImage();
    }
    Gallery.prototype.nextImage = function () {
        this.currentIndex++;
        if (this.currentIndex >= this.images.length) {
            this.currentIndex = 0;
        }
        this.imageElem.src = "../images/" + this.images[this.currentIndex];
    };
    return Gallery;
}());
