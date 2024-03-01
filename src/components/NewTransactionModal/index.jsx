import React from "react";
import Modal from "react-modal";
import fecharImg from "../../assets/Fechar.svg";
import entradasImg from "../../assets/Entradas.svg";
import saidasImg from "../../assets/Saídas.svg";
import { Container, TransactionTypeContainer, Button } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export const NewTransactionModal = ({
  isNewTransactionModalOpen,
  handleCloseNewTransactionModal,
}) => {
  const { createTransaction } = useTransactions();
  const [type, setType] = React.useState("deposit");
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [value, setValue] = React.useState(0);

  async function handleCreateNewTransaction(event) {
    event.preventDefault();
    await createTransaction({ title, value, category, type });
    setType("deposit");
    setTitle("");
    setValue(0);
    setCategory("");
    handleCloseNewTransactionModal();
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTransactionModal}
        className="react-modal-close"
      >
        <img src={fecharImg} alt="fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <TransactionTypeContainer>
          <Button
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={entradasImg} alt="Entradas" />
            <span>Entrada</span>
          </Button>

          <Button
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={saidasImg} alt="Saídas" />
            <span>Saídas</span>
          </Button>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
