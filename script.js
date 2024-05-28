const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('menu-active');
});

window.addEventListener('beforeunload', function(event) {
    // Cancela el evento de salida si se necesita realizar alguna operación
    event.preventDefault();
    // Mensaje que deseas mostrar al usuario
    event.returnValue = '¿Estás seguro que quieres salir de la página?';
});





  
