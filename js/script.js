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
// ? --> aggiungo le immagini selezionate e visualizzate in grande

let carouselContent = '';
for (let i = 0 ; i < carouselImgs.length ; i++){
   carouselContent += 
	`<figure class="carousel-current-item position-relative">
		<img src="${carouselImgs[i]}" alt="carousel photo">
	</figure>`
}

const carouselContainer = document.querySelector('div#carousel-wrapper');
carouselContainer.innerHTML += carouselContent;

const carouselElements = document.getElementsByClassName('carousel-current-item');
carouselElements[0].classList.add('active');

// ? --> aggiungo il testo visualizzato sull'immagine del carosello

let carouselElementInfo = 
	`<figcaption id="carusel-info" class="position-absolute bottom-0 end-0 text-white text-end p-5">
		<h2>${title[0]}</h2>
		<p>${text[0]}</p>
	</figcaption>`
carouselElements[0].innerHTML += carouselElementInfo;

// ? --> aggiungo le immagini thumbnails 

let carouselThumbnailsContent = '';
for (let i = 0 ; i < carouselImgs.length ; i++){
   carouselThumbnailsContent += 
	`<img class="carousel-thumbnails-item opacity-50" src="${carouselImgs[i]}" alt="carousel thumbnail photo">`
}

const carouselThumbnailsContainer = document.querySelector('div#carousel-thumbnails');
carouselThumbnailsContainer.innerHTML += carouselThumbnailsContent;

const carouselThumbnailsElements = document.getElementsByClassName('carousel-thumbnails-item');
carouselThumbnailsElements[0].classList.remove('opacity-50');
carouselThumbnailsElements[0].classList.add('border', 'border-2');



const nextBtn = document.getElementById('next-btn');

//? creo una variabile contatore
let activeItem = 0;

// ? creo lo scorrimento in avanti delle immagini al click del button next

nextBtn.addEventListener ( 'click', function() {
	carouselElements[activeItem].classList.remove('active');
	carouselThumbnailsElements[activeItem].classList.remove('border', 'border-2');
	carouselThumbnailsElements[activeItem].classList.add('opacity-50');
	activeItem++;
	carouselElements[activeItem].classList.add('active');
	carouselElementInfo = 
	`<div id="carusel-info" class="position-absolute bottom-0 end-0 text-white text-end p-5">
		<h2>${title[activeItem]}</h2>
		<p>${text[activeItem]}</p>
	</div>`
	carouselElements[activeItem].innerHTML += carouselElementInfo;
	carouselThumbnailsElements[activeItem].classList.remove('opacity-50');
	carouselThumbnailsElements[activeItem].classList.add('border', 'border-2');
	console.log(carouselThumbnailsElements[activeItem]);
})



const previousBtn = document.getElementById('previous-btn');

// ? creo lo scorrimento al contrario delle immagini al click del button previous

previousBtn.addEventListener ( 'click', function() {
	carouselElements[activeItem].classList.remove('active');
	carouselThumbnailsElements[activeItem].classList.remove('border', 'border-2');
	carouselThumbnailsElements[activeItem].classList.add('opacity-50');
	activeItem--;
	carouselElements[activeItem].classList.add('active');
	carouselElements.innerHTML += title[activeItem] + text[activeItem];
	carouselThumbnailsElements[activeItem].classList.remove('opacity-50');
	carouselThumbnailsElements[activeItem].classList.add('border', 'border-2');
})