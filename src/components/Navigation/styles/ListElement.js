import styled from "styled-components";

const ListElement = styled.li`
    list-style-type: none;
    padding: 0.5rem;
    font-size: ${({theme}) => theme.sizes.large};
  `;

export default ListElement