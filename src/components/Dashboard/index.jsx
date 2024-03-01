import React from "react";
import { Summary } from "../Summary/index";
import { TransactionTable } from "../TransactionsTable/index";
import { Container } from "./styles";

export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
};
