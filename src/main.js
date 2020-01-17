import helper from './js/helper';
import newImg from './js/newImg';

import getNumber from './ts/getNumber';

import './js/swiper';
import './scss/style.scss';
import './css/flexboxgrid.css';

import './js/app';

const res = helper();
console.log('main:' + res);

getNumber(20200114);

document.body.appendChild(newImg());
