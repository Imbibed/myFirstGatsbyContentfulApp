import React from "react";
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import {MailjetNavigationContainer} from './styles/MailjetNavigationContainer'
import {NavContainer} from './styles/NavContainer'
import {LeftPart} from './styles/LeftPart'
import {RightPart} from './styles/RightPart'
import {Button} from 'mailjet-react-components'
import {Dropdown} from 'mailjet-react-components'

const MailjetNavigation = (props) => {
  console.log(props.goTo)
  return(
    <MailjetNavigationContainer>
      <NavContainer>
        <Link to={props.goTo}>
          <img alt="No picture" src={props.pictureUrl} height="40px"/>
        </Link>
        <LeftPart>
        <Button mode="secondary">
          Pricing
        </Button>
        <Dropdown>
          Solutions
        </Dropdown>
        </LeftPart>
        <RightPart>

        </RightPart>
      </NavContainer>
    </MailjetNavigationContainer>
  )
}

export default MailjetNavigation;

