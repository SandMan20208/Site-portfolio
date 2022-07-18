class gallery{
         
    constructor(galleryContainer, scroll, imgArray, minImgArray){
        this.i = 0;
        this.galleryContainer = galleryContainer;
        this.scroll = scroll;
        this.imgArray = imgArray;
        this.minImgArray = minImgArray;
        this.imgInit();
        this.prevImg();
        this.nextImg();
        this.minImgClick();
        this.closeGallery();
        this.swipe();
    }
    prevImg(){
        const context = this;
        document.querySelector(`#${this.galleryContainer.getAttribute('id')} .prev`).
            addEventListener('click', function(){
                context.img[context.i].style.display = 'none';
                context.minImg[context.i].classList.toggle('activ-img');
                context.i--;
        
                if (context.i< 0){
                    context.i = context.img.length - 1;
                }
                context.img[context.i].style.display = 'block';
                context.minImg[context.i].classList.toggle('activ-img'); 
        })
        
    }
    nextImg(){
        const context = this;
        document.querySelector(`#${this.galleryContainer.getAttribute('id')} .next`).
            addEventListener('click', function(){
                context.img[context.i].style.display = 'none';
                context.minImg[context.i].classList.toggle('activ-img');
                context.i++;
                
                if (context.i>=context.img.length){
                    context.i = 0;
                }
                context.img[context.i].style.display = 'block';
                context.minImg[context.i].classList.toggle('activ-img');
            });
    }
    swipe(){
        const context = this;
        let xDown = null;
        let yDown = null;
        function getTouches(ev) {
            return ev.touches;
        }
        this.galleryContainer.addEventListener('touchstart', function(ev){
            const firstTouch = getTouches(ev)[0];
            xDown = firstTouch.clientX;
        }, false);
        this.galleryContainer.addEventListener('touchmove', function(ev){
            if ( ! xDown ) {
                return;
            }
        let xUp = ev.touches[0].clientX;
        let yUp = ev.touches[0].clientY;
 
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
        if(Math.abs(xDiff)>Math.abs(yDiff)){
            if (xDiff > 0){
                context.img[context.i].style.display = 'none';
                context.minImg[context.i].classList.toggle('activ-img');
                context.i++;
                
                if (context.i>=context.img.length){
                    context.i = 0;
                }
                context.img[context.i].style.display = 'block';
                context.minImg[context.i].classList.toggle('activ-img');
            }else{
                context.img[context.i].style.display = 'none';
                context.minImg[context.i].classList.toggle('activ-img');
                context.i--;
        
                if (context.i< 0){
                    context.i = context.img.length - 1;
                }
                context.img[context.i].style.display = 'block';
                context.minImg[context.i].classList.toggle('activ-img'); 
            }
            xDown = null;
            yDown = null; 
        }
    }, false);

    }
    minImgClick(){
        const context = this;
        context.altImg.addEventListener('click', function(ev){
                if (ev.target.tagName === 'IMG'){
                    for(let j=0; j<context.minImg.length; j++){
                
                        if(ev.target.getAttribute('src') == context.minImg[j].getAttribute('src')){
                            context.img[context.i].style.display = 'none';
                            context.minImg[context.i].classList.toggle('activ-img');
                            context.i = j;
                            context.img[context.i].style.display = 'block';
                            context.minImg[context.i].classList.toggle('activ-img');
                        }
                }
            }
        })
    }
    closeGallery(){
        const context = this;
        context.galleryContainer.addEventListener('click', function(ev){
            if ((ev.target.className == "gallery") || (ev.target.className == "slide")){
                context.galleryContainer.style.display = 'none';
                context.scroll.style.overflowY = 'auto';
                context.img[context.i].style.display = 'none';
                context.minImg[context.i].classList.toggle('activ-img');
                context.i = 0;
                context.img[context.i].style.display = 'block';
                context.minImg[context.i].classList.toggle('activ-img');

            }
        })

    }
    openGallery(clickEl){
        const context = this;
        clickEl.addEventListener('click', function(){
            context.galleryContainer.style.display = 'flex';
            let y = scroll.scrollTop;
            context.galleryContainer.style.top = y+'px';
            context.scroll.style.overflowY = 'hidden';
        });
    }
    imgInit(){
        
        this.galleryContainer.innerHTML = `
                <div>
                    <div class="slide">
                        <div class="prev">
                            <div class="arrow-left"></div>
                        </div>
                        <div class="img-container"></div>
                        <div class="next">
                            <div class="arrow-right"></div>
                        </div>
                    </div>
                    <div class="alt-img"></div>
                </div>
                `;
                this.galleryContainer.classList = 'gallery';
                const imgContainer = document.querySelector(`#${this.galleryContainer.getAttribute('id')} .img-container`);
                const minImgContainer = document.querySelector(`#${this.galleryContainer.getAttribute('id')} .alt-img`);
                
                imgContainer.insertAdjacentHTML('beforeend',`<img class="first-image" src="${this.imgArray[0]}">`);
                minImgContainer.insertAdjacentHTML('beforeend',`<img class="min-img activ-img" src="${this.imgArray[0]}">`);
                for(let i=1; i<this.imgArray.length; i++){
                    
                    imgContainer.insertAdjacentHTML('beforeend',`<img class="img" src="${this.imgArray[i]}">`);
                    minImgContainer.insertAdjacentHTML('beforeend',`<img class="min-img" src="${this.imgArray[i]}">`);
                    
                }
                this.img = document.querySelectorAll(`#${this.galleryContainer.getAttribute('id')} .img-container img`);
                this.minImg = document.querySelectorAll(`#${this.galleryContainer.getAttribute('id')} .alt-img img`);
                this.altImg = document.querySelector(`#${this.galleryContainer.getAttribute('id')} .alt-img`);
                

    }
}

