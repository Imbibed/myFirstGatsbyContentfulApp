import styled, { css } from 'styled-components';

const BorderBottom = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};

  ${({ hasMarginBottom, theme }) => hasMarginBottom && `
    margin-bottom: ${theme.sizes.margins.m4};
  `}
`;

export default BorderBottom;