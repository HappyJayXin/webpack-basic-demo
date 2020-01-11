import helper from './js/helper';
import newImg from './js/newImg';
import './scss/style.scss';

const res = helper();
console.log('main:' + res);

document.body.appendChild(newImg());
