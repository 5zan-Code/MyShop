import { Container} from 'react-bootstrap' 
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <>
    <Header/>
    <Container>
    <main className='py-3'>
    <HomeScreen/>
    </main>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
