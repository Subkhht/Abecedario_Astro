// public/scripts/alphabet-sound.js

/**
 * Speech synthesis with fallback and error handling
 */
class AlphabetSpeaker {
    constructor() {
        this.isSupported = 'speechSynthesis' in window;
        this.isSpeaking = false;
        
        if (!this.isSupported) {
            console.warn('Speech Synthesis API not supported in this browser');
        }
    }

    /**
     * Speak a letter with proper Spanish pronunciation
     * @param {string} letter - The letter to speak
     */
    speak(letter) {
        if (!this.isSupported) {
            this.showVisualFeedback(letter);
            return;
        }

        // Cancel any ongoing speech
        speechSynthesis.cancel();
        
        const text = this.getSpanishPronunciation(letter);
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Configure speech settings
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        utterance.pitch = 1.1;
        utterance.volume = 1.0;
        
        // Event handlers
        utterance.onstart = () => {
            this.isSpeaking = true;
        };
        
        utterance.onend = () => {
            this.isSpeaking = false;
        };
        
        utterance.onerror = (event) => {
            console.error('Speech synthesis error:', event.error);
            this.isSpeaking = false;
            this.showVisualFeedback(letter);
        };
        
        try {
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.error('Error speaking letter:', error);
            this.showVisualFeedback(letter);
        }
    }

    /**
     * Get proper Spanish pronunciation for special letters
     * @param {string} letter - The letter to pronounce
     * @returns {string} - The pronunciation text
     */
    getSpanishPronunciation(letter) {
        const pronunciations = {
            'Ñ': 'eñe',
            'W': 'uve doble',
            'Y': 'i griega',
        };
        
        return pronunciations[letter] || letter.toLowerCase();
    }

    /**
     * Show visual feedback when audio is not available
     * @param {string} letter - The letter to display
     */
    showVisualFeedback(letter) {
        // Create temporary notification
        const notification = document.createElement('div');
        notification.textContent = `Letra: ${letter}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: 12px;
            font-family: 'Orbitron', monospace;
            font-weight: bold;
            z-index: 10000;
            animation: fadeInOut 2s ease-in-out;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }
}

// Initialize speaker
const speaker = new AlphabetSpeaker();

/**
 * Handle letter card click/interaction
 * @param {Event} e - The click event
 */
function handleLetterClick(e) {
    const card = e.currentTarget;
    const letter = card.dataset.letra;

    if (!letter) return;

    // Visual feedback
    card.classList.add('active');
    setTimeout(() => card.classList.remove('active'), 600);

    // Haptic feedback for mobile devices
    if ('vibrate' in navigator) {
        navigator.vibrate(50);
    }

    // Speak the letter
    speaker.speak(letter);
}

/**
 * Handle keyboard events for letter cards
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleLetterKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleLetterClick(e);
    }
}

/**
 * Initialize event listeners
 */
function initializeEventListeners() {
    // Get all letter cards (both carousel and grid views)
    const letterCards = document.querySelectorAll('[data-letra]');
    
    letterCards.forEach(card => {
        // Remove any existing listeners to avoid duplicates
        card.removeEventListener('click', handleLetterClick);
        card.removeEventListener('keydown', handleLetterKeydown);
        
        // Add event listeners
        card.addEventListener('click', handleLetterClick);
        card.addEventListener('keydown', handleLetterKeydown);
    });
    
    console.log(`Initialized ${letterCards.length} letter cards`);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEventListeners);
} else {
    initializeEventListeners();
}

// Reinitialize after page transitions (for Astro View Transitions)
document.addEventListener('astro:page-load', initializeEventListeners);

// Add CSS animation for feedback
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        20% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);
