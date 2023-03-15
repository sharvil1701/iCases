var username=document.getElementById("name");
var email=document.getElementById('email');
var subject=document.getElementById('subject');
var phone=document.getElementById('phone');
var message=document.getElementById("message");
var submit=document.getElementById("submit");

submit.addEventListener("click",()=>{
    if(username.value ==='' || email.value==0 || phone.value==0 || message.value==0){
        alert("Please check the form, Invalid inputs.");
        
        uval();
        emval();
        subval();
        phoneval();
        msgval();
    }
    console.log("submitted");
    

    event.preventDefault();
})



var error;
username.addEventListener("focusout",uval=()=>{
    
    error=document.getElementById('name-error');
    
    if(username.value.match(/^[A-Za-z]+$/)){
        error.innerHTML="";
    }
    else{
        error.innerHTML="Please Enter Valid name";
        error.style.color= "#EE001C";
        username.focus();
    }

    event.preventDefault();
});
email.addEventListener("focusout",emval=()=>{
    error=document.getElementById('mail-error');
    
    if(email.value.match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        error.innerHTML="";
    }
    else{
        error.innerHTML="Please Enter Valid mail";
        error.style.color= "#EE001C";
        email.focus();
    }
    event.preventDefault();
});
subject.addEventListener("focusout",subval=()=>{
    error=document.getElementById('subject-error');
   if(subject.value==''){
    error.innerHTML="Please select Valid subject";
    error.style.color= "#EE001C";
    subject.focus();
   }
   else{
    error.innerHTML="";
   }
   event.preventDefault();
});
phone.addEventListener("focusout",phoneval=()=>{
   
        
        error=document.getElementById('phone-error');
        
    if(phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)){
        error.innerHTML="";
    }
    else{
        error.innerHTML="Please Enter Valid phone";
        error.style.color= "#EE001C";
        phone.focus();
    }

    event.preventDefault();
});
message.addEventListener("focusout",msgval=()=>{
    error=document.getElementById('message-error');
    
    if(message.value.length>10){
        error.innerHTML="";
    }
    else{
        error.innerHTML="Please Enter Valid message";
        error.style.color= "#EE001C";
        message.focus();
    }

    event.preventDefault();
});
