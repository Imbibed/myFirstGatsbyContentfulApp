import {StyledFrenchFlag} from './FrenchFlag'
import {StyledEnglishFlag} from './EnglishFlag'

//  This file data have to be equivalent to gatsby-plugin-intl config 
//  in gatsby-config.js file
export const getLanguageTable = () => {
  return {
    en: {name: 'English', contentfulName: 'en-US', icon: StyledEnglishFlag},
    fr: {name: 'Français', contentfulName: 'fr', icon: StyledFrenchFlag}
  }
}

export const languages = Object.keys(getLanguageTable());