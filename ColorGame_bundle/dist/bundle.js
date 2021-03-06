!function (e) { 
let t = {}; function o (r) {
 if (t[r]) return t[r].exports; let n = t[r] = { i: r, 
l: !1, 
exports: {} }; return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
 }o.m = e, o.c = t, o.d = function (e, t, r) { 
o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, 
get: r }) 
;}, o.r = function (e) { 
'undefined'!==typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 })
 ;}, o.t = function (e, t) {
 if (1 & t && (e = o(e)), 8 & t) return e; if (4 & t && 'object'===typeof e && e && e.__esModule) return e; let r = Object.create(null); if (o.r(r), Object.defineProperty(r, 'default', { enumerable: !0, 
value: e }), 2 & t && 'string' != typeof e) for(let n in e)o.d(r, n, ((t) => {return e[t]}).bind(null, n)); return r
; }, o.n = function (e) { 
let t = e && e.__esModule ? function () { 
return e.default
; }:function () { 
return e
; }; return o.d(t, 'a', t), t ;
}, o.o = function (e, t) {
 return Object.prototype.hasOwnProperty.call(e, t)
; }, o.p = '', o(o.s = 0)
 ;}([ function (e, t, o) {
 'use strict'; o.r(t); let r = new class {
constructor () { 
this.numCards = 3, this.gameOver = !1, this.colors = [], this.pickedColor, this.body = document.querySelector('body'), this.cards = document.querySelectorAll('.card'), this.colorDisplay = document.getElementById('color-picked'), this.messageDisplay = document.querySelector('#message'), this.timerDisplay = document.querySelector('#timer'), this.h1 = document.querySelector('h1'), this.resetButton = document.querySelector('#reset'), this.resetDisplay = document.querySelector('#reset span'), this.mode = 0, this.cardcontainer = document.querySelector('#card-container'), this.easymode = document.querySelector('.easy'), this.hardmode = document.querySelector('.hard'), this.nightmaremode = document.querySelector('.nightmare'), this.rows = document.getElementById('addrow'), this.time = 5, this.mytimer, this.ezbut = document.getElementById('ezbut'), this.hdbut = document.getElementById('hdbut'), this.nmbut = document.getElementById('nmbut'); 
}
}; function n () { 
0 === r.mode ? (r.ezbut.style.backgroundColor = 'rgb(86, 159, 255)', r.ezbut.style.color = 'white', r.hdbut.style.backgroundColor = 'white', r.hdbut.style.color = '#484848', r.nmbut.style.backgroundColor = 'white', r.nmbut.style.color = '#484848'):1 === r.mode ? (r.hdbut.style.backgroundColor = 'rgb(86, 159, 255)', r.hdbut.style.color = 'white', r.ezbut.style.backgroundColor = 'white', r.ezbut.style.color = '#484848', r.nmbut.style.backgroundColor = 'white', r.nmbut.style.color = '#484848'):(r.ezbut.style.backgroundColor = 'white', r.ezbut.style.color = '#484848', r.hdbut.style.backgroundColor = 'white', r.hdbut.style.color = '#484848', r.nmbut.style.backgroundColor = 'rgb(86, 159, 255)', r.nmbut.style.color = 'white') ;
} let l = { pickColor(){const e=Math.floor(Math.random()*r.colors.length);return r.colors[e]},
 generateRandomColors(e){const t=[];for(let o=0;o<e;o++)t.push(this.randomColor());return t}, 
randomColor(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"} }; function s () {
 r.gameOver = !1, r.colors = l.generateRandomColors(r.numCards), r.pickedColor = l.pickColor(), r.colorDisplay.textContent = r.pickedColor, r.resetDisplay.textContent = 'New Color', r.messageDisplay.textContent = "What's the Color?"; for (let e = 0; e < r.cards.length; e++)r.cards[e].style.opacity = 1, r.colors[e] ? (r.cards[e].style.display = 'block', r.cards[e].style.backgroundColor = r.colors[e]):r.cards[e].style.display = 'none'; r.body.style.backgroundColor = '#232323'; 
} function d () { 
clearInterval(r.mytimer) 
;} function i () { 
r.body.style.backgroundColor = '#232323', 0 === r.time && (r.body.style.backgroundColor = r.pickedColor) 
;} function c () { 
r.time > 0 && 2 === r.mode && (setTimeout(i, 80), r.body.style.backgroundColor = '#FFFFFF', r.time--), console.log(r.time), r.timerDisplay.innerHTML = '&nbsp;&nbsp;' + r.time, 0 === r.time && (d(), r.messageDisplay.textContent = 'Timeout!', r.resetDisplay.textContent = 'Play Again', r.timerDisplay.innerHTML = '&nbsp;&nbsp;', l.changeColors('#FFF'), r.body.style.backgroundColor = r.pickedColor, r.resetButton.style.display = 'block')
; } function a (e) { 
if (r.gameOver) return; const t = e.currentTarget.style.backgroundColor; r.time > 0 && (t === r.pickedColor ? (d(), r.messageDisplay.textContent = 'Correct!', r.resetDisplay.textContent = 'Play Again', function (e) {
 for (let t = 0; t < r.cards.length; t++)r.cards[t].style.opacity = 1, r.cards[t].style.backgroundColor = e;
 }('#FFF'), r.body.style.backgroundColor = t, r.gameOver = !0, r.resetButton.style.display = 'block'):(e.currentTarget.style.opacity = 0, r.messageDisplay.textContent = 'Try Again'))
; }window.onload = function () {
 n(), function () { 
for (let e = 0; e < r.cards.length; e++)r.cards[e].addEventListener('click', a);
 }(), s(), console.log(r.mode), r.easymode.addEventListener('click', () => {
 r.mode = 0, r.numCards = 3, r.rows.style.display = 'none', r.resetButton.style.display = 'block', n(), r.time = 5, d(), r.timerDisplay.innerHTML = '&nbsp;&nbsp;', s(), console.log(r.mode) 
;}), r.easymode.addEventListener('mouseover', () => {
 0 === r.mode ? r.ezbut.style.color = '#484848':r.ezbut.style.color = 'rgb(86, 159, 255)'
; }), r.easymode.addEventListener('mouseout', () => { 
0 === r.mode ? r.ezbut.style.color = 'white':r.ezbut.style.color = '#484848';
 }), r.hardmode.addEventListener('click', () => { 
r.mode = 1, r.numCards = 6, r.rows.style.display = 'inline', r.resetButton.style.display = 'block', r.time = 5, n(), d(), r.timerDisplay.innerHTML = '&nbsp;&nbsp;', s(), console.log(r.mode) 
;}), r.hardmode.addEventListener('mouseover', () => {
 1 === r.mode ? r.hdbut.style.color = '#484848':r.hdbut.style.color = 'rgb(86, 159, 255)' ;
}), r.hardmode.addEventListener('mouseout', () => { 
1 === r.mode ? r.hdbut.style.color = 'white':r.hdbut.style.color = '#484848'
; }), r.nightmaremode.addEventListener('click', () => {
 r.mode = 2, r.numCards = 6, d(), r.rows.style.display = 'inline', r.time = 5, n(), r.resetButton.style.display = 'none', r.timerDisplay.innerHTML = '&nbsp;&nbsp;' + r.time, 2 === r.mode && (r.mytimer = setInterval(c, 1e3)), s(), console.log(r.mode)
 ;}), r.nightmaremode.addEventListener('mouseover', () => {
 2 === r.mode ? r.nmbut.style.color = '#484848':r.nmbut.style.color = 'rgb(86, 159, 255)';
 }), r.nightmaremode.addEventListener('mouseout', () => {
 2 === r.mode ? r.nmbut.style.color = 'white':r.nmbut.style.color = '#484848' ;
})
 ;}, r.resetButton.addEventListener('click', () => { 
d(), s(), 2 === r.mode && (r.time = 5, r.timerDisplay.innerHTML = '&nbsp;&nbsp;' + r.time, r.mytimer = setInterval(c, 1e3), r.resetButton.style.display = 'none') 
;}) 
;} ]); es;