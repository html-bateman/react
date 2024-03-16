
import './App.css';
import React from 'react';
import Header from './Header';
import Nav from './Nav'
import Main from './Main';
import Footer from './Footer';
import BookingPage from './BookingPage';
import { Route,Routes} from 'react-router-dom';
import AboutLittleLemon from './AboutLittleLemon';
import Contact from './Contact';
import Menu from './Menu';
import MenuItem from './MenuItem';

function App() {
  return (
    <>
    <React.Fragment>
        <Header/>
        <Nav/>
    </React.Fragment>

      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='about' element={<AboutLittleLemon/>}/>
        <Route path='book'  element={<BookingPage/>}></Route>
        <Route path='contact' element={<Contact/>}/>
        <Route path='menu' element={<Menu/>}/>
        <Route path='menu-item/:id' element={<MenuItem/>} />
      </Routes>
    <React.Fragment><Footer/></React.Fragment>

    </>
  );
}

export default App;
