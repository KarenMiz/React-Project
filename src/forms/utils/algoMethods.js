
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

