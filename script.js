let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){

    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 200){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}




window.onscroll = function(){
    efectoHabilidades();
} 

document.querySelector('.contacto button').addEventListener('click', function() {
 
    const nombre = document.querySelector('.contacto input[placeholder="Tu nombre"]').value;
    const telefono = document.querySelector('.contacto input[placeholder="Telefono"]').value;
    const correo = document.querySelector('.contacto input[placeholder="Correo"]').value;
    const tema = document.querySelector('.contacto input[placeholder="Tema"]').value;
    const mensaje = document.querySelector('.contacto textarea').value;

  
    if(!nombre || !telefono || !correo || !tema || !mensaje) {
        alert('Por favor complete todos los campos');
        return;
    }

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(correo)) {
        alert('Por favor ingrese un correo electrónico válido, Ej: TuCorreo@gmail.com');
        return;
    }

    
    const mailtoLink = `mailto:danielroland27@gmail.com?subject=${encodeURIComponent(tema)}&body=${encodeURIComponent(
        `Nombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`
    )}`;

    const telefonoRegex = /^[0-9]{8}$/;
    if(!telefonoRegex.test(telefono)) {
        alert('Por favor ingrese un número de teléfono válido, Ej: 74548708');
        return;
    }
    
    window.location.href = mailtoLink;


    document.querySelector('.contacto input[placeholder="Tu nombre"]').value = '';
    document.querySelector('.contacto input[placeholder="Telefono"]').value = '';
    document.querySelector('.contacto input[placeholder="Correo"]').value = '';
    document.querySelector('.contacto input[placeholder="Tema"]').value = '';
    document.querySelector('.contacto textarea').value = '';
});

document.getElementById('github-btn').addEventListener('click', function() {
    window.location.href = 'https://github.com/dannyce27/AppOneCode.git';
});