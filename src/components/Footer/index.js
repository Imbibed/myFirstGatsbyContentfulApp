import React from "react";
import { graphql, StaticQuery } from 'gatsby';
import { CustomContainer } from './styles/CustomContainer';
import { ListsContainer } from './styles/ListsContainer';
import { ListContainer } from './styles/ListContainer';
import { CustomFooter } from './styles/CustomFooter';
import { BorderMarginBottom } from './styles/BorderMarginBottom';
import { BorderBottom } from './styles/BorderBottom';
import { FooterCategoriesTitle } from './styles/FooterCategoriesTitle';
import { FooterLink } from './styles/FooterLink';
import { LinkWithColor } from './styles/LinkWithColor';
import { Link } from 'mailjet-react-components';
import { Facebook, Twitter, Github, Linkedin } from 'mailjet-react-components/icons';
import { map } from 'lodash';

const FooterStructure = ({ logo, dataFooter }) => (
  <CustomFooter>
    <BorderMarginBottom>
      <CustomContainer>
        <img src={logo.image.file.url} alt={logo.image.alt} height="32px" width="115px"/>
        <div>
          <Link disabled={false} href={dataFooter.twitterLink} icon={Twitter} iconSize="20px" 
            mode="icon" size="small" target="_blank"/>
          <Link disabled={false} href={dataFooter.facebookLink} icon={Facebook} iconSize="20px" 
            mode="icon" size="small" target="_blank"/>
          <Link disabled={false} href={dataFooter.gitHubLink} icon={Github} iconSize="20px" 
            mode="icon" size="small" target="_blank"/>
          <Link disabled={false} href={dataFooter.linkedinLink} icon={Linkedin} iconSize="20px" 
            mode="icon" size="small" target="_blank"/>
        </div>
        <p>{dataFooter.contactEmail}</p> 
      </CustomContainer>
    </BorderMarginBottom>
    <BorderBottom>
      <ListsContainer>
        {map(dataFooter.categories, ({name, footerLinks}) => 
          <ListContainer>
            <FooterCategoriesTitle disabled={false} href={footerLinks} mode="link" size="big" target="_blank">
              {name}
            </FooterCategoriesTitle>
            {map(footerLinks, ({name, link}) =>
              <FooterLink disabled={false} href={link} mode="link" size="small" target="_blank">
                {name}
              </FooterLink>
            )}
          </ListContainer>
        )}
      </ListsContainer>
    </BorderBottom>
    <CustomContainer>
      <p>{dataFooter.allRights.content[0].content[0].value}</p>
      <div>
        <LinkWithColor disabled={false} href={dataFooter.gdprCompliance} mode="link" size="small" target="_blank">
          GDPR Compliance
        </LinkWithColor>
        <LinkWithColor disabled={false} href={dataFooter.acceptableUsePolicy} mode="link" size="small" target="_blank">
          Acceptable Use Policy
        </LinkWithColor>
        <LinkWithColor disabled={false} href={dataFooter.termsOfService} mode="link" size="small" target="_blank">
          Terms of Service
        </LinkWithColor>
        <LinkWithColor disabled={false} href={dataFooter.privatePolicy} mode="link" size="small" target="_blank">
          Privacy Policy
        </LinkWithColor>
      </div>
    </CustomContainer>
  </CustomFooter>
)

function Footer(props) {
  return (
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
  )
}

export default Footer;