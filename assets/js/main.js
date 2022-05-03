var element = document.querySelector('.category-item-link.active');
var subElement = document.querySelector('.category__sub')
element.onclick = function(event){
    event.preventDefault();
    subElement.classList.add('on__active');
    element.onclick = function(){
        subElement.classList.remove('on__active');
    }
}