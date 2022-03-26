import styled from "styled-components";

export const SessionContainer = styled.div`
  width: 512px;
  height: 100%;
  background-color: ${({ theme }: any) => theme.light.bgColor};
  border-radius: 10px;

  & > *:first-child {
    padding: 73px;
  }
`;