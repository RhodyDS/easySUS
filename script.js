const inputs = document.querySelectorAll('.input');
const marcar = document.querySelector('#marcar');

marcar.addEventListener('click',() => {
    window.scroll({top: window.innerHeight, behavior: 'smooth'});
})

const handleFocus = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.add('span-active');
}

const handleFocusOut = ({target}) =>{
    const span = target.previousElementSibling;
    span.classList.remove('span-active');
}


inputs.forEach((input)   => input.addEventListener('focus', handleFocus));
inputs.forEach((input)   => input.addEventListener('focusout', handleFocusOut));