
export const makeFirstLetterCapital = (text) => {
  const terms = text.toLowerCase().trim().split(' ');

  const capitalizeWord = (word) => {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      if (word.split('-').length === 2) {
          capitalizedWord = capitalizedWord.slice(0, 1) + capitalizedWord.charAt(1).toUpperCase() + capitalizedWord.slice(2);
      }
      return capitalizedWord;
  };
  const capitalizedTerms = terms.map(capitalizeWord);
  return capitalizedTerms.join(' ');
};

// אפשר גם ככה
//return text[0].toUpperCase()+text.slice(1).toLowerCase();

// וגם ככה
// להוסיף משנתה
// const term = text.toLowerCace().trim();
// return term[0].toUpperCase()+term.slice(1);
// trim = פונקציה שעובדת על סטרינגים ומה שהיא עושה מורידה את הרווחים הכפולים אם יש כאלה

//אםשר גם ככה: פונקציה שהופכת רק את האות הראשונה לגדולה 
// כלומר: first name = First name
// export const makeFirstLetterCapital = (text) => {
//      const term = text.toLowerCase().trim();
//      return term[0].toUpperCase() + term.slice(1);
//    };
