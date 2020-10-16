import React from "react";
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import {MailjetNavigationContainer} from './styles/MailjetNavigationContainer'
import {LeftPart} from './styles/LeftPart'
import {RightPart} from './styles/RightPart'
import {ShadowDiv} from './styles/ShadowDiv'
import {Button, Menu, Body2, Div, Image, Container} from 'mailjet-react-components'
import {ExtMJButton, ExtMJMenuButton} from './styles/MJComponent'
import { map, find } from 'lodash'
import { changeLocale } from "gatsby-plugin-intl"
import {getLanguageTable, languages} from '../../Utils/TranslationService'
import {CONTENT_TYPE} from '../../Utils/ContentfulObjectsMappingTable'

const Option = ({ children, iconName: Icon, ...rest }) => (
  <Menu.Option {...rest}>
    {Icon && <Icon style={{ margin: '1px 8px 0px 0px' }} />}
    <Body2>{children}</Body2>
  </Menu.Option>
)

const MailjetNavigation = ({children}) => {

  var currentLang = children.props;
  const languageTable = getLanguageTable();
  //  Retrieve all multilangual data from contentful for the navbar
  const navbarData = useStaticQuery(leftSideQuery);

  //  Then filter dynamicaly with the current language selected by user
  const translatedNavbarData = find(navbarData.allContentfulNavBarGlobal.edges, (edge) => {
    return edge.node.node_locale === languageTable[currentLang.locale].contentfulName;
  })
  
  //  Then get wanted data in the navigation bar object
  const {logo} = translatedNavbarData.node.navbar;
  //  This have to be handle by contentful within create path field in the navbar logo object
  logo["path"]="/";

  const {leftContent: leftSideContent, rigthContent: rightSideContent} = translatedNavbarData.node.navbar;
  
  const {cta} = translatedNavbarData.node.navbar;

  const JSXLeftSideContent = map(leftSideContent, ({label, buttons, id, __typename, path}) => {
    if(__typename === CONTENT_TYPE.NAVBAR_DROPDOWN){
      return (<Menu key={id}>
                <ExtMJMenuButton key={'MenuButton'+id}>{label}</ExtMJMenuButton>
                <Menu.OptionsPanel key={'MenuOptionsPanel'+id} alignOptions="left">
                  {map(buttons, ({label, path, id}) => 
                    <Menu.Option key={'MenuOption'+id} onClick={() => navigate('/'+path+'/')}>
                      {label}
                    </Menu.Option>
                  )}
                </Menu.OptionsPanel>
              </Menu>)
    }else if(__typename === CONTENT_TYPE.NAVBAR_BUTTON){
      return (<ExtMJButton key={id} mode="secondary" onClick={() => {navigate('/'+path+'/')}}>
                {label}
              </ExtMJButton>)
    }
  })
  
  const JSXRightSideContent = map(rightSideContent, ({id, label, path}) => {
    return (
      <ExtMJButton key={id} mode="secondary" onClick={() => {navigate('/'+path+'/')}}>{label}</ExtMJButton>
    )
  })
  
  var setIconButtonIcon = () => {
    let i;
    for(i=0;i<Object.keys(languageTable).length;i++){
      if(currentLang.locale === Object.keys(languageTable)[i].toString()){
        return languageTable[Object.keys(languageTable)[i]].icon;
      }
    }
  }

  return(
    <>
      <ShadowDiv>
        <Container>
          <MailjetNavigationContainer>
            <Div di="f" jc="fs" ai="ce">
              <Link to="/">
                <Image alt="No picture" src={logo.image.file.url} height="h7" width="auto"/>
              </Link>
              <LeftPart>
                {JSXLeftSideContent}
              </LeftPart>
            </Div>
            <Div di="f" jc="fe" ai="ce">
              <RightPart>
                {JSXRightSideContent}
              </RightPart>
              <Button onClick={() => {navigate('/'+cta.path+'/')}}>{cta.label}</Button>
              <Menu>
                <Menu.IconButton icon={setIconButtonIcon()} showCaret={true} isLoading={false}/>
                <Menu.OptionsPanel alignOptions={'right'}>
                  {map(languages, (language) => {
                    return (
                      <Option 
                        key={language} 
                        iconName={languageTable[language].icon} 
                        readOnly
                        onClick={() => changeLocale(language)}>
                          {languageTable[language].name}
                      </Option>
                    )
                  })
                  }
                </Menu.OptionsPanel>
              </Menu>
            </Div>
          </MailjetNavigationContainer>
        </Container>
      </ShadowDiv>
      <section>
        {children}
      </section>
    </>
  )
}

export default MailjetNavigation;

const leftSideQuery = graphql`
  query MyMailjetNavigationQuery {
    allContentfulNavBarGlobal {
      edges {
        node {
          name
          node_locale
          navbar {
            id
            cta {
              label
              path
            }
            leftContent {
              ... on ContentfulNavBarButton {
                id
                label
                path
              }
              ... on ContentfulNavBarDropDown {
                id
                label
                buttons {
                  id
                  label
                  path
                }
              }
            }
            logo {
              image {
                file {
                  url
                }
              }
            }
            rigthContent {
              id
              label
              path
            }
          }
        }
      }
    }
  }
`