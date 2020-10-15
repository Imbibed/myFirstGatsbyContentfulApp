import React from "react";
import { Link } from 'mailjet-react-components';

const FooterIconLink = props => 
  <Link disabled={false} {...props} iconSize="20px" mode="icon" size="small" target="_blank"/>

export default FooterIconLink;
