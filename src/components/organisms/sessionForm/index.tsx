import PhoneInput from '../../molecules/phoneInput';
import { ContinueButton, SessionFormContainer, Title } from './styles'

const SessionForm = () => {
  return (
    <SessionFormContainer>
      <div>
        <Title>Iniciar Sessão</Title>
      </div>
      <div>
        <PhoneInput/>
      </div>
      <div>
        <ContinueButton>Continuar</ContinueButton>
      </div>
    </SessionFormContainer>
  );
}

export default SessionForm