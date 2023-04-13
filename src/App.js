import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login'
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path='/register' Component={Signup} />
            <Route path='/login' Component={Login} />
            <Route path='/books/:id' Component={BookDetail} />
          </Routes>
        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;