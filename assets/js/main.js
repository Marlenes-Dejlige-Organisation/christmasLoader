        // JavaScript til at beregne og vise dagen til juleaften
        const countdownElement = document.getElementById('countdown');

        function updateCountdown() {
            const today = new Date();
            const christmasEve = new Date(today.getFullYear(), 11, 24);
            if (today > christmasEve) {
                christmasEve.setFullYear(today.getFullYear() + 1);
            }
            const daysLeft = Math.ceil((christmasEve - today) / (1000 * 60 * 60 * 24));
            countdownElement.textContent = `${daysLeft}`;
        }

        updateCountdown();
// Find loader-elementet og markeringen

const loader = document.getElementById('loader');
const marker = document.getElementById('marker');

// Beregn tid fra sidste jul til næste jul (i millisekunder)
const today = new Date();
const lastChristmas = new Date(today.getFullYear() - 1, 11, 24);
const nextChristmas = new Date(today.getFullYear(), 11, 24);
const timeFromLastToNextChristmas = nextChristmas - lastChristmas;

// Beregn tiden fra sidste jul til i dag (i millisekunder)
const timeFromLastChristmasToToday = today - lastChristmas;

// Beregn, hvor tæt vi er på næste jul som en procentdel
const percentageToNextChristmas = (timeFromLastChristmasToToday / timeFromLastToNextChristmas) * 100;

// Opdater loaderens bredde og markeringens position baseret på procentdelen
loader.style.width = percentageToNextChristmas + '%';
marker.style.left = percentageToNextChristmas + '%';