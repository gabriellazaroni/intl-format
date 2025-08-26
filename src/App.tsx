import { useState } from "react";
import {
  PriceContainer,
  PriceValue,
  Button,
  Container,
  FormatedPrice,
  Input,
  InputAndButtonContainer
} from "./styles";

export default function App() {
  const [price, setPrice] = useState("");
  const [formatted, setFormatted] = useState("");

  function format() {
    const normalized = price.replace(",", ".");
    const formattedPrice = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(normalized));
    setFormatted(formattedPrice)
  }

  return (
    <Container>
      <InputAndButtonContainer>
        <Input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter the price here"
        />
        <Button onClick={format}>Formatar</Button>
      </InputAndButtonContainer>
      <PriceContainer>
        <FormatedPrice>Formatted price:</FormatedPrice>
        <PriceValue id="formattedPrice">{formatted}</PriceValue>
      </PriceContainer>
    </Container>
  );
}
