class Quran {
    chapterInfo = [
        // { chapter: x, verseCount: x}
        {ch: 1, vc: 7},
        {ch: 2, vc: 286},
        {ch: 3, vc: 200},
        {ch: 4, vc: 176},
        {ch: 5, vc: 120},
        {ch: 6, vc: 165},
        {ch: 7, vc: 206},
        {ch: 8, vc: 75},
        {ch: 9, vc: 129},
        {ch: 10, vc: 109},
        {ch: 11, vc: 123},
        {ch: 12, vc: 111},
        {ch: 13, vc: 43},
        {ch: 14, vc: 52},
        {ch: 15, vc: 99},
        {ch: 16, vc: 128},
        {ch: 17, vc: 111},
        {ch: 18, vc: 110},
        {ch: 19, vc: 98},
        {ch: 20, vc: 135},
        {ch: 21, vc: 112},
        {ch: 22, vc: 78},
        {ch: 23, vc: 118},
        {ch: 24, vc: 64},
        {ch: 25, vc: 77},
        {ch: 26, vc: 227},
        {ch: 27, vc: 93},
        {ch: 28, vc: 88},
        {ch: 29, vc: 69},
        {ch: 30, vc: 60},
        {ch: 31, vc: 34},
        {ch: 32, vc: 30},
        {ch: 33, vc: 73},
        {ch: 34, vc: 54},
        {ch: 35, vc: 45},
        {ch: 36, vc: 83},
        {ch: 37, vc: 182},
        {ch: 38, vc: 88},
        {ch: 39, vc: 75},
        {ch: 40, vc: 85},
        {ch: 41, vc: 54},
        {ch: 42, vc: 53},
        {ch: 43, vc: 89},
        {ch: 44, vc: 59},
        {ch: 45, vc: 37},
        {ch: 46, vc: 35},
        {ch: 47, vc: 38},
        {ch: 48, vc: 29},
        {ch: 49, vc: 18},
        {ch: 50, vc: 45},
        {ch: 51, vc: 60},
        {ch: 52, vc: 49},
        {ch: 53, vc: 62},
        {ch: 54, vc: 55},
        {ch: 55, vc: 78},
        {ch: 56, vc: 96},
        {ch: 57, vc: 29},
        {ch: 58, vc: 22},
        {ch: 59, vc: 24},
        {ch: 60, vc: 13},
        {ch: 61, vc: 14},
        {ch: 62, vc: 11},
        {ch: 63, vc: 11},
        {ch: 64, vc: 18},
        {ch: 65, vc: 12},
        {ch: 66, vc: 12},
        {ch: 67, vc: 30},
        {ch: 68, vc: 52},
        {ch: 69, vc: 52},
        {ch: 70, vc: 44},
        {ch: 71, vc: 28},
        {ch: 72, vc: 28},
        {ch: 73, vc: 20},
        {ch: 74, vc: 56},
        {ch: 75, vc: 40},
        {ch: 76, vc: 31},
        {ch: 77, vc: 50},
        {ch: 78, vc: 40},
        {ch: 79, vc: 46},
        {ch: 80, vc: 42},
        {ch: 81, vc: 29},
        {ch: 82, vc: 19},
        {ch: 83, vc: 36},
        {ch: 84, vc: 25},
        {ch: 85, vc: 22},
        {ch: 86, vc: 17},
        {ch: 87, vc: 19},
        {ch: 88, vc: 26},
        {ch: 89, vc: 30},
        {ch: 90, vc: 20},
        {ch: 91, vc: 15},
        {ch: 92, vc: 21},
        {ch: 93, vc: 11},
        {ch: 94, vc: 8},
        {ch: 95, vc: 8},
        {ch: 96, vc: 19},
        {ch: 97, vc: 5},
        {ch: 98, vc: 8},
        {ch: 99, vc: 8},
        {ch: 100, vc: 11},
        {ch: 101, vc: 11},
        {ch: 102, vc: 8},
        {ch: 103, vc: 3},
        {ch: 104, vc: 9},
        {ch: 105, vc: 5},
        {ch: 106, vc: 4},
        {ch: 107, vc: 7},
        {ch: 108, vc: 3},
        {ch: 109, vc: 6},
        {ch: 110, vc: 3},
        {ch: 111, vc: 5},
        {ch: 112, vc: 4},
        {ch: 113, vc: 5},
        {ch: 114, vc: 6}
    ];

    editionNames = [
        { language: 'bengali', name: 'ben-muhiuddinkhan' },
        { language: 'chinese-simplified', name: 'zho-majian' },
        { language: 'chinese-traditional', name: 'zho-anonymousgroupo' },
        { language: 'english', name: 'eng-abdelhaleem' },
        { language: 'french', name: 'fra-islamicfoundati' },
        { language: 'german', name: 'deu-aburidamuhammad' },
        { language: 'hebrew', name: 'heb-darusalamhousei' },
        { language: 'hindi', name: 'hin-maulanaazizulha' },
        { language: 'italian', name: 'ita-hamzarobertopic' },
        { language: 'japanese', name: 'jpn-ryoichimita' },
        { language: 'malayalam', name: 'mal-abdulhameedmada' },
        { language: 'russian', name: 'rus-abuadel' },
        { language: 'turkish', name: 'tur-ademugur' },
        { language: 'urdu', name: 'urd-abulaalamaududi' },
    ];

    translateEditionName = 'ben-muhiuddinkhan';
    apiEndpoint = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions';
    currentChapterNumber = 1;
    currentVerseNumber = 1;

    options = {
        chapterInfo: this.chapterInfo,
        includeArabicVerse: true,
        verseCount: 3,//fetch number of sequential verses at a time
        arabicEditionName: 'ara-quranindopak',
        language: 'bengali',
        persistLanguage: true
    }

    constructor(config) {
        if (typeof config === "object") {
            this.options = {...this.options, ...config};
        }

        if (this.options.persistLanguage && localStorage) {
            if (localStorage.getItem('quran.option.language') === null) {
                this.setTranslateEditionName(this.options.language);
            }
        } else {
            this.setTranslateEditionName(this.options.language);
        }
    }

    getCurrentLanguage() {
        let language = this.options.language;

        if (this.options.persistLanguage && localStorage) {
            language = localStorage.getItem('quran.option.language');
        }

        return language;
    }

    async changeLanguage(language) {
        await this.setTranslateEditionName(language);

        return await this.getVerses(this.currentChapterNumber, this.currentVerseNumber);
    }

    getTranslateEditionName() {
        let language = this.options.language;

        if (this.options.persistLanguage && localStorage) {
            language = localStorage.getItem('quran.option.language');
        }

        return this.editionNames.find(item => item.language === language).name
    }

    setTranslateEditionName(language) {
        if (this.options.persistLanguage && localStorage) {
            localStorage.setItem('quran.option.language', language);
        }

        this.translateEditionName = this.editionNames.find(item => item.language === language).name;
    }

    async fetchVerse(chapterNumber, verseNumber) {
        let quotes = { translateQuote: null, arabicQuote: null };

        quotes.translateQuote = await this.fetchResource(`${this.apiEndpoint}/${this.getTranslateEditionName()}/${chapterNumber}/${verseNumber}.min.json`);

        if (this.options.includeArabicVerse) {
            quotes.arabicQuote = await this.fetchResource(`${this.apiEndpoint}/${this.options.arabicEditionName}/${chapterNumber}/${verseNumber}.min.json`);
        }

        return quotes;
    }

    async fetchResource(url) {
        try {
            const response = await fetch(url)
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async getRandomVerses() {
        let randomChapterVerse = this.getRandomVerseNumber();

        return await this.getVerses(randomChapterVerse.chapterNumber, randomChapterVerse.verseNumber);
    }

    getVerses(chapterNumber, verseNumber) {
        let promises = [];

        for (let i = 0; i < this.options.verseCount; i++) {
            if (i === 0) {
                this.currentChapterNumber = chapterNumber;
                this.currentVerseNumber = verseNumber;
            }

            promises.push(this.fetchVerse(chapterNumber, verseNumber + i));
        }

        return Promise.all(promises);
    }

    getRandomVerseNumber() {
        let minNumber = 1;
        let item = this.chapterInfo[Math.floor(Math.random() * this.chapterInfo.length)];
        let randomChapterNumber = item.ch;
        let maxNumber = item.vc - (this.options.verseCount - 1);
        let randomVerseNumber = 0;

        if (maxNumber >= 1) {
            randomVerseNumber = this.getRandomNumber(minNumber, maxNumber);

            return {
                chapterNumber: randomChapterNumber,
                verseNumber: randomVerseNumber
            }
        }

        return this.getRandomVerseNumber();
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}