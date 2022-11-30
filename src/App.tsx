import web3 from "./blockchain/web3";
import Header from "./components/header/Header";
import { Container } from "./styles/sharedStyles";
const App = () => {
  return (
    <Container width="90%">
      <Header />
    </Container>
  );
};

export default App;
