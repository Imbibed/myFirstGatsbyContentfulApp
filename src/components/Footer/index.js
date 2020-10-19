import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { Facebook, Twitter, Github, Linkedin } from 'mailjet-react-components/icons';
import { Image, Div, Container } from 'mailjet-react-components';
import { map, find } from 'lodash';
import { useIntl } from "gatsby-plugin-intl"

import FooterIconLink from './components/FooterIconLink';
import LinkWithColor from './components/LinkWithColor';
import { getLanguageTable } from '../../Utils'
import { BorderBottom, FooterDiv, CustomFooter,FooterCategoriesTitle, FooterLink,
    ListCategories } from './styles';

const FooterStructure = ({ data }) => {
  const languageTable = getLanguageTable();
  const currentLang = languageTable[useIntl().language].contentfulName;

  const footer = find(data, (footers) => {
    return footers.node.footer.node_locale == currentLang;
  }).node.footer;

  return (
    <CustomFooter>
      <BorderBottom hasMarginBottom={true}>
        <Container>
          <FooterDiv>
            <Image src={footer.logo.image.fluid.src} alt={footer.logo.alt} height="32px" width="115px"/>
            <Div>
              <FooterIconLink href={footer.twitterLink} icon={Twitter} />
              <FooterIconLink href={footer.facebookLink} icon={Facebook} />
              <FooterIconLink href={footer.gitHubLink} icon={Github} />
              <FooterIconLink href={footer.linkedinLink} icon={Linkedin} />
            </Div>
            <p>{footer.contactEmail}</p>
          </FooterDiv>
        </Container>
      </BorderBottom>
      <BorderBottom hasMarginBottom={false}>
        <Container>
          <ListCategories>
            {map(footer.categories, ({id, name, footerLinks}) => 
              <Div di="f" fd="c" key={id}>
                <FooterCategoriesTitle disabled={false} size="big">
                  {name}
                </FooterCategoriesTitle>
                {map(footerLinks, ({id, name, link}) =>
                  <FooterLink key={id} disabled={false} href={link} mode="link" size="small" target="_self">
                    {name}
                  </FooterLink>
                )}
              </Div>
            )}
          </ListCategories>
        </Container>
      </BorderBottom>
      <Container>
        <FooterDiv>
          <p>{footer.allRights.content[0].content[0].value}</p>
          <div>
            <LinkWithColor href={footer.gdprCompliance.url}>
              {footer.gdprCompliance.name}
            </LinkWithColor>
            <LinkWithColor href={footer.acceptableUsePolicy.url}>
              {footer.acceptableUsePolicy.name}
            </LinkWithColor>
            <LinkWithColor href={footer.termsOfService.url}>
              {footer.termsOfService.name}
            </LinkWithColor>
            <LinkWithColor href={footer.privatePolicy.url}>
              {footer.privatePolicy.name}
            </LinkWithColor>
          </div>
        </FooterDiv>
      </Container>
    </CustomFooter>
)}

const Footer = (props) => 
  <StaticQuery
    query =  {graphql`
      query {
        allContentfulFooterGlobal {
          edges {
            node {
              footer {
                node_locale
                logo {
                  alt
                  image {
                    fluid(toFormat: WEBP) {
                      src
                    }
                  }
                }
                twitterLink
                facebookLink
                gitHubLink
                linkedinLink
                contactEmail
                categories {
                  id
                  name
                  footerLinks {
                    id
                    name
                    link
                  }
                }
                allRights {
                  content {
                    content {
                      value
                    }
                  }
                }
                gdprCompliance {
                  name
                  url
                }
                acceptableUsePolicy {
                  name
                  url
                }
                termsOfService {
                  name
                  url
                }
                privatePolicy {
                  name
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => <FooterStructure data={data.allContentfulFooterGlobal.edges} {...props} />}
  />

export default Footer;