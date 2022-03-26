import styled from "styled-components";
import bg from "../../../assets/img/bg.svg";
import PayMoz from "../../../assets/img/PayMoz.svg";

export const AuthContainer = styled.main`
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  & > div:first-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 41px 62px;
  }
`;

export const LogoBox = styled.div`
  height: 29px;
  width: 184px;
  background-image: url(${PayMoz});
  background-repeat: no-repeat;
`;
