import {styledFrenchFlag} from './FrenchFlag'
import {styledEnglishFlag} from './EnglishFlag'

export const languageTable = {
  en: {name: 'English', contentfulName: 'en-US', icon: styledEnglishFlag},
  fr: {name: 'Français', contentfulName: 'fr', icon: styledFrenchFlag}
}

export const languages = Object.keys(languageTable);