document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#formularioContacto');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const email = document.querySelector('#email').value;
        const comentario = document.querySelector('#comentario').value;

        console.log("Datos capturados:", { nombre, apellido, email, comentario });

        alert(`¡Gracias ${nombre}! Nos pondremos en contacto pronto.`);

        form.reset();
    });
});


const formBuscador = document.querySelector('.buscador-navbar');


if (formBuscador) {
    formBuscador.addEventListener('submit', (event) => {
        event.preventDefault();

        const busqueda = formBuscador.querySelector('input').value;

        console.log("Terminó de buscar:", busqueda);
        alert(`Buscando con: "${busqueda}"`);

        formBuscador.reset();
    });
}
//--------------

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // EVENTO 1: SUBMIT (Envío del Buscador)
    // ==========================================
    const formBuscador = document.querySelector('.buscador-inicio');
    const toastElement = document.getElementById('toastBuscador');
    
    if (formBuscador && toastElement) {
        const inputBuscador = formBuscador.querySelector('input');
        const toastBody = toastElement.querySelector('.toast-body');
        const toastInstancia = new bootstrap.Toast(toastElement);

        formBuscador.addEventListener('submit', function(evento) {
            evento.preventDefault(); // Evita que la página se recargue
            const terminoBusqueda = inputBuscador.value.trim();

            if (terminoBusqueda === "") {
                toastBody.textContent = "Por favor, ingresá una zona o propiedad para buscar.";
            } else {
                toastBody.textContent = `Buscando propiedades coincidentes con: "${terminoBusqueda}"...`;
                inputBuscador.value = ""; 
            }
            toastInstancia.show();
        });
    }


    // ==========================================
    // EVENTO 2: SCROLL (Efecto en la Navbar)
    // ==========================================
    const navbar = document.querySelector('.barra-navegacion');

    if (navbar) {
        window.addEventListener('scroll', () => {
            // Si el usuario baja más de 20 píxeles, le clavamos una sombra dinámica de Bootstrap
            if (window.scrollY > 20) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });
    }

});