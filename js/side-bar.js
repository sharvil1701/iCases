
// For Side-nav. Check functionality below 767 px

var side=0;

var sidemenu=document.getElementById("side-nav-icon");

sidemenu.addEventListener("click",sidebar())

function sidebar(){
    if(side==1){
        document.getElementById('side-menu').style.display="none";
        document.getElementById('side-menu').style.width="0px";
        side=0;
    }
    
    else{
        document.getElementById('side-menu').style.width="100vw";
        document.getElementById('side-menu').style.height="100vh";
        document.getElementById('side-menu').style.display="block";
        document.getElementById('side-menu').style.transitionDelay="2s";
        side=1;
    }
    renderdata(0);

    
}


function renderdata(num){
        
    if(num==0){
        document.getElementById("menu-items").style.display="block";
        document.getElementById("acc-items").style.display="none";
        document.getElementById("account-category").style.background="#999999";
        document.getElementById("menu-category").style.background="white";
        document.getElementById("menu-category").style.borderBottom="1px solid Black";
    }
    else{
        document.getElementById("acc-items").style.display="block";
        document.getElementById("menu-items").style.display="none";
        document.getElementById("menu-category").style.background="#999999";
        document.getElementById("account-category").style.background="white";
        document.getElementById("account-category").style.borderBottom="1px solid Black";
        num=0;
    }

}


var toggle=1;
function togglecart(){
    if(toggle==1){

        document.getElementById("cart-dropdown").classList.add('show');
        toggle=0;
    }
    else{
        document.getElementById("cart-dropdown").classList.remove("show");
        toggle=1;
    }
}
