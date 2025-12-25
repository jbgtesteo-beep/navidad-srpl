const envelopeWrapper = document.getElementById('envelopeWrapper');
const instruction = document.getElementById('instruction');
const letter = document.getElementById('letter');
const closeBtn = document.getElementById('closeBtn');
const music = document.getElementById('backgroundMusic');
let isOpen = false;

envelopeWrapper.addEventListener('click', function() {
    if (!isOpen) {
        envelopeWrapper.classList.add('hidden');
        instruction.classList.add('hidden');
        letter.classList.add('show');
        isOpen = true;
        
        // Reproducir música al abrir el sobre
        if (music) {
            music.volume = 0.1; // Ajusta el volumen aquí
            music.play().catch(error => {
                console.log('Error al reproducir:', error);
            });
        }
    }
});

closeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    letter.classList.remove('show');
    
    // Pausar música al cerrar
    if (music) {
        music.pause();
        music.currentTime = 0;
    }
    
    setTimeout(() => {
        envelopeWrapper.classList.remove('hidden');
        instruction.classList.remove('hidden');
        isOpen = false;
    }, 800);
});

// Crear copos de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    snowflake.style.left = Math.random() * 100 + '%';
    snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 300);

// Crear estrellas
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}