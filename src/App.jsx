import React from "react";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header/index";
import { Dashboard } from "./components/Dashboard/index";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement("#root");

const App = () => {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen,
  ] = React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header openModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isNewTransactionModalOpen={isNewTransactionModalOpen}
        handleCloseNewTransactionModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
};

export default App;