const galleryContainer = document.querySelector('#gallery-container');
const galleryContainer2 = document.querySelector('#gallery-container2');
const galleryContainer3 = document.querySelector('#gallery-container3');
const scroll = document.querySelector('.wrapper');
const imgArray1 = [
    'gallery/image/project1/1.png',
    'gallery/image/project1/2.png',
    'gallery/image/project1/3.png',
    'gallery/image/project1/4.png',
    'gallery/image/project1/5.png',
    'gallery/image/project1/6.png'
    ];
const minImgArray1 = [
    'gallery/image/project1/1.png',
    'gallery/image/project1/2.png',
    'gallery/image/project1/3.png',
    'gallery/image/project1/4.png',
    'gallery/image/project1/5.png',
    'gallery/image/project1/6.png'
   ];
const imgArray2 = [
    'gallery/image/project2/1.png',
    'gallery/image/project2/2.png',
    'gallery/image/project2/3.png',
    'gallery/image/project2/4.png',
    'gallery/image/project2/5.png'
    ];
const minImgArray2 = [
    'gallery/image/project2/1.png',
    'gallery/image/project2/2.png',
    'gallery/image/project2/3.png',
    'gallery/image/project2/4.png',
    'gallery/image/project2/5.png'
   ];
const minImgArray3 = [
    'gallery/image/gallery/1.jpeg',
    'gallery/image/gallery/2.jpg',
    'gallery/image/gallery/3.jpg',
    'gallery/image/gallery/4.jpg'
];
const imgArray3 = [
    'gallery/image/gallery/1.jpeg',
    'gallery/image/gallery/2.jpg',
    'gallery/image/gallery/3.jpg',
    'gallery/image/gallery/4.jpg'
];
   let project = new gallery(galleryContainer, scroll, imgArray1, minImgArray1 );
   project.openGallery(document.querySelector('#card1'));
   let project2 = new gallery(galleryContainer2, scroll, imgArray2, minImgArray2 );
   project2.openGallery(document.querySelector('#card2'));
   let project3 = new gallery(galleryContainer3, scroll, imgArray3, minImgArray3 );
   project3.openGallery(document.querySelector('#card3'));