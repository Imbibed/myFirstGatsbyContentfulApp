import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { Facebook, Twitter, Github, Linkedin } from 'mailjet-react-components/icons';
import { Image, Div } from 'mailjet-react-components';
import { map } from 'lodash';
import FooterIconLink from './components/FooterIconLink';
import LinkWithColor from './components/LinkWithColor';
import { BorderBottom, CustomContainer, CustomFooter,FooterCategoriesTitle, FooterLink,
    ListsContainer } from './styles';

const FooterStructure = ({ logo: {image}, dataFooter: {twitterLink, facebookLink, gitHubLink, linkedinLink,
      contactEmail, categories, allRights, gdprCompliance, acceptableUsePolicy, termsOfService, privatePolicy}}) => (
  <CustomFooter>
    <BorderBottom hasMarginBottom={true}>
      <CustomContainer>
        <Image src={image.file.url} alt={image.alt} height="32px" width="115px"/>
        <div>
          <FooterIconLink href={twitterLink} icon={Twitter} />
          <FooterIconLink href={facebookLink} icon={Facebook} />
          <FooterIconLink href={gitHubLink} icon={Github} />
          <FooterIconLink href={linkedinLink} icon={Linkedin} />
        </div>
        <p>{contactEmail}</p> 
      </CustomContainer>
    </BorderBottom>
    <BorderBottom hasMarginBottom={false}>
      <ListsContainer>
        {map(categories, ({name, footerLinks}) => 
          <Div di="f" fd="c">
            <FooterCategoriesTitle disabled={false} href={footerLinks} mode="link" size="big" target="_self">
              {name}
            </FooterCategoriesTitle>
            {map(footerLinks, ({name, link}) =>
              <FooterLink disabled={false} href={link} mode="link" size="small" target="_self">
                {name}
              </FooterLink>
            )}
          </Div>
        )}
      </ListsContainer>
    </BorderBottom>
    <CustomContainer>
      <p>{allRights.content[0].content[0].value}</p>
      <div>
        <LinkWithColor href={gdprCompliance}>
          GDPR Compliance
        </LinkWithColor>
        <LinkWithColor href={acceptableUsePolicy}>
          Acceptable Use Policy
        </LinkWithColor>
        <LinkWithColor href={termsOfService}>
          Terms of Service
        </LinkWithColor>
        <LinkWithColor href={privatePolicy}>
          Privacy Policy
        </LinkWithColor>
      </div>
    </CustomContainer>
  </CustomFooter>
)

const Footer = (props) => 
    <StaticQuery
      query =  {graphql`
        query {
          contentfulImage(name: {eq: "mailgun-logo"}) {
            image {
              file {
                url
              }
            }
            alt
          }
          contentfulFooter {
            twitterLink
            facebookLink
            gitHubLink
            linkedinLink
            contactEmail
            categories {
              name
              footerLinks {
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
            gdprCompliance
            acceptableUsePolicy
            termsOfService
            privatePolicy
          }
        }
      `}
      render={data => <FooterStructure logo={data.contentfulImage} dataFooter={data.contentfulFooter} {...props} />}
    />

export default Footer;