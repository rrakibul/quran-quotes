# quran-quotes

This is an open-source sample project which uses a simple plugin to fetch verses of the Holy Quran. 

Its primary source of data is another open-source project https://github.com/fawazahmed0/quran-api. 
May Allah give him rewards on the earth and heaven both. 

### Plugin Usage
- CDN url for the plugin file: https://cdn.jsdelivr.net/gh/rrakibul/quran-quotes/js/quran.js

- Default options that can be override 

```
options = {
  chapterInfo: this.chapterInfo,
  includeArabicVerse: true,
  verseCount: 3,//fetch number of sequential verses at a time
  arabicEditionName: 'ara-quranindopak',
  language: 'bengali',
  persistLanguage: true
}
```
- Simple object creation
```
let quran = new Quran();
```
```
async function displayRandomVerses() {
  let verses = await quran.getRandomVerses();
}
```

### Demo
https://rrakibul.github.io/quran-quotes/
