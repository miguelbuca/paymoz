import React from "react";
import { AuthContainer, LogoBox } from "./styles";

const Auth = ({ children }: Template) => {
  return (
    <AuthContainer>
      <div>
        <div>
          <LogoBox/>
        </div>
        <div>{children}</div>
      </div>
    </AuthContainer>
  );
};

export default Auth;
