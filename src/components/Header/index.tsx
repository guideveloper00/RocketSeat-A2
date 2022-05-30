import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  handleOpenTransactionModal: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="dtmoney"></img>
          <button type="button" onClick={props.handleOpenTransactionModal}>
            Nova transação
          </button>
        </Content>
      </Container>
    </>
  );
}
