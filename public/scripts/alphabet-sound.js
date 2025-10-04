// public/scripts/alphabet-sound.js

function speakLetter(letter) {
    const text = letter === 'Ñ' ? 'eñe' : letter.toLowerCase();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
}

function handleLetterClick(e) {
    const card = e.currentTarget;
    const letter = card.dataset.letra;

    if (!letter) return;

    // Efecto visual
    card.classList.add('active');
    setTimeout(() => card.classList.remove('active'), 600);

    // Sonido
    if ('speechSynthesis' in window) {
        speakLetter(letter);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.letter-card');
    cards.forEach(card => {
        card.addEventListener('click', handleLetterClick);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLetterClick(e);
            }
        });
    });
});