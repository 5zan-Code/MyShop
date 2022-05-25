import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
        <Header />
        <Container>
          <main className="py-3">
           <Routes>
            <Route path="/" element={<HomeScreen />} exact/>
            </Routes>
          </main>
        </Container>
        <Footer />
    </Router>
  );
};

export default App;
