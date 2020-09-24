import styled from 'styled-components'

const DataCell = styled.td`
  background-color: ${props => props.grey ? "#eee" : "white"};
  font-style: ${props => props.fontStyle || "normal"};
`;

export default DataCell;
