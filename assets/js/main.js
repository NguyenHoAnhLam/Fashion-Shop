var element = document.querySelector('.category-item-link.active');
var subElement = document.querySelector('.category__sub')
element.onclick = function(event){
    event.preventDefault();
    subElement.classList.toggle('open');
    // if(subElement.hasClass('open')){
    //     subElement.classList.remove('open');
    // }
}

const newsLetter = document.querySelector('.js-new-letter');
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showLetter(){
    modal.classList.add('open')
}
function removeLetter(){
    modal.classList.remove('open')
}

newsLetter.addEventListener('click',showLetter);
modal.addEventListener('click',removeLetter);
modalClose.addEventListener('click',removeLetter);
modalContainer.addEventListener('click',function(e){
    e.stopPropagation();
});

const menuMobile = document.querySelector('.mobile__header-menu');
const navMobile = document.querySelector('.wrapper__sidebar.nav__mobile');
const closeMobile = document.querySelector('.close__menu-mobile')

function showNavMobile(){
    navMobile.classList.add('open');
}
function removeNavMobile(){
    navMobile.classList.remove('open');
}
menuMobile.addEventListener('click',showNavMobile);
closeMobile.addEventListener('click',removeNavMobile);










