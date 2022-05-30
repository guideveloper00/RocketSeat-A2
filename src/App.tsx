import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { ModalTransactions } from "./components/ModalNewTransaction";
import { TransactionsProvider } from "./useTransactionContext";

export function App() {
  const [modalTransactionsIsOpen, setModalTransactionsIsOpen] = useState(false);

  function handleOpenTransactionModal() {
    setModalTransactionsIsOpen(true);
  }

  function handleCloseTransactionsModal() {
    setModalTransactionsIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <ModalTransactions
        modalTransactionsIsOpen={modalTransactionsIsOpen}
        handleCloseTransactionsModal={handleCloseTransactionsModal}
      />
    </TransactionsProvider>
  );
}
