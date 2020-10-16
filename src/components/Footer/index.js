import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { Facebook, Twitter, Github, Linkedin } from 'mailjet-react-components/icons';
import { Image, Div, Container } from 'mailjet-react-components';
import { map } from 'lodash';
import FooterIconLink from './components/FooterIconLink';
import LinkWithColor from './components/LinkWithColor';
import { BorderBottom, FooterDiv, CustomFooter,FooterCategoriesTitle, FooterLink,
    ListCategories } from './styles';

const FooterStructure = ({data: {logo, twitterLink, facebookLink, gitHubLink, linkedinLink,
      contactEmail, categories, allRights, gdprCompliance, acceptableUsePolicy, termsOfService, privatePolicy }}) => (
  <CustomFooter>
    <BorderBottom hasMarginBottom={true}>
      <Container>
        <FooterDiv>
          <Image src={logo.image.fluid.src} alt={logo.alt} height="32px" width="115px"/>
          <Div>
            <FooterIconLink href={twitterLink} icon={Twitter} />
            <FooterIconLink href={facebookLink} icon={Facebook} />
            <FooterIconLink href={gitHubLink} icon={Github} />
            <FooterIconLink href={linkedinLink} icon={Linkedin} />
          </Div>
          <p>{contactEmail}</p>
        </FooterDiv>
      </Container>
    </BorderBottom>
    <BorderBottom hasMarginBottom={false}>
      <Container>
        <ListCategories>
          {map(categories, ({id, name, footerLinks}) => 
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
        <p>{allRights.content[0].content[0].value}</p>
        <div>
          <LinkWithColor href={gdprCompliance.url}>
            {gdprCompliance.name}
          </LinkWithColor>
          <LinkWithColor href={acceptableUsePolicy.url}>
            {acceptableUsePolicy.name}
          </LinkWithColor>
          <LinkWithColor href={termsOfService.url}>
            {termsOfService.name}
          </LinkWithColor>
          <LinkWithColor href={privatePolicy.url}>
            {privatePolicy.name}
          </LinkWithColor>
        </div>
      </FooterDiv>
    </Container>
  </CustomFooter>
)

const Footer = (props) => 
    <StaticQuery
      query =  {graphql`
        query {
          contentfulFooterGlobal {
            footer {
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
      `}
      render={data => <FooterStructure data={data.contentfulFooterGlobal.footer} {...props} />}
    />

export default Footer;