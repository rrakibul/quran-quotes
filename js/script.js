const btnNextQuotes = document.getElementById("next-quotes");
const loadingStatus = document.getElementById("loading-status");
const errorStatus = document.getElementById("error-status");
const slideshowWrapper = document.getElementById("slideshow-wrapper");
const language = document.getElementById("language");

let quran = new Quran();

displayRandomVerses();

language.value = quran.getCurrentLanguage();

language.addEventListener('change', (e) => {
    changeLanguage(e.target.value);
});

btnNextQuotes.addEventListener("click", () => {
    currentSlide(1);
    displayRandomVerses();
});

async function changeLanguage(language) {
    try {
        handleDisplay('loading');

        let verses = await quran.changeLanguage(language);

        handleDisplay('success');

        populateVerses(verses);
    } catch (error) {
        handleDisplay('error', 'Failed to fetch data'+error.message);
    }
}

async function displayRandomVerses() {
    try {
        handleDisplay('loading');

        let verses = await quran.getRandomVerses();

        handleDisplay('success');

        populateVerses(verses);
    } catch (error) {
        handleDisplay('error', 'Failed to fetch data'+error.message);
    }
}

function populateVerses(verses) {
        verses.forEach(function(verse, index) {
            console.log(verse.translateQuote.text)
            document.getElementById('chapter-no-' + (index + 1)).innerHTML = verse.translateQuote.chapter;
            document.getElementById('verse-no-' + (index + 1)).innerHTML = verse.translateQuote.verse;
            document.getElementById('translate-verse-' + (index + 1)).innerHTML = verse.translateQuote.text;

            if (verse.arabicQuote) {
                document.getElementById('arabic-verse-' + (index + 1)).innerHTML = verse.arabicQuote.text;
            }
        });
}

function handleDisplay(flag, message = '') {
    switch (flag) {
        case 'loading':
            loadingStatus.style.display = "block";
            errorStatus.style.display = "none";
            slideshowWrapper.style.display = "none";
            break;
        case 'success':
            loadingStatus.style.display = "none";
            errorStatus.style.display = "none";
            slideshowWrapper.style.display = "block";
            break;
        case 'error':
            loadingStatus.style.display = "none";
            errorStatus.style.display = "block";
            slideshowWrapper.style.display = "none";
            errorStatus.textContent = message;
            break;
    }
}

