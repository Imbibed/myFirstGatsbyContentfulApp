import styled from 'styled-components';
import { styleForMobile } from '../../../Utils';

const CustomFooter = styled.footer`
  background-color: ${({theme}) => theme.colors.sherpa._10};
  color: ${({theme}) => theme.colors.neutral._80};
  margin-top: ${({theme}) => theme.sizes.s5};
  padding-top: ${({theme}) => theme.sizes.s7};
  padding-bottom: ${({theme}) => theme.sizes.s7};
  padding-left: ${({theme}) => theme.sizes.s3};
  padding-right: ${({theme}) => theme.sizes.s3};

  ${styleForMobile} {
    padding-left: ${({theme}) => theme.sizes.s29};
    padding-right: ${({theme}) => theme.sizes.s29};
  }
}`;

export default CustomFooter;