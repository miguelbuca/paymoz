import styled from "styled-components";

export const SelectContainer = styled.select`
  border-radius: 20px;
  padding: 15px 16px;
  width: fit-content;
  background-color: transparent;
  border: none;
  border: solid 1px ${({ theme }: any) => theme.light.fontColor};
  outline: none;
`;
