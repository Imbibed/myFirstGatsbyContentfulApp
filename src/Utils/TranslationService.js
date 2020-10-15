import {StyledFrenchFlag} from './FrenchFlag'
import {StyledEnglishFlag} from './EnglishFlag'

export const getLanguageTable = () => {
  return {en: {name: 'English', contentfulName: 'en-US', icon: StyledEnglishFlag}, fr: {name: 'Français', contentfulName: 'fr', icon: StyledFrenchFlag}}
}

export const languages = Object.keys(getLanguageTable);