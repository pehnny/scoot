// Fonction externe pour gérer l'affichage du menu
function toggleNavDisplay() {
    const butt = document.querySelector('header button')
    const nav = document.querySelector('header nav ul');
    if (nav.style.display === 'block' && butt.style.display === 'block') {
        nav.style.display = 'none';
        butt.style.display = 'none';
    } else {
        nav.style.display = 'block';
        butt.style.display = 'block';
    }
}

// Ajout de l'écouteur d'événement
const firstSvg = document.querySelector('.head svg:first-child');
firstSvg.addEventListener('click', toggleNavDisplay);
