import Modal from "react-modal";
import { Container, RadioBox, TransactionType } from "./styles";
import FecharSvg from "../../assets/fechar.svg";
import EntradasSvg from "../../assets/entradas.svg";
import SaidasSvg from "../../assets/saidas.svg";
import { FormEvent, useState } from "react";
import { useTransactions } from "../../useTransactionContext";

interface ModalTransactionsProps {
  modalTransactionsIsOpen: boolean;
  handleCloseTransactionsModal: () => void;
}

Modal.setAppElement("#root");

export function ModalTransactions(props: ModalTransactionsProps) {
  const { CreateTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [maskValue, setMaskValue] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  async function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();
    console.log(value);

    await CreateTransaction({ title, value, type, category });

    props.handleCloseTransactionsModal();

    setTitle("");
    setValue(0);
    setMaskValue("");
    setType("");
    setCategory("");
  }

  return (
    <Modal
      isOpen={props.modalTransactionsIsOpen}
      onRequestClose={props.handleCloseTransactionsModal}
      contentLabel="Example Modal"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        onClick={props.handleCloseTransactionsModal}
      >
        <img src={FecharSvg} alt="Fechar" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="título"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          placeholder="valor"
          value={maskValue}
          onChange={(event) => {
            const newValue = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(Number(event.target.value.replace(/\D/g, "")) / 100);
            setValue(Number(newValue.replace(/\D/g, "")) / 100);
            setMaskValue(newValue);
          }}
        ></input>
        <TransactionType>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            color={"green"}
          >
            <span>Entrada</span>
            <img src={EntradasSvg} alt="entradas"></img>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            color={"red"}
          >
            <span>Saída</span>
            <img src={SaidasSvg} alt="saídas"></img>
          </RadioBox>
        </TransactionType>
        <input
          placeholder="categoria"
          onChange={(event) => setCategory(event.target.value)}
        ></input>
        <button type="submit" onClick={handleCreateTransaction}>
          Cadastrar transação
        </button>
      </Container>
    </Modal>
  );
}
