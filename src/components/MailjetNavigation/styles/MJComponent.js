import styled from 'styled-components'
import {Button} from 'mailjet-react-components'
import {Dropdown} from 'mailjet-react-components'
import {Menu} from 'mailjet-react-components'

export const ExtMJButton = styled(Button)`
  min-width:90px;
  &:before{
    border:none;
  }
  &:hover{
    border: none;
  }
`;

export const ExtMJMenuButton = styled(Menu.Button)`
  min-width:90px;
  border:none;
  &:before{
    border:none;
  }
`;