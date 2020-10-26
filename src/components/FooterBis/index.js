import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { useIntl } from "gatsby-plugin-intl";
import { Container, Div } from "mailjet-react-components";
import { map, find } from "lodash";

import { getLanguageTable } from '../../Utils';
import { CustomFooter, FooterLink, LightText, ImageMargin, DivRight, DivContent, DivWidth } from "./styles";
import theme from '../../theme';

const FooterStructure = ({ data }) => {
  const languageTable = getLanguageTable();
  const currentLang = languageTable[useIntl().language].contentfulName;
  
  const footer = find(data, (footers) => {
    return footers.node.node_locale == currentLang;
  }).node;
  const mailjet_logo = footer.linkLeft[0];
  const mailgun_logo = footer.linkLeft[1];
  
  return (
    <CustomFooter>
      <Container>
        <DivContent>
          <Div>
            <ImageMargin src={footer.logo.image.fluid.src} alt={footer.logo.alt} maxHeight="24px" maxWidth="116px"/>
            <a href={mailjet_logo.url} key={mailjet_logo.id}>
              <ImageMargin 
                src={mailjet_logo.image.image.fluid.src} 
                alt={mailjet_logo.image.alt} 
                maxHeight="24px" maxWidth="76px" ml={theme.sizes.s5}/>
            </a>
            <a href={mailgun_logo.url} key={mailgun_logo.id}>
            <ImageMargin 
                src={mailgun_logo.image.image.fluid.src} 
                alt={mailgun_logo.image.alt} 
                maxHeight="24px" maxWidth="86px" ml={theme.sizes.s5}/>
            </a>
          </Div>
          <DivRight>
            <DivWidth di="f" jc="sb" width="110%">
              {map(footer.linkRight, ({id, url, textContent}) => 
                <FooterLink key={id} disabled={false} href={url} mode="link" size="small" target="_self">
                  {textContent}
                </FooterLink>
              )}
            </DivWidth>
            <Div>
              <LightText>
              {footer.copyright.content[0].content[0].value}
              </LightText>
            </Div>
          </DivRight>
        </DivContent>
      </Container>
    </CustomFooter>
    
)}

const FooterBis = (props) => 
  <StaticQuery
    query =  {graphql`
      query {
        allContentfulFooterBis {
          edges {
            node {
              node_locale
              logo {
                alt
                image {
                  fluid(toFormat: WEBP) {
                    src
                  }
                }
              }
              linkLeft {
                id
                url
                image {
                  alt
                  image {
                    fluid(toFormat: WEBP) {
                      src
                    }
                  }
                }
              }
              linkRight {
                id
                url
                textContent
              }
              copyright {
                content {
                  content {
                    value
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => <FooterStructure data={data.allContentfulFooterBis.edges} {...props} />}
  />

export default FooterBis;