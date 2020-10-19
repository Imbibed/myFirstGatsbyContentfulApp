import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import { map } from 'lodash'

const languageName = {
  en: "English",
  fr: "Français"
}

const LanguageSwitcher = (props) => (
  <IntlContextConsumer>
    {({languages, language: currentLocale}) => 
      map(languages, (language) => {
        return(
          <a key={language} onClick={() => changeLocale(language)}>
            {languageName[language]}
          </a>
        )
      })
      
    }
  </IntlContextConsumer>
)

export default LanguageSwitcher;