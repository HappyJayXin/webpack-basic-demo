import helper from './helper.js';
import './style.scss';
import newImg from './newImg';

var res = helper();
console.log('main:' + res);

document.body.appendChild(newImg());
