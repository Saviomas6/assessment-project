import Balance from "./components/balance/Balance";
import Header from "./components/header/Header";
import { Container } from "./styles/sharedStyles";

const App = () => {
  return (
    <Container width="90%">
      <Header />
      <Balance />
    </Container>
  );
};

export default App;
