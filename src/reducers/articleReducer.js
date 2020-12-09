const INITIAL_STATE = {
  articles: [
    { id: '0', title: 'React is an open-source, front end, JavaScript library for building user interfaces or UI components.', url: 'https://www.google.com/' },
    { id: '1', title: 'Redux is an open-source JavaScript library for managing application state.', url: 'https://www.google.com/' },
    { id: '2', title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://www.google.com/' },
    { id: '3', title: 'Apples are red, green and yellow. And very tasty.', url: 'https://www.google.com/' },
    { id: '4', title: 'Think about the beautiful world out there.', url: 'https://www.google.com/' },
    { id: '5', title: 'I don\'t know where, I don\'t know when, but I hope we will meet again.', url: 'https://www.google.com/' },
    { id: '6', title: 'In 1987, at age 31, Microsoft cofounder Bill Gates became the youngest billionaire ever at the time.', url: 'https://www.google.com/' },
    { id: '7', title: 'We can\'t live without love, cause its driving us crazy.', url: 'https://www.google.com/' },
    { id: '8', title: 'My mind is always in a rush. You make me blush.', url: 'https://www.google.com/' },
    { id: '9', title: 'React search component with redux.', url: 'https://www.google.com/' },
    { id: '10', title: 'If you don\t love yourself, how the hell you gonna love somebody else?', url: 'https://www.google.com/' },
    { id: '11', title: 'Aquarius is the eleventh astrological sign in the Zodiac.', url: 'https://www.google.com/' },
    { id: '12', title: 'Aquarius are truthfulness, just, curious, affectionate Personality, Frank and Imaginative.', url: 'https://www.google.com/' },
    { id: '13', title: 'Penguins eat a range of fish and other sealife that they catch underwater.', url: 'https://www.google.com/' },
    { id: '14', title: 'The Emperor Penguin is the tallest of all penguin species, reaching as tall as 120 cm (47 in) in height.', url: 'https://www.google.com/' },
    { id: '15', title: 'You\'re really sweet and nice, but you play with fire.', url: 'https://www.google.com/' },
    { id: '16', title: 'I\'m beautiful in my way, \'cause God makes no mistakes.', url: 'https://www.google.com/' },
    { id: '17', title: 'Queen Elizabeth II was born at 2.40am on 21 April 1926.', url: 'https://www.google.com/' },
    { id: '18', title: 'The Japanese name for Japan is “Nihon” or “Nippon” which means “sun origin”.', url: 'https://www.google.com/' },
    { id: '19', title: 'Dogs noses are wet to help absorb scent chemicals.', url: 'https://www.google.com/' },
    { id: '20', title: 'Mint gets its name from Menthe a Greek mythical character.', url: 'https://www.google.com/' },
  ],
};

function articleReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default: return state;
  }
}

export default articleReducer;
