import styled from "styled-components";
import bg from "../../../assets/img/bg.svg";
import PayMoz from "../../../assets/img/PayMoz.svg";

export const AuthContainer = styled.main`
  display: flex;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    display: flex;

    &:first-child {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 41px 62px;

      &>div:last-child {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;

export const LogoBox = styled.div`
  height: 29px;
  width: 184px;
  background-image: url(${PayMoz});
  background-repeat: no-repeat;
`;
