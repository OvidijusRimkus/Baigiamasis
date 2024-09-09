const mygtukas = document.querySelector('.mygtukas');
const footer = document.querySelector('#footer');
let isAtBottom = false;

mygtukas.addEventListener('click', function() {
    if (!isAtBottom) {
        // Apskaičiuojame atstumą iki puslapio apačios
        const windowHeight = window.innerHeight;
        const footerHeight = footer.offsetHeight;
        const buttonHeight = mygtukas.offsetHeight;

        // Pradedame kritimo animaciją
        mygtukas.classList.add('fall');
        
        // Paskaičiuojame galutinę padėtį (puslapio apačia, virš „footer“)
        setTimeout(() => {
            mygtukas.style.top = `${windowHeight - footerHeight - buttonHeight}px`;
            isAtBottom = true;
        }, 2500); // Trukmė turi atitikti animacijos laiką
    } else {
        // Mygtukas grįžta į pradinę vietą
        mygtukas.style.top = '0';
        mygtukas.classList.remove('fall');
        isAtBottom = false;
    }
});