let newp=document.createElement('p');
let text=document.createTextNode('HEllo')
newp.appendChild(text);

var container=document.querySelector('header .container')
var h1=document.querySelector('header h1')
container.insertBefore(newp,h1);

let newp1=document.createElement('p');
let text1=document.createTextNode('HEllo')
newp1.appendChild(text1);

var container1=document.querySelector('.list-group')
var l1=document.querySelector('.list-group-item')
container1.insertBefore(newp,l1);
