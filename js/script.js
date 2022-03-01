// Consegna:
// Dati tre array contenenti:
// una lista ordinata di 5 immagini,
// una lista ordinata dei relativi 5 luoghi e
// una lista di 5 news,
// creare un carosello come nella foto allegata.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e
// le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente 
// servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
// Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
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


let carouselContent = '';

for (let i = 0 ; i < carouselImgs.length ; i++){
   carouselContent += `
   <div class="carousel-current-item position-relative">
		<img src="${carouselImgs[i]}" alt="carousel photo">
	</div>`
}

let carouselThumbnailsContent = '';

for (let i = 0 ; i < carouselImgs.length ; i++){
   carouselThumbnailsContent += 
	`<div class="carousel-thumbnails-item opacity-50">
			<img src="${carouselImgs[i]}" alt="carousel thumbnail photo">
	</div>`
}

console.log(carouselThumbnailsContent);


const carouselContainer = document.querySelector('div#carousel-wrapper');
carouselContainer.innerHTML += carouselContent + carouselThumbnailsContent;


const carouselElements = document.getElementsByClassName('carousel-current-item');
carouselElements[0].classList.add('active');

const carouselThumbnailsElements = document.getElementsByClassName('carousel-thumbnails-item');
carouselThumbnailsElements[0].classList.remove('opacity-50');
carouselThumbnailsElements[0].classList.add('border', 'border-2');



let carouselElementInfo = 
	`<div id="carusel-info" class="position-absolute bottom-0 end-0 text-white text-end p-5">
		<h2>${title[0]}</h2>
		<p>${text[0]}</p>
	</div>`
carouselElements[0].innerHTML += carouselElementInfo;


const nextBtn = document.getElementById('next-btn');

let activeItem = 0;

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
})

const previousBtn = document.getElementById('previous-btn');

previousBtn.addEventListener ( 'click', function() {
	carouselElements[activeItem].classList.remove('active');
	activeItem--;
	carouselElements[activeItem].classList.add('active');
	carouselElements.innerHTML += title[activeItem] + text[activeItem];
})


// BONUS:
// Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.



