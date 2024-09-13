import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/footer';
import {Routes, Route} from 'react-router-dom';
import login from './components/login';
import register from './components/register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact  path='/' Component={Home} />
      <Route exact path='/about' Component={About}/>
      <Route exact path='/services' Component={Services}/>
      <Route exact path='/contact' Component={Contact}/>
      <Route exact path='/login' Component={login}/>
      <Route exact path='Register' Component={register}/>
      <Route exact path='/Dashboard' Component={Dashboard}/>
      </Routes>
    <Footer/>
    </>
  );

}
export default App;