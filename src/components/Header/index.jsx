import React from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

const Header = ({ openModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" srcset="" />
        <button type="button" onClick={() => openModal()}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
};

export default Header;
