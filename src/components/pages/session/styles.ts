import styled from "styled-components";

export const SessionContainer = styled.div`
  display: flex;
  width: 512px;
  height: 100%;
  background-color: ${({ theme }: any) => theme.light.bgColor};
  border-radius: 10px;

  & > *:first-child {
    flex: 1;
    padding: 73px;
  }
`;
