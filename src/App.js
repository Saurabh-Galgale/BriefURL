import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shorter from './components/Shorter';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Footer from './components/Footer';

function App() {
  return (
    <> 
    <main className='firstbag'>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shorter />}></Route>
      <Route path='/Contact Us' element={<Rating />}></Route>
      <Route path='/About' element={<About />}></Route>
      <Route path='/Projects' element={<Projects />}></Route>
    </Routes>
    <Footer />
    {/* <Navbar />
    <Shorter />
    <Rating />
    <Footer /> */}
    </main>
    </>
  );
}

export default App;
