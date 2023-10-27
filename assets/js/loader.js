// Find loader-elementet og markeringen
const loader = document.getElementById('loader');
const marker = document.getElementById('marker');
const percentText = document.getElementById('percentText');

// Beregn tid fra sidste jul til næste jul (i millisekunder)
const today = new Date();
const lastChristmas = new Date(today.getFullYear() - 1, 11, 24);
const nextChristmas = new Date(today.getFullYear(), 11, 24);
const timeFromLastToNextChristmas = nextChristmas - lastChristmas;

// Beregn tiden fra sidste jul til i dag (i millisekunder)
const timeFromLastChristmasToToday = today - lastChristmas;

// Beregn, hvor tæt vi er på næste jul som en procentdel
const percentageToNextChristmas = (timeFromLastChristmasToToday / timeFromLastToNextChristmas) * 100;

// Opdater loaderens bredde, markeringens position og procentteksten
loader.style.width = percentageToNextChristmas + '%';
marker.style.left = percentageToNextChristmas + '%';
percentText.textContent = `${Math.round(percentageToNextChristmas)}%`;
