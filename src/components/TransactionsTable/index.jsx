import { Container } from "./styles";
import React from "react";
import { useTransactions } from "../../hooks/useTransactions";

export const TransactionTable = () => {
  const { transactions } = useTransactions();
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((element) => {
            return (
              <tr key={element.id}>
                <td>{element.title}</td>
                <td className={element.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(element.value)}
                </td>
                <td>{element.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(element.createdAt)
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};
