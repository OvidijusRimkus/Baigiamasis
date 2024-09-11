// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Kai vartotojas nuslenka 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}); 



// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Pirmas mygtukas ir paslėptas tekstas
    document.getElementById('apie').addEventListener('click', function() {
        toggleText('apie', 'pasleptas');
    });

    // Antras mygtukas ir paslėptas tekstas
    document.getElementById('apie1').addEventListener('click', function() {
        toggleText('apie1', 'pasleptas1');
    });

    // Trečias mygtukas ir paslėptas tekstas
    document.getElementById('apie2').addEventListener('click', function() {
        toggleText('apie2', 'pasleptas2');
    });

    // Ketvirtas mygtukas ir paslėptas tekstas
    document.getElementById('apie3').addEventListener('click', function() {
        toggleText('apie3', 'pasleptas3');
    });

    // Funkcija, kuri keičia teksto rodymo būseną ir mygtuko tekstą
    function toggleText(buttonId, textId) {
        const pasleptas = document.getElementById(textId);
        const mygtukas = document.getElementById(buttonId);
        
        // Patikriname esamą display reikšmę
        if (pasleptas.style.display === 'none' || pasleptas.style.display === '') {
            pasleptas.style.display = 'block'; // Jei paslėptas, rodom
            mygtukas.value = 'Mažiau';   // Pakeičiam mygtuko tekstą į "Mažiau"
        } else {
            pasleptas.style.display = 'none';  // Jei rodomas, slepiam
            mygtukas.value = 'Daugiau';  // Pakeičiam mygtuko tekstą į "Daugiau"
        }
    }
});