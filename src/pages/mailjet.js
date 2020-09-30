import React, {useState, useEffect} from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import { map } from 'lodash'
import MailjetNavigation from '../components/MailjetNavigation'

const mailjet = (props) => {

  return(
    <>
      <MailjetNavigation />
    </>
  )
}

export default mailjet;