import styled from 'styled-components';
import Proptypes from "prop-types";

const DataCell = styled.td`
  background-color: ${({ grey }) => grey ? "#eee" : "white"};
  font-style: ${({ fontStyle }) => fontStyle || "normal"};
`;

DataCell.propTypes = {
  grey: Proptypes.bool,
  fontStyle: Proptypes.string
}

export default DataCell;
