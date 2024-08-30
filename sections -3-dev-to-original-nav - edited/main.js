// naigation js


let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    //navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};
const toggleActive=()=>{
    if( navigationItems.classList.contains("active")){
        navigationItems.style.maxHeight = null;
        
        hamburgerEvent("none", "none", "block");
    }
    else{
        navigationItems.style.maxHeight =  navigationItems.scrollHeight + "px";

        hamburgerEvent("flex", "block", "none");
    }
    navigationItems.classList.toggle("active");

}
//openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
//closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

openHam.addEventListener('click',toggleActive );
closeHam.addEventListener('click',toggleActive );
