import styled from "styled-components";

export const InputContainer = styled.input`
  border-radius: 20px;
  padding: 15px 16px;
  width: fit-content;
  border: none;
  border: solid 1px ${({ theme }: any) => theme.light.fontColor};
  outline: none;
`;
