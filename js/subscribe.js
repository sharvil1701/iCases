let subemail=document.getElementById('email-sub');

let p=document.createElement("div")
subemail.parentNode.appendChild(p);
p.style.color="red";
p.style.display="block"
subemail.addEventListener("focusout", ()=>{

    
    if(subemail.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        
        p.innerHTML=" ";
    }
    else{
        p.innerHTML=" Enter the valid mail to Subscribe";
        subemail.classList.add("invalid-mail");
    }
})  