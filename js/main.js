document.addEventListener('DOMContentLoaded', () => {

    const formularioContacto = document.querySelector('#formularioContacto');

    if (formularioContacto) {
        formularioContacto.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const nombre = document.querySelector('#nombre').value.trim();
            const apellido = document.querySelector('#apellido').value.trim();
            const email = document.querySelector('#email').value.trim();
            const comentario = document.querySelector('#comentario').value.trim();

            if (nombre === '') {
                alert('Por favor ingresá tu nombre.');
                return;
            }

            if (apellido === '') {
                alert('Por favor ingresá tu apellido.');
                return;
            }

            const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailValido) {
                alert('Por favor ingresá un email válido.');
                return;
            }

            console.log("Datos capturados:", { nombre, apellido, email, comentario });
            alert(`¡Gracias ${nombre}! Nos pondremos en contacto pronto.`);
            formularioContacto.reset();
        });
    }


    const formBuscadorNavbar = document.querySelector('.buscador-navbar');

    if (formBuscadorNavbar) {
        formBuscadorNavbar.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const busqueda = formBuscadorNavbar.querySelector('input').value.trim();

            console.log("Búsqueda navbar:", busqueda);
            alert(`Buscando propiedades con: "${busqueda}"`);

            formBuscadorNavbar.reset();
        });
    }


    const formBuscadorInicio = document.querySelector('.buscador-inicio');
    const toastElement = document.getElementById('toastBuscador');

    if (formBuscadorInicio && toastElement) {
        const inputBuscador = formBuscadorInicio.querySelector('input');
        const toastBody = toastElement.querySelector('.toast-body');
        const toastInstancia = new bootstrap.Toast(toastElement);

        formBuscadorInicio.addEventListener('submit', (evento) => {
            evento.preventDefault();

            const terminoBusqueda = inputBuscador.value.trim();

            if (terminoBusqueda === '') {
                toastBody.textContent = 'Por favor, ingresá una zona o propiedad para buscar.';
            } else {
                toastBody.textContent = `Buscando propiedades coincidentes con: "${terminoBusqueda}"...`;
                inputBuscador.value = '';
            }

            toastInstancia.show();
        });
    }


    const navbar = document.querySelector('.barra-navegacion');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('shadow');
            }
        });
    }

});