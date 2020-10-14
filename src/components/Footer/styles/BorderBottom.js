import styled from 'styled-components';
import PropTypes from 'prop-types';

const BorderBottom = styled.div`
  border-bottom: 1px solid ${({theme}) => theme.colors.darkGrey};

  ${({ hasMarginBottom, theme }) => hasMarginBottom && `
    margin-bottom: ${theme.sizes.s4};
  `}
`;

BorderBottom.propTypes = {
  hasMarginBottom: PropTypes.bool
}

BorderBottom.defaultProps = {
  hasMarginBottom: false
}

export default BorderBottom;