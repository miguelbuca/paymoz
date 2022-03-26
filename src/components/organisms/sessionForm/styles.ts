import styled from "styled-components";

export const SessionFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;

  & > div:nth-child(2) {
    margin-top: 18px;
    margin-bottom: 120px;
  }
`;
export const Title = styled.h1`
  font-family: sans-serif, "Gotham";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 65px;
  letter-spacing: 0px;
  text-align: left;
  white-space: nowrap !important;
`;

export const ContinueButton = styled.button`
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 16px;
  border: none;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
  cursor: pointer;

  /* identical to box height, or 24px */

  /* Single Tone/white */
  color: #ffffff;
  background-color: ${({ theme }: any) => theme.light.color.primary};
`;
