import SessionForm from "../../organisms/sessionForm";
import Auth from "../../templates/auth"
import { SessionContainer } from "./styles";

const Session = () => {
  return (
    <Auth>
      <SessionContainer>
        <div>
          <SessionForm/>
        </div>
      </SessionContainer>
    </Auth>
  );
}

export default Session