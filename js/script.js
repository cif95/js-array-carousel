const carouselImgs = [ 
	'img/01.jpg',
	'img/02.jpg',
	'img/03.jpg',
	'img/04.jpg',
	'img/05.jpg',
];

const title = [
	'Svezia',
	'Svizzera',
	'Gran Bretagna',
	'Germania',
	'Paradise'
]

const text = [
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
	'Lorem ipsum',
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
	'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
	'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// * aggiungo dinamicamente il contenuto del carosello

let carouselContent = '';
let carouselThumbnailsContent = '';

for (let i = 0 ; i < carouselImgs.length ; i++){
   carouselContent += 
	`<figure class="carousel-current-item position-relative">
		<img src="${carouselImgs[i]}" alt="${title[i]}">
		<figcaption id="carusel-info" class="position-absolute bottom-0 end-0 text-white text-end p-5">
		<h2>${title[i]}</h2>
		<p>${text[i]}</p>
		</figcaption>
	</figure>`
	carouselThumbnailsContent += 
	`<img class="carousel-thumbnails-item my-filter float-left" src="${carouselImgs[i]}" alt="${title[i]}">`
}

const carouselContainer = document.querySelector('div#carousel-wrapper');
carouselContainer.innerHTML += carouselContent;

const carouselThumbnailsContainer = document.querySelector('div#carousel-thumbnails');
carouselThumbnailsContainer.innerHTML += carouselThumbnailsContent;



const nextBtn = document.getElementById('next-btn');

//? creo una variabile contatore
let activeItem = 0;

const carouselElements = document.getElementsByClassName('carousel-current-item');
carouselElements[activeItem].classList.add('active');

const carouselThumbnailsElements = document.getElementsByClassName('carousel-thumbnails-item');
carouselThumbnailsElements[activeItem].classList.remove('my-filter');
carouselThumbnailsElements[activeItem].classList.add('border', 'border-2');

// ? creo lo scorrimento in avanti delle immagini al click del button next

nextBtn.addEventListener ( 'click', function() {
	carouselElements[activeItem].classList.remove('active');
	carouselThumbnailsElements[activeItem].classList.add('my-filter');
	carouselThumbnailsElements[activeItem].classList.remove('border', 'border-2');
	if ( activeItem === carouselImgs.length - 1 ){
		activeItem = 0;
	} else {
		activeItem++;
	}
	carouselElements[activeItem].classList.add('active');
	carouselThumbnailsElements[activeItem].classList.remove('my-filter');
	carouselThumbnailsElements[activeItem].classList.add('border', 'border-2');
})



const previousBtn = document.getElementById('previous-btn');

// ? creo lo scorrimento al contrario delle immagini al click del button previous

previousBtn.addEventListener ( 'click', function() {
	carouselElements[activeItem].classList.remove('active');
	carouselThumbnailsElements[activeItem].classList.remove('border', 'border-2');
	if ( activeItem === 0 ){
		activeItem = carouselImgs.length - 1;
	} else {
		activeItem--;
	}
	carouselThumbnailsElements[activeItem].classList.add('my-filter');
	carouselElements[activeItem].classList.add('active');
	carouselThumbnailsElements[activeItem].classList.remove('my-filter');
	carouselThumbnailsElements[activeItem].classList.add('border', 'border-2');
})