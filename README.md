# quran-quotes

This open-source sample project uses a simple plugin to fetch verses from the Holy Quran. 

Its primary source of data is another open-source project https://github.com/fawazahmed0/quran-api. 
May Allah give its creator enough rewards on both earth and heaven. 

### Plugin Usage
- CDN URL for the plugin file: https://cdn.jsdelivr.net/gh/rrakibul/quran-quotes/js/quran.js

- Default options that can be overridden

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
- Fetch random verses from The holy Quran
```
async function displayRandomVerses() {
  let verses = await quran.getRandomVerses();
}
```

### Demo
https://rrakibul.github.io/quran-quotes/
### Chrome web extension
https://chrome.google.com/webstore/detail/ebgmokmmdfglbinbbdhjnhfnbflomcjd
