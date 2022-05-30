import { useContext } from "react";
import entradas from "../../assets/entradas.svg";
import saidas from "../../assets/saidas.svg";
import total from "../../assets/total.svg";
import { TransactionsContext } from "../../useTransactionContext";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext);

  let totalValue = 0;
  let depositValue = 0;
  let withdrawValue = 0;

  transactions.forEach((item) => {
    if (item.type === "deposit") {
      depositValue += item.value;
    }
    if (item.type === "withdraw") {
      withdrawValue -= item.value;
    }
    totalValue = depositValue + withdrawValue;
  });

  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={entradas} alt="Entradas"></img>
          </header>
          <strong>
            {depositValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={saidas} alt="Saídas"></img>
          </header>
          <strong>
            {withdrawValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
        <div className="total">
          <header>
            <p>Total</p>
            <img src={total} alt="Total"></img>
          </header>
          <strong>
            {totalValue.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
      </Container>
    </>
  );
}
