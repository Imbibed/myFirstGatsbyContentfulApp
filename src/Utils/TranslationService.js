const TranslationTools = {
  table: {
    FRENCH: {key: 'fr-FR', value: 'Français'},
    SPANISH: {key: 'es-ES', value: 'Español'},
    ENGLISH: {key:'en-US', value: 'English'},
    GERMAN : {key:'de-DE', value: 'Deutsch'}
  },
  getBrowserLanguage: () => {
    return navigator.language || navigator.userLanguage;
  }
}

export default TranslationTools;