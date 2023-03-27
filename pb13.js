function f(event){
event.preventDefault();
const name=event.target.username.value;
const email=event.target.email.value;
const phonenumber=event.target.phonenumber.value;
const obj={
    name:name,
    email:email,
    phonenumber:phonenumber

}
localStorage.setItem(obj.email,JSON.stringify(obj));

var newp=document.createElement('p');
var but=document.createElement('button');


but.textContent='delete';
but.addEventListener("click",(event)=>{event.target.parentElement.remove();localStorage.removeItem(obj.email)});
newp.textContent=JSON.stringify(obj);
newp.appendChild(but);
let b=document.body;
b.appendChild(newp);



 


}

