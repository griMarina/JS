'use strict'

const $showBtn = document.querySelector('#showPopupBtn');
const $popup = document.querySelector('#popup');
const $closePopupBtn = document.querySelector('#closePopupBtn');
const $container = document.querySelector('.container');


const images = [
    ['img/item-1.jpg', 'img/item-2.jpg', 'img/item-3.jpg'],
    ['img/item-4.jpg', 'img/item-5.jpg', 'img/item-6.jpg'],
    ['img/item-1.jpg', 'img/item-3.jpg', 'img/item-5.jpg'],
    ['img/item-2.jpg', 'img/item-4.jpg', 'img/item-6.jpg'],
];

function showPopup() {
    $popup.style.display = 'block';
}

function closePopup() {
    $popup.style.display = 'none';
}

$closePopupBtn.addEventListener('click', closePopup);

for (let imgRow of images) {
    drawImgMini(imgRow);
}

function drawImgMini(imgRow, id = 0) {
    let html = '';
    for (let img of imgRow) {
        html += `<img data-id="${id}" src="${img}" alt="img">`;
        id++;
    };

    $container.insertAdjacentHTML('beforeend', `<div id="img-row" class="img-mini">${html}</div>`);

    const $img = $container.lastChild;
    $img.addEventListener('click', function (event) {
        let currentImg = event.target.getAttribute('data-id');
        createImgSlider(imgRow, currentImg);
        showPopup();
    })
}

function createImgSlider(imgRow, currentImg = 0) {
    $popup.lastChild.remove();

    const htmlImg = imgRow.map(function (img) {
        return `<img class="slider-img" src="${img}" alt="img">`
    }).join(' ');

    const htmlSl = `<div id="slider">
    <button id="prev-slide"><i class="fas fa-chevron-left"></i></button>
    <div id="current-slide">${htmlImg}</div>
    <button id="next-slide"><i class="fas fa-chevron-right"></i></button>
    </div>`;

    $popup.insertAdjacentHTML('beforeend', htmlSl);
    const $slider = $popup.querySelector('#slider');

    createSlider($slider, currentImg);
}

function createSlider($slider, currentImg) {

    const imagesSlider = $slider.querySelectorAll('img');

    imagesSlider[currentImg].style.display = 'block';

    const $prevSlide = $slider.querySelector('#prev-slide');
    $prevSlide.addEventListener('click', function () {
        imagesSlider[currentImg].style.display = 'none';
        currentImg = (currentImg > 0) ? (+currentImg - 1) : 0;
        imagesSlider[currentImg].style.display = 'block';
    })

    const $nextSlide = $slider.querySelector('#next-slide');
    $nextSlide.addEventListener('click', function () {
        imagesSlider[currentImg].style.display = 'none';
        currentImg = (currentImg < imagesSlider.length - 1) ? (+currentImg + 1) : (imagesSlider.length - 1);
        imagesSlider[currentImg].style.display = 'block';
    })
}