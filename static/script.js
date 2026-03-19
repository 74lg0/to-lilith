document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('button-principal');
    const overlay = document.querySelector('.overlay');
    
    // Cancion
    const audio = new Audio('/to-lilith/music/DarkBeach.mp3'); 

    boton.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log("Error de reproducción (revisa la ruta del archivo):", error);
        });
        if (overlay) {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            setTimeout(() => {
                overlay.remove();
            }, 1500);
        }
    });
});