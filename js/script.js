import tabs from './modules/tabs';
import modal  from './modules/modal';
import timer from './modules/timer';
import slider from './modules/slider';
import forms from './modules/forms';
import cards from './modules/cards'
import calc from './modules/calc';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded',  () => {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);



    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2024-06-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        field:  '.offer__slider-inner',
        slide: '.offer__slide',


    });
    forms('form', modalTimerId);
    cards();
    calc();


}); 
